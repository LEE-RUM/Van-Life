import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";

import "./server"


export default function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="/host" element={<Dashboard />} />
        <Route path="/host/income" element={<Income />} />
        <Route path="/host/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  )
}