import React from "react";
import { cardData } from "../data/CardData";

function Cards() {
  return (
    <section className="px-10 my-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardData.map((card) => (
            <div key={card.id} className="border rounded-lg overflow-hidden">
              <img
                src={card.cImg}
                alt={card.cAlt}
                className="w-full h-60 object-cover"
              />
              <div className="p-8 text-center space-y-2">
                <h3 className="font-bold text-2xl text-red-900">
                  {card.cDollar}
                </h3>
                <h3 className="font-bold text-2xl">{card.cHeading}</h3>
                <p className="text-zinc-800 text-lg">{card.cDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
