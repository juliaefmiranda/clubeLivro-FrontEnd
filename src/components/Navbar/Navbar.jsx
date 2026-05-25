import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export default function Navbar({ idioma }) {
    return (
        <header className={styles.navbar}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>ENTRE</h1>
                <h1 className={styles.logo2}>LINHAS</h1>
            </div>

            <nav>
                <ul className={styles.navLinks}>
                    <li>
                        <NavLink to="/"
                            className={({ isActive }) =>
                                isActive ? styles.ativo : styles.link}>
                            {idioma === 'pt' ? 'HOME' : 'HOME'}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/sobre"
                            className={({ isActive }) =>
                                isActive ? styles.ativo : styles.link}>
                            {idioma === 'pt' ? 'SOBRE' : 'ABOUT'}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/obras" className={({ isActive }) =>
                            isActive ? styles.ativo : styles.link}>
                            {idioma === 'pt' ? 'OBRAS' : 'WORKS'}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/video-aulas" className={({ isActive }) =>
                            isActive ? styles.ativo : styles.link}>
                            {idioma === 'pt' ? 'VIDEO AULAS' : 'VIDEO LESSONS'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dicas-vestibular" className={({ isActive }) =>
                            isActive ? styles.ativo : styles.link}>
                            {idioma === 'pt' ? 'DICAS VESTIBULAR' : 'EXAM TIPS'}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/simulados" className={({ isActive }) =>
                            isActive ? styles.ativo : styles.link}>
                            {idioma === 'pt' ? 'SIMULADOS' : 'MOCK EXAMS'}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
