import React from "react";

function Hero() {
  return (
    <section className="bg-[url('./images/hero.png')] bg-center h-[80vh] bg-no-repeat bg-cover w-full flex items-center justify-center px-5">
      <div className="text-center space-y-4 bg-white/60 p-20 rounded">
        <h1 className="text-4xl md:text-5xl font-medium font-playFont">
          Best food for your taste
        </h1>
        <p className="text-lg">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-40 lg:w-60 mx-auto h-12 md:h-16 bg-red-800 text-white rounded-full">
            Book a Table
          </button>
          <button className="w-full sm:w-40 lg:w-60 mx-auto h-12 md:h-16 border border-zinc-900 rounded-full hover:bg-red-800 hover:text-white hover:border-none duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
