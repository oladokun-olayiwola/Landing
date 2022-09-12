import React from "react";
import first from "../images/new-1.jpg";
import second from "../images/new-2.jpg";
import third from "../images/new-3.jpg";
import { BsDashLg } from "react-icons/bs";
import { useState, useEffect } from "react";

const Header = () => {
  const [image, setImage] = useState(first);
  const changeImage = () => {
    if (image === first) return setImage(second);
    else if (image === second) return setImage(third);
    setImage(first);
  };
  useEffect(() => {
    let timer = setTimeout(() => changeImage(), 3000);
    return () => clearTimeout(timer)
  }, [image]);
  return (
    <div id="header">
      <div className="relative ">
        <img src={image} alt="Carousel" className="w-full h-screen" />
        <div className="absolute right-3 bottom-12 flex flex-col">
          <button type="button">
            <BsDashLg
              className=" text-4xl -mb-4 text-white hover:text-blue-500 active:text-blue-500"
              onClick={() => setImage(first)}
            />
          </button>
          <button type="button">
            <BsDashLg
              className=" text-4xl -mb-4 text-white hover:text-blue-500 active:text-blue-500"
              onClick={() => setImage(second)}
            />
          </button>
          <button type="button">
            <BsDashLg
              className=" text-4xl -mb-4 text-white hover:text-blue-500 active:text-blue-500"
              onClick={() => setImage(third)}
            />
          </button>
        </div>
        <div className="absolute m-auto left-1/4 top-1/3 right-1/4">
          <h2 className="text-5xl text-center font-bold uppercase">Award-Winning software</h2>
          <p className="text-xl font-semibold font-poppins font-gray-300 text-center">
            The software developed by our company have been numerously awarded
            for usability and innovative fetures
          </p>
          <button
            type="button"
            className="bg-blue-400 w-48 h-14 ml-3/4 font-semibold text-md text-white uppercase font-roboto mt-8 transition-colors duration-700 ease-in hover:bg-black active:color:blue"
          >
            Get info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;