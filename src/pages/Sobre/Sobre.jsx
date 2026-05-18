import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Sobre.module.css';
import Footer from '../../components/Footer/Footer';

export default function Sobre() {
    const [lang, setLang] = useState('pt');

    const content = {
        pt: {
            tag: 'Sobre o Projeto',
            title: 'A Moreninha',
            subtitle: 'Plataforma Literária Integrada',
            description1:
                'Este projeto é uma iniciativa integrada entre as escolas SESI e SENAI, reunindo alunos dos cursos de Desenvolvimento de Sistemas, Eletroeletrônica e Mecânica em torno de um objetivo comum: explorar a literatura brasileira de vestibular de forma digital e colaborativa.',
            description2:
                'Nossa plataforma é dedicada à obra A Moreninha, de Joaquim Manuel de Macedo — o primeiro romance brasileiro — oferecendo resumos, análises, quizzes e conteúdos de apoio para o estudo.',
            description3:
                'O projeto integra as disciplinas de Língua Portuguesa e Inglês do SESI, e se conecta às plataformas de outros grupos via APIs, cada um responsável por um livro diferente, formando uma grande biblioteca literária colaborativa.',
            disciplines: 'Disciplinas Integradas',
            disc1: 'Língua Portuguesa',
            disc2: 'Inglês',
            disc3: 'Desenvolvimento de Sistemas',
            disc4: 'Eletroeletrônica',
            disc5: 'Mecânica',
            courses: 'Cursos Participantes',
            apis: 'Integração de APIs',
            apisDesc:
                'Nossa API expõe os dados de A Moreninha e se conecta às APIs dos outros grupos, que cobrem diferentes livros do vestibular, formando um ecossistema literário colaborativo.',
            bookLabel: 'Obra em Destaque',
            author: 'Joaquim Manuel de Macedo',
            year: 'Publicado em 1844',
            genre: 'Romance — 1.º Romance Brasileiro',
            langBtn: 'English',
        },
        en: {
            tag: 'About the Project',
            title: 'A Moreninha',
            subtitle: 'Integrated Literary Platform',
            description1:
                'This project is a joint initiative between SESI and SENAI schools, bringing together students from Systems Development, Electrical & Electronics, and Mechanics programs around a shared goal: exploring Brazilian entrance-exam literature in a digital and collaborative way.',
            description2:
                'Our platform is dedicated to the novel A Moreninha by Joaquim Manuel de Macedo — the first Brazilian novel — offering summaries, analyses, quizzes, and study resources.',
            description3:
                "The project integrates Portuguese Language and English subjects from SESI and connects to other groups' platforms via APIs, each responsible for a different book, forming a large collaborative literary library.",
            disciplines: 'Integrated Subjects',
            disc1: 'Portuguese Language',
            disc2: 'English',
            disc3: 'Systems Development',
            disc4: 'Electrical & Electronics',
            disc5: 'Mechanics',
            courses: 'Participating Programs',
            apis: 'API Integration',
            apisDesc:
                'Our API exposes the data from A Moreninha and connects to APIs from other groups, each covering different entrance-exam books, forming a collaborative literary ecosystem.',
            bookLabel: 'Featured Work',
            author: 'Joaquim Manuel de Macedo',
            year: 'Published in 1844',
            genre: 'Novel — 1st Brazilian Novel',
            langBtn: 'Português',
        },
    };

    const t = content[lang];

    return (
        <div className={styles.wrapper}>
            <Navbar />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroDecor} aria-hidden="true">
                        <span className={styles.bigLetter}>M</span>
                    </div>

                    <div className={styles.heroContent}>
                        <span className={styles.tag}>{t.tag}</span>
                        <h1 className={styles.heroTitle}>{t.title}</h1>
                        <p className={styles.heroSub}>{t.subtitle}</p>

                        <button
                            className={styles.langToggle}
                            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>
                            🌐 {t.langBtn}
                        </button>
                    </div>

                    <div className={styles.bookCover}>
                        {/* Imagem da capa — adicione src quando tiver */}
                        <div className={styles.bookPlaceholder}>
                            <span className={styles.bookPlaceholderText}>Capa</span>
                        </div>
                        <div className={styles.bookInfo}>
                            <p className={styles.bookLabel}>{t.bookLabel}</p>
                            <p className={styles.bookAuthor}>{t.author}</p>
                            <p className={styles.bookMeta}>{t.year}</p>
                            <p className={styles.bookMeta}>{t.genre}</p>
                        </div>
                    </div>
                </section>

{/*sobre*/}
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <div className={styles.textBlock}>
                            <div className={styles.linha} />
                            <p>{t.description1}</p>
                            <p>{t.description2}</p>
                            <p>{t.description3}</p>
                        </div>
                    </div>
                </section>

                {/* cursos & disciplinas */}
                <section className={styles.cardsSection}>
                    <div className={styles.cardGroup}>
                        <h3 className={styles.cardGroupTitle}>{t.disciplines}</h3>
                        <div className={styles.pills}>
                            <span className={styles.pill}>{t.disc1}</span>
                            <span className={styles.pill}>{t.disc2}</span>
                        </div>
                    </div>

                    <div className={styles.cardDivider} />

                    <div className={styles.cardGroup}>
                        <h3 className={styles.cardGroupTitle}>{t.courses}</h3>
                        <div className={styles.pills}>
                            <span className={styles.pill}>{t.disc3}</span>
                            <span className={styles.pill}>{t.disc4}</span>
                            <span className={styles.pill}>{t.disc5}</span>
                        </div>
                    </div>
                </section>

                {/* ── APIs ── */}
                <section className={styles.apiSection}>
                    <div className={styles.apiIcon} aria-hidden="true">
                        ⚙
                    </div>
                    <div className={styles.apiText}>
                        <h3>{t.apis}</h3>
                        <p>{t.apisDesc}</p>
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
