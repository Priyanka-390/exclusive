import React from "react";
import casinrole from "../assets/images/casinorole (1).webp";
import { Tick } from "../assets/svg/icon";

const Offertas = () => {
  return (
    <div className="overflow-x-clip" id="offer">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="flex justify-center flex-col items-center">
          <h2
            className="text-center mx-auto font-anton md:text-5xl sm:text-4xl text-3xl font-normal leading-[
            57.6px] text-white"
          >
            Nuestras ofertas
          </h2>
          <p
            className="text-center sm:text-base text-sm md:pt-4 pt-2 lg:pb-[60px] md:pb-14 sm:pb-8 pb-4 text-white leading-[
25.6px] font-inter font-semibold"
          >
            Te ofrecemos las mejores experiencias de juegos para tus clientes.
          </p>
        </div>
        <div className="border-[0.5px] lg:pl-[47px] lg:pr-10 md:px-8 sm:px-6 px-4 bg-boxgraient rounded-[16px] border-[#FFFFFF80]">
          <div className="flex flex-wrap flex-row -mx-3 items-center">
            <div className="md:w-1/2 w-full px-3 max-md:pt-4"data-aos="fade-right">
              <img
                src={casinrole}
                alt="cas"
                className=" w-full max-h-[413px] h-full"
              />
            </div>
            <div className="md:w-1/2 w-full px-3 lg:pt-14 md:pt-10 sm:pt-5 pt-4" data-aos="fade-left">
              <h2 className="font-normal font-anton text-white md:text-start text-center leading-[41.6px] lg:text-[32px] md:text-3xl text-2xl ">
                Silver
              </h2>
              <p
                className=" font-inter  font-medium md:text-start text-center max-md:mx-auto text-white leading-[
25.6px] lg:pt-4 md:pt-3 sm:pt-2 pt-1 max-w-[402px] md:text-base text-sm"
              >
                Diseño predeterminado, atractivo y fácil de navegar, tecnología
                HTLM5.
              </p>
              <h2
                className="leading-[
57.6px] font-anton md:text-5xl sm:text-4xl text-3xl md:text-start text-center max-md:mx-auto font-normal text-white lg:pt-8 md:pt-6 sm:pt-4 pt-2"
              >
                $5000
              </h2>
              <div className="flex max-md:justify-center max-w-[387px] flex-col max-md:items-start items-cen ter max-md:mx-auto">
                <div className="flex items-start lg:pt-4 md:pt-3 pt-1">
                  <span className="pt-2">
                    <Tick />
                  </span>
                  <p
                    className="font-inter pl-2 text-base font-medium leading-[
                25.6px] text-white max-w-[387px]"
                  >
                    Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                    Cargas manuales
                  </p>
                </div>
                <div className="flex items-center max-lg:items-start pt-3">
                  <span className="max-lg:pt-2">
                    <Tick />
                  </span>
                  <p
                    className="font-inter text-base pl-2 font-medium leading-[
                25.6px] text-white max-w-[387px]"
                  >
                    Control de RTP (controlás qué porcentaje pagar)
                  </p>
                </div>
                <div className="flex items-start pt-3">
                  <div className="flex pt-2">
                    <Tick />
                  </div>
                  <p
                    className="font-inter  pl-2 text-base font-medium leading-[
                25.6px] text-white max-w-[387px]"
                  >
                    Bonos Editables, Happy Hours, Jackpots, Códigos
                    Promocionales Regalo
                  </p>
                </div>
                <div className="flex pt-3 items-center max-md:items-start">
                  <span className="max-md:pt-2">
                    <Tick />
                  </span>
                  <p
                    className="font-inter  pl-2 text-base font-medium leading-[
                25.6px] text-white max-w-[387px]"
                  >
                    Aplicación para Android y Windows de regalo.
                  </p>
                </div>
                <div className="flex pt-3 items-center">
                  <Tick />
                  <p
                    className="font-inter text-base font-medium leading-[
                25.6px] text-white max-w-[387px] pl-2 "
                  >
                    Tiempo de creación 2 a 3 semanas.
                  </p>
                </div>
              </div>
              <div className="flex md:justify-start justify-center">
                <button className="py-3 mb-8 px-[46px] hover:bg-white hover:text-black duration-300  bg-transparent border border-solid border-white after:content-[url(./assets/images/white-btn.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] lg:mt-10 md:mt-6 sm:mt-4 mt-2 text-white font-inter font-bold">
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offertas;
