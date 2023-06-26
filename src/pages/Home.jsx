import React from "react";
import hero from "../assets/hero.jpeg"

export default function Home(){
    return(
        <section
        className="bg-cover bg-center h-[100vh] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1 className="text-4xl text-white font-bold mb-6 text-center">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-lg text-white mb-6 text-center">
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <button className="px-10 py-3 bg-orange-400 text-white">
          Find your vans
        </button>
      </section>
    )
}