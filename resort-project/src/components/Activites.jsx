import home from "../assets/a1.jpg";

const Activites = () => {
  return (
    <div className="max-w[1140px] mx-auto md:flex mt-[-75px]">
      <div className="relative p-4 group">
        <h3 className="absolute z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Resorts
        </h3>
        <img
          src={home}
          alt=""
          className="w-full h-full object-cover relative border-4 border-white shadow-lg transform transition-transform"
        />
      </div>
      <div className="relative p-4 group">
        <h3 className="absolute z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Travelling
        </h3>
        <img
          src={home}
          alt=""
          className="w-full h-full object-cover relative border-4 border-white shadow-lg transform transition-transform"
        />
      </div>
      <div className="relative p-4 group">
        <h3 className="absolute z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Funs
        </h3>
        <img
          src={home}
          alt=""
          className="w-full h-full object-cover relative border-4 border-white shadow-lg transform transition-transform"
        />
      </div>
    </div>
  );
};

export default Activites;
