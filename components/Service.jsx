import React from "react";

function Service() {
  const serviceCard = [
    {
      id: 1,
      sImg: "./images/s1.png",
      sAlt: "Caterings Image",
      sHeading: "Caterings",
      sDesc:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 2,
      sImg: "./images/s2.png",
      sAlt: "Birthdays Image",
      sHeading: "Birthdays",
      sDesc:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 3,
      sImg: "./images/s3.jpeg",
      sAlt: "Events Image",
      sHeading: "Events",
      sDesc:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 4,
      sImg: "./images/s4.png",
      sAlt: "Weddings Image",
      sHeading: "Wedding",
      sDesc:
        "In the new era of technology we look in the future with certainty for life.",
    },
  ];
  return (
    <section className="my-24 px-5 sm:px-10">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl font-playFont">
          We also offer unique <br />
          services for your events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 sm:gap-x-5">
          {serviceCard.map((card) => (
            <div key={card.id} className="w-full space-y-4">
              <div className="h-96 overflow-hidden rounded-md">
                <img
                  src={card.sImg}
                  alt={card.sAlt}
                  className="w-full h-full object-cover hover:scale-105 duration-300"
                />
              </div>
              <h3 className="font-bold text-2xl">{card.sHeading}</h3>
              <p>{card.sDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
