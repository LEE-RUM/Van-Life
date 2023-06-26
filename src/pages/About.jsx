import React from "react";
import aboutHero from "../assets/about-hero.jpg"
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section>
      <div
        className="bg-cover bg-center h-[400px] w-full flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold py-4">
          Don't squeeze in a sedan when you could relax in a van.
        </h1>
        <div className="px-10 lg:px-32 py-8 font-light">
          <p className="text-center pb-6">
            Our mission is to enliven your road trip with the perfect travel van
            rental. 
            <br />
            Our vans are recertified before each trip to ensure your travel
            plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="text-center">
            Our team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>
        </div>
      </div>
      <div className="text-start p-10">
        <div className="bg-[#FFCC8D] w-2/3 md:w-1/3 mx-auto p-4 rounded-xl">
          <p className="text-lg mb-4 font-bold">
            Your destination is waiting.
            <br />
            Your van is ready.
          </p>
          <Link to="/vans">
            <button className="bg-black hover:underline text-white font-bold py-3 px-6 rounded-md">
              Explore our vans
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
