import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Videoaula.module.css'; 
import Footer from '../../components/Footer/Footer';
import { useIdioma } from '../../hooks/useIdioma';

export default function Videoaulas() {
    const { idioma, setIdioma } = useIdioma();
    const [videoaula, setVideoaula] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');

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

    useEffect(() => {
        fetch('https://clubelivro-backend.onrender.com/api/videoAulas', {
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY || import.meta.env.VITE_API_KEY_ENTRE_LINHAS,
            },
        })
            .then((res) => {
                console.log('Status:', res.status);
                return res.json();
            })
            .then((data) => {
                const listaVideos = Array.isArray(data) ? data : data.videoAulas;

                if (listaVideos && listaVideos[0]) {
                    const aula = listaVideos[0];
                    setVideoaula(aula); 
                    
                    if (aula.videoUrl) {
                        setVideoUrl(formatarLinkYoutube(aula.videoUrl));
                    }
                }
            })
            .catch((erro) => {
                console.error('Erro ao buscar vídeo do banco:', erro);
            });
    }, []);

    if (!videoaula) {
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
        <div className={styles.header}>
            <Navbar idioma={idioma} setIdioma={setIdioma} />

            <main className={styles.home}>
                <div className={styles.topo}>
                    <div className={styles.topoTexto}>
                        <h1 className={styles.tituloPrincipal}>
                            {idioma === 'pt' 
                                ? 'Assista Nossa Video Aula!' 
                                : 'Watch Our Video Lesson!'}
                        </h1>
                    </div>
                </div>

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
                                <div className={styles.carregando}>
                                    <p>
                                        {idioma === 'pt' 
                                            ? 'Vídeo não disponível' 
                                            : 'Video unavailable'}
                                    </p>
                                </div>
                            )}
                        </div>
                        <span className={styles.dataPost}>29 May, 2026</span>
                    </section>

                    <section className={styles.secaoTexto}>
                        <h3>
                            {idioma === 'pt' 
                                ? videoaula.titulo 
                                : videoaula.titulo_en}
                        </h3>
                        <p>
                            {idioma === 'pt' 
                                ? videoaula.descricao 
                                : videoaula.descricao_en}
                        </p>
                    </section>
                </div>
            </main>

            <Footer idioma={idioma} />
        </div>
    );
}