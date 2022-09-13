import React from 'react'
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { GrGooglePlus, GrInstagram } from "react-icons/gr";

const Footer = () => {
    const d = new Date()
    let year = d.getFullYear()
  return (
    <footer className="bg-gray-700 block ">
      <div className="block lg:flex justify-center text-lg lg:text-2xl capitalize font-mono text-white text-center">
        <span className="p-2 lg:p-8 w-auto">UI design</span>
        <span className="p-2 lg:p-8 w-auto">Windows/macos apps</span>
        <span className="p-2 lg:p-8 w-auto">Android/ios apps</span>
        <span className="p-2 lg:p-8 w-auto">cloud solutions</span>
        <span className="p-2 lg:p-8 w-auto">customer support</span>
      </div>

      <div className="flex justify-between">
        <div className="p-4 lg:p-8">
          <span> &#169; </span>
          <span className='min-w-96'>{year} Diene</span>
        </div>

        <div className="flex justify-evenly">
          <span className="p-4 lg:p-8 lg:text-xl">
            <Link to="/" className="hover:text-blue-500">
              {<TiSocialFacebook />}
            </Link>
          </span>
          <span className="p-4 lg:p-8 lg:text-xl">
            <Link to="/" className="hover:text-blue-500">
              {<TiSocialTwitter />}
            </Link>
          </span>
          <span className="p-4 lg:p-8 lg:text-xl">
            <Link to="/" className="hover:text-blue-500">
              {<GrGooglePlus />}
            </Link>
          </span>
          <span className="p-4 lg:p-8 lg:text-xl">
            <Link to="/" className="hover:text-blue-500">
              {<GrInstagram />}
            </Link>
          </span>
        </div>

        <div className="p-4 capitalize lg:p-8">
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer
