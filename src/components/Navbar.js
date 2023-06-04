import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ menuHome, menuGallery }) => {
  if (menuHome == "on") {
    menuHome = "text-white bg-gray-700 hover:cursor-default";
  } else {
    menuHome = "hover:bg-gray-300";
  }

  if (menuGallery == "on") {
    menuGallery = "text-white bg-gray-700 hover:cursor-default";
  } else {
    menuGallery = "hover:bg-gray-300";
  }

  return (
    <div className="w-full flex items-baseline justify-between px-8 bg-gray-200">
      <p className="font-bold text-2xl">
        tricky<span className="font-normal">images</span>
      </p>
      <div className="flex gap-6 font-semibold">
        <Link to="/" className={`p-2 ${menuHome}`}>
          <span>Home</span>
        </Link>
        <Link to="/gallery" className={`p-2 ${menuGallery}`}>
          <span>Gallery</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
