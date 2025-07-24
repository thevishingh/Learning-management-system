import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./public/pages/Home";
import SmoothFollower from "./public/components/Cursor";

export default function App() {
  return (
    <>
      <SmoothFollower />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
