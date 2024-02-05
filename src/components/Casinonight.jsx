import React from "react";
import casin from "../assets/images/casinonight (1).webp"

const Casinonight = () => {
  return (
    <div id="casn" className="lg:pt-[304px] md:py-20 sm:py-16 overflow-x-clip py-12 max-md:bg-white lg:pb-[324px] ">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="flex flex-wrap -mx-3 items-center sm:flex-row flex-col-reverse">
          <div className="sm:w-1/2 w-full px-3"data-aos="fade-right">
            <h2 className=" font-anton font-medium max-sm:pt-4 sm:text-start text-center max-sm:mx-auto md:text-5xl sm:text-4xl text-3xl text-[#00141B] sm:leading-[57.6px] leading-9">
              Por qué elegirnos
            </h2>
            <p
              className="font-inter font-medium sm:text-start text-center max-sm:mx-auto sm:text-base text-sm text-[#00141B] leading-[
25.6px] max-w-[526px] md:pt-4 pt-2"
            >
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              todo lo invertido en fichas en la moneda que elijas. En Exclusive
              Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              interactivos que más pide la gente. Con Exclusive Games empezás a
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
             <div className="flex sm:justify-start justify-center">
               <button className="bg-green-blue hover:after:hidden hover:text-white duration-300 text-black font-inter font-bold text-base py-[13px] px-[46px] rounded-full relative after:absolute after:content-[url(./assets/images/btn1.webp)] after:left-[-5%] after:bottom-[-28%] md:mt-6 sm:mt-4 mt-2">
                         Aprende más
                         </button>
             </div>
          </div>
          <div className="sm:w-1/2 w-full px-3 justify-center flex" data-aos="fade-left">
                <img src={casin} alt="in" className="rounded-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casinonight;
