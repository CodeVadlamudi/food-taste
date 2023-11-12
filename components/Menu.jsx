import React from "react";

function Menu() {
  const menuCard = [
    {
      id: 1,
      mImg: "./images/m1.png",
      mHeading: "Breakfast",
      mDesc:
        "In the new era of technology we look in the future with certainty and pride for our life.",
      mBtn: "Explore Menu",
    },
    {
      id: 2,
      mImg: "./images/m2.png",
      mHeading: "Main Dishes",
      mDesc:
        "In the new era of technology we look in the future with certainty and pride for our life.",
      mBtn: "Explore Menu",
    },
    {
      id: 3,
      mImg: "./images/m3.png",
      mHeading: "Drinks",
      mDesc:
        "In the new era of technology we look in the future with certainty and pride for our life.",
      mBtn: "Explore Menu",
    },
    {
      id: 4,
      mImg: "./images/m4.png",
      mHeading: "Desserts",
      mDesc:
        "In the new era of technology we look in the future with certainty and pride for our life.",
      mBtn: "Explore Menu",
    },
  ];
  return (
    <section className="my-10 sm:my-14 md:my-16 lg:my-24 px-5 sm:px-10">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <h2 className="text-center text-3xl font-medium lg:text-4xl font-playFont">
          Browse Our Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {menuCard.map((card) => (
            <div
              key={card.id}
              className="p-8 sm:p-10 border border-zinc-300 flex items-center justify-center flex-col space-y-4 rounded-xl shadow text-center hover:bg-red-900 group duration-300">
              <div className="w-20 h-20 bg-zinc-300 group-hover:bg-white rounded-full flex items-center justify-center p-5">
                <img src={card.mImg} alt="Image" className="object-contain" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl group-hover:text-white">
                {card.mHeading}
              </h3>
              <p className="font-normal text-base group-hover:text-white">
                {card.mDesc}
              </p>
              <button className="text-red-900 font-bold text-base group-hover:text-white hover:underline">
                {card.mBtn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
