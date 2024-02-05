import React from "react";
import gradient1 from "../assets/images/gradient1.webp"
import gradient2 from "../assets/images/gradient2.webp"

const Lanza = () => {
  return (
    <div className="flex justify-center overflow-x-clip items-center lg:py-[150px] md:py-20 sm:py-16 py-12 relative">
      <div className="container max-w-[1140px] px-3 mx-auto">
       <div className=" lg:px-[261px] max-sm:p-[20px] overflow-hidden sm:px-[24px] md:px-[96px] py-[96px] border-[0.5px] backdrop-blur-[29px] mix-blend-lighten border-white rounded-[16px] relative z-1">
          <p data-aos="zoom-in" className=" font-normal text-[24px] sm:text-[48px] font-anton leading-[40px] sm:leading-[56px] text-center text-white">
            lanza tu propia plataforma en sólo 2 semanas
          </p>
          <img
            src={gradient1}
            alt="paltleft"
            className=" hidden sm:block absolute left-0 top-0 z-[-1]"
          />
          <img
            src={gradient2}
            alt="paltright"
            className=" hidden sm:block absolute right-0 bottom-0 z-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Lanza;
