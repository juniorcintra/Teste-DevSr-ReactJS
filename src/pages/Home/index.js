import React from "react";
import { Container } from "./styles";

import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Produtos from "../../components/Produtos";

export default function Home() {
  return (
    <Container>
      <Menu />
      <Banner />
      <Produtos />
      <Footer />
    </Container>
  );
}
