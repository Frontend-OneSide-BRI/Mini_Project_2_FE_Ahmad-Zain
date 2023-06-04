import React from "react";

import Navbar from "./Navbar";

const Layout = ({ children, menuHome, menuGallery }) => {
  return (
    <div className="z-0 w-full h-screen flex flex-col overflow-auto">
      <Navbar menuHome={menuHome} menuGallery={menuGallery} />
      {children}
    </div>
  );
};

export default Layout;
