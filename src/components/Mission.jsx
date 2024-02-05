import React from "react";
import poker from "../assets/images/poker.webp";
import avi from "../assets/images/avitor.webp";

const Mission = () => {
  return (
    <div className="md:pt-[74px] pt-5 lg:pb-[100px] sm:pb-16 pb-8 relative z-[1] overflow-x-clip">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="md:w-1/2 w-full md:px-6 px-3"data-aos="zoom-in">
           
            <img
              src={poker}
              alt="p"
              className="rounded-[16px] max-w-[538px] max-md:mx-auto w-full"
            />
              <h2 className="lg:pt-[60px] md:pt-12 sm:pt-10 pt-5 font-anton font-normal md:text-start text-center max-md:mx-auto md:text-5xl sm:text-4xl text-3xl text-white">
                Nuestra Visión
              </h2>
              <p className="text-[#CCD0D2] md:pt-4 pt-2 md:text-start text-center max-md:mx-auto font-inter max-w-[446px] font-medium md:text-base text-sm leading-[25.6px]">
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <p className="flex items-center lg:pt-6 md:pt-5 sm:pt-4 pt-2 cursor-pointer max-md:justify-center font-inter md:text-start text-center max-md:mx-auto text-[#7AF57A] text-base leading-[25.6px] font-bold">
              Aprende más
              <span class="px-2 mt-1">
                {" "}
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_1523_79"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-2"
                    width="21"
                    height="16"
                    fill="black"
                  >
                    <rect
                      fill="white"
                      x="-1"
                      y="-2"
                      width="21"
                      height="16"
                    ></rect>
                    <path d="M12.1477 11.6364L10.8295 10.3239L14.2898 6.86932H0V4.94886H14.2898L10.8295 1.48864L12.1477 0.181818L17.875 5.90909L12.1477 11.6364Z"></path>
                  </mask>
                  <path
                    d="M12.1477 11.6364L10.8295 10.3239L14.2898 6.86932H0V4.94886H14.2898L10.8295 1.48864L12.1477 0.181818L17.875 5.90909L12.1477 11.6364Z"
                    fill="#7AF57A"
                  ></path>
                  <path
                    d="M12.1477 11.6364L11.4422 12.345L12.1493 13.0491L12.8548 12.3435L12.1477 11.6364ZM10.8295 10.3239L10.123 9.61618L9.41322 10.3248L10.124 11.0325L10.8295 10.3239ZM14.2898 6.86932L14.9963 7.57701L16.7068 5.86932H14.2898V6.86932ZM0 6.86932H-1V7.86932H0V6.86932ZM0 4.94886V3.94886H-1V4.94886H0ZM14.2898 4.94886V5.94886H16.704L14.9969 4.24176L14.2898 4.94886ZM10.8295 1.48864L10.1255 0.778475L9.41226 1.48557L10.1224 2.19574L10.8295 1.48864ZM12.1477 0.181818L12.8548 -0.525289L12.1508 -1.22934L11.4437 -0.528343L12.1477 0.181818ZM17.875 5.90909L18.5821 6.6162L19.2892 5.90909L18.5821 5.20198L17.875 5.90909ZM12.8533 10.9277L11.5351 9.61523L10.124 11.0325L11.4422 12.345L12.8533 10.9277ZM11.5361 11.0316L14.9963 7.57701L13.5832 6.16163L10.123 9.61618L11.5361 11.0316ZM14.2898 5.86932H0V7.86932H14.2898V5.86932ZM1 6.86932V4.94886H-1V6.86932H1ZM0 5.94886H14.2898V3.94886H0V5.94886ZM14.9969 4.24176L11.5367 0.781529L10.1224 2.19574L13.5827 5.65597L14.9969 4.24176ZM11.5336 2.1988L12.8518 0.891979L11.4437 -0.528343L10.1255 0.778475L11.5336 2.1988ZM11.4406 0.888925L17.1679 6.6162L18.5821 5.20198L12.8548 -0.525289L11.4406 0.888925ZM17.1679 5.20198L11.4406 10.9293L12.8548 12.3435L18.5821 6.6162L17.1679 5.20198Z"
                    fill="black"
                    mask="url(#path-1-outside-1_1523_79)"
                  ></path>
                </svg>{" "}
              </span>
            </p>

          </div>
                  <div className="md:w-1/2 w-full md:px-6 px-3 flex flex-col justify-end" data-aos="zoom-out">
                       <img
              src={avi}
              alt="pa"
              className="rounded-[16px] block md:hidden md:mt-[60px] mt-8 max-w-[538px] max-md:mx-auto w-full"
                      />
            <h2 className=" font-anton  md:pt-0 sm:pt-10 pt-5 font-normal md:text-start text-center max-md:mx-auto md:text-5xl sm:text-4xl text-3xl text-white ">
              Nuestra Misión
            </h2>
            <p className="text-[#CCD0D2]  md:pt-4 sm:pt-2 pt-1 md:text-start text-center max-md:mx-auto font-inter max-w-[446px] font-medium md:text-base text-sm leading-[25.6px]">
              Nuestra misión es simple pero poderosa: proporcionarte la más
              amplia gama de soluciones de entretenimiento de alta calidad y
              rentabilidad. Estamos comprometidos a elevar tus expectativas y
              brindarte experiencias inigualables.
            </p>
            <p className="flex items-center lg:pt-6 md:pt-5 sm:pt-4 pt-2 cursor-pointer font-inter md:text-start text-center max-md:mx-auto text-[#7AF57A] text-base leading-[25.6px] font-bold">
              Aprende más{" "}
              <span class="px-2 mt-1">
                {" "}
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_1523_79"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-2"
                    width="21"
                    height="16"
                    fill="black"
                  >
                    <rect
                      fill="white"
                      x="-1"
                      y="-2"
                      width="21"
                      height="16"
                    ></rect>
                    <path d="M12.1477 11.6364L10.8295 10.3239L14.2898 6.86932H0V4.94886H14.2898L10.8295 1.48864L12.1477 0.181818L17.875 5.90909L12.1477 11.6364Z"></path>
                  </mask>
                  <path
                    d="M12.1477 11.6364L10.8295 10.3239L14.2898 6.86932H0V4.94886H14.2898L10.8295 1.48864L12.1477 0.181818L17.875 5.90909L12.1477 11.6364Z"
                    fill="#7AF57A"
                  ></path>
                  <path
                    d="M12.1477 11.6364L11.4422 12.345L12.1493 13.0491L12.8548 12.3435L12.1477 11.6364ZM10.8295 10.3239L10.123 9.61618L9.41322 10.3248L10.124 11.0325L10.8295 10.3239ZM14.2898 6.86932L14.9963 7.57701L16.7068 5.86932H14.2898V6.86932ZM0 6.86932H-1V7.86932H0V6.86932ZM0 4.94886V3.94886H-1V4.94886H0ZM14.2898 4.94886V5.94886H16.704L14.9969 4.24176L14.2898 4.94886ZM10.8295 1.48864L10.1255 0.778475L9.41226 1.48557L10.1224 2.19574L10.8295 1.48864ZM12.1477 0.181818L12.8548 -0.525289L12.1508 -1.22934L11.4437 -0.528343L12.1477 0.181818ZM17.875 5.90909L18.5821 6.6162L19.2892 5.90909L18.5821 5.20198L17.875 5.90909ZM12.8533 10.9277L11.5351 9.61523L10.124 11.0325L11.4422 12.345L12.8533 10.9277ZM11.5361 11.0316L14.9963 7.57701L13.5832 6.16163L10.123 9.61618L11.5361 11.0316ZM14.2898 5.86932H0V7.86932H14.2898V5.86932ZM1 6.86932V4.94886H-1V6.86932H1ZM0 5.94886H14.2898V3.94886H0V5.94886ZM14.9969 4.24176L11.5367 0.781529L10.1224 2.19574L13.5827 5.65597L14.9969 4.24176ZM11.5336 2.1988L12.8518 0.891979L11.4437 -0.528343L10.1255 0.778475L11.5336 2.1988ZM11.4406 0.888925L17.1679 6.6162L18.5821 5.20198L12.8548 -0.525289L11.4406 0.888925ZM17.1679 5.20198L11.4406 10.9293L12.8548 12.3435L18.5821 6.6162L17.1679 5.20198Z"
                    fill="black"
                    mask="url(#path-1-outside-1_1523_79)"
                  ></path>
                </svg>{" "}
              </span>
            </p>
            <img
              src={avi}
              alt="p"
              className="rounded-[16px] mt-[60px] hidden md:block w-full"
                      />
                      
          </div>
        </div>
          </div>
          <div className="w-[484px] h-[484px] bg-ellips rounded-full opacity-[50%] absolute left-[-10%] z-[-1] blur-[179px] top-[10%]"></div>
          <div className="w-[200px] h-[200px] bg-ellips rounded-full opacity-[50%]  absolute left-[45%] blur-[179px] z-[-1]  md:top-[40%] top-[70%]"></div>
    </div>
  );
};

export default Mission;
