import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center text-black font-bold h-20 p-6 shadow-md">
        <Link to="/" className="ml-3 text-2xl">#VanLife</Link>
        <div className="mr-3 space-x-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
    </header>
  )
}
