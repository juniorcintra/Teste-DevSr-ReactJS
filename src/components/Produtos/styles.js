import styled, { keyframes } from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.section`
  width: 100%;
  background: ${colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-family: "BrandonBlack", sans-serif;
  font-size: 22px;
  line-height: 38px;
  text-transform: uppercase;
`;

export const DivBotoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
  width: 90%;
  margin: 15px 0;
`;

export const ButtonFiltro = styled.button`
  width: auto;
  height: 21px;
  font-size: 15px;
  font-family: "BrandonBlack", sans-serif;
  line-height: 38px;
  text-transform: uppercase;
  color: ${colors.veryDarkGray2};
  ${(props) => props.active && `color: ${colors.black};`};

  @media (max-width: 847px) {
    margin: 10px;
  }
`;

export const DivFilmes = styled.div`
  max-width: 1220px;
  width: 90%;
  min-height: 560px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 896px) {
    justify-content: center;
  }
`;

export const Poster = styled.img``;

export const Filme = styled.div`
  padding: 16px;
  width: 335px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.veryDarkGray};
  margin: 16px;
`;

export const TituloFilme = styled.span`
  color: ${colors.black};
  font-size: 25px;
  margin: 16px 0;
  text-align: center;
`;

export const Sinopse = styled.p`
  color: ${colors.black};
  text-align: justify;
`;

export const Lancamento = styled.span`
  color: ${colors.black};
  margin: 16px 0;
`;

export const SemFilmes = styled.span`
  width: 100%;
  text-align: center;
`;

const spin = keyframes`
        from {
            transform: rotate(0deg);
        } to {
            transform: rotate(360deg);
        }
`;

export const LoadingSpinner = styled.img`
  margin: 0 auto;
  animation-name: ${spin};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const DivPaginacao = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
`;
export const ButtonPaginate = styled.button`
  margin: 8px;
  border: 1px solid #ccc;
  width: 30px;
  height: 30px;
  background-color: ${({ active }) => (active ? `#ccc` : `#fff`)};
`;
