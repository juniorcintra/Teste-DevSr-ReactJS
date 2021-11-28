import React from "react";

import { Container, Content, DivDev, Direitos, Dev } from "./styles";

import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <Container>
      <Content>
        <DivDev>
          <Direitos>Teste Cinema - Todos os direitos reservados.</Direitos>
          <Dev>
            Desenvolvido por: <img src={logo} alt="" />
          </Dev>
        </DivDev>
      </Content>
    </Container>
  );
}
