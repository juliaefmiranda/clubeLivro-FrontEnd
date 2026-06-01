export const APIs = [
    {
        origem: 'minha-api',
        url: 'https://clubelivro-backend.onrender.com/api/livros',
        personagensUrl: 'https://clubelivro-backend.onrender.com/api/personagens',
        apiKey: import.meta.env.VITE_API_KEY_ENTRE_LINHAS,
    },
    {
        origem: 'dev-stone',
        url: 'https://devstones-backend.onrender.com/api/livro',
        apiKey: import.meta.env.VITE_API_KEY_DEV_STONE,
    },
    {
        origem: 'menino-grande',
        url: 'https://atividade-portugues-backend.onrender.com/api/livro',
        apiKey: import.meta.env.VITE_API_KEY_MENINO_GRANDE,
    },
    {
        origem: 'olhos-agua',
        url: 'https://olhosdagua.onrender.com/api/livro',
        apiKey: import.meta.env.VITE_API_KEY_OLHOS_AGUA,
    },
    {
        origem: 'the-rats',
        url: 'https://ratsjs.onrender.com/api/livros',
        apiKey: import.meta.env.VITE_API_KEY_THE_RATS,
    },
];
