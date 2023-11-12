import React from "react";

function Form() {
  return (
    <form className="px-5 sm:px-10 py-24">
      <div className="max-w-screen-md mx-auto bg-white p-10 rounded-lg drop-shadow-lg">
        <div className="flex flex-col md:flex-row w-full gap-5">
          <div className="flex flex-col flex-1 space-y-1">
            <label htmlFor="date" className="font-bold text-base">
              Date
            </label>
            <input
              type="date"
              name="Date"
              id="date"
              autoComplete="off"
              className="border h-14 px-4 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-1">
            <label htmlFor="time" className="font-bold text-base">
              Time
            </label>
            <input
              type="time"
              name="Time"
              id="time"
              autoComplete="off"
              className="border h-14 px-4 rounded-md outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-5 my-5">
          <div className="flex flex-col flex-1 space-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="Name"
              id="name"
              autoComplete="off"
              placeholder="Enter your name"
              className="border h-14 px-4 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-1">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="Phone"
              id="phone"
              autoComplete="off"
              placeholder="Enter your phone number"
              className="border h-14 px-4 rounded-md outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="totalPerson">Total Person</label>
          <select
            name="Total Person"
            id="totalPerson"
            className="border h-14 px-4 rounded-md outline-none appearance-none">
            <option value="select person">-- Select person --</option>
            <option value="1 Person">1 Person</option>
            <option value="2 Persons">2 Persons</option>
            <option value="3 Persons">3 Persons</option>
          </select>
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

export default Form;
