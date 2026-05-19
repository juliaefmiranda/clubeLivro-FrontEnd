import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BotaoIdioma from '../../components/BotaoIdioma/BotaoIdioma';
import styles from './DicasVestibular.module.css';

export default function DicasVestibular() {
    const [livro, setLivro] = useState({});
    const [dicas, setDicas] = useState([]);
    const [temas, setTemas] = useState([]);
    const [idioma, setIdioma] = useState('pt');

    useEffect(() => {
        async function buscarDados() {
            try {
                const headers = {
                    'x-api-key': import.meta.env.VITE_API_KEY,
                };

                const [livroRes, dicasRes, temasRes] = await Promise.all([
                    fetch('https://clubelivro-backend.onrender.com/api/livros', { headers }),
                    fetch('https://clubelivro-backend.onrender.com/api/dicas', { headers }),
                    fetch('https://clubelivro-backend.onrender.com/api/temas', { headers }),
                ]);

                const livroData = await livroRes.json();
                const dicasData = await dicasRes.json();
                const temasData = await temasRes.json();

                setLivro(livroData[0]);
                setDicas(dicasData);
                setTemas(temasData.data);
            }

            catch (erro) {
                console.error('Erro ao buscar dados:', erro)
            }
        }

        buscarDados();
    }, []);

    return (
        <div className={styles.container}>
            <Navbar idioma={idioma} />

            <div className={styles.idiomaContainer}>
                <BotaoIdioma idioma={idioma} setIdioma={setIdioma} />
            </div>

            <main className={styles.main}>
                <h1>
                    {idioma === 'pt' ? 'Dicas para Vestibulares' : 'College Entrance Exam Tips'}
                </h1>

                <section className={styles.conteudo}>
                    <div className={styles.livroBox}>
                        <img
                            src={livro?.capa} alt={idioma === 'pt' ? livro?.titulo : livro?.titulo_en}
                        />

                        <div className={styles.livroDicas}>
                            <h2>
                                {idioma === 'pt' ? livro?.titulo : livro?.titulo_en}
                            </h2>

                            <h3>{livro?.autor}</h3>

                            {dicas.map((item) => (
                                <p key={item.id}>
                                    {idioma === 'pt' ? item.dica : item.dica_en}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className={styles.temasBox}>
                        <h3>
                            {idioma === 'pt' ? 'Possíveis temas de Redação:' : 'Possible essay topics:'}
                        </h3>

                        <ul>
                            {temas.map((item) => (
                                <li key={item.id}>
                                    {idioma === 'pt' ? item.tema : item.tema_en}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>

            <Footer idioma={idioma} />
        </div>
    )
}