// pages/index.js
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', portfolio: '', declaration: false });
  const [status, setStatus] = useState(null);
  const [expandedJob, setExpandedJob] = useState(null);

  const positions = [
    {
      title: "Graphic Designer",
      role: "The Graphic Designer will create visual designs for social media, posters, event promotions, and branding materials.",
      responsibilities: ["Design posters, banners, and social media creatives", "Maintain consistent brand identity and color theme", "Create thumbnails, certificates, and promotional materials", "Collaborate with the media team for campaign visuals"],
      skills: ["Knowledge of Canva, Photoshop, Illustrator, or similar tools", "Creativity and typography sense", "Basic understanding of branding"]
    },
    {
      title: "Media Team Member",
      role: "Support content coordination, publishing, and team collaboration across platforms while assisting the creative team.",
      responsibilities: ["Assist in content planning and posting", "Coordinate with designers and video editors", "Manage social media uploads and scheduling", "Support media activities during events and shoots"],
      skills: ["Awareness of social media platforms", "Communication and teamwork skills", "Basic understanding of content trends"]
    },
    {
      title: "Video Editor",
      role: "Edit promotional and educational videos to ensure professional quality, pacing, and engagement.",
      responsibilities: ["Edit reels, short videos, and long-form content", "Add transitions, captions, music, and effects", "Maintain proper pacing and storytelling quality", "Deliver edited videos within deadlines"],
      skills: ["Knowledge of CapCut, Premiere Pro, VN, After Effects, or similar tools", "Sense of timing and storytelling", "Awareness of video and reel trends"]
    },
    {
      title: "Videographer / Shooting Crew",
      role: "Handle video shooting, camera setup, and content capture during sessions, events, and promotional activities.",
      responsibilities: ["Capture high-quality videos and photos", "Manage camera, lighting, and audio setup", "Plan shots and angles for effective storytelling", "Support content creation for reels and promotions"],
      skills: ["Basic camera or mobile cinematography skills", "Knowledge of framing and lighting", "Creativity in shot composition"]
    },
    {
      title: "Content Creator",
      role: "Generate ideas and develop engaging content for social media including reels, captions, scripts, and posts.",
      responsibilities: ["Create reel ideas, scripts, and captions", "Stay updated with social media trends", "Develop educational and promotional content", "Collaborate with design and video teams"],
      skills: ["Creativity and storytelling ability", "Awareness of social media trends", "Writing and presentation skills"]
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers/apply/`, {
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

  return (
    <>
      <Header />
      <main className="main-content">

        {/* Hero Section */}
        <section className="hero-section container">
          <h1 className="hero-title">
            Build Your Creative Career
          </h1>
          <p className="hero-subtitle">
            Join our growing team in design, media, video production, and content creation. Explore opportunities to learn, contribute, and grow in a professional environment.
          </p>
        </section>

        {/* Roles Section */}
        <div className="container" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">
            Open Positions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {positions.map((job, idx) => (
              <div key={idx} className="glass-card card-animate" style={{ padding: '2rem', animationDelay: `${idx * 0.15}s`, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: 'var(--accent-green)', marginBottom: '10px', fontSize: '1.4rem' }}>{job.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{job.role}</p>

                <hr style={{ border: 'none', borderTop: '1px solid var(--card-border)', marginBottom: '1rem' }} />

                <button
                  onClick={() => setExpandedJob(expandedJob === idx ? null : idx)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--accent-green)', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', fontSize: '0.95rem' }}
                >
                  {expandedJob === idx ? 'Hide Details' : 'View Full Details'}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expandedJob === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {expandedJob === idx && (
                  <div style={{ marginTop: '1rem', animation: 'fadeInUp 0.3s forwards' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Responsibilities:</h4>
                    <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '20px', marginBottom: '1rem' }}>
                      {job.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
                    </ul>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Skills Preferred:</h4>
                    <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                      {job.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <section id="apply" className="container application-section">
          <div className="glass-card form-card">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Submit Your Application</h2>

            {status === 'success' && <div style={{ background: 'var(--accent-green-light)', color: 'var(--accent-green-dark)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center' }}>Application submitted successfully! We will contact you soon.</div>}
            {status === 'error' && <div style={{ background: '#ffeeba', color: '#856404', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center' }}>Something went wrong. Please try again.</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} className="form-input" />
                <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} className="form-input" />
              </div>

              <div className="form-grid">
                <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} className="form-input" />
                <select name="position" required value={formData.position} onChange={handleChange} className="form-input" style={{ color: formData.position ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  <option value="" disabled>Select Position *</option>
                  {positions.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                </select>
              </div>

              <div className="form-row">
                <input type="url" name="portfolio" placeholder="Portfolio / Drive Link (Optional)" value={formData.portfolio} onChange={handleChange} className="form-input" />
              </div>

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