"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { testimonialsData } from "@/utils/data";

const Slider1 = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      //   asNavFor={nav2}
      ref={(slider1) => setNav1(slider1)}
      className="main-slider-fix-wrapper"
      {...settings}
    >
      {/* <div className="pick-slider-img-div">
        <Image
          isContainImg={true}
          src="/apos.svg"
          width={40}
          height={30}
          alt="pickleball"
          // className="webview-img"
        />
      </div>
      <div className="pick-slider-img-div">
        <Image
          isContainImg={true}
          src="/apos.svg"
          alt="pickleball"
          width={40}
          height={30}
          className="webview-img"
        />
        <Image
          isContainImg={true}
          src="/images/scheduler-slider-mobilev1-02.png"
          alt="pickleball"
          width={40}
          height={30}
          className="mobileview-img"
        />
      </div>
      <div className="pick-slider-img-div">
        <Image
          isContainImg={true}
          src="/apos.svg"
          width={40}
          height={30}
          alt="pickleball"
          className="webview-img"
        />
        <Image
          isContainImg={true}
          src="/apos.svg"
          width={40}
          height={30}
          alt="pickleball"
          className="mobileview-img"
        />
      </div>
      <div className="pick-slider-img-div">
        <Image
          isContainImg={true}
          src="/apos.svg"
          width={40}
          height={30}
          alt="pickleball"
          className="webview-img"
        />
        <Image
          isContainImg={true}
          src="/apos.svg"
          width={40}
          height={30}
          alt="pickleball"
          className="mobileview-img"
        />
      </div> */}
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
        </div>
      ))}
    </Slider>
  );
};

export default Slider1;
