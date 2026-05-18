import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Obras.module.css';
import Footer from '../../components/Footer/Footer';
import BotaoIdioma from '../../components/BotaoIdioma/BotaoIdioma';

export default function Obras() {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idioma, setIdioma] = useState('pt');

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
                if (data) {
                    setLivros(data);
                }
                setLoading(false);
            })
            .catch((erro) => {
                console.error('Erro ao buscar livros:', erro);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.header}>
            <Navbar />

            <BotaoIdioma idioma={idioma} setIdioma={setIdioma} />

            <main className={styles.mainObras}>
                <h2 className={styles.titulo}>Obras Do Vestibular</h2>

                {loading ? (
                    <p className={styles.loading}>Carregando obras...</p>
                ) : (

                    <div className={styles.gridObras}>
                        {livros.map((livro) => (
                            <div key={livro.id || livro.titulo} className={styles.cardObra}>
                                <div className={styles.book}>
                                    <img src={livro.capa} alt={livro.titulo} />
                                </div>
                                <h3>{livro.titulo}</h3>
                                <p>{livro.autor}</p>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
