import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Sobre.module.css';
import Footer from '../../components/Footer/Footer';
import { useIdioma } from '../../hooks/useIdioma';

function iniciais(nome = '') {
    return nome
        .split(' ')
        .slice(0, 2)
        .map((p) => p[0])
        .join('')
        .toUpperCase();
}

function formatCurso(participante, idioma) {
    if (!participante) return '';

    const curso = participante.curso;
    const cursoPt = participante.curso_pt || participante.cursoPt || participante.pt;
    const cursoEn = participante.curso_en || participante.cursoEn || participante.en;

    if (idioma === 'en') {
        if (cursoEn) return cursoEn;
        if (typeof curso === 'object') return curso.en || curso.curso_en || curso.curso || cursoPt || '';
        return curso || cursoPt || '';
    }

    if (cursoPt) return cursoPt;
    if (typeof curso === 'object') return curso.pt || curso.curso_pt || curso.curso || cursoEn || '';
    return curso || cursoEn || '';
}

export default function Sobre() {
    const { idioma, setIdioma } = useIdioma();
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(() => {
        fetch('https://clubelivro-backend.onrender.com/api/participantes', {
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY_ENTRE_LINHAS,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setIntegrantes(data);
                } else if (Array.isArray(data.participantes)) {
                    setIntegrantes(data.participantes);
                } else {
                    setIntegrantes([]);
                }
            })
            .catch((erro) => console.error('Erro ao buscar participantes:', erro));
    }, []);

    const conteudo = {
        pt: {
            tag_pt: 'Sobre o Projeto',
            titulo_pt: 'A Moreninha',
            subtitulo_pt: 'Plataforma Literária Integrada',
            descricao1_pt:
                'Este projeto é uma iniciativa integrada entre as escolas SESI e SENAI, reunindo alunos dos cursos de Desenvolvimento de Sistemas, Eletroeletrônica e Mecânica em torno de um objetivo comum: explorar a literatura brasileira de vestibular de forma digital e colaborativa.',
            descricao2_pt:
                'Nossa plataforma é dedicada à obra A Moreninha, de Joaquim Manuel de Macedo — o primeiro romance brasileiro — oferecendo resumos, análises, simulados e conteúdos de apoio para o estudo.',
            descricao3_pt:
                'O projeto integra as disciplinas de Língua Portuguesa e Inglês do SESI, e se conecta às plataformas de outros grupos via APIs, cada um responsável por um livro diferente, formando uma grande biblioteca literária colaborativa.',
            disciplinas_pt: 'Disciplinas Integradas',
            disc1_pt: 'Língua Portuguesa',
            disc2_pt: 'Inglês',
            cursos_pt: 'Cursos Participantes',
            disc3_pt: 'Desenvolvimento de Sistemas',
            disc4_pt: 'Eletroeletrônica',
            disc5_pt: 'Mecânica',
            apis_pt: 'Integração de APIs',
            apisDesc_pt:
                'Nossa API expõe os dados de A Moreninha e se conecta às APIs dos outros grupos, que cobrem diferentes livros do vestibular, formando um ecossistema literário colaborativo.',
            equipe_pt: 'Equipe',
            equipeSub_pt: 'Conheça os integrantes do projeto',
        },
        en: {
            tag_pt: 'About the Project',
            titulo_pt: 'A Moreninha',
            subtitulo_pt: 'Integrated Literary Platform',
            descricao1_pt:
                'This project is a joint initiative between SESI and SENAI schools, bringing together students from Systems Development, Electroelectronics, and Mechanics programs around a shared goal: exploring Brazilian entrance-exam literature in a digital and collaborative way.',
            descricao2_pt:
                'Our platform is dedicated to the novel A Moreninha by Joaquim Manuel de Macedo — the first Brazilian novel — offering summaries, analyses, mock exams, and study resources.',
            descricao3_pt:
                "The project integrates Portuguese Language and English subjects from SESI and connects to other groups' platforms via APIs, each responsible for a different book, forming a large collaborative literary library.",
            disciplinas_pt: 'Integrated Subjects',
            disc1_pt: 'Portuguese Language',
            disc2_pt: 'English',
            cursos_pt: 'Participating Programs',
            disc3_pt: 'Systems Development',
            disc4_pt: 'Electroelectronics',
            disc5_pt: 'Mechanics',
            apis_pt: 'API Integration',
            apisDesc_pt:
                'Our API exposes the data from A Moreninha and connects to APIs from other groups, each covering different entrance-exam books, forming a collaborative literary ecosystem.',
            equipe_pt: 'Team',
            equipeSub_pt: 'Meet the project members',
        },
    };

    const t = conteudo[idioma];

    return (
        <div className={styles.wrapper}>
            <Navbar idioma={idioma} setIdioma={setIdioma} />

            <main className={styles.main}>
                <div className={styles.topo}>

                    <div className={styles.topoTexto}>
                        <span className={styles.tag}>{t.tag_pt}</span>
                        <p className={styles.heroSub}>{t.subtitulo_pt}</p>
                    </div>
                </div>

                <div className={styles.divisor}>
                    <span className={styles.divisorLine} />
                    <span className={styles.divisorOrnament}>✦</span>
                    <span className={styles.divisorLine} />
                </div>

                <section className={styles.section}>
                    <div className={styles.textBlock}>
                        <p>{t.descricao1_pt}</p>
                        <p>{t.descricao2_pt}</p>
                        <p>{t.descricao3_pt}</p>

                        <div className={styles.cardsSection}>
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoCardTitle}>{t.disciplinas_pt}</h3>
                                <div className={styles.infoCardDivider} />
                                <div className={styles.infoCardItems}>
                                    <div className={styles.infoCardItem}>
                                        <span className={styles.infoCardItemDot} />
                                        {t.disc1_pt}
                                    </div>
                                    <div className={styles.infoCardItem}>
                                        <span className={styles.infoCardItemDot} />
                                        {t.disc2_pt}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <h3 className={styles.infoCardTitle}>{t.cursos_pt}</h3>
                                <div className={styles.infoCardDivider} />
                                <div className={styles.infoCardItems}>
                                    <div className={styles.infoCardItem}>
                                        <span className={styles.infoCardItemDot} />
                                        {t.disc3_pt}
                                    </div>
                                    <div className={styles.infoCardItem}>
                                        <span className={styles.infoCardItemDot} />
                                        {t.disc4_pt}
                                    </div>
                                    <div className={styles.infoCardItem}>
                                        <span className={styles.infoCardItemDot} />
                                        {t.disc5_pt}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* api´s */}
                <section className={styles.apiSection}>
                    <div className={styles.apiText}>
                        <h3>{t.apis_pt}</h3>
                        <p>{t.apisDesc_pt}</p>
                    </div>
                    <div className={styles.apiNodes}>
                        <span className={styles.node}>A Moreninha</span>
                        <span className={styles.connector}>↔</span>
                        <span className={styles.node}>Os Ratos</span>
                        <span className={styles.connector}>↔</span>
                        <span className={styles.node}>Olhos d'Água</span>
                        <span className={styles.connector}>↔</span>
                        <span className={styles.node}>Caminho das Pedras</span>
                        <span className={styles.connector}>↔</span>
                        <span className={styles.node}>Canção para Ninar Menino Grande</span>
                    </div>
                </section>

                {/* divisor*/}
                <div className={styles.divisor}>
                    <span className={styles.divisorLine} />
                    <span className={styles.divisorOrnament}>✦</span>
                    <span className={styles.divisorLine} />
                </div>

                {/* equipe */}
                <section className={styles.equipeSection}>
                    <div className={styles.equipeTitulo}>
                        <h2 className={styles.equipeH2}>{t.equipe_pt}</h2>
                        <p className={styles.equipeSub}>{t.equipeSub_pt}</p>
                    </div>

                    <div className={styles.equipeGrid}>
                        {Array.isArray(integrantes) &&
                            integrantes.map((p) => (
                                <div key={p.id} className={styles.cardIntegrante}>
                                    <div className={styles.avatar}>
                                        {p.fotoUrl ? (
                                            <img
                                                src={p.fotoUrl}
                                                alt={p.nome}
                                                className={styles.fotoParticipante}
                                            />
                                        ) : (
                                            iniciais(p.nome)
                                        )}
                                    </div>

                                    <p className={styles.integranteNome}>
                                        {p.nome}
                                    </p>

                                    <span className={styles.integranteCurso}>
                                        {formatCurso(p, idioma)}
                                    </span>
                                </div>
                            ))}
                    </div>
                </section>
            </main>

            <Footer idioma={idioma} />
        </div>
    );
}
