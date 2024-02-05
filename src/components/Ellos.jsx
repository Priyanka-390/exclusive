import React from 'react'
import gir from "../assets/images/girosgratis.webp"
import money from "../assets/images/moneygame.webp"
import happy from "../assets/images/happyhour.webp"

const cardsec = [
    {
        img:gir,
    },
     {
        img:money,
    },
      {
        img:happy,
    }
]

const carddata = cardsec.map((cardsec, e) => (
     <div  data-aos="flip-down" key={e} className="md:w-1/3 sm:w-1/2 w-full px-3 md:pt-5 pt-3 overflow-x-clip">
                       <div className="relative overflow-hidden group rounded-[8px]">
            <div className="w-full h-full flex items-center justify-center scale-0 group-hover:scale-[1] group-hover:opacity-100 group-hover:shadow-[7px_9px_15px_0px_#00000033]
 duration-500 absolute left-0 bg-[#000000B2] opacity-0  top-0"> <button className="py-3 px-[46px] bg-transparent border border-solid border-white after:content-[url(./assets/images/white-btn.webp)] hover:bg-white hover:text-black duration-300  after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-white font-inter font-bold">
                  Rcasinovip
                </button></div>
            <img src={cardsec.img} alt="img1" className="w-full h-full" />
          </div>
                  </div>
))

const Ellos = () => {
  return (
    <div>
          <div className="container max-w-[1140px] px-3 mx-auto overflow-x-clip">
              <h2 className='font-anton md:text-5xl sm:text-4xl text-3xl text-white font-normal md:leading-[57.6px] text-center mx-auto'>Ellos eligieron apostar con nosotros</h2>
              <div className="flex flex-row flex-wrap -mx-3 md:pt-[30px] justify-center">
                 {carddata}
              </div>
              <p className='text-center mx-auto max-w-[883px] font-inter md:pt-[38px] sm:pt-5 pt-3 text-white font-medium sm:text-base text-sm: '>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.<br/>
Ahora, la próxima apuesta está en tus manos.<br/>
Elige ganar. Elige exclusive game.</p>
      </div>
    </div>
  )
}

export default Ellos
