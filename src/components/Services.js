import React from "react";
import Content from "../images/service-first-half.png";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { TiUpload } from "react-icons/ti";

const Services = () => {
  return (
    <section id="service">
      <div className="block md:flex justify-evenly">
        <div className="p-12 h-screen md:-mb-24">
          <img src={Content} alt="Content" />
        </div>

        <div>
          <div className="block md:flex justify-evenly">
            <div className="border-2 border-gray-200 w-72 h-80 shadow-lg p-4 m-4 hover:shadow-xl">
              <span>
                <p className="text-3xl font-poppins pb-8 p-14 flex text-center capitalise font-semibold tracking-wide">
                  What We Offer{" "}
                </p>
                <div className="h-1 bg-gray-200 w-24 m-20 my-1"></div>
                <button
                  type="button"
                  className="bg-blue-400 w-48 h-14 font-semibold ml-8 text-md text-white uppercase font-roboto mt-8 transition-colors duration-700 ease-in hover:bg-black active:color:blue"
                >
                  view all services
                </button>
              </span>
            </div>

            <div className="border-2 border-gray-200 w-72 h-80 shadow-lg p-4 m-4 hover:shadow-xl">
              <span>
                <p className="flex justify-center text-4xl pt-6 pb-4">
                  <BsTelephoneOutbound />
                </p>
                <p className="text-xl uppercase font-roboto flex text-center p-5  ">
                  corporate solutions
                </p>
                <div className="h-1 bg-gray-200 w-24 m-20 my-4"></div>
                <p className="text-center font-semibold">
                  Need specific software for your company? We are ready to
                  develop it!
                </p>
              </span>
            </div>
          </div>

          <div className="block md:flex">
            {" "}
            <div className="border-2 border-gray-200 w-72 h-80 shadow-lg p-4 m-4 hover:shadow-xl">
              <span>
                <p className="flex justify-center text-5xl pt-6 pb-4">
                  <MdOutlineHeadsetMic />
                </p>
                <p className="text-xl uppercase font-roboto flex text-center p-5 ">
                  Call center solutions{" "}
                </p>
                <div className="h-1 bg-gray-200 w-24 m-20 my-4"></div>
                <p className="text-center font-semibold">
                  Our experts provide custom products of any complexity for call
                  centers.
                </p>
              </span>
            </div>
            <div className="border-2 border-gray-200 w-72 h-80 shadow-lg p-4 m-4 hover:shadow-xl">
              <span>
                <p className="flex justify-center text-5xl pt-6 pb-4">
                  <TiUpload />
                </p>
                <p className="text-xl uppercase font-roboto flex text-center p-5 ">
                  cloud development
                </p>
                <div className="h-1 bg-gray-200 w-24 m-20 my-4"></div>
                <p className="text-center font-semibold ">
                  We can also offer you reliable cloud development solutions.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/src/images/bg.jpg')] object-cover h-80 mb-4 flex flex-col text-right p-28 pt-16 max-w-full ">
        <h3 className=" text-2xl md:text-4xl font-bold text-white p-3 ">
          Let's develop your next great app!
        </h3>
        <p className="p-2 text-md md:text-lg text-white font-bold">
          Do you need a unique software solution for your company? We know how
          to help you!
        </p>
        <div>
          <button
            type="button"
            className="bg-blue-400 w-48 h-14 m-4 font-semibold ml-8 text-md text-white uppercase font-roboto mt-8 transition-colors duration-700 ease-in hover:bg-black "
          >
            GEt in touch
          </button>
          <button
            type="button"
            className="w-48 border-2 border-gray-100 h-14 font-semibold ml-8 text-md text-white uppercase font-roboto mt-8 transition-colors duration-700 ease-in hover:bg-black "
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
