import styled from "styled-components";

import sobrenosPNG from "../../assets/images/sobrenos.png";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.section`
  width: 100%;
  height: 670px;
  margin-top: 200px;
  background-image: url(${sobrenosPNG});
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 644px) {
    display: none;
  }
  @media (min-width: 645px) and (max-width: 890px) {
    background-size: cover;
    height: 470px;
    background-position: bottom;
  }
`;

export const Content = styled.div`
  display: flex;
  align-self: center; // alinha elemento
  flex-direction: column;
  max-width: 802px;
  width: 90%;
  padding-top: 79px;
  padding-bottom: 50px;
  @media (max-width: 644px) {
    margin-top: 203px;
  }
`;

export const Title = styled.h1`
  font-family: "BrandonBold";
  font-size: 43px;
  line-height: 47px;
  color: ${colors.black};
`;

export const DivTexto = styled.div`
  margin-top: 43px;
  margin-bottom: 79px;
  width: 100%;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
  font-family: "PlayFair";
  font-size: 18px;
  line-height: 28px;
  width: 100%;

  &:last-child {
    margin: 0 !important;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.grayLight1};
`;
