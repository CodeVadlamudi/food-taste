import React from "react";

function MenuHero() {
  return (
    <section className="my-24 px-10">
      <div className="max-w-screen-lg mx-auto text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playFont">
          Our Menu
        </h1>
        <p className="text-lg">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <button className="bg-red-900 w-full h-10 rounded-full text-white">
            All
          </button>
          <button className="hover:bg-red-900 w-full h-10 rounded-full hover:text-white border">
            Breakfast
          </button>
          <button className="hover:bg-red-900 w-full h-10 rounded-full hover:text-white border">
            Main Dishes
          </button>
          <button className="hover:bg-red-900 w-full h-10 rounded-full hover:text-white border">
            Drinks
          </button>
          <button className="hover:bg-red-900 w-full h-10 rounded-full hover:text-white border">
            Desserts
          </button>
        </div>
      </div>
    </section>
  );
}

export default MenuHero;
