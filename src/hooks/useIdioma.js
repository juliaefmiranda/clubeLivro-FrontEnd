import { useContext } from 'react';

import { IdiomaContext } from '../context/IdiomaContext';

export function useIdioma() {
    return useContext(IdiomaContext);
}
