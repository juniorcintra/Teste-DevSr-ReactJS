import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  background: ${colors.grayLight3};
  width: 100%;
  padding: 56px 200px 45px 200px;

  @media (max-width: 1144px) {
    padding: 56px 30px 45px 30px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const DivDev = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 571px) {
    justify-content: center;
  }
`;

export const Direitos = styled.p`
  color: ${colors.black};
  font-family: "BrandonRegular", sans-serif;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 571px) {
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const Dev = styled.p`
  color: ${colors.black};
  font-family: "BrandonRegular", sans-serif;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  img {
    width: 100px;
  }
`;
