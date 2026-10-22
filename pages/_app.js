import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Careers at Produit Academy | Join Our Academic & Creative Faculty</title>
        <meta
          name="description"
          content="Explore career opportunities at Produit Academy. We are hiring passionate educators, academic mentors, graphic designers, videographers, and content creators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-careers" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      <ul className="floating-elements" aria-hidden="true">
        <li>α</li><li>β</li><li>Σ</li><li>π</li><li>∫</li>
      </ul>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default MyApp;