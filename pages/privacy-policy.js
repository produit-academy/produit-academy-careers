import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CareersPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Careers Privacy Policy - Produit Academy</title>
        <meta
          name="description"
          content="Privacy Policy for Produit Academy Careers - Learn how applicant information, resumes, and portfolio details are handled."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main style={{ minHeight: '80vh', backgroundColor: '#f8fafc', paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.82rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#33ae78',
                letterSpacing: '1px',
                marginBottom: '8px',
              }}
            >
              Applicant Governance
            </span>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
              Careers Privacy Policy
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '32px' }}>
              Last updated: October 2026 | Produit Academy Recruitment Operations
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', marginBottom: '32px' }} />

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                1. Scope & Commitment
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                This policy governs how Produit Academy collects, reviews, and stores personal data submitted by candidates applying for teaching, mentorship, media, and administrative positions through our Careers Portal.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                2. Data Collected from Applicants
              </h2>
              <ul style={{ paddingLeft: '24px', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                <li>Contact details: Name, email address, and active telephone/WhatsApp number.</li>
                <li>Professional credentials: Resume, educational qualifications, prior teaching experience, and portfolios.</li>
                <li>Availability and preferred subjects/grades.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                3. Purpose of Processing
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                Applicant information is utilized solely for recruitment evaluations, conducting interviews, verifying academic credentials, and communicating application statuses. Candidate profiles are never shared with external advertisers.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                4. Data Retention
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                Candidate records are retained in our secure recruitment database for up to 12 months for consideration against future openings. You may request the deletion of your applicant profile at any time by contacting HR.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                5. Contact HR & Recruitment
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                <strong>Produit Academy Recruitment Team</strong><br />
                Kollam, Kerala, India<br />
                Email: <a href="mailto:produitacademy@gmail.com" style={{ color: '#33ae78', textDecoration: 'underline' }}>produitacademy@gmail.com</a><br />
                Phone: <a href="tel:+918139805996" style={{ color: '#33ae78', textDecoration: 'underline' }}>+91 8139 805 996</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
