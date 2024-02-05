import React, { useState } from "react";
import logo from "../assets/images/logo.webp";

const Mynav = () => {
  const [show, setshow] = useState(true);
  function nav() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }

  return (
    <div className="bg-[#FFFFFF1A]">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="flex items-center  py-6 justify-between">
          <div className="flex items-center justify-between">
            <a href="">
              <img src={logo} alt="" />
            </a>
            <ul
              className={`gap-7 flex items-center mobileView lg:pl-[101px] ${
                show ? "right-[-100%]" : "right-0"
              }`}
            >
              <li>
                <a
                  href=""
                  className=" font-inter font-medium navhover text-white text-base leading-[25.6px]"
                >
                  Hogar
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-inter font-medium navhover text-white text-base leading-[25.6px]"
                >
                  Misión
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-inter font-medium navhover text-white text-base leading-[25.6px]"
                >
                  Tragamonedas
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-inter font-medium text-white  navhover text-base leading-[25.6px]"
                >
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-inter font-medium navhover text-white text-base leading-[25.6px]"
                >
                  Ofertas
                </a>
              </li>
              <li>
                {" "}
                <button className="py-3 px-[46px] bg-transparent sm:hidden hover:bg-white hover:text-black duration-300  block border border-solid border-white after:content-[url(./assets/images/white-btn.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-white font-inter font-bold">
                  Acceso
                </button>
              </li>
            </ul>
          </div>
          <div>
            <button className="py-3 px-[46px] bg-transparent hover:bg-white hover:text-black duration-300 sm:block hidden border border-solid border-white after:content-[url(./assets/images/white-btn.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-white font-inter font-bold">
              Acceso
            </button>
          </div>
          <label className=" lg:hidden" onClick={nav}>
            {show ? (
              <div className="z-20 relative">
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Mynav;
