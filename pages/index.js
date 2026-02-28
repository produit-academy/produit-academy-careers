// pages/index.js
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', portfolio: '', declaration: false });
  const [status, setStatus] = useState(null);

  const positions = [
    { title: "Graphic Designer", role: "Create visual materials for social media, branding, and promotional campaigns." },
    { title: "Media Team Member", role: "Support content coordination, publishing, and team collaboration." },
    { title: "Video Editor", role: "Edit promotional and educational videos to ensure professional quality." },
    { title: "Videographer / Shooting Crew", role: "Capture high-quality video and photo content for marketing." },
    { title: "Content Creator", role: "Develop engaging content ideas and scripts for social media." }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers/apply/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', position: '', portfolio: '', declaration: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', width: '100%', marginBottom: '1rem', outline: 'none', fontFamily: 'inherit' };

  return (
    <>
      <Header />
      <main className="main-content">

        {/* Hero Section */}
        <section className="container" style={{ textAlign: 'center', marginBottom: '5rem', paddingTop: '120px' }}>
          <h1 style={{ color: 'var(--accent-green-dark)', fontSize: '3rem', marginBottom: '1.5rem', fontFamily: "var(--font-serif, 'Lora', serif)" }}>
            Build Your Creative Career
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
            Join our growing team in design, media, video production, and content creation. Explore opportunities to learn, contribute, and grow in a professional environment.
          </p>
        </section>

        {/* Roles Section */}
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {positions.map((job, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--accent-green)', marginBottom: '10px' }}>{job.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{job.role}</p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <section id="apply" className="container" style={{ maxWidth: '650px', marginBottom: '5rem' }}>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--accent-green-dark)', fontFamily: "var(--font-serif, 'Lora', serif)" }}>Submit Your Application</h2>

            {status === 'success' && <div style={{ background: 'var(--accent-green-light)', color: 'var(--accent-green-dark)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center' }}>Application submitted successfully! We will contact you soon.</div>}
            {status === 'error' && <div style={{ background: '#ffeeba', color: '#856404', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center' }}>Something went wrong. Please try again.</div>}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} style={inputStyle} />
                <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} style={inputStyle} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} style={inputStyle} />
                <select name="position" required value={formData.position} onChange={handleChange} style={{ ...inputStyle, color: formData.position ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  <option value="" disabled>Select Position *</option>
                  {positions.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                </select>
              </div>

              <input type="url" name="portfolio" placeholder="Portfolio / Drive Link (Optional)" value={formData.portfolio} onChange={handleChange} style={inputStyle} />

              <label style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', alignItems: 'flex-start', marginTop: '10px', color: 'var(--text-secondary)' }}>
                <input type="checkbox" name="declaration" required checked={formData.declaration} onChange={handleChange} style={{ marginTop: '4px' }} />
                <span><strong>Declaration:</strong> I confirm that the information provided is accurate and that submission does not guarantee selection.</span>
              </label>

              <button type="submit" className="glass-btn primary" disabled={status === 'submitting'} style={{ width: '100%', marginTop: '2rem', padding: '14px', fontSize: '1.1rem' }}>
                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}