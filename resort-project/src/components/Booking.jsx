import React from "react";

const Booking = () => {
  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="destination" className="font-semibold mb-2">
            Destination
          </label>
          <select id="destination" className=" border rounded-md py-2 px-3">
            <option>Grand Antigua</option>
            <option>Key West</option>
            <option>Maldives </option>
            <option>Cozumel</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="check-in" className="font-semibold mb-2">
            Check-In
          </label>
          <input
            type="date"
            id="check-in"
            className="border rounded-md py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="check-out" className="font-semibold mb-2">
            Check-Out
          </label>
          <input
            type="date"
            id="check-in"
            className="border rounded-md py-2 px-3"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default Booking;
