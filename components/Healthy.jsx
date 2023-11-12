import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function Healthy() {
  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-10 bg-zinc-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:w-10/12 lg:w-full md:mx-auto lg:grid-cols-2 lg:mx-0 items-center gap-10 lg:gap-20 xl:gap-32">
          <div className="h-[620px] relative">
            <img
              src="./images/about-img.png"
              alt="About Image"
              className="object-cover w-full rounded-xl h-[560px]"
            />
            <div className="text-white absolute bottom-0 -right-5 md:-right-10 bg-zinc-700 p-5 rounded-xl space-y-4">
              <h3 className="font-bold text-2xl">Come and visit us</h3>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span>(+91) 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5" />
                <span>happytummy@restaurant.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-5 h-5" />
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl font-playFont">
              We provide healthy food for your family.
            </h2>
            <p className="text-lg font-medium">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className="text-base font-normal">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <button className="w-40 h-14 border-2 border-black rounded-full hover:bg-black hover:text-white duration-200">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Healthy;
