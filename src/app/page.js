"use client";
import BrandingVideo from "@/components/BrandingVideo/BrandingVideo";
import Hero from "@/components/HeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import "./page.css";
import OurDiff from "@/components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import WhoWeInvest from "@/components/WhoWeInvest/WhoWeInvest";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>

      <HowItWorks />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvest />
      </motion.div>

      <Testimonials />
      <Footer />
      {/* <SliderDemo/> */}
    </motion.div>
  );
}
