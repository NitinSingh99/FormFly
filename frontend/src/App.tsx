import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default App;
