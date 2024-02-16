import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <img
        src={hero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
      />
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <div className="text-white">
          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
            Welcome to Haven
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl italic mb-8">
            - Your Escape to Serenity
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto mb-12">
            Immerse yourself in luxury and tranquility , where evert detail is
            crafted to create unforgettable experiences. Welcome to our resort!
          </p>
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg md:text-xl lg:text-2xl transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
