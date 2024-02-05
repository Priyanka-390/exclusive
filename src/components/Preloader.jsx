import React from "react";
import logo from "../assets/images/logo.webp"

const Preloader = () => {
  return (
    <div className="bg-[#001418] flex justify-center flex-col items-center fixed top-0 left-0 right-0 bottom-0 h-full z-50">
          <img src={logo} alt="lo" className=" animate-bounce" />
           
    </div>
  );
};

export default Preloader;
