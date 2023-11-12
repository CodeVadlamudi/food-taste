import React from "react";
import { pageCard } from "../data/PageData";

function PageCards() {
  return (
    <section className="my-24 px-10 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {pageCard.map((card) => (
          <div
            key={card.id}
            className="rounded overflow-hidden bg-zinc-100 hover:bg-white drop-shadow">
            <img
              src={card.pImg}
              alt={card.pAlt}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 space-y-2">
              <h3 className="font-bold">{card.pDate}</h3>
              <p>{card.pDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PageCards;
