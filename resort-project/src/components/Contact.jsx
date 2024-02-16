import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1140px] mx-auto w-full p-4 py-16" id="contact">
      <h2 className="text-center text-white p-4 transition-colors duration-300 hover:text-blue-500">
        Contact Us
      </h2>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300  rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300  rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="border border-gray-300  rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Contact Infomation</h3>
          <p className="mb-2">
            <span className="font-semibold">Address:</span> 123 Main Street,
            city, country
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +11232323232,
          </p>
          <p className="mb-2">
            <span className="font-semibold">Emai:</span> info@email.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
