import React from "react";

function ContactForm() {
  return (
    <form className="px-5 sm:px-10 my-24">
      <div className="max-w-screen-md mx-auto bg-white p-10 rounded-lg drop-shadow-lg shadow">
        <div className="flex flex-col md:flex-row w-full gap-5">
          <div className="flex flex-col flex-1 space-y-1">
            <label htmlFor="name" className="font-bold text-base">
              Name
            </label>
            <input
              type="text"
              name="Name"
              id="name"
              autoComplete="off"
              placeholder="Enter your name"
              className="border h-14 px-4 rounded-md"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-1">
            <label htmlFor="email" className="font-bold text-base">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="email"
              autoComplete="off"
              placeholder="Enter email address"
              className="border h-14 px-4 rounded-md outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 space-y-1 my-5">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            placeholder="Write a subject"
            name="Subject"
            id="subject"
            autoComplete="off"
            className="border h-14 px-4 rounded-md outline-none"
          />
        </div>

        <div className="flex flex-col flex-1 space-y-1">
          <label htmlFor="message">Message</label>
          <textarea
            name="Message"
            id="message"
            cols="130"
            rows="5"
            placeholder="Write your message"
            className="border p-4 rounded-md outline-none resize-none"
          />
        </div>

        <button
          type="buttom"
          className="mt-5 h-14 w-full bg-red-900 text-white text-lg rounded-md hover:bg-red-800">
          Book A Table
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
