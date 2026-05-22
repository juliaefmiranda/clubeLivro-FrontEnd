import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BotaoIdioma from '../../components/BotaoIdioma/BotaoIdioma';
import styles from './QuestoesSimulado.module.css';

export default function QuestoesSimulado() {
    const [idioma, setIdioma] = useState('pt');
    const [questoes, setQuestoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [respostas, setRespostas] = useState({});
    const [finalizado, setFinalizado] = useState(false);
    const [resultado, setResultado] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const carregarQuestoes = async () => {
            try {
                const API_KEY = import.meta.env.VITE_API_KEY_ENTRE_LINHAS;
                const response = await fetch('https://clubelivro-backend.onrender.com/api/questoes', {
                    headers: {
                        'x-api-key': API_KEY,
                    },
                });
                
                if (!response.ok) {
                    throw new Error('Erro ao carregar questões');
                }
                
                const data = await response.json();
                setQuestoes(data);
            } catch (error) {
                console.error('Erro:', error);
            } finally {
                setLoading(false);
            }
        };

        carregarQuestoes();
    }, []); // O useEffect agora só tem a função declarada dentro dele

    const handleResposta = (questaoId, opcao) => {
        setRespostas(prev => ({
            ...prev,
            [questaoId]: opcao
        }));
    };

    const handleProxima = () => {
        if (currentIndex < questoes.length - 1) {
            setCurrentIndex(currentIndex + 1);
            window.scrollTo(0, 0);
        }
    };

    const handleAnterior = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleFinalizar = () => {
        let acertos = 0;
        const questoesComRespostas = questoes.map(questao => {
            const respostaUsuario = respostas[questao.id];
            const correta = respostaUsuario === questao.respostaCorreta;
            if (correta) acertos++;
            return {
                ...questao,
                respostaUsuario,
                correta
            };
        });
        
        const nota = (acertos / questoes.length) * 100;
        setResultado({
            total: questoes.length,
            acertos,
            nota: nota.toFixed(1),
            questoes: questoesComRespostas
        });
        setFinalizado(true);
    };

    const handleReiniciar = () => {
        setRespostas({});
        setCurrentIndex(0);
        setFinalizado(false);
        setResultado(null);
        window.scrollTo(0, 0);
    };

    const handleVoltarHome = () => {
        navigate('/simulados');
    };

    if (loading) {
        return (
            <div className={styles.pagina}>
                <Navbar idioma={idioma} />
                <main className={styles.main}>
                    <div className={styles.loadingContainer}>
                        <p className={styles.loading}>
                            {idioma === 'pt' ? 'Carregando questões...' : 'Loading questions...'}
                        </p>
                    </div>
                </main>
                <Footer idioma={idioma} />
            </div>
        );
    }

    if (finalizado && resultado) {
        return (
            <div className={styles.pagina}>
                <Navbar idioma={idioma} />
                <main className={styles.main}>
                    <div className={styles.topo}>
                        <h1 className={styles.titulo}>
                            {idioma === 'pt' ? 'Resultado do Simulado' : 'Exam Results'}
                        </h1>
                        <div className={styles.botaoContainer}>
                            <BotaoIdioma idioma={idioma} setIdioma={setIdioma} />
                        </div>
                    </div>

                    <div className={styles.resultadoContainer}>
                        <div className={styles.notaCard}>
                            <div className={styles.notaCirculo}>
                                <span className={styles.notaValor}>{resultado.nota}</span>
                                <span className={styles.notaMax}>/100</span>
                            </div>
                            <p className={styles.notaTexto}>
                                {idioma === 'pt' 
                                    ? `Você acertou ${resultado.acertos} de ${resultado.total} questões` 
                                    : `You got ${resultado.acertos} out of ${resultado.total} questions correct`}
                            </p>
                        </div>

                        <div className={styles.questoesRevisao}>
                            <h2 className={styles.revisaoTitulo}>
                                {idioma === 'pt' ? 'Revisão das questões' : 'Questions review'}
                            </h2>
                            {resultado.questoes.map((questao, idx) => (
                                <div key={questao.id} className={`${styles.cardRevisao} ${questao.correta ? styles.correta : styles.errada}`}>
                                    <div className={styles.perguntaRevisao}>
                                        <span className={styles.numeroQuestao}>Questão {idx + 1}</span>
                                        <span className={styles.statusIcone}>
                                            {questao.correta ? '✅' : '❌'}
                                        </span>
                                    </div>
                                    <p className={styles.textoPergunta}>
                                        {idioma === 'pt' ? questao.pergunta : questao.pergunta_en}
                                    </p>
                                    <div className={styles.respostaRevisao}>
                                        <p>
                                            <strong>{idioma === 'pt' ? 'Sua resposta:' : 'Your answer:'}</strong>{' '}
                                            {questao.respostaUsuario && (
                                                idioma === 'pt' 
                                                    ? questao[`opcao${questao.respostaUsuario}`]
                                                    : questao[`opcao${questao.respostaUsuario}_en`]
                                            )}
                                        </p>
                                        {!questao.correta && (
                                            <p>
                                                <strong>{idioma === 'pt' ? 'Resposta correta:' : 'Correct answer:'}</strong>{' '}
                                                {idioma === 'pt' 
                                                    ? questao[`opcao${questao.respostaCorreta}`]
                                                    : questao[`opcao${questao.respostaCorreta}_en`]}
                                            </p>
                                        )}
                                        <p className={styles.explicacao}>
                                            <strong>{idioma === 'pt' ? 'Explicação:' : 'Explanation:'}</strong>{' '}
                                            {idioma === 'pt' ? questao.explicacao : questao.explicacao_en}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.botoesResultado}>
                            <button onClick={handleReiniciar} className={styles.botaoReiniciar}>
                                {idioma === 'pt' ? '🔄 Refazer simulado' : '🔄 Retake exam'}
                            </button>
                            <button onClick={handleVoltarHome} className={styles.botaoVoltar}>
                                {idioma === 'pt' ? '📚 Voltar para simulados' : '📚 Back to mock exams'}
                            </button>
                        </div>
                    </div>
                </main>
                <Footer idioma={idioma} />
            </div>
        );
    }

    if (questoes.length === 0) {
        return (
            <div className={styles.pagina}>
                <Navbar idioma={idioma} />
                <main className={styles.main}>
                    <div className={styles.loadingContainer}>
                        <p className={styles.loading}>
                            {idioma === 'pt' ? 'Nenhuma questão encontrada.' : 'No questions found.'}
                        </p>
                    </div>
                </main>
                <Footer idioma={idioma} />
            </div>
        );
    }

    const questaoAtual = questoes[currentIndex];
    const opcoes = ['A', 'B', 'C', 'D', 'E'];

    return (
        <div className={styles.pagina}>
            <Navbar idioma={idioma} />
            
            <main className={styles.main}>
                <div className={styles.topo}>
                    <h1 className={styles.titulo}>
                        {idioma === 'pt' ? 'Simulado de Literatura' : 'Literature Mock Exam'}
                    </h1>
                    <div className={styles.botaoContainer}>
                        <BotaoIdioma idioma={idioma} setIdioma={setIdioma} />
                    </div>
                </div>

                <div className={styles.progressoContainer}>
                    <div className={styles.progressoInfo}>
                        <span>
                            {idioma === 'pt' ? 'Questão' : 'Question'} {currentIndex + 1} {idioma === 'pt' ? 'de' : 'of'} {questoes.length}
                        </span>
                        <span>
                            {idioma === 'pt' ? 'Respondidas:' : 'Answered:'} {Object.keys(respostas).length}/{questoes.length}
                        </span>
                    </div>
                    <div className={styles.progressoBarra}>
                        <div 
                            className={styles.progressoPreenchido}
                            style={{ width: `${(Object.keys(respostas).length / questoes.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className={styles.questaoCard}>
                    <h2 className={styles.pergunta}>
                        {idioma === 'pt' ? questaoAtual.pergunta : questaoAtual.pergunta_en}
                    </h2>

                    <div className={styles.opcoes}>
                        {opcoes.map(opcao => {
                            const textoOpcao = idioma === 'pt' 
                                ? questaoAtual[`opcao${opcao}`]
                                : questaoAtual[`opcao${opcao}_en`];
                            
                            if (!textoOpcao) return null;
                            
                            return (
                                <label key={opcao} className={styles.opcaoLabel}>
                                    <input
                                        type="radio"
                                        name={`questao-${questaoAtual.id}`}
                                        value={opcao}
                                        checked={respostas[questaoAtual.id] === opcao}
                                        onChange={() => handleResposta(questaoAtual.id, opcao)}
                                        className={styles.radio}
                                    />
                                    <span className={styles.opcaoLetra}>{opcao}</span>
                                    <span className={styles.opcaoTexto}>{textoOpcao}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.navegacaoBotoes}>
                    <button 
                        onClick={handleAnterior}
                        disabled={currentIndex === 0}
                        className={`${styles.botaoNav} ${currentIndex === 0 ? styles.desabilitado : ''}`}
                    >
                        {idioma === 'pt' ? '← Anterior' : '← Previous'}
                    </button>
                    
                    {currentIndex === questoes.length - 1 ? (
                        <button 
                            onClick={handleFinalizar}
                            className={styles.botaoFinalizar}
                            disabled={Object.keys(respostas).length !== questoes.length}
                        >
                            {idioma === 'pt' ? '✅ Finalizar simulado' : '✅ Finish exam'}
                        </button>
                    ) : (
                        <button 
                            onClick={handleProxima}
                            className={styles.botaoNav}
                        >
                            {idioma === 'pt' ? 'Próxima →' : 'Next →'}
                        </button>
                    )}
                </div>

                {Object.keys(respostas).length !== questoes.length && (
                    <div className={styles.avisoContainer}>
                        <p className={styles.aviso}>
                            {idioma === 'pt' 
                                ? `Você respondeu ${Object.keys(respostas).length} de ${questoes.length} questões. Responda todas para finalizar.`
                                : `You have answered ${Object.keys(respostas).length} out of ${questoes.length} questions. Answer all to finish.`}
                        </p>
                    </div>
                )}
            </main>

            <Footer idioma={idioma} />
        </div>
    );
}