import React from "react";
import { Tick } from "../assets/svg/icon";
import bar from "../assets/images/barseven.webp";

const Platinum = () => {
  return (
    <div className="md:pt-16 lg:pb-[150px] md:pb-16 sm:py-12 py-10 relative z-[1] overflow-x-clip">
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className="border-[0.5px] md:pl-[50px] sm:px-8 px-5 md:pr-10 lg:py-20 md:py-16 sm:py-10 py-8 bg-boxgraient border-[#FFFFFF80] rounded-[16px]">
          <div className="flex sm:flex-row flex-col-reverse flex-wrap -mx-3 items-center">
            <div className="sm:w-1/2 w-full px-3" data-aos="fade-right">
              <h2
                className="leading-[
41.6px] text-white lg:text-[32px] sm:text-start max-sm:pt-4 text-center md:text-3xl text-2xl font-anton font-normal"
              >
                Platinum
              </h2>
              <p
                className="text-white sm:text-base text-sm max-sm:mx-auto sm:text-start text-center font-medium font-inter leading-[
25.6px] lg:pt-4 md:pt-3 sm:pt-2 pt-1 max-w-[364px]"
              >
                Diseño totalmente personalizado. Contáctanos para un
                presupuesto.
              </p>
              <h2
                className="font-anton text-white leading-[
57.6px] font-normal md:text-5xl sm:text-4xl sm:text-start text-center text-3xl lg:pt-8 md:pt-6 sm:pt-4 pt-2"
              >
                Consultar precio
              </h2>
              <div className="flex items-center lg:pt-4 md:pt-3 sm:pt-2 pt-1 sm:justify-start justify-center">
                <Tick />
                <p className="font-inter pl-2 font-medium text-base text-white leading-[25.6px]">
                  Personalizable
                </p>
              </div>
              <div className="flex sm:justify-start justify-center">
                <button className="py-3 px-[46px] hover:bg-white hover:text-black duration-300  bg-transparent border border-solid lg:mt-10 md:mt-8 sm:md-6 mt-4 border-white after:content-[url(./assets/images/white-btn.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-white font-inter font-bold">
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className="sm:w-1/2 w-full px-3 relative z-[1]" data-aos="fade-left">
              <img src={bar} alt="bar" className="w-full" />
              <div className="w-[162px] h-[162px]  blur-[50px] absolute top-[5%] right-[15%] z-[-1] bg-ellips"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[484px] h-[484px] opacity-[50%] blur-[179px] absolute top-0 left-[-20%] z-[-1] bg-ellips"></div>
      <div className="w-[484px] h-[484px] opacity-[50%] blur-[179px] absolute bottom-[-20%] right-[-30%] z-[-1] bg-ellips"></div>
    </div>
  );
};

export default Platinum;
