import React from "react";
import jackpot from "../assets/images/jackpot.webp";
import { Tick } from "../assets/svg/icon";

const Jackpot = () => {
  return (
    <div className="relative z-[1] overflow-x-clip">
      <div className="container max-w-[1140px] px-3 mx-auto md:pt-20 sm:pt-16 pt-12">
        <div className="flex flex-row flex-wrap lg:-mx-3 mx-auto max-lg:max-w-[760px] items-center">
          <div className="lg:w-1/2 w-full px-3" data-aos="fade-right">
            <img src={jackpot} alt="jackpot" />
          </div>
          <div className="lg:w-1/2 w-full px-3" data-aos="fade-left">
            <h2
              className=" font-anton font-normal md:text-5xl sm:text-4xl text-3xl text-white leading-[
57.6px]"
            >
              Potenciando sus elecciones
            </h2>
            <p className=" font-inter font-semibold text-base leading-[25.6px] pt-4 text-[#CDD0D1]">
              Con Exclusive Game lo mejor está de tu lado.
            </p>
            <div className="pt-6 flex items-center">
              <Tick />
              <p className="font-inter font-semibold text-base pl-2 leading-[25.6px]  text-[#CDD0D1]">
                Tecnología HTML5
              </p>
            </div>
             <div className="pt-3 flex items-center">
              <Tick />
              <p className="font-inter font-semibold text-base pl-2 leading-[25.6px]  text-[#CDD0D1]">
                Versión PC y móvil
              </p>
            </div>
             <div className="pt-3 flex items-center">
              <Tick />
              <p className="font-inter font-semibold text-base pl-2 leading-[25.6px]  text-[#CDD0D1]">
                Control de RTP (controlás qué porcentaje pagar)
              </p>
            </div>
             <div className="pt-3 flex items-center">
              <Tick />
              <p className="font-inter font-semibold max-w-[399px] text-base pl-2 leading-[25.6px]  text-[#CDD0D1]">
                Bonos editables, happy hours, Jackpots, códigos  promocionales.
              </p>
            </div>
             <div className="pt-3 flex items-center">
              <Tick />
              <p className="font-inter font-semibold text-base pl-2 leading-[25.6px]  text-[#CDD0D1]">
               Aplicación para android y windows de regalo.
              </p>
            </div>
            <p className="font-inter font-semibold text-base pl-2 leading-[25.6px] pt-6  text-[#CDD0D1]">Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
          </div>
        </div>
      </div>
            <div className="w-[484px] h-[484px] opacity-[50%] blur-[179px] md:block hidden absolute top-[-50%] left-[-30%] z-[-1] bg-ellips"></div>
              <div className="w-[160px] h-[160px] opacity-[23%] blur-[48px] z-[-1] bg-ellips absolute top-[75%] left-[44%] rounded-full"></div>
    </div>
  );
};

export default Jackpot;
