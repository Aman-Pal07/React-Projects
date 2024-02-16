import React from "react";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] mx-auto w-full px-4 py-16">
      <h2 className="text-center text-white transition-colors duration-300 hover:text-blue-500">
        Gallery
      </h2>
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg ">
          <img
            src={g1}
            alt=""
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
          opacity-0 transition-opacity hover:opacity-100"
          >
            <h3 className="text-white text-lg font-semibold">Beach Scene</h3>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg ">
          <img
            src={g2}
            alt=""
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
          opacity-0 transition-opacity hover:opacity-100"
          >
            <h3 className="text-white text-lg font-semibold">Beach Scene</h3>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg ">
          <img
            src={g3}
            alt=""
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
          opacity-0 transition-opacity hover:opacity-100"
          >
            <h3 className="text-white text-lg font-semibold">Beach Scene</h3>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg ">
          <img
            src={g4}
            alt=""
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
          opacity-0 transition-opacity hover:opacity-100"
          >
            <h3 className="text-white text-lg font-semibold">Beach Scene</h3>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg ">
          <img
            src={g5}
            alt=""
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
          opacity-0 transition-opacity hover:opacity-100"
          >
            <h3 className="text-white text-lg font-semibold">Beach Scene</h3>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg ">
          <img
            src={g6}
            alt=""
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
          opacity-0 transition-opacity hover:opacity-100"
          >
            <h3 className="text-white text-lg font-semibold">Beach Scene</h3>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg ">
          <img
            src={g7}
            alt=""
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
          opacity-0 transition-opacity hover:opacity-100"
          >
            <h3 className="text-white text-lg font-semibold">Beach Scene</h3>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg ">
          <img
            src={g8}
            alt=""
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50
          opacity-0 transition-opacity hover:opacity-100"
          >
            <h3 className="text-white text-lg font-semibold">Beach Scene</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
