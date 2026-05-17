import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.links}>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#obras">Obras</a>
                <a href="#videoaulas">Video aulas</a>
                <a href="#dicas-vestibular">Dicas Vestibular</a>
                <a href="#simulados">Simulados</a>
            </nav>

            <div className={styles.copyright}>
                <p>&copy; 2026 Entre linhas. Todos os direitos reservados.</p>
                <p>Produzido com React, Node.js & PostgreSQL</p>
            </div>
        </footer>
    )
}