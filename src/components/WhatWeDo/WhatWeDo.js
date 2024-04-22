import React from "react";
import "./WhatWeDo.css";
import { features } from "@/utils/data";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="wwwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <span className="tag">What We Do</span>
            <span className="title">
              Empowering founders with non dilutive capital and execution
            </span>
            <span className="des">Here is how we can evaluate</span>
          </div>

          {/*two block*/}
          <div className="wwd-blocks">
            {/*first block*/}
            <div className="wwd-block">
              <span className="sec-title">Blue Advances</span>
              <span className="text">
                Fund recurring growth expenses e.g. customer acquisition,
                inventory
              </span>
              <div className="block-features">
                {features.slice(0.3).map((feature, i) => {
                  <div key={i}>
                    <Image
                      src={feature.src}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                  </div>;
                })}
              </div>
            </div>
            {/*second block*/}
            <div className="wwd-block">Second</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
