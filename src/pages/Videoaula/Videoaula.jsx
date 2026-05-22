import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Videoaula.module.css';
import Footer from '../../components/Footer/Footer';
import BotaoIdioma from '../../components/BotaoIdioma/BotaoIdioma';

export default function Videoaulas() {
    const formatarLinkYoutube = (url) => {
        if (!url) return '';

        if (url.includes('youtube.com/embed/')) return url;

        if (url.includes('youtube.com/shorts/')) {
            const id = url.split('shorts/')[1]?.split('?')[0];
            return `https://www.youtube.com/embed/${id}`;
        }

        if (url.includes('v=')) {
            const id = url.split('v=')[1]?.split('&')[0];
            return `https://www.youtube.com/embed/${id}`;
        }

        if (url.includes('youtu.be/')) {
            const id = url.split('youtu.be/')[1]?.split('?')[0];
            return `https://www.youtube.com/embed/${id}`;
        }

        return url;
    };

    const [idioma, setIdioma] = useState('pt');
    const [videoUrl, setVideoUrl] = useState(() => formatarLinkYoutube('https://www.youtube.com/watch?v=pTcc00EpCZc'));
        

    useEffect(() => {
        fetch('https://clubelivro-backend.onrender.com/api/livros', {
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data && data[0]) {
            
                    const urlOriginal = data[0].video || data[0].url || '';
                    setVideoUrl(formatarLinkYoutube(urlOriginal));
                }
            })
            .catch((erro) => {
                console.error('Erro ao buscar vídeo:', erro);
            });
    }, []);

    return (
        <div className={styles.header}>
            <Navbar idioma={idioma} />

            <div className={styles.idiomaContainer}>
                <BotaoIdioma idioma={idioma} setIdioma={setIdioma} />
            </div>

            <main className={styles.home}>
                <h1 className={styles.tituloPrincipal}>
                    {idioma === 'pt' ? 'Assista Nossa Video Aula!' : 'Watch Our Video Lesson!'}
                </h1>

                <div className={styles.conteudoGrid}>
                    
                
                    <section className={styles.secaoVideo}>
                        <div className={styles.videoContainer}>
                            {videoUrl ? (
                                <iframe
                                    src={videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className={styles.videoPlayer}
                                ></iframe>
                            ) : (
                                <div className={styles.carregando}>Carregando vídeo...</div>
                            )}
                        </div>
                        <span className={styles.dataPost}>2 Aug, 2021</span>
                    </section>

                    
                    <section className={styles.secaoTexto}>
                        <h3>
                            {idioma === 'pt' 
                                ? 'Letras e Contexto Histórico da Obra' 
                                : 'Literature and Historical Context of the Work'}
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </section>

                </div>
            </main>

            <Footer idioma={idioma} />
        </div>
    );
}