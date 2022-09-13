import React from 'react'
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { GrGooglePlus, GrInstagram } from "react-icons/gr";

const Footer = () => {
    const d = new Date()
    let year = d.getFullYear()
  return (
    <footer className="bg-gray-700 block ">
      <div className="block md:flex justify-center text-lg md:text-2xl capitalize font-mono text-white text-center">
        <span className="p-8 border-r-4-black ">UI design</span>
        <span className="p-8">windows/mac os apps</span>
        <span className="p-8">android/ios apps</span>
        <span className="p-8">cloud solutions</span>
        <span className="p-8">customer support</span>
      </div>

      <div className="flex justify-between">
        <div className="p-8">
          <span> &#169; </span>
          <span>{year} Diene</span>
        </div>

        <div className="flex justify-evenly">
          <span className="p-8 text-xl">
            <Link to="/" className="hover:text-blue-500">
              {<TiSocialFacebook />}
            </Link>
          </span>
          <span className="p-8 text-xl">
            <Link to="/" className="hover:text-blue-500">
              {<TiSocialTwitter />}
            </Link>
          </span>
          <span className="p-8 text-xl">
            <Link to="/" className="hover:text-blue-500">
              {<GrGooglePlus />}
            </Link>
          </span>
          <span className="p-8 text-xl">
            <Link to="/" className="hover:text-blue-500">
              {<GrInstagram />}
            </Link>
          </span>
        </div>

        <div className=" capitalize p-8">
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer
