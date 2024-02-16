import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold mb-4">
              Let's Keep in touch!
            </h4>
            <p className="text-lg mb-6">
              Find us on any of these platforms, we respond 1-2 business days.
            </p>
            <div className="flex">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none
            focus:outline-none mr-2"
              >
                <FaTwitter />
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none
            focus:outline-none mr-2"
              >
                <FaFacebookSquare />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none
            focus:outline-none mr-2"
              >
                <FaInstagram />
              </button>
              <button
                className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none
            focus:outline-none mr-2"
              >
                <FaDribbble />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <span className="block uppercase to-gray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-none">
                  <li>
                    <a
                      href="#footer"
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-none">
                  <li>
                    <a
                      href="#footer"
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      {" "}
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      {" "}
                      Terms & condition
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                    >
                      {" "}
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              Copyright <span id="get-current-year">2021</span> by Aman
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
