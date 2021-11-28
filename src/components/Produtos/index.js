import React, { useState, useEffect } from "react";
import ListActions from "../../store/ducks/filmes-list";
import ListGenerosActions from "../../store/ducks/generos-list";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  Container,
  Title,
  DivBotoes,
  ButtonFiltro,
  DivFilmes,
  Poster,
  Filme,
  TituloFilme,
  Sinopse,
  Lancamento,
  SemFilmes,
  LoadingSpinner,
  DivPaginacao,
  ButtonPaginate,
} from "./styles";

import loadingIMG from "../../assets/images/loading.png";

export default function Produtos() {
  const [genero, setGenero] = useState(28);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  async function handleSearchData() {
    dispatch(ListActions.listRequest(page));
  }

  async function handleSearchGeneros() {
    dispatch(ListGenerosActions.listGenerosRequest(page));
  }

  useEffect(() => {
    handleSearchGeneros();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleSearchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }, [genero]);

  const { data: filmesList } = useSelector((state) => state.filmesList);

  const { data: generosList } = useSelector((state) => state.generosList);

  return (
    <Container>
      <Title>filmes em Destaque</Title>
      <DivBotoes>
        {generosList?.slice(0, 6).map((genre) => (
          <ButtonFiltro
            onClick={() => setGenero(genre.id)}
            active={genero === genre.id}>
            {genre.name}
          </ButtonFiltro>
        ))}
      </DivBotoes>
      <DivFilmes>
        {loading && <LoadingSpinner src={loadingIMG} alt="loading" />}
        {filmesList &&
          loading === false &&
          filmesList
            .filter((produto) => produto.genre_ids[0] === genero)
            .map((produto, index) => (
              <Filme>
                <Poster
                  key={index}
                  src={`http://image.tmdb.org/t/p/w185${produto.poster_path}`}
                  alt={produto.foto}
                />
                <TituloFilme>{produto.title}</TituloFilme>
                <Lancamento>
                  {moment(produto.release_date).format("DD/MM/YYYY")}
                </Lancamento>
                <Sinopse>{produto.overview.substr(0, 100) + "..."}</Sinopse>
              </Filme>
            ))}
        {filmesList &&
          loading === false &&
          filmesList.filter((produto) => produto.genre_ids[0] === genero)
            .length < 1 && (
            <SemFilmes>
              Não existem filmes em destaque com esse gênero.
            </SemFilmes>
          )}
      </DivFilmes>
      <DivPaginacao>
        <ButtonPaginate onClick={() => setPage(1)} active={page === 1}>
          1
        </ButtonPaginate>
        <ButtonPaginate onClick={() => setPage(2)} active={page === 2}>
          2
        </ButtonPaginate>
        <ButtonPaginate onClick={() => setPage(3)} active={page === 3}>
          3
        </ButtonPaginate>
        <ButtonPaginate onClick={() => setPage(4)} active={page === 4}>
          4
        </ButtonPaginate>
        <ButtonPaginate onClick={() => setPage(5)} active={page === 5}>
          5
        </ButtonPaginate>
      </DivPaginacao>
    </Container>
  );
}
