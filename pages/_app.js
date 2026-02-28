// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Careers | Produit Academy</title>
      </Head>
      <ul className="floating-elements">
        <li>α</li><li>β</li><li>Σ</li><li>π</li><li>∫</li>
      </ul>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;