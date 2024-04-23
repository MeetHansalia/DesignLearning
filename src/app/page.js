import BrandingVideo from "@/components/BrandingVideo/BrandingVideo";
import Hero from "@/components/HeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import "./page.css"
import OurDiff from "@/components/OurDiff/OurDiff";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <OurDiff/>
    </div>
  );
}
