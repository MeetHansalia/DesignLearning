import BrandingVideo from "@/components/BrandingVideo/BrandingVideo";
import Hero from "@/components/HeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
    </div>
  );
}
