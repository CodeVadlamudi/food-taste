import React from "react";
import { blogCard } from "../data/BlogData";

function Blog() {
  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-5 md:px-10 bg-zinc-100">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <div className="flex items-center flex-col space-y-4 md:flex-row md:space-y-0 justify-between">
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl font-playFont">
            Our Blog & Articles
          </h2>
          <button className="bg-red-900 text-white h-14 w-52 rounded-full hover:bg-white hover:border hover:border-black hover:text-red-900">
            Read All Articles
          </button>
        </div>

        <div className="grid grid-cols-1 md:w-10/12 md:mx-auto lg:grid-cols-2 lg:w-full gap-5 lg:h-[740px]">
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <img src="./images/b1.png" alt="Image" className="w-full" />
            <div className="p-8 space-y-4">
              <h3 className="text-zinc-500 text-lg font-medium">
                January 3, 2023
              </h3>
              <h4 className="text-xl">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {blogCard.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-md overflow-hidden shadow-md">
                <img
                  src={card.bImg}
                  alt={card.bAlt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-2">
                  <h3 className="text-lg text-zinc-500 font-medium">
                    {card.bDate}
                  </h3>
                  <p className="text-xl">{card.bDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
