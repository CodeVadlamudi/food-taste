import React, { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { headerLinks, icons } from "../data/HeaderData";
import { NavLink } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      {/* Header Top */}
      <div className="bg-zinc-800 text-neutral-100 px-5 py-2.5">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5" />
              <h6 className="text-sm font-normal hidden md:block">
                (+91) 12345 67890
              </h6>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-5 h-5" />
              <h6 className="text-sm font-normal hidden md:block">
                example@gmail.com
              </h6>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {icons.map((index) => (
              <div
                key={index.id}
                className="flex items-center w-8 h-8 bg-zinc-700 rounded-full justify-center cursor-pointer hover:bg-zinc-600">
                <img
                  src={index.tImg}
                  alt={index.tAlt}
                  className="w-4 h-4 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header Navigation Bar */}
      <div className="bg-white px-5 py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <NavLink to="/" className="w-40 block">
            <img
              src="./images/logo.png"
              alt="Logo Image"
              className="w-full h-full object-contain"
            />
          </NavLink>

          <nav
            className={`absolute top-[118px] p-8 flex flex-col bg-white left-0 w-full space-y-4 duration-300 md:relative md:top-0 md:p-0 md:flex-row md:w-auto md:space-y-0 md:space-x-6 z-10 border-t md:border-t-0 md:items-end ${
              toggle ? "left-0" : "left-[-100%] md:left-0"
            }`}>
            {headerLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-800 text-lg font-medium"
                    : "text-black text-lg font-medium duration-200 hover:text-red-800"
                }>
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/book"
              className="border border-zinc-900 rounded-full w-36 h-12 hover:bg-zinc-800 hover:text-white duration-300 items-center justify-center flex md:hidden">
              Book a Table
            </NavLink>
          </nav>

          <NavLink
            to="/book"
            className="border border-zinc-900 rounded-full w-36 h-12 hover:bg-zinc-800 hover:text-white duration-300 hidden lg:flex items-center justify-center">
            Book a Table
          </NavLink>

          <button onClick={() => setToggle(!toggle)} className="md:hidden">
            {toggle ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
