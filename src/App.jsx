import React from "react";
import MainPage from "./pages/main";
import NotFoundPage from "./pages/notFound/notFoundPage";
import Footer from "./ui/Footer/Footer";
import Header from "./ui/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cart' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
