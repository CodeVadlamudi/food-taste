import React from "react";

function Brands() {
  const brandImgs = [
    { id: 1, bImg: "./images/uber-eat.png", bAlt: "Brand Image" },
    { id: 2, bImg: "./images/grubhub.png", bAlt: "Brand Image" },
    { id: 3, bImg: "./images/postmates.png", bAlt: "Brand Image" },
    { id: 4, bImg: "./images/doordash.png", bAlt: "Brand Image" },
    { id: 5, bImg: "./images/foodpanda.png", bAlt: "Brand Image" },
    { id: 6, bImg: "./images/deliveroo.png", bAlt: "Brand Image" },
    { id: 7, bImg: "./images/instacart.png", bAlt: "Brand Image" },
    { id: 8, bImg: "./images/justeat.png", bAlt: "Brand Image" },
    { id: 9, bImg: "./images/didifood.png", bAlt: "Brand Image" },
  ];
  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-10 bg-zinc-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h2 className="font-playFont text-3xl md:text-4xl font-medium">
              You can order through apps
            </h2>
            <p className="text-lg font-normal">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 col-span-2">
            {brandImgs.map((brand) => (
              <div
                className="bg-white w-full p-5 flex items-center justify-center rounded-lg drop-shadow-md"
                key={brand.id}>
                <img
                  src={brand.bImg}
                  alt={brand.bAlt}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
