import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./public/pages/Home";
import About from "./public/pages/About";
import SmoothFollower from "./public/components/Cursor";
import Header2 from "./components/mvpblocks/header-2";
import FooterSection from "./components/footer";

export default function App() {
  return (
    <>
      <SmoothFollower />
      <Header2 />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <section className="bg-bottom">
        <FooterSection />
      </section>
    </>
  );
}
