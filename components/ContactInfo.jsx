import React from "react";

function ContactInfo() {
  return (
    <section className="max-w-screen-md mx-auto my-24 px-10 lg:px-0">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Call Us:</h3>
          <h4 className="text-xl font-bold text-red-900">+1-234-567-8900</h4>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Hours:</h3>
          <span className="font-normal text-lg block">
            Mon-Fri: 11am - 8pm <br />
            Sat, Sun: 9am - 10pm
          </span>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Our Location:</h3>
          <address className="font-normal text-lg">
            123 Bridge Street Nowhere Land, LA 12345 United States
          </address>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
