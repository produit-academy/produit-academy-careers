import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContent}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.png" alt="Produit Academy Logo" width={40} height={40} style={{ borderRadius: '8px' }} />
                    <span className={styles.logoText}>Produit Academy Careers</span>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <a href="#apply"><button className="glass-btn primary">Apply Now</button></a>
                </div>
            </div>
        </header>
    );
}