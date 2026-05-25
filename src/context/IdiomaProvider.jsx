import { useState } from 'react';

import { IdiomaContext } from './IdiomaContext';

export function IdiomaProvider({ children }) {
    const [idioma, setIdiomaState] = useState(() => {
        return localStorage.getItem('idioma') || 'pt';
    });

    function setIdioma(novoIdioma) {
        setIdiomaState(novoIdioma);

        localStorage.setItem('idioma', novoIdioma);
    }

    return (
        <IdiomaContext.Provider value={{ idioma, setIdioma }}>{children}</IdiomaContext.Provider>
    );
}
