import React from "react";

function Valueable() {
  const valueCard = [
    { id: 1, vHeading: "3", vText: "Locations" },
    { id: 2, vHeading: "1995", vText: "Founded" },
    { id: 3, vHeading: "65+", vText: "Staff Members" },
    { id: 4, vHeading: "100%", vText: "Satisfied Customers" },
  ];
  return (
    <section className="py-24 px-10 bg-zinc-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:w-10/12 lg:w-full md:mx-auto grid-cols-1 lg:grid-cols-2 lg:h-[520px] gap-10 items-center">
          <div className="space-y-5">
            <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl font-playFont">
              A little information for our valuable guest
            </h2>
            <p className="text-base">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {valueCard.map((card) => (
                <div
                  key={card.id}
                  className="p-5 border text-center bg-white rounded space-y-2">
                  <h2 className="text-4xl font-medium font-playFont">
                    {card.vHeading}
                  </h2>
                  <h3 className="font-medium text-lg">{card.vText}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[520px] rounded overflow-hidden">
            <img
              src="./images/value-img.png"
              alt="Image"
              className="h-full w-full object-cover hover:scale-105 duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valueable;
