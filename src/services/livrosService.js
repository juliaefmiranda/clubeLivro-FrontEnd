import { APIs } from "../config/apis.js";

export async function getAllLivros() {
    const respostas = await Promise
        .allSettled( // executa varias reqs ao msm tempo. Se uma API para de funcionar, as outras continuam funcionando
            APIs.map((api) => //percorre cada api do array fazendo fetch
                fetch(api.url, {
                    headers: {
                        "x-api-key": api.apiKey,
                    },
                })
                    .then((res) => { //pega a resposta da api
                        if (!res.ok) {
                            throw new Error(`Erro na API ${api.origem}`);
                        } return res.json(); //transforma o json em js
                    })
                    .then((livros) =>
                        livros.map((livro) => ({
                            ...livro, //copia os dados e adiciona origem e a url de onde veio
                            origem: api.origem,
                            apiUrl: api.url,
                        }))
                    )
            )
        );

    const livros = respostas
        .filter((r) => r.status === "fulfilled") //pega só as api que funcionaram
        .flatMap((r) => r.value); //junta elas num array só

    const erros = respostas
        .filter((r) => r.status === "rejected") //msm coisa de cima mas com os erros
        .map((r) => r.reason.message);

    return { livros, erros };
}

export async function getLivroById(origem, id) {
    const api = APIs.find((a) => a.origem === origem);

    if (!api) throw new Error("API de origem não encontrada");

    const resposta = await fetch(`${api.url}/${id}`, {
        headers: {
            "x-api-key": api.apiKey,
        },
    });

    if (!resposta.ok) {
        throw new Error("Erro ao buscar o livro");
    }

    return resposta.json();
}