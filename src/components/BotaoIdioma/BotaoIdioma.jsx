import styles from './BotaoIdioma.module.css';

export default function BotaoIdioma({idioma, setIdioma}) {
    function trocarIdioma() {
        setIdioma(idioma === 'pt' ? 'en' : 'pt');
    }

    return (
        <button className={styles.botao} onClick={trocarIdioma}>
            {idioma === 'pt' ? 'English ' : 'Português'}
        </button>
    );
}