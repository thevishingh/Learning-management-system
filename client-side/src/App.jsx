import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./public/pages/Home";
import About from "./public/pages/About";
import SmoothFollower from "./public/components/Cursor";
import Header2 from "./components/mvpblocks/header-2";
import FooterSection from "./components/footer";
import ComingSoonPage from "./public/pages/ComingSoonPage";
import Contact from "./public/pages/Contact";
import Login from "./public/pages/Login";
import Register from "./public/pages/Register";
import Courses from "./public/pages/Courses";

export default function App() {
  return (
    <>
      <SmoothFollower />
      <Header2 />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/singin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<ComingSoonPage />} />
        </Routes>
      </main>

      <section className="bg-bottom">
        <FooterSection />
      </section>
    </>
  );
}
