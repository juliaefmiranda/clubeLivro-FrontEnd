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
        navigate('/simulado/questions');
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

                    <div className={styles.infoCard}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>
                                {idioma === 'pt' ? '📋 Total de questões:' : '📋 Total questions:'}
                            </span>
                            <span className={styles.infoValue}>10</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>
                                {idioma === 'pt' ? '⏱️ Tempo estimado:' : '⏱️ Estimated time:'}
                            </span>
                            <span className={styles.infoValue}>
                                {idioma === 'pt' ? '20 minutos' : '20 minutes'}
                            </span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>
                                {idioma === 'pt' ? '🎯 Pontuação máxima:' : '🎯 Maximum score:'}
                            </span>
                            <span className={styles.infoValue}>100 pontos</span>
                        </div>
                    </div>

                    <div className={styles.instrucoesTexto}>
                        <h3 className={styles.instrucoesTitulo}>
                            {idioma === 'pt' ? '📖 Sobre o simulado' : '📖 About the exam'}
                        </h3>
                        <p>
                            {idioma === 'pt' 
                                ? 'Este simulado foi desenvolvido para testar seus conhecimentos sobre as obras literárias cobradas nos principais vestibulares do país. As questões abordam temas como romantismo, realismo, modernismo e outros movimentos literários importantes.'
                                : 'This mock exam was developed to test your knowledge about literary works required in the main entrance exams across the country. The questions cover topics such as romanticism, realism, modernism, and other important literary movements.'}
                        </p>

                        <h3 className={styles.instrucoesTitulo}>
                            {idioma === 'pt' ? '📋 Como funciona' : '📋 How it works'}
                        </h3>
                        <ul className={styles.listaInstrucoes}>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ 10 questões de múltipla escolha' 
                                    : '✓ 10 multiple choice questions'}
                            </li>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ Cada questão vale 10 pontos' 
                                    : '✓ Each question is worth 10 points'}
                            </li>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ Você pode marcar uma única alternativa por questão' 
                                    : '✓ You can select only one answer per question'}
                            </li>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ Ao final, você verá seu desempenho e as respostas corretas' 
                                    : '✓ At the end, you will see your performance and the correct answers'}
                            </li>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ Não há tempo limite, mas recomendamos focar e responder com atenção' 
                                    : '✓ There is no time limit, but we recommend focusing and answering carefully'}
                            </li>
                        </ul>

                        <h3 className={styles.instrucoesTitulo}>
                            {idioma === 'pt' ? '💡 Dicas importantes' : '💡 Important tips'}
                        </h3>
                        <ul className={styles.listaInstrucoes}>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ Leia cada pergunta com atenção antes de responder' 
                                    : '✓ Read each question carefully before answering'}
                            </li>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ Se tiver dúvida, elimine as alternativas que você sabe que estão erradas' 
                                    : '✓ If you are unsure, eliminate the alternatives you know are wrong'}
                            </li>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ Não passe muito tempo em uma única questão' 
                                    : '✓ Do not spend too much time on a single question'}
                            </li>
                            <li>
                                {idioma === 'pt' 
                                    ? '✓ Confira suas respostas antes de finalizar o simulado' 
                                    : '✓ Check your answers before finishing the exam'}
                            </li>
                        </ul>
                    </div>

                    <div className={styles.botaoContainerFinal}>
                        <button 
                            className={styles.botaoIniciar}
                            onClick={handleIniciarSimulado}
                        >
                            {idioma === 'pt' ? '▶ Iniciar simulado' : '▶ Start mock exam'}
                        </button>
                    </div>
                </div>
            </main>

            <Footer idioma={idioma} />
        </div>
    );
}