import React from "react";


const Platformsec = () => {
  return (
    <div className=" overflow-x-clip px-3">
      <div className="container lg:py-[104px] md:py-20  sm:py-14 py-8 rounded-[16px] border-[0.5px] border-[#FFFFFF80] max-w-[1140px] bg-[url(./assets/images/lanzalayer.webp)] px-3 mx-auto flex justify-center flex-col">
        <h2 data-aos="zoom-in"
          className="text-white font-anton font-normal mx-auto text-center text-[32px] leading-[
41.6px]"
        >
          Lanza tu propia plataforma en sólo 2 semanas
              </h2>
               <div className="flex justify-center items-center">
                   <button className="bg-green-blue text-black hover:text-white hover:after:hidden duration-300 text-center font-inter font-bold text-base py-[13px] px-[46px] rounded-full relative after:absolute after:content-[url(./assets/images/btn1.webp)] after:left-[-5%] after:bottom-[-28%] lg:mt-10 md:mt-8 sm:mt-6 mt-4">
                               Leer más
                             </button>
               </div>
      </div>
    </div>
  );
};

export default Platformsec;
