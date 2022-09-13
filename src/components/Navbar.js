import React, {useState} from "react";
import Logo from "../images/images.png";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="relative">
      <div>
        {" "}
        <img src={Logo} alt="D" className="h-32" />
      </div>
      <div className="border-gray-200 shadow-xl w-64 top-20 md:flex md:justify-end md:absolute md:top-0 right-0 ">
        <ul className="text-black-800 text-xl flex justify-end ">
          <li className="p-16">
            <Link to="./#header" className="active:text-blue-500" smooth>
              Home{" "}
            </Link>
          </li>
          <li className="p-16">
            <Link to="./#service" className="active:text-blue-500" smooth>
              {" "}
              Services{" "}
            </Link>
          </li>
          <li className="p-16">
            <Link to="./#project" className="active:text-blue-500" smooth>
              Projects{" "}
            </Link>
          </li>
          <li className="p-16">
            <Link to="./#contact" className="active:text-blue-500" smooth>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Nav =() => {
    const [navbar, setNavbar] = useState(false);

    return (
      <nav className="w-full sticky">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <img src={Logo} alt="D" className="h-32" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 bg-black text-black rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black hover:text-blue-300">
                  <Link to="./#header" className="active:text-blue-500" smooth>
                    Home{" "}
                  </Link>
                </li>
                <li className="text-black hover:text-blue-300">
                  <Link to="./#service" className="active:text-blue-500" smooth>
                    {" "}
                    Services{" "}
                  </Link>
                </li>
                <li className="text-black hover:text-blue-300">
                  <Link to="./#project" className="active:text-blue-500" smooth>
                    Projects{" "}
                  </Link>
                </li>
                <li className="text-black hover:text-blue-300">
                  <Link to="./#contact" className="active:text-blue-500" smooth>
                    Contacts
                  </Link>
                </li>
              </ul>
              </div>
             </div>
        </div>
      </nav>
    );
};

export default Nav;
