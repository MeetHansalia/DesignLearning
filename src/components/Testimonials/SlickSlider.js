import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "@/utils/data";
import Image from "next/image";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    sliderToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          sliderToShow: 3,
          sliderToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          sliderToShow: 2,
          sliderToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          sliderToShow: 3,
          sliderToScroll: 3,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {testimonialsData.map((comment, i) => (
          <div key={i} className="comment">
            {/* upper side*/}
            <div className="c-content">
              <Image
                src={"/apos.svg"}
                className="apos-slider"
                alt="apos"
                width={40}
                height={30}
              />
              <span>{comment.comment}</span>
            </div>
            {/*Lover side*/}
            <div className="c-info">
              <div className="c-avatar">{comment.name[0]}</div>
              <div className="c-person">
                <span>{comment.name}</span>
                <span>{comment.profession}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
