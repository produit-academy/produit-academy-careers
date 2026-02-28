import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.footerColumn}>
                    <h2 className={styles.logoText}>Produit<br />Academy</h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>Building the future of creative education and academic excellence.</p>
                </div>

                <div className={styles.footerColumn}>
                    <h3 className={styles.footerHeading}>Our Platforms</h3>
                    <ul className={styles.footerLinks}>
                        <li>
                            <a href="https://gate.produitacademy.com" target="_blank" rel="noreferrer">
                                GATE Portal (GATE Preparation)
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3 className={styles.footerHeading}>Contact Us</h3>
                    <ul className={styles.footerLinks}>
                        <li><a href="mailto:produitacademy@gmail.com">produitacademy@gmail.com</a></li>
                        <li><a href="tel:8139805996">+91 8139 805 996</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={`container ${styles.footerBottomContainer}`}>
                    <p>Copyright @ 2025 Produit Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}