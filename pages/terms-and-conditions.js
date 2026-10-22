import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CareersTermsAndConditions() {
  return (
    <>
      <Head>
        <title>Applicant Terms & Conditions - Produit Academy Careers</title>
        <meta
          name="description"
          content="Applicant Terms & Conditions for submitting employment and teaching applications to Produit Academy."
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
              Applicant Guidelines
            </span>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
              Applicant Terms & Conditions
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '32px' }}>
              Last updated: October 2026 | Produit Academy
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', marginBottom: '32px' }} />

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                1. Accuracy of Information
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                By submitting an application to Produit Academy, you declare that all information provided—including academic qualifications, identity, contact details, and prior experience—is accurate, current, and truthful. Providing fraudulent details will result in immediate disqualification or termination of engagement.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                2. Selection & Engagement
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                Submission of an application does not guarantee employment or assignment of tutoring batches. Shortlisted educators will undergo background screening, subject matter demonstration sessions, and pedagogy interviews before formal onboarding.
              </p>
            </section>

            <section style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                3. Confidentiality
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                Applicants who participate in interviews or trial teaching sessions agree to maintain the confidentiality of Produit Academy proprietary materials, student rosters, internal systems, and compensation structures.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '10px' }}>
                4. Formal Staff Agreement
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                Upon selection, instructors and staff will execute a formal Service Agreement outlining code of conduct, hourly/monthly payouts, and intellectual property protections.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
