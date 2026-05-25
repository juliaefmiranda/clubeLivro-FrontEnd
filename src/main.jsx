import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './App.jsx';

import { IdiomaProvider } from './context/IdiomaProvider';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <IdiomaProvider>
            <App />
        </IdiomaProvider>
    </StrictMode>,
);
