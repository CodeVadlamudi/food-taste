import React from "react";

function AboutFeature() {
  const iconFeature = [
    {
      id: 1,
      iImg: "./images/i1.png",
      iAlt: "Icon Image",
      iHeading: "Multi Cuisine",
      iDesc:
        "In the new era of technology we look in the future with certainty life.",
    },
    {
      id: 2,
      iImg: "./images/i2.png",
      iAlt: "Icon Image",
      iHeading: "Easy To Order",
      iDesc:
        "In the new era of technology we look in the future with certainty life.",
    },
    {
      id: 3,
      iImg: "./images/i3.png",
      iAlt: "Icon Image",
      iHeading: "Fast Delivery",
      iDesc:
        "In the new era of technology we look in the future with certainty life.",
    },
  ];
  return (
    <section className="my-24 px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-sm">
          {iconFeature.map((icon) => (
            <div
              key={icon.id}
              className="flex items-start space-x-5 hover:bg-zinc-100 p-5">
              <img
                src={icon.iImg}
                alt={icon.iAlt}
                className="w-12 h-12 object-contain"
              />
              <div className="space-y-2">
                <h3 className="font-bold text-xl">{icon.iHeading}</h3>
                <p>{icon.iDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutFeature;
