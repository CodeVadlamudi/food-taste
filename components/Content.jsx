import React from "react";
import {
  ClockIcon,
  ReceiptPercentIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Content() {
  const contentFeatures = [
    { id: 1, cIcon: <ClockIcon />, cText: "Delivery within 30 minutes" },
    { id: 2, cIcon: <ReceiptPercentIcon />, cText: "Best Offer & Prices" },
    { id: 3, cIcon: <ShoppingCartIcon />, cText: "Online Services Available" },
  ];
  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-10 bg-zinc-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:w-10/12 lg:w-full md:mx-auto lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[600px]">
            <div className="row-span-2 rounded overflow-hidden">
              <img
                src="./images/c1.png"
                alt="Image"
                className="h-full w-full object-cover hover:scale-105 duration-300"
              />
            </div>
            <div className="rounded overflow-hidden">
              <img
                src="./images/c2.png"
                alt="Image"
                className="h-full w-full object-cover hover:scale-105 duration-300"
              />
            </div>
            <div className="rounded overflow-hidden">
              <img
                src="./images/c3.png"
                alt="Image"
                className="w-full h-full object-cover hover:scale-105 duration-300"
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-2">
              <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl font-playFont">
                Fastest Food Delivery in City
              </h2>
              <p className="text-lg">
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>
            </div>
            <div className="space-y-4">
              {contentFeatures.map((feature) => (
                <div key={feature.id} className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-red-900 p-1.5 rounded-full">
                    <span className="text-white">{feature.cIcon}</span>
                  </div>
                  <p className="text-lg font-medium">{feature.cText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
