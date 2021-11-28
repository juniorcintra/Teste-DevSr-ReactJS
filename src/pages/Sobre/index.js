import React from "react";
import {
  Container,
  Banner,
  Content,
  Title,
  DivTexto,
  Paragraph,
  Divider,
} from "./styles";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

export default function Sobre() {
  return (
    <Container>
      <Menu />
      <Banner />
      <Content>
        <Title>Sobre</Title>
        <DivTexto>
          <Paragraph>
            O Teste foi realizado com o desenvolvimento de um layout do zero
            contendo todas as funcionalidades propostas no teste.
          </Paragraph>
          <Paragraph>
            As tecnologias usadas foram: ReactJS, Redux, Redux-Saga, Axios,
            Styled-Components e CSS3 (usado em animações de loading).
          </Paragraph>
          <Paragraph>
            O código fonte desse projeto está no repositório:
            <a href="https://github.com/juniorcintra/Teste-DevSr-ReactJS">
              Teste Dev React
            </a>
            do GitHub.
          </Paragraph>
          <Paragraph>Espero que gostem :)</Paragraph>
        </DivTexto>
        <Divider />
      </Content>
      <Footer />
    </Container>
  );
}
