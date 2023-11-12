import { PlayIcon } from "@heroicons/react/24/solid";
import React from "react";

function Authentic() {
  return (
    <section className="bg-[url('./images/bg.png')] h-[690px] bg-no-repeat bg-cover relative w-full">
      <div className="bg-gradient-to-r from-[#2C2F24]/80 to-[#2C2F24]/80 h-full w-full" />
      <div className="flex items-center flex-col justify-center absolute top-0 bottom-0 right-0 left-0 space-y-10">
        <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center cursor-pointer relative">
          <PlayIcon className="w-14 h-14 text-red-800" />
          <div className="absolute top-0 bottom-0 left-0 right-0 border-2 rounded-full animate-ping" />
        </div>
        <h2 className="text-3xl md:text-4xl text-center font-playFont text-white">
          Feel the authentic & <br />
          original taste from us
        </h2>
      </div>
    </section>
  );
}

export default Authentic;
