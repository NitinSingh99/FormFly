import React from "react";
import Header from "./components/Homepage/sections/Header";
import HeroSection from "./components/Homepage/sections/HeroSection";
import FeatureSection from "./components/Homepage/sections/FeatureSection";
import Footer from "./components/Homepage/sections/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FormPage from "./pages/Formpage";

const App: React.FC = () => 
(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App;
