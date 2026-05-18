import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Sobre.module.css';
import Footer from '../../components/Footer/Footer';
import BotaoIdioma from '../../components/BotaoIdioma/BotaoIdioma';

export default function Sobre() {
    const [idioma, setIdioma] = useState('pt');
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

    const conteudo = {
        pt: {
            tag_pt: 'Sobre o Projeto',
            titulo_pt: 'A Moreninha',
            subtitulo_pt: 'Plataforma Literária Integrada',
            descricao1_pt:
                'Este projeto é uma iniciativa integrada entre as escolas SESI e SENAI, reunindo alunos dos cursos de Desenvolvimento de Sistemas, Eletroeletrônica e Mecânica em torno de um objetivo comum: explorar a literatura brasileira de vestibular de forma digital e colaborativa.',
            descricao2_pt:
                'Nossa plataforma é dedicada à obra A Moreninha, de Joaquim Manuel de Macedo — o primeiro romance brasileiro — oferecendo resumos, análises, quizzes e conteúdos de apoio para o estudo.',
            descricao3_pt:
                'O projeto integra as disciplinas de Língua Portuguesa e Inglês do SESI, e se conecta às plataformas de outros grupos via APIs, cada um responsável por um livro diferente, formando uma grande biblioteca literária colaborativa.',
            disciplinas_pt: 'Disciplinas Integradas',
            disc1_pt: 'Língua Portuguesa',
            disc2_pt: 'Inglês',
            disc3_pt: 'Desenvolvimento de Sistemas',
            disc4_pt: 'Eletroeletrônica',
            disc5_pt: 'Mecânica',
            cursos_pt: 'Cursos Participantes',
            apis_pt: 'Integração de APIs',
            apisDesc_pt:
                'Nossa API expõe os dados de A Moreninha e se conecta às APIs dos outros grupos, que cobrem diferentes livros do vestibular, formando um ecossistema literário colaborativo.',
            obraDestaque_pt: 'Obra em Destaque',
            autor_pt: 'Joaquim Manuel de Macedo',
            ano_pt: 'Publicado em 1844',
            genero_pt: 'Romance — 1.º Romance Brasileiro',
            botaoIdioma_pt: 'English',
        },
        en: {
            tag_pt: 'About the Project',
            titulo_pt: 'A Moreninha',
            subtitulo_pt: 'Integrated Literary Platform',
            descricao1_pt:
                'This project is a joint initiative between SESI and SENAI schools, bringing together students from Systems Development, Electrical & Electronics, and Mechanics programs around a shared goal: exploring Brazilian entrance-exam literature in a digital and collaborative way.',
            descricao2_pt:
                'Our platform is dedicated to the novel A Moreninha by Joaquim Manuel de Macedo — the first Brazilian novel — offering summaries, analyses, quizzes, and study resources.',
            descricao3_pt:
                "The project integrates Portuguese Language and English subjects from SESI and connects to other groups' platforms via APIs, each responsible for a different book, forming a large collaborative literary library.",
            disciplinas_pt: 'Integrated Subjects',
            disc1_pt: 'Portuguese Language',
            disc2_pt: 'English',
            disc3_pt: 'Systems Development',
            disc4_pt: 'Electrical & Electronics',
            disc5_pt: 'Mechanics',
            cursos_pt: 'Participating Programs',
            apis_pt: 'API Integration',
            apisDesc_pt:
                'Our API exposes the data from A Moreninha and connects to APIs from other groups, each covering different entrance-exam books, forming a collaborative literary ecosystem.',
            obraDestaque_pt: 'Featured Work',
            autor_pt: 'Joaquim Manuel de Macedo',
            ano_pt: 'Published in 1844',
            genero_pt: 'Novel — 1st Brazilian Novel',
            botaoIdioma_pt: 'Português',
        },
    };

    const t = conteudo[idioma];

    return (
        <div className={styles.wrapper}>
            <Navbar />

            {/* Botão de idioma */}
            <BotaoIdioma idioma={idioma} setIdioma={setIdioma} />

            <main className={styles.main}>
                {/* ── HERO ── */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <span className={styles.tag}>{t.tag_pt}</span>
                        <h1 className={styles.heroTitle}>{t.titulo_pt}</h1>
                        <p className={styles.heroSub}>{t.subtitulo_pt}</p>
                    </div>

                    <div className={styles.bookCover}>
                        {capa ? (
                            <img src={capa} alt={t.titulo_pt} />
                        ) : (
                            <div className={styles.bookPlaceholder}>
                                <span className={styles.bookPlaceholderText}>Capa</span>
                            </div>
                        )}
                        <div className={styles.bookInfo}>
                            <p className={styles.bookLabel}>{t.obraDestaque_pt}</p>
                            <p className={styles.bookAuthor}>{t.autor_pt}</p>
                            <p className={styles.bookMeta}>{t.ano_pt}</p>
                            <p className={styles.bookMeta}>{t.genero_pt}</p>
                        </div>
                    </div>
                </section>

                {/* ── SOBRE ── */}
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <div className={styles.textBlock}>
                            <p>{t.descricao1_pt}</p>
                            <p>{t.descricao2_pt}</p>
                            <p>{t.descricao3_pt}</p>
                        </div>
                    </div>
                </section>

                {/* ── DISCIPLINAS / CURSOS ── */}
                <section className={styles.cardsSection}>
                    <div className={styles.cardGroup}>
                        <h3 className={styles.cardGroupTitle}>{t.disciplinas_pt}</h3>
                        <div className={styles.pills}>
                            <span className={styles.pill}>{t.disc1_pt}</span>
                            <span className={styles.pill}>{t.disc2_pt}</span>
                        </div>
                    </div>

                    <div className={styles.cardDivider} />

                    <div className={styles.cardGroup}>
                        <h3 className={styles.cardGroupTitle}>{t.cursos_pt}</h3>
                        <div className={styles.pills}>
                            <span className={styles.pill}>{t.disc3_pt}</span>
                            <span className={styles.pill}>{t.disc4_pt}</span>
                            <span className={styles.pill}>{t.disc5_pt}</span>
                        </div>
                    </div>
                </section>

                {/* ── APIs ── */}
                <section className={styles.apiSection}>
                    <div className={styles.apiIcon} aria-hidden="true">
                        ⚙
                    </div>
                    <div className={styles.apiText}>
                        <h3>{t.apis_pt}</h3>
                        <p>{t.apisDesc_pt}</p>
                    </div>
                    <div className={styles.apiNodes} aria-hidden="true">
                        <span className={styles.node}>A Moreninha</span>
                        <span className={styles.connector}>↔</span>
                        <span className={styles.node}>Livro 2</span>
                        <span className={styles.connector}>↔</span>
                        <span className={styles.node}>Livro 3</span>
                        <span className={styles.connector}>↔</span>
                        <span className={styles.node}>Livro 4</span>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
