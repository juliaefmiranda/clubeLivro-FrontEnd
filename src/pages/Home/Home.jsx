import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    const [capa, setCapa] = useState('');

    useEffect(() => {
        fetch('https://clubelivro-backend.onrender.com/api/livros', {
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY,
            },
        })
            .then((res) => {
                console.log('Status:', res.status);
                return res.json();
            })
            .then((data) => {
                console.log('Dados recebidos:', data);
                if (data && data[0]) {
                    setCapa(data[0].capa);
                }
            })
            .catch((erro) => {
                console.error('Erro ao buscar capa:', erro);
            });
    }, []);

    return (
        <div className={styles.header}>
            <Navbar />

            <main className={styles.home}>
                <section className={styles.homeText}>
                    <h2>Plataforma de Estudos Literários</h2>

                    <div className={styles.linha}></div>

                    <p>
                        Este projeto apresenta uma plataforma digital colaborativa voltada ao estudo
                        de obras literárias, com foco na preparação para vestibulares.
                    </p>

                    <p>
                        Desenvolvida com tecnologias como Node.js, React e PostgreSQL, a aplicação
                        oferece conteúdos como resumos, análises, quizzes e videoaulas.
                    </p>

                    <p>
                        Além disso, integra dados de outras equipes por meio de APIs, formando uma
                        biblioteca compartilhada.
                    </p>
                </section>

                <section className={styles.homeBook}>
                    <div className={styles.book}>
                        <img src={capa} alt="A Moreninha" />
                    </div>

                    <button className={styles.botao}>
                        Ver mais informações →
                    </button>
                </section>
            </main>

            <Footer/>
        </div>
    );
}
