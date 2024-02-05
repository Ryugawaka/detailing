import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";

import MainPage from "./pages/main";
import NotFoundPage from "./pages/notFound/notFoundPage";
import AboutPage from "./pages/about/about";
import ServicesPage from "./pages/services/services";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
