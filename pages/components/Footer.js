import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.footerColumn}>
                    <h2 className={styles.logoText}>Produit Academy<br />Careers</h2>
                    <div className={styles.socialIcons}>
                        <Link href="https://facebook.com" passHref><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></Link>
                        <Link href="https://twitter.com" passHref><Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} /></Link>
                        <Link href="https://linkedin.com" passHref><Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} /></Link>
                        <Link href="https://www.instagram.com/produit.academy/" passHref><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /></Link>
                    </div>
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