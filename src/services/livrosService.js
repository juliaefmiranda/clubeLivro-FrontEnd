export async function getAllLivros() {
    const response = await fetch(
        'https://clubelivro-backend.onrender.com/api/integracao',
        {
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY_ENTRE_LINHAS
            }
        }
    );

    if (!response.ok) {
        throw new Error('Erro ao buscar livros');
    }

    return response.json();
}

export async function getLivroById(origem, id) {

    const resposta = await fetch(
        `https://clubelivro-backend.onrender.com/api/integracao/${origem}/${id}`,
        {
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY_ENTRE_LINHAS
            }
        }
    );

    if (!resposta.ok) {
        throw new Error("Livro não encontrado");
    }

    return resposta.json();
}