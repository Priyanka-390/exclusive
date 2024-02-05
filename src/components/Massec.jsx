import React from "react";
import seven from "../assets/images/tripleseven.webp";
import { Nine, Smallbulb, Smallsvg } from "../assets/svg/icon";

const boxdata = [
  {
    svg: <Smallbulb />,
    head: "200",
    para: "Páginas creadas",
  },
  {
    svg: <Smallsvg />,
    head: "98% ",
    para: "Clientes Satisfechas",
  },
  {
    svg: <Nine />,
    head: "200",
    para: "Divisas Disponibles",
  },
];

const box = boxdata.map((boxdata, e) => (
  <div
    key={e}
    className="  p-[1px] bg-green-blue group max-sm:mx-auto rounded-[17px] max-w-[374px] lg:mt-5 md:mt-3 sm:mt-2 mt-1"
  >
    <div className="box bg-[#051D22] border-[0.5px] rounded-[16px]   border-borderc  items-center md:py-6 sm:py-4 py-2 lg:pl-14 md:pl-10 sm:pl-8 pl-4 lg:pr-[86px] md:pr-16 flex">
      <div className="max-w-[68px] max-h-[68px] rounded-full p-4 bg-[#7AF57A14] ">
        {boxdata.svg}
      </div>
      <div className="lg:pl-[37px]  md:pl-8 sm:pl-6 pl-4">
        <p
          className="font-anton  lg:text-[32px] group-hover:text-[#74EE8B] md:text-[28px]  text-2xl text-nowrap text-white font-medium leading-[
    41.6px]"
        >
          {boxdata.head}
        </p>
        <p className=" font-inter font-medium group-hover:text-[#74EE8B] duration-300 text-nowrap text-white text-base leading-[25.6px]  ">
          {boxdata.para}
        </p>
      </div>
    </div>
  </div>
));

const Massec = () => {
  return (
    <div className="lg:py-[100px] md:py-20 sm:py-16 py-12 relative z-[1] overflow-x-clip">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap -mx-3 items-center">
          <div className="sm:w-1/2 w-full px-3">
            <img src={seven} alt="7" className="rounded-[16px]" />
          </div>
          <div className="sm:w-1/2 w-full px-3">
            <h2 className="md:leading-[57.6px] max-sm:pt-3 sm:text-start text-center lg:pb-[33px] md:pb-6 sm:pb-4 pb-2 font-anton font-normal text-white md:text-5xl sm:text-4xl text-3xl">
              Más razones para elegirnos
            </h2>
            {box}
          </div>
        </div>
      </div>
                        <div className="w-[440px] h-[440px] opacity-[50%] blur-[179px] absolute top-[-40%] left-[-10%] z-[-1] bg-ellips"></div>
                  <div className="w-[484px] h-[484px] opacity-[50%] blur-[179px] absolute bottom-0 right-[-20%] z-[-1] bg-ellips"></div>

    </div>
  );
};

export default Massec;
