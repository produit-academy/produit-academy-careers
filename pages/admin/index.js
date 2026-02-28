import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const decodeToken = (token) => {
    try { return JSON.parse(atob(token.split('.')[1])); } catch (e) { return null; }
};

export default function CareersAdminDashboard() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            window.location.href = '/admin/login';
            return;
        }

        const user = decodeToken(token);
        if (!user || user.role !== 'admin') {
            window.location.href = '/admin/login';
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers/admin/list/`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setApplications(data);
            } else {
                setError('Session expired or access denied.');
                localStorage.removeItem('access_token');
            }
        } catch (err) {
            setError('Failed to connect to the server.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this application?")) return;

        const token = localStorage.getItem('access_token');
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers/admin/${id}/`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.ok) {
                setApplications(applications.filter(app => app.id !== id));
            } else {
                alert('Failed to delete application.');
            }
        } catch (err) {
            alert('Error connecting to server.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        window.location.href = '/admin/login';
    };

    return (
        <>
            <Head><title>Manage Applications | Careers Admin</title></Head>
            <Header />

            <main className="main-content" style={{ paddingTop: '100px', minHeight: '90vh', background: 'var(--background-light)' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <div>
                            <h1 style={{ color: 'var(--text-primary)', fontFamily: "var(--font-serif, 'Lora', serif)", fontSize: '2.2rem', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Job Applications</h1>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>Manage and review candidate submissions.</p>
                        </div>
                        <button onClick={handleLogout} className="glass-btn" style={{ color: '#d32f2f', border: '1px solid #ffcdd2', background: '#ffebee', padding: '10px 20px' }}>Log Out</button>
                    </div>

                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', border: '1px solid var(--card-border)' }}>
                        {loading ? (
                            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Loading applications...</div>
                        ) : error ? (
                            <div style={{ padding: '3rem', textAlign: 'center', color: '#d32f2f', background: '#ffebee' }}>{error}</div>
                        ) : applications.length === 0 ? (
                            <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem' }}>
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>No applications yet</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>When candidates apply, their details will appear here.</p>
                            </div>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                    <thead style={{ backgroundColor: 'var(--background-light)' }}>
                                        <tr style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                            <th style={{ padding: '16px 24px', fontWeight: '600' }}>Date</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600' }}>Candidate</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600' }}>Role</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600' }}>Contact</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600' }}>Portfolio</th>
                                            <th style={{ padding: '16px 24px', fontWeight: '600', textAlign: 'right' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applications.map((app) => (
                                            <tr key={app.id} style={{ borderTop: '1px solid var(--card-border)', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--background-light)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                                <td style={{ padding: '16px 24px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                                    {new Date(app.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                                </td>
                                                <td style={{ padding: '16px 24px', fontWeight: '600', color: 'var(--text-primary)' }}>{app.name}</td>
                                                <td style={{ padding: '16px 24px' }}>
                                                    <span style={{ background: 'var(--accent-green-light)', color: 'var(--accent-green-dark)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', display: 'inline-block' }}>
                                                        {app.position}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '16px 24px', fontSize: '0.9rem' }}>
                                                    <div style={{ marginBottom: '4px' }}><a href={`mailto:${app.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{app.email}</a></div>
                                                    <div><a href={`tel:${app.phone}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{app.phone}</a></div>
                                                </td>
                                                <td style={{ padding: '16px 24px' }}>
                                                    {app.portfolio ? (
                                                        <a href={app.portfolio} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-green)', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>View Link &rarr;</a>
                                                    ) : (
                                                        <span style={{ fontSize: '0.9rem', color: '#9e9e9e', fontStyle: 'italic' }}>Not provided</span>
                                                    )}
                                                </td>
                                                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                                    <button
                                                        onClick={() => handleDelete(app.id)}
                                                        style={{ background: 'transparent', border: 'none', color: '#d32f2f', cursor: 'pointer', fontWeight: '500', fontSize: '0.9rem', padding: '8px 12px', borderRadius: '6px' }}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffebee'}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}