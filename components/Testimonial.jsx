import React from "react";
import { testimonialCard } from "../data/TestimonialData";

function Testimonial() {
  return (
    <section className="my-10 sm:my-14 md:my-16 lg:my-24 px-5 md:px-10">
      <div className="max-w-screen-xl mx-auto space-y-5">
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-center font-playFont">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonialCard.map((card) => (
            <div
              key={card.id}
              className="p-8 bg-zinc-100 hover:bg-white border duration-200 shadow-sm rounded-md space-y-4">
              <h3 className="font-bold text-2xl text-red-900">
                "{card.tHeading}"
              </h3>
              <p className="text-lg">{card.tDesc}</p>
              <div className="flex items-center space-x-6 border-t pt-4">
                <img
                  src={card.tImg}
                  alt={card.tAlt}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold text-base">{card.tName}</h3>
                  <h6 className="text-base">{card.tPlace}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
