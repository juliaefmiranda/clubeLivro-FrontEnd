import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import { useIdioma } from '../../hooks/useIdioma';

import styles from './Home.module.css';

export default function Home() {
    const { idioma, setIdioma } = useIdioma();

    const [capa, setCapa] = useState('');

    useEffect(() => {
        fetch('https://clubelivro-backend.onrender.com/api/livros', {
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY_ENTRE_LINHAS,
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
        <div className={styles.pagina}>
            <Navbar
                idioma={idioma}
                setIdioma={setIdioma}
            />

            <main className={styles.main}>
                <section className={styles.conteudo}>
                    <div className={styles.conteudoEsquerda}>
                        <div className={styles.topo}>
                            <div className={styles.topoTexto}>
                                <h1 className={styles.titulo}>
                                    {idioma === 'pt'
                                        ? 'Plataforma de Estudos Literários'
                                        : 'Literary Studies Platform'}
                                </h1>

                                <div className={styles.linha}></div>
                            </div>
                        </div>

                        <section className={styles.homeText}>
                            <p>
                                {idioma === 'pt'
                                    ? 'Este projeto apresenta uma plataforma digital colaborativa voltada ao estudo de obras literárias, com foco na preparação para vestibulares.'
                                    : 'This project presents a collaborative digital platform focused on literary studies, aimed at entrance exam preparation.'}
                            </p>

                            <p>
                                {idioma === 'pt'
                                    ? 'Desenvolvida com tecnologias como Node.js, React e PostgreSQL, a aplicação oferece conteúdos como resumos, análises, quizzes e videoaulas.'
                                    : 'Developed with technologies such as Node.js, React and PostgreSQL, the application offers summaries, analyses, quizzes and video lessons.'}
                            </p>

                            <p>
                                {idioma === 'pt'
                                    ? 'Além disso, integra dados de outras equipes por meio de APIs, formando uma biblioteca compartilhada.'
                                    : 'In addition, it integrates data from other teams through APIs, forming a shared library.'}
                            </p>
                        </section>
                    </div>

                    <section className={styles.homeBook}>
                        <div className={styles.book}>
                            <img src={capa} alt="A Moreninha" />
                        </div>

                        <Link
                            to="/obras/minha-api/1"
                            className={styles.botao}
                        >
                            {idioma === 'pt'
                                ? 'Ver mais informações →'
                                : 'See more information →'}
                        </Link>
                    </section>
                </section>
            </main>

            <Footer idioma={idioma} />
        </div>
    );
}