import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <div className="relative ">
      <svg
        xmlns="http://www.w3.oyg/1700/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="white"
        className={`${
          id === open ? "" : "rotate-90"
        } h-5 w-5   transition-transform`}
      >
        <path
          d="M1.69629 1H19.6963"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <svg
        className="absolute rotate-0 top-[9px]"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="white"
      >
        <path
          d="M1.69629 1H19.6963"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

const Preguntas = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="relative z-[1] overflow-x-clip">
      <div className="max-w-[970px] mx-auto px-3 lg-[150px] md:my-20 sm:my-16 my-12 lg:mt-[150px]">
        <div className="">
          <h2 className=" md:text-5xl sm:text-4xl text-3xl font-anton leading-[120%] font-normal text-center md:pb-[60px] sm:pb-10 pb-4 text-white">
            Preguntas más frecuentes
          </h2>
          <Accordion  data-aos="flip-down"
            className=" border-[#80898D] border  mb-5 sm:mb-8 rounded-[10px] py-4 px-5"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className=" font-anton text-sm sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%] "
            >
              ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis
              plataformas de juegos?
            </AccordionHeader>
            <AccordionBody className="font-inter text-xs sm:text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion data-aos="flip-down"
            className=" border-[#80898D] border  mb-5 sm:mb-8 rounded-[10px] py-4 px-5  overflow-hidden"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className=" font-anton text-sm sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              {" "}
              ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
            </AccordionHeader>
            <AccordionBody className="font-inter text-xs sm:text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion data-aos="flip-down"
            className=" border-[#80898D] border  mb-5 sm:mb-8 rounded-[10px] py-4 px-5 "
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className=" font-anton text-sm  sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              {" "}
              ¿Cuáles son las opciones de juego disponibles en las versiones
              Silver, Luxury y Platinum?
            </AccordionHeader>
            <AccordionBody className="font-inter text-xs sm:text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion data-aos="flip-down"
            className=" border-[#80898D] border  mb-5 sm:mb-8 rounded-[10px] py-4 px-5 "
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className=" font-anton text-sm sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
            </AccordionHeader>
            <AccordionBody className="font-inter text-xs sm:text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion data-aos="flip-down"
            className=" border-[#80898D] border  mb-5 sm:mb-8 rounded-[10px] py-4 px-5 "
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className=" font-anton text-sm sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              ¿Qué métodos de pago aceptan?
            </AccordionHeader>
            <AccordionBody className="font-inter text-xs sm:text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion data-aos="flip-down"
            className=" border-[#80898D] border rounded-[10px] py-4 px-5 "
            open={open === 6}
            icon={<Icon id={6} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className=" font-anton text-sm sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%]"
            >
              ¿Puedo probar sus juegos antes de comprometerme?
            </AccordionHeader>
            <AccordionBody className="font-inter text-xs sm:text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
                        <div className="w-[396px] h-[396px] opacity-[50%] blur-[179px] absolute top-[-10%] left-[-20%] z-[-1] bg-ellips"></div>
    </div>
  );
};

export default Preguntas;
