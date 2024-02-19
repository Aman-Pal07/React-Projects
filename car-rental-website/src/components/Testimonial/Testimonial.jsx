import React from "react";

const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <div className="py-24  text-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold font-serif">
            Testimonials
          </h2>
          <p className="text-sm sm:text-base">
            See what our clients have to say about us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={testimonial.aosDelay}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg">{testimonial.description}</p>
                <p className="mt-2 text-sm font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
