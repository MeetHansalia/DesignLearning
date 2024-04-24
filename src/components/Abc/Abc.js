import { useRouter } from "next/router";

import React, { useRef } from "react";
// Import Swiper React components
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  // 	items: 5,
  // 	slidesToSlide: 5,
  // 	paritialVisibilityGutter: 15
  // },
  desktop: {
    breakpoint: { max: 1920, min: 1199 },
    items: 2,
    slidesToSlide: 1,
    paritialVisibilityGutter: 15,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.8,
    slidesToSlide: 1,
    paritialVisibilityGutter: 15,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    slidesToSlide: 1,
    items: 1,
    paritialVisibilityGutter: 15,
  },
};

const SliderDemo = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={true}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={1500}
      rewind={true}
      rewindWithAnimation={true}
    >
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </Carousel>
  );
};
export default SliderDemo;
