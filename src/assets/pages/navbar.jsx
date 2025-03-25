import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 md:left-56 w-full md:w-[calc(100%-14rem)] h-16 bg-gray-800 flex items-center justify-center shadow-md transition-all duration-300">
      <h1 className="text-white text-lg md:text-2xl font-semibold text-center">
        Student Management System
      </h1>
    </nav>
  );
}

export default Navbar;
