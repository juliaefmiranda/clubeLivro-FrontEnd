import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BotaoIdioma from "../../components/BotaoIdioma/BotaoIdioma";

import styles from './DetalhesLivro.module.css';

export default function DetalhesLivro() {
    const { origem, id } = useParams();
    const [livro, setLivro] = useState(null);
    const [idioma, setIdioma] = useState('pt');
    const [abaAtiva, setAbaAtiva] = useState('visao');

    useEffect(() => {

        fetch(`https://clubelivro-backend.onrender.com/api/livros/${id}`, {
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY,
            },
        })
            .then((res) => {
                console.log('Status:', res.status);
                return res.json();
            })
            .then((data) => {
                console.log('Livro recebido:', data);
                setLivro(data);
            })
            .catch((erro) => {
                console.error('Erro ao buscar livro:', erro);
            });

    }, [id]);

    if (!livro) {
        return (
            <div className={styles.carregando}>
                <p>
                    {idioma === 'pt'
                        ? 'Carregando...'
                        : 'Loading...'}
                </p>
            </div>
        );
    }

    return (
        <div className={styles.pagina}>

            <Navbar idioma={idioma} />

            <main className={styles.detalhes}>
                <div className={styles.topBar}>

                    <BotaoIdioma
                        idioma={idioma}
                        setIdioma={setIdioma}
                    />

                </div>

                <section className={styles.secaoPrincipal}>
                    <div className={styles.capaLivro}>
                        <img
                            src={livro.capa}
                            alt={livro.titulo}
                        />

                    </div>

                    <div className={styles.infoLivro}>
                        <span className={styles.generoLivro}>

                            {idioma === 'pt'
                                ? livro.genero
                                : livro.genero_en}
                        </span>

                        <h1>
                            {livro.titulo}
                        </h1>

                        <h2>
                            {livro.autor}
                        </h2>

                        <p className={styles.anoLivro}>
                            {idioma === 'pt'
                                ? `Publicado em ${livro.anoPublicacao}`
                                : `Published in ${livro.anoPublicacao}`}
                        </p>

                        <p className={styles.resumoLivro}>
                            {idioma === 'pt'
                                ? livro.resumo
                                : livro.resumo_en}
                        </p>

                    </div>
                </section>

                <section className={styles.tabsContainer}>

                    <button
                        className={abaAtiva === 'visao' ? styles.active : ''}
                        onClick={() => setAbaAtiva('visao')}
                    >
                        {idioma === 'pt'
                            ? 'Visão Geral'
                            : 'Overview'}

                    </button>

                    <button
                        className={abaAtiva === 'autor' ? styles.active : ''}
                        onClick={() => setAbaAtiva('autor')}
                    >
                        {idioma === 'pt'
                            ? 'Autor e Estilo'
                            : 'Author & Style'}

                    </button>

                    <button
                        className={abaAtiva === 'analise' ? styles.active : ''}
                        onClick={() => setAbaAtiva('analise')}
                    >
                        {idioma === 'pt'
                            ? 'Análise'
                            : 'Analysis'}

                    </button>

                    <button
                        className={abaAtiva === 'personagens' ? styles.active : ''}
                        onClick={() => setAbaAtiva('personagens')}
                    >
                        {idioma === 'pt'
                            ? 'Personagens'
                            : 'Characters'}

                    </button>

                    <button
                        className={abaAtiva === 'conclusao' ? styles.active : ''}
                        onClick={() => setAbaAtiva('conclusao')}
                    >
                        {idioma === 'pt'
                            ? 'Conclusão'
                            : 'Conclusion'}

                    </button>
                </section>

                <section className={styles.conteudoTabs}>
                    {abaAtiva === 'visao' && (
                        <div className={styles.cardContainer}>
                            <div className={styles.cardInfo}>
                                <h3>
                                    {idioma === 'pt'
                                        ? 'Contexto Histórico'
                                        : 'Historical Context'}
                                </h3>

                                <p>
                                    {idioma === 'pt'
                                        ? livro.contexto
                                        : livro.contexto_en}
                                </p>
                            </div>

                            <div className={styles.cardInfo}>
                                <h3>
                                    {idioma === 'pt'
                                        ? 'Enredo'
                                        : 'Plot'}
                                </h3>

                                <p>
                                    {idioma === 'pt'
                                        ? livro.enredo
                                        : livro.enredo_en}
                                </p>
                            </div>
                        </div>

                    )}

                    {abaAtiva === 'autor' && (

                        <div className={styles.cardContainer}>
                            <div className={styles.cardInfo}>
                                <h3>
                                    {idioma === 'pt'
                                        ? 'Sobre o Autor'
                                        : 'About the Author'}
                                </h3>

                                <p>
                                    {idioma === 'pt'
                                        ? livro.detalhesAutor
                                        : livro.detalhesAutor_en}
                                </p>
                            </div>

                            <div className={styles.cardInfo}>
                                <h3>

                                    {idioma === 'pt'
                                        ? 'Estilo de Escrita'
                                        : 'Writing Style'}
                                </h3>

                                <p>
                                    {idioma === 'pt'
                                        ? livro.estiloEscrita
                                        : livro.estiloEscrita_en}
                                </p>

                            </div>

                            <div className={styles.cardInfo}>
                                <h3>
                                    {idioma === 'pt'
                                        ? 'Características Literárias'
                                        : 'Literary Characteristics'}
                                </h3>

                                <p>
                                    {idioma === 'pt'
                                        ? livro.caracteristicasLiterarias
                                        : livro.caracteristicasLiterarias_en}
                                </p>
                            </div>
                        </div>

                    )}

                    {abaAtiva === 'analise' && (

                        <div className={styles.cardContainer}>
                            <div className={styles.cardInfo}>

                                <h3>
                                    {idioma === 'pt'
                                        ? 'Verossimilhança'
                                        : 'Verisimilitude'}
                                </h3>

                                <p>
                                    {idioma === 'pt'
                                        ? livro.verossimilhanca
                                        : livro.verossimilhanca_en}
                                </p>
                            </div>
                        </div>
                    )}

                    {abaAtiva === 'personagens' && (
                        <div className={styles.cardContainer}>
                            <div className={styles.cardInfo}>
                                <h3>
                                    {idioma === 'pt'
                                        ? 'Personagens'
                                        : 'Characters'}
                                </h3>

                                <p>
                                    {livro.personagens}
                                </p>
                            </div>
                        </div>

                    )}

                    {abaAtiva === 'conclusao' && (
                        <div className={styles.cardContainer}>
                            <div className={styles.cardInfo}>
                                <h3>
                                    {idioma === 'pt'
                                        ? 'Conclusão'
                                        : 'Conclusion'}
                                </h3>

                                <p>
                                    {idioma === 'pt'
                                        ? livro.conclusao
                                        : livro.conclusao_en}
                                </p>
                            </div>
                        </div>
                    )}

                </section>

            </main>

            <Footer idioma={idioma} />

        </div>
    );
}