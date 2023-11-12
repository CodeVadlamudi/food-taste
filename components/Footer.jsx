import React from "react";
import { icons } from "../data/HeaderData";

function Footer() {
  return (
    <footer className="py-10 sm:py-14 md:py-16 lg:py-24 px-10 bg-zinc-800">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-4 text-zinc-200 gap-10">
          {/* Footer Col - 1 */}
          <div className="space-y-4 col-span-4 md:col-span-2 lg:col-span-1">
            <a href="/" className="w-52 h-14 block">
              <img
                src="./images/footer-logo.png"
                alt="Footer Logo Image"
                className="w-full h-full object-contain"
              />
            </a>
            <p>
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
            <div className="flex items-center space-x-2">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className="flex items-center w-10 h-10 bg-red-900 rounded-full justify-center cursor-pointer hover:bg-zinc-600">
                  <img
                    src={icon.tImg}
                    alt={icon.tAlt}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Col - 2 */}
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <h3 className="font-bold text-xl underline">Pages</h3>
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Home
              </a>
              <a href="/about" className="hover:text-red-500 text-base sm:text-lg">
                About
              </a>
              <a href="/about" className="hover:text-red-500 text-base sm:text-lg">
                Menu
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Pricing
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Blog
              </a>
              <a href="/contact" className="hover:text-red-500 text-base sm:text-lg">
                Contact
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Delivery
              </a>
            </div>
          </div>

          {/* Footer Col - 3 */}
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <h3 className="font-bold text-xl underline">Utility Pages</h3>
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Start Here
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Style guide
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Password Protected
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                404 Not Found
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Licenses
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                Change log
              </a>
              <a href="/" className="hover:text-red-500 text-base sm:text-lg">
                View More
              </a>
            </div>
          </div>

          {/* Footer Col - 4 */}
          <div className="space-y-4 col-span-4 md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-xl underline">Follow Us On Instagram</h3>
            <div className="grid grid-cols-2 gap-2">
                <img src="./images/u1.png" alt="Image" className="w-full h-full object-cover rounded"/>
                <img src="./images/u2.png" alt="Image" className="w-full h-full object-cover rounded"/>
                <img src="./images/u3.png" alt="Image" className="w-full h-full object-cover rounded"/>
                <img src="./images/u4.png" alt="Image" className="w-full h-full object-cover rounded"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
