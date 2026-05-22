import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BotaoIdioma from '../../components/BotaoIdioma/BotaoIdioma';

import { getAllLivros } from '../../services/livrosService.js';

import styles from './Obras.module.css';

export default function Obras() {
    const [idioma, setIdioma] = useState('pt');
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erros, setErros] = useState([]);

    useEffect(() => {
        async function carregarLivros() {
            try {
                const resultado = await getAllLivros();

                setLivros(resultado.livros);
                setErros(resultado.erros);
            } catch (erro) {
                console.log('Erro ao carregar livros:', erro);
            } finally {
                setLoading(false);
            }
        }

        carregarLivros();
    }, []);

    return (
        <div className={styles.pagina}>
            <Navbar idioma={idioma} />

            <main className={styles.main}>
                <div className={styles.topo}>
                    <h1 className={styles.titulo}>
                        {idioma === 'pt' ? 'Obras do Vestibular' : 'Entrance Exam Books'}
                    </h1>

                    <div className={styles.botaoContainer}>
                        <BotaoIdioma idioma={idioma} setIdioma={setIdioma} />
                    </div>
                </div>

                <div className={styles.linha}></div>

                {loading ? (
                    <div className={styles.loadingContainer}>
                        <p className={styles.loading}>
                            {idioma === 'pt' ? 'Carregando obras ...' : 'Loading Books ...'}
                        </p>
                    </div>
                ) : (
                    <section className={styles.gridObras}>
                        {livros.map((livro) => (
                            <Link
                                key={`${livro.origem}
                                -${livro.id}`}
                                to={`/obras/${livro.origem}/${livro.id}`}
                                className={styles.cardObra}>
                                <div className={styles.imagemContainer}>
                                    <img
                                        src={livro.capa}
                                        alt={livro.tituo}
                                        className={styles.imagem}
                                    />
                                </div>

                                <div className={styles.info}>
                                    <h2 className={styles.nomeLivro}>{livro.titulo}</h2>

                                    <p className={styles.autor}>{livro.autor}</p>
                                </div>
                            </Link>
                        ))}

                        {erros.map((_, index) => (
                            <div key={index} className={styles.cardErro}>
                                <div className={styles.erroConteudo}>
                                    <h2>
                                        {idioma === 'pt' ? 'Obra indisponível' : 'Book unavailable'}
                                    </h2>

                                    <p>
                                        {' '}
                                        {idioma === 'pt'
                                            ? 'Não foi possível carregar esta obra'
                                            : 'Could not load this book'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>
                )}
            </main>

            <Footer idioma={idioma}></Footer>
        </div>
    );
}
