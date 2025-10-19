import React from "react";
import Header from "./components/shared/sections/Header";
import Footer from "./components/shared/sections/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FormPage from "./pages/Formpage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}


