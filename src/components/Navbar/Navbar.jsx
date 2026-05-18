import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar({idioma}) {
    return (
        <header className={styles.navbar}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>ENTRE</h1>
                <h1 className={styles.logo2}>LINHAS</h1>
            </div>

            <nav>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/">
                            {idioma === 'pt' ? 'HOME' : 'HOME'}
                        </Link>
                    </li>

                    <li>
                        <Link to="/sobre">
                            {idioma === 'pt' ? 'SOBRE' : 'ABOUT'}
                        </Link>
                    </li>

                    <li>
                        <Link to="/obras">
                            {idioma === 'pt' ? 'OBRAS' : 'WORKS'}
                        </Link>
                    </li>

                    <li>
                        <Link to="/video-aulas">
                            {idioma === 'pt' ? 'VIDEO AULAS' : 'VIDEO LESSONS'}
                        </Link>
                    </li>
                    <li>
                        <Link to="/dicas-vestibular">
                            {idioma === 'pt' ? 'DICAS VESTIBULAR' : 'EXAM TIPS'}
                        </Link>
                    </li>

                    <li>
                        <Link to="/simulados">
                            {idioma === 'pt' ? 'SIMULADOS' : 'MOCK EXAMS'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
