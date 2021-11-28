import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import {
  Container,
  Slide,
  ButtonPrev,
  ButtonNext,
  SlideMobile,
} from "./styles";

import ListLatestActions from "../../store/ducks/latest-list";
import { useDispatch, useSelector } from "react-redux";

import btnNext from "../../assets/images/btnNext.png";
import btnPrev from "../../assets/images/btnPrev.png";

export default function Banner() {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  const params = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <ButtonPrev onClick={goPrev}>
        <img src={btnPrev} alt="" />
      </ButtonPrev>
    ),
    renderNextButton: () => (
      <ButtonNext onClick={goNext}>
        <img src={btnNext} alt="" />
      </ButtonNext>
    ),
  };

  const dispatch = useDispatch();

  async function handleSearchData() {
    dispatch(ListLatestActions.getLatestRequest());
  }

  useEffect(() => {
    handleSearchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { dataLatest: bannerList } = useSelector((state) => state.latestList);

  function returnSlides(data) {
    return (
      <button key={data.id}>
        <Slide
          url={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`}
        />
        <SlideMobile
          url={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`}
        />
      </button>
    );
  }

  return (
    <Container id="banner">
      {bannerList && (
        <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
          {bannerList?.map((banner) => returnSlides(banner))}
        </Swiper>
      )}
    </Container>
  );
}
