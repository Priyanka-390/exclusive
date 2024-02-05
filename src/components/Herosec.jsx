import React from "react";

const Herosec = () => {
  return (
    <div className="flex justify-center overflow-x-clip flex-col items-center lg:pt-[140px] lg:pb-[222px] md:py-24 sm:py-20 py-20">
          <div className="container max-w-[1140px] px-3 mx-auto">
              <div className=" flex justify-center flex-col items-center">
        <h1 data-aos="fade-right" data-aos-delay='3000' className=" font-anton font-normal text-white max-w-[505px] lg:text-7xl md:text-6xl text-center sm:text-5xl text-4xl">
          Exclusive Games. Pasión por ganar
        </h1>
        <p data-aos="fade-left" data-aos-delay='3000'
          className=" font-inter font-medium sm:text-base text-sm leading-[
25.6px] text-center max-w-[727px] text-[#CCCFD1] sm:pt-4 pt-2"
        >
          En Exclusive Games somos un equipo apasionado de personas dedicados al
          desarrollo de multiplataformas para juegos de azar. A lo largo de
          nuestra vida consumimos todo tipo de juegos hasta que un día decidimos
          crear los propios.
        </p>
        <div className="flex justify-center" data-aos="fade-right" data-aos-delay='3000'>
          <button className="bg-green-blue text-black hover:text-white font-inter font-bold text-base py-[13px] px-[46px] rounded-full relative hover:after:hidden duration-300 after:absolute after:content-[url(./assets/images/btn1.webp)] after:left-[-5%] after:bottom-[-28%] lg:mt-10 md:mt-8 sm:mt-6 mt-4">
            Empezar
          </button>
        </div>
              </div>
              </div>
    </div>
  );
};

export default Herosec;
