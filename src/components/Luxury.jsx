import React from "react";
import { Tick } from "../assets/svg/icon";
import coin from "../assets/images/coin.webp";
import dice from "../assets/images/dice.webp";
import cardA from "../assets/images/cardsA.webp";
import heart from "../assets/images/heartA.webp";

const Luxury = () => {
  return (
    <div className="container max-w-[1140px] px-3 mx-auto overflow-x-clip">
      <div className="  bg-[linear-gradient(307deg,#51c8ef0f_-13.72%,#7af57a0f_102.02%)] rounded-[16px] border-[#839090] border-[0.5px]  lg:mt-[60px] md:mt-12 sm:mt-10 mt-8">
        <div className="bg-[url(./assets/images/luxurybg.webp)] relative z-[1] bg-no-repeat p-[32px] sm:p-[46px_40px_32px_47px] bg-size">
          <div className=" max-w-[419px] mx-auto">
            <h2
              data-aos="fade-down"
              className=" font-anton font-normal lg:text-[32px] md:text-3xl text-2xl leading-[41px] text-center text-white"
            >
              Luxury
            </h2>
            <p
              data-aos="fade-down"
              className=" font-inter font-medium text-base leading-[25px] text-[#CDD2D3] md:pt-4 sm:pt-3 pt-1 mx-auto text-center max-w-[391px]"
            >
              lleva tu experiencia de juego al siguiente nivel. Con todas las
              características de la versión Silver y la potencia adicional de la
              tecnología React .
            </p>
            <h2
              data-aos="fade-down"
              className=" text-white text-center text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] leading-[57px] font-normal font-anton lg:pt-8 md:pt-6 sm:pt-4 pt-2 "
            >
              $9000
            </h2>
            <div data-aos="fade-down" className=" flex items-start gap-2 md:pt-3 pt-1">
              <span className=" flex pt-2 items-center justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] text-center w-full lg:max-w-[388px]">
                Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                Cargas manuales
              </p>
            </div>
            <div data-aos="fade-down" className=" flex items-start gap-2 pt-3">
              <span className=" flex items-center pt-2 justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] text-center w-full lg:max-w-[388px]">
                Control de RTP (controlás qué porcentaje pagar)
              </p>
            </div>
            <div data-aos="fade-down" className=" flex items-start gap-2 pt-3">
              <span className=" flex items-center pt-2 justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] text-center w-full lg:max-w-[388px]">
                Bonos editables, happy hours, Jackpots, códigos promocionales..
              </p>
            </div>
            <div data-aos="fade-down" className=" flex items-start gap-2 pt-3">
              <span className=" flex items-center pt-2 justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-[#CDD1D2] text-center w-full lg:max-w-[388px]">
                Aplicación para android y windows de regalo.
              </p>
            </div>
            <div data-aos="fade-down" className=" flex items-start gap-2 pt-3">
              <span className=" flex items-center pt-2 justify-center">
                <Tick />
              </span>
              <p className=" text-base leading-[25px] font-medium font-inter text-center w-full text-[#CDD1D2] lg:max-w-[388px]">
                Tiempo de creación 2 a 3 semanas
              </p>
            </div>
            <div data-aos="fade-down">
              <button className="bg-green-blue hover:after:hidden hover:text-white duration-300  text-black font-inter font-bold text-base py-[13px] px-[46px] rounded-full relative after:absolute after:content-[url(./assets/images/btn1.webp)] after:left-[-5%] after:bottom-[-28%] flex mx-auto md:mt-6 sm:mt-4 mt-2">
           Comprar ahora
              </button>
            </div>
          </div>
          <img
            src={coin}
            alt="coin"
            className=" absolute top-[20px] max-sm:w-[60px] sm:top-[19%] animate-coin lg:left-[21%] left-[22px] sm:left-[4%] md:left-[13%] z-[-1]"
          />
          <img
            src={cardA}
            alt="cardA"
            className=" absolute sm:bottom-[11%] bottom-[7%] left-[12px] md:left-[4%] lg:max-w-[176px] md:max-w-[126px] max-w-[62px] sm:max-w-[90px] lg:left-[13%] z-[-1]"
          />
          <img
            src={heart}
            alt="heart"
            className=" absolute right-[2%] md:max-w-[149px] max-w-[100px] md:right-[10%] max-sm:max-h-[60px] top-[20px] sm:top-[14%] z-[-1]"
          />
          <img
            src={dice}
            alt="dice"
            className=" absolute bottom-[12px] max-sm:max-w-[50px] sm:bottom-[15%] right-[10px] animate-coin sm:right-[7%] lg:right-[17%] z-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Luxury;
