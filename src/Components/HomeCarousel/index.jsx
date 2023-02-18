import { Carousel } from "antd";
import React from "react";
import HomeCarouselElement from "./HomeCarouselElement";
const HomeCarousel = () => {
  return (
    <Carousel
      dotPosition="bottom"
      autoplay
      draggable
      dots={false}
      autoplaySpeed={3000}>
      <div>
        <HomeCarouselElement />
      </div>
      <div>
        <HomeCarouselElement />
      </div>
      <div>
        <HomeCarouselElement />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
