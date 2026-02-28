import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok && data.role === 'admin') {
                localStorage.setItem('access_token', data.access);
                window.location.href = '/admin';
            } else if (res.ok && data.role !== 'admin') {
                setError('Access denied. Admin privileges required.');
            } else {
                setError(data.detail || 'Invalid email or password.');
            }
        } catch (err) {
            setError('Failed to connect to the server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head><title>Admin Login | Careers</title></Head>
            <Header />
            <main className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '90vh', background: 'var(--background-light)' }}>
                <div className="glass-card" style={{ padding: '3rem 2.5rem', width: '100%', maxWidth: '420px', backgroundColor: '#ffffff', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid var(--card-border)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <h2 style={{ color: 'var(--text-primary)', fontFamily: "var(--font-serif, 'Lora', serif)", fontSize: '1.8rem', margin: 0 }}>Admin Portal</h2>
                    </div>
                    {error && <div style={{ color: '#d32f2f', background: '#ffebee', padding: '10px', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem', border: '1px solid #ffcdd2' }}>{error}</div>}

                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '1.2rem' }}>
                            <input type="email" placeholder="Admin Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
                        </div>
                        <button type="submit" className="glass-btn primary" disabled={loading} style={{ width: '100%', padding: '14px', fontSize: '1.05rem', marginTop: '0.5rem' }}>
                            {loading ? 'Authenticating...' : 'Secure Login'}
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}