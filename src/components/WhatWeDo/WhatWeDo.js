"use client";
import React from "react";
import "./WhatWeDo.css";

import Image from "next/image";
import { features } from "@/utils/data";
import { motion } from "framer-motion";
import {
  tagVariants,
  titleVariants,
  desVariants,
  containerVariants,
} from "@/utils/animations";

const WhatWeDo = () => {
  return (
    <div className="wwwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              What We Do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Empowering founders with non dilutive capital and execution
              expertise
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>

          {/*two block*/}
          <div className="wwd-blocks">
            {/*first block*/}
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Fund recurring growth expenses e.g. customer acquisition,
                inventory
              </motion.span>
              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/*second block*/}
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Fund one-offs to scale e.g. product, hiring
              </motion.span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/*Support block */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            {/* left side */}
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="des">
                Data Insights and Full stack expertise to supercharge growth
              </span>
            </div>
            {/*right side*/}
            <div>
              <span className="text">
                Actionable data insights by connecting revenue, marketing and
                social media platforms
              </span>
              <span className="text">
                On demand execution expertise at cost or revenue share across
                proposition design, engineering, marketing analytics,
                partnerships, brand, intellectual property, market expansion
                talent management
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
