import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 768px;
  margin-top: 200px;

  @media (max-width: 576px) {
    height: 382px;
    margin-top: 203px;
  }

  .swiper-pagination {
    margin-bottom: 38px;
  }

  .swiper-pagination-bullet {
    width: 31px;
    height: 6px;
    border-radius: 0;
  }

  .swiper-pagination-bullet-active {
    background: ${colors.white};
  }
`;

export const SlideMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 382px;
  background: ${({ url }) =>
    url ? `url(${url}) no-repeat center center;` : `none`};
  background-size: cover;
  @media (min-width: 578px) {
    display: none;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 671px;
  background: ${({ url }) =>
    url ? `url(${url}) no-repeat center center;` : `none`};
  background-size: cover;
  @media (max-width: 577px) {
    display: none;
  }
`;

export const ButtonPrev = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.white};
  position: absolute;
  z-index: 999;
  left: 48px;
  top: 40%;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1100px) {
    transform: scale(1.3);
    right: 154px;
  }

  @media screen and (max-width: 576px) {
    left: 48px;
    top: 40%;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 70px;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.white};
  position: absolute;
  z-index: 999;
  right: 48px;
  top: 40%;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1100px) {
    transform: scale(1.3);
    right: 48px;
  }

  @media screen and (max-width: 576px) {
    right: 48px;
    top: 40%;
  }
`;
