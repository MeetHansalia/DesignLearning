"use client"
import React, { useRef } from "react";
import "./BrandingVideo.css";
import { motion } from "framer-motion";

const BrandingVideo = () => {
  const ref = useRef(null);
  return (
    <div className="bv-container">
      <div className="container">
        <motion.video
          ref={ref}
          className="bv-video"
          loop
          muted
          autoPlay
          controls=""
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default BrandingVideo;
