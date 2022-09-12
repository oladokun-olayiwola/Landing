import React from "react";
import Logo from "../images/images.png";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="sticky">
      <div>
        {" "}
        <img src={Logo} alt="D" className="h-32" />
      </div>
      <div className="flex justify-end absolute top-0 right-0 ">
        <ul className="text-black-800 text-xl flex justify-end ">
          <li className="p-16"><Link to="./#header" className="active:text-blue-500" smooth>Home </Link></li>
          <li className="p-16"><Link to="./#service" className="active:text-blue-500" smooth> Services </Link></li>
          <li className="p-16"><Link to="./#project" className="active:text-blue-500" smooth>Projects </Link></li>
          <li className="p-16"><Link to="./#contact" className="active:text-blue-500" smooth>Contacts</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
