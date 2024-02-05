import React from "react";
import { Blub, Spin, Third } from "../assets/svg/icon";
import arrow1 from "../assets/images/arrow1.webp";
import arrow2 from "../assets/images/arrow2.webp";

const myArray = [
  {
    svg: <Blub />,
    heading: "Inteligencia",
    para:
      "Comprendemos a la perfección los gustos de las personas y el mundo del gaming.",
  },
  {
    svg: <Spin />,
    heading: "Proactividad",
    para:
      "Somos creadores de cambios que exploran nuevas formas de entretenimiento.",
  },
  {
    svg: <Third />,
    heading: "Innovación",
    para: "Pensamos fuera de la caja para estar siempre un paso adelante.",
  },
];

const data = myArray.map((myArray, i) => (
  <div key={i} className="md:w-1/3 sm:w-1/2 w-full px-3 flex pt-5  flex-col"data-aos="zoom-in">
    <div className="flex items-center flex-col">
      <div className="max-w-[100px] max-h-[100px] flex justify-center p-[26px] bg-[#7AF57A14] rounded-full">
        {myArray.svg}
      </div>
      <p
        className=" font-anton font-normal sm:pt-4 pt-2 sm:text-[20px] text-base sm:leading-[
                          26px] "
      >
        {myArray.heading}
      </p>
      <p className="font-inter sm:text-base text-sm font-medium sm:pt-[10px] pt-1 md:leading-[25.6px] text-[#00141B] text-center max-w-[287px] items-center">
        {myArray.para}
      </p>
    </div>
  </div>
));

const Neustros = () => {
  return (
    <div className="lg:pt-[243px] max-lg:bg-white  md:py-20 sm:py-12 py-10  z-[1] relative overflow-x-clip">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <h2 className="text-[#00141B] font-anton mx-auto text-center font-normal md:text-5xl sm:text-4xl text-3xl md:leading-[57.6px]">
          Nuestros Atributos de Marca
        </h2>
        <div className="flex flex-row flex-wrap justify-center -mx-3 md:pt-10 sm:pt-10 pt-3 z-[1] relative">
          {data}
          <img
            src={arrow1}
            alt="1"
            className="absolute
          top-[25%] z-[-1] left-[21%] lg:max-w-[273px] max-w-[200px] md:block hidden"
          />
          <img
            src={arrow2}
            alt="2"
            className="absolute lg:top-[47%]  top-[40%] lg:max-w-[273px] max-w-[200px] md:block hidden left-[55%] z-[-1]"
          />
        </div>
      </div>
      <div className="w-[484px] h-[484px] opacity-[50%] md:block hidden blur-[179px] absolute top-0 right-[-30%] z-[1] bg-ellips"></div>
    </div>
  );
};

export default Neustros;
