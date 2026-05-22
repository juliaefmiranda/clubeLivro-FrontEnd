import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BotaoIdioma from '../../components/BotaoIdioma/BotaoIdioma';
import styles from './InstrucoesSimulado.module.css';

export default function InstrucoesSimulado() {
    const [idioma, setIdioma] = useState('pt');
    const navigate = useNavigate();

    const handleIniciarSimulado = () => {
        navigate('/simulado/questoes');
    };

    return (
        <div className={styles.pagina}>
            <Navbar idioma={idioma} />

            <main className={styles.main}>
                <div className={styles.topo}>
                    <h1 className={styles.titulo}>
                        {idioma === 'pt' ? 'Simulado' : 'Mock Exam'}
                    </h1>
                    <div className={styles.botaoContainer}>
                        <BotaoIdioma idioma={idioma} setIdioma={setIdioma} />
                    </div>
                </div>

                <div className={styles.conteudo}>
                    <h2 className={styles.subtitulo}>
                        {idioma === 'pt' ? 'Informações do simulado' : 'Exam Information'}
                    </h2>

                    <div className={styles.textoInfo}>
                        <p>
                            {idioma === 'pt'
                                ? 'Este simulado foi desenvolvido para testar seus conhecimentos sobre as obras literárias cobradas nos principais vestibulares do país. As questões abordam temas como romantismo, realismo, modernismo e outros movimentos literários importantes, permitindo que você avalie sua preparação e identifique pontos que precisam de mais estudo.'
                                : 'This mock exam was developed to test your knowledge about literary works required in the main entrance exams across the country. The questions cover topics such as romanticism, realism, modernism, and other important literary movements, allowing you to assess your preparation and identify points that need more study.'}
                        </p>

                        <p>
                            {idioma === 'pt'
                                ? 'O simulado contém 10 questões de múltipla escolha, cada uma com 5 alternativas. Ao final, você receberá sua pontuação e poderá revisar todas as questões com as explicações detalhadas. Não há tempo limite, mas recomendamos responder com calma e atenção para melhor aproveitamento.'
                                : 'The exam contains 10 multiple choice questions, each with 5 alternatives. At the end, you will receive your score and can review all questions with detailed explanations. There is no time limit, but we recommend answering calmly and carefully for better results.'}
                        </p>
                    </div>

                    <div className={styles.botaoContainerFinal}>
                        <button 
                            className={styles.botaoIniciar}
                            onClick={handleIniciarSimulado}
                        >
                            {idioma === 'pt' ? 'Iniciar simulado' : 'Start mock exam'}
                        </button>
                    </div>
                </div>
            </main>

            <Footer idioma={idioma} />
        </div>
    );
}