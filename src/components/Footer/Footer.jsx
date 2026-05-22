import styles from './Footer.module.css'

export default function Footer({idioma}) {
    return (
        <footer className={styles.footer}>
            <nav className={styles.links}>
                <a href="#home">
                    {idioma === 'pt' ? 'Home' : 'Home'}
                </a>
                <a href="#sobre">
                    {idioma === 'pt' ? 'Sobre' : 'About'}
                </a>
                <a href="#obras">
                    {idioma === 'pt' ? 'Obras' : 'Books'}
                </a>
                <a href="#videoaulas">
                    {idioma === 'pt' ? 'Videoaulas' : 'Video lessons'}
                </a>
                <a href="#dicas-vestibular">
                    {idioma === 'pt' ? 'Dicas vestibular' : 'Exam Tips'}
                </a>
                <a href="#simulados">
                    {idioma === 'pt' ? 'Simulados' : 'Mock Exams'}
                </a>
            </nav>

            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Entre linhas.{''}
                    {idioma === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
                </p>
                <p>{idioma === 'pt' ? 'Produzido com React, Node.js & PostgreSQL' : 'Built with React, Node.js & PostgreSQL'}</p>
            </div>
        </footer>
    );
}
