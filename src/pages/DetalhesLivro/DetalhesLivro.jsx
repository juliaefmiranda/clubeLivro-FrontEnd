import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useIdioma } from "../../hooks/useIdioma";
import { Link } from "react-router-dom";
import { getLivroById } from "../../services/livrosService";

import styles from "./DetalhesLivro.module.css";
import {
  FiBookOpen,
  FiEdit3,
  FiSearch,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

export default function DetalhesLivro() {
  const { origem, id } = useParams();
  const [livro, setLivro] = useState(null);
  const { idioma, setIdioma } = useIdioma();
  const [abaAtiva, setAbaAtiva] = useState("visao");
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {

    async function carregarLivro() {

      try {

        const livro = await getLivroById(origem, id);

        setLivro(livro);

        if (origem === "minha-api") {

          const resposta = await fetch(
            "https://clubelivro-backend.onrender.com/api/personagens",
            {
              headers: {
                "x-api-key": import.meta.env.VITE_API_KEY_ENTRE_LINHAS
              }
            }
          );

          const dados = await resposta.json();

          setPersonagens(dados);

        }

      } catch (erro) {

        console.error(erro);

      }

    }

    carregarLivro();

  }, [origem, id]);

  console.log("ESTADO PERSONAGENS:", personagens);

  if (!livro) {
    return (
      <div className={styles.carregando}>
        <p>{idioma === "pt" ? "Carregando..." : "Loading..."}</p>
      </div>
    );
  }


  return (
    <div className={styles.pagina}>
      <Navbar idioma={idioma} setIdioma={setIdioma} />

      <main className={styles.detalhes}>
        <div className={styles.topoDetalhes}>
          <Link to="/obras" className={styles.botaoVoltar}>
            {idioma === "pt" ? "← Voltar para obras" : "← Back to books"}
          </Link>
        </div>

        <section className={styles.secaoPrincipal}>
          <div className={styles.capaLivro}>
            <img src={livro.capa} alt={livro.titulo} />
          </div>

          <div className={styles.infoLivro}>
            <span className={styles.generoLivro}>
              {idioma === "pt" ? livro.genero : livro.genero_en}
            </span>

            <h1>{livro.titulo}</h1>

            <h2>{livro.autor}</h2>

            <p className={styles.anoLivro}>
              {idioma === "pt"
                ? `Publicado em ${livro.anoPublicacao}`
                : `Published in ${livro.anoPublicacao}`}
            </p>

            <p className={styles.notaLivro}>
              ⭐ {livro.nota ? livro.nota : 3}/5
            </p>

            <p className={styles.resumoLivro}>
              {idioma === "pt" ? livro.resumo : livro.resumo_en}
            </p>
          </div>
        </section>

        <section className={styles.tabsContainer}>
          <button
            className={abaAtiva === "visao" ? styles.active : ""}
            onClick={() => setAbaAtiva("visao")}
          >
            <FiBookOpen />
            {idioma === "pt" ? "Visão Geral" : "Overview"}
          </button>

          <button
            className={abaAtiva === "autor" ? styles.active : ""}
            onClick={() => setAbaAtiva("autor")}
          >
            <FiEdit3 />
            {idioma === "pt" ? "Autor e Estilo" : "Author & Style"}
          </button>

          <button
            className={abaAtiva === "analise" ? styles.active : ""}
            onClick={() => setAbaAtiva("analise")}
          >
            <FiSearch />
            {idioma === "pt" ? "Análise" : "Analysis"}
          </button>

          <button
            className={abaAtiva === "personagens" ? styles.active : ""}
            onClick={() => setAbaAtiva("personagens")}
          >
            <FiUsers />
            {idioma === "pt" ? "Personagens" : "Characters"}
          </button>

          <button
            className={abaAtiva === "conclusao" ? styles.active : ""}
            onClick={() => setAbaAtiva("conclusao")}
          >
            <FiCheckCircle />
            {idioma === "pt" ? "Conclusão" : "Conclusion"}
          </button>
        </section>

        <section className={styles.conteudoTabs}>
          {abaAtiva === "visao" && (
            <div className={styles.cardContainer}>
              <div className={styles.cardInfo}>
                <h3>
                  {idioma === "pt"
                    ? "Contexto Histórico"
                    : "Historical Context"}
                </h3>

                <p>{idioma === "pt" ? livro.contexto : livro.contexto_en}</p>
              </div>

              <div className={styles.cardInfo}>
                <h3>{idioma === "pt" ? "Enredo" : "Plot"}</h3>

                <p>{idioma === "pt" ? livro.enredo : livro.enredo_en}</p>
              </div>
            </div>
          )}

          {abaAtiva === "autor" && (
            <div className={styles.cardContainer}>
              <div className={styles.cardInfo}>
                <h3>
                  {idioma === "pt" ? "Sobre o Autor" : "About the Author"}
                </h3>

                <p>
                  {idioma === "pt"
                    ? livro.detalhesAutor
                    : livro.detalhesAutor_en}
                </p>
              </div>

              <div className={styles.cardInfo}>
                <h3>
                  {idioma === "pt" ? "Estilo de Escrita" : "Writing Style"}
                </h3>

                <p>
                  {idioma === "pt"
                    ? livro.estiloEscrita
                    : livro.estiloEscrita_en}
                </p>
              </div>

              <div className={styles.cardInfo}>
                <h3>
                  {idioma === "pt"
                    ? "Características Literárias"
                    : "Literary Characteristics"}
                </h3>

                <p>
                  {idioma === "pt"
                    ? livro.caracteristicasLiterarias
                    : livro.caracteristicasLiterarias_en}
                </p>
              </div>
            </div>
          )}

          {abaAtiva === "analise" && (
            <div className={styles.cardContainer}>
              <div className={styles.cardInfo}>
                <h3>
                  {idioma === "pt" ? "Verossimilhança" : "Verisimilitude"}
                </h3>

                <p>
                  {idioma === "pt"
                    ? livro.verossimilhanca
                    : livro.verossimilhanca_en}
                </p>
              </div>
            </div>
          )}

          {abaAtiva === "personagens" && (
            <div className={styles.cardContainer}>
              <div className={styles.cardInfo}>
                <h3>{idioma === "pt" ? "Personagens" : "Characters"}</h3>
                {origem === "minha-api" ? (
                  Array.isArray(personagens) &&
                  personagens.map((personagem) => (
                    <div key={personagem.id} className={styles.personagemCard}>
                      <h4>{personagem.nome}</h4>
                      <p>
                        {idioma === "pt"
                          ? personagem.caracteristicas
                          : personagem.caracteristicas_en}
                      </p>
                      <p>
                        {idioma === "pt"
                          ? personagem.representacao
                          : personagem.representacao_en}
                      </p>
                    </div>
                  ))
                ) : (
                  <>
                    {Array.isArray(livro.personagens) ? (
                      livro.personagens.map((personagem, index) => (
                        <p key={index}> - {personagem}</p>
                      ))
                    ) : (
                      <p> {livro.personagens} </p>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {abaAtiva === "conclusao" && (
            <div className={styles.cardContainer}>
              <div className={styles.cardInfo}>
                <h3>{idioma === "pt" ? "Conclusão" : "Conclusion"}</h3>

                <p>{idioma === "pt" ? livro.conclusao : livro.conclusao_en}</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer idioma={idioma} />
    </div>
  );
}
