import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Obras.module.css';
import Footer from '../../components/Footer/Footer';

export default function Obras() {
    const [livros, setLivros] = useState('');
    const [loading, setLoading] = useState(true);

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

            <main className={styles.obras}>
                <section className={styles.obrasText}>
                    <h2>Obras do Vestibular</h2>

                    <div className="grid-obras">
                        {livros.map((livro) => (
                            <div key={livro.id} className="card-obra">
                                <div className="container-capa">
                                    <img
                                    src={livro.imagemUrl}
                                    alt={'Capa do Livro ${livro.titulo}'}
                                    className="capa-livro"
                                </div>
                        )}/>
                    </div>

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
