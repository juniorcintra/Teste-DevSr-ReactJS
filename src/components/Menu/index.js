import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  Container,
  ContentDesktop,
  ContentMobile,
  IconMenu,
  MenuMobile,
  IconMenuClose,
  Logo,
  LinkMenu,
  ItemsMobile,
  ItemsDesktop,
  BtnWhatsapp,
} from "./styles";

import logoMenu from "../../assets/images/logo.png";

export default function Menu() {
  const [menuMobile, setMenuMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuMobile(false);
  }, [location]);

  return menuMobile ? (
    <MenuMobile>
      <IconMenuClose onClick={() => setMenuMobile(!menuMobile)}>
        <AiOutlineCloseCircle color="#fff" size={32} />
      </IconMenuClose>
      <ItemsMobile open={menuMobile}>
        <li>
          <LinkMenu active={location.pathname === "/"} to="/">
            Início
          </LinkMenu>
        </li>
        <li>
          <LinkMenu active={location.pathname === "/sobre"} to="/sobre">
            Sobre
          </LinkMenu>
        </li>
        <BtnWhatsapp
          href="https://api.whatsapp.com/send?phone=5548999697551"
          target="_blank">
          <FaWhatsapp />
          meu whatsapp
        </BtnWhatsapp>
      </ItemsMobile>
    </MenuMobile>
  ) : (
    <Container>
      <ContentDesktop>
        <Link to="/">
          <Logo src={logoMenu} />
        </Link>
        <ItemsDesktop>
          <li>
            <LinkMenu active={location.pathname === "/"} to="/">
              Início
            </LinkMenu>
          </li>
          <li>
            <LinkMenu active={location.pathname === "/sobre"} to="/sobre">
              Sobre
            </LinkMenu>
          </li>
          <BtnWhatsapp
            href="https://api.whatsapp.com/send?phone=5548999697551"
            target="_blank">
            <FaWhatsapp />
            meu whatsapp
          </BtnWhatsapp>
        </ItemsDesktop>
      </ContentDesktop>
      <ContentMobile>
        <Link to="/">
          <Logo src={logoMenu} />
        </Link>
        <IconMenu onClick={() => setMenuMobile(!menuMobile)}>
          <FaBars color="#fff" size={25} />
        </IconMenu>
      </ContentMobile>
    </Container>
  );
}
