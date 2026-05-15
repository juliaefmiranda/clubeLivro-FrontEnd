import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>ENTRE</h1>
                <h1 className={styles.logo2}>LINHAS</h1>
            </div>

            <nav>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/sobre">SOBRE</Link>
                    </li>
                    <li>
                        <Link to="/obras">OBRAS</Link>
                    </li>
                    <li>
                        <Link to="/video-aulas">VIDEO AULAS</Link>
                    </li>
                    <li>
                        <Link to="/dicas-vestibular">DICAS VESTIBULAR</Link>
                    </li>
                    <li>
                        <Link to="/simulados">SIMULADOS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
