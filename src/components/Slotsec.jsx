import React from "react";
import img1 from "../assets/images/jetx.webp";
import img2 from "../assets/images/joker.webp";
import img3 from "../assets/images/starteddy.webp";
import img4 from "../assets/images/luckyfortune.webp";
import img5 from "../assets/images/hellosummer.webp";
import img6 from "../assets/images/casino.webp";

const data = [
  {
    img:img1
  },
   {
    img:img2
  },
    {
    img:img3
  },
     {
    img:img4
  },
      {
    img:img5
  },
       {
    img:img6
  },
]
const imgdata = data.map((data, i) => (
   <div key={i} className="md:w-1/3 sm:w-1/2 w-full px-3 pt-6" data-aos="flip-left">
          <div className=" hover:bg-green-blue  group p-[1px] rounded-[8px]">
            <div className="  rounded-[7px] relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center  scale-0 group-hover:scale-[1] group-hover:opacity-100  duration-500 absolute left-0 bg-[#000000B8] opacity-0  top-0"> <button className="py-3 px-[46px] bg-transparent hover:bg-white hover:text-black duration-300  border border-solid border-white after:content-[url(./assets/images/white-btn.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-white font-inter font-bold">
                    Jugar
                  </button></div>
              <img src={data.img} alt="img1" className="w-full h-full" />
            </div>
          </div>
        </div>
))

const Slotsec = () => {
  return (
    <div className="lg:pt-[150px] md:py-20 sm:py-12  overflow-x-clip py-12 max-lg:bg-white">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="flex justify-center flex-col items-center">
          <h2 data-aos="fade-up" className="md:text-5xl sm:text-4xl text-3xl font-normal font-anton leading-[57.6px] mx-auto text-center text-[#00141B]">
            Slots{" "}
          </h2>
          <p data-aos="fade-up" className="font-inter md:pt-4 sm:pt-2 pt-1 text-[#00141B] font-medium sm:text-base text-sm sm:leading-[25.6px] leading-5 mx-auto text-center max-w-[904px]">
            En Exclusive Games, ofrecemos una selección de más de 600 juegos de
            los principales desarrolladores, como Aristocrat, Amatic, EGT,
            Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
            trabaja incansablemente para innovar y ampliar nuestra oferta de
            experiencias, garantizando la máxima seguridad con operaciones
            protegidas por cifrado SSL de 256 bits.
          </p>
        </div>
        <div className="flex flex-wrap flex-row -mx-3 md:pt-[36px]">
       {imgdata}
        </div>
          <div className="flex justify-center items-center">
            <button className="bg-green-blue lg:mb-[243px] hover:after:hidden hover:text-white duration-300 text-black font-inter font-bold text-base py-[13px] px-[46px] rounded-full relative after:absolute after:content-[url(./assets/images/btn1.webp)] after:left-[-5%] after:bottom-[-28%] lg:mt-10 md:mt-8 sm:mt-6 mt-4">
             Mostrar más
            </button>
          </div>
      </div>
      
    </div>
  );
};

export default Slotsec;
