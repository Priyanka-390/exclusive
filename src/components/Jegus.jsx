import React from 'react'
import img1 from "../assets/images/zugi.webp"
import img2 from "../assets/images/roultes.webp"
import img3 from "../assets/images/betting.webp"

const imgdata = [
    {
        img:img1
    },
    {
        img:img2
    },
    {
        img:img3
    }
]

const data = imgdata.map((imgdata, e) => (
      <div className="md:w-1/3 sm:w-1/2 w-full px-3 pb-2" data-aos="flip-down">
                     <div className="relative overflow-hidden group rounded-[8px]">
            <div className="w-full h-full flex items-center justify-center scale-0 group-hover:scale-[1] group-hover:opacity-100 duration-500 absolute left-0 bg-[#000000B2] opacity-0  top-0"> <button className="py-3 px-[46px] bg-transparent border hover:bg-white hover:text-black duration-300  border-solid border-white after:content-[url(./assets/images/white-btn.webp)] after:absolute relative after:bottom-[-30%] after:left-[-5%] rounded-full  text-base leading-[25.6px] text-white font-inter font-bold">
                  Reproducir ahora
                </button></div>
            <img src={imgdata.img} alt="img1" className="w-full h-full" />
          </div>
                  </div>
))

const Jegus = () => {
  return (
    <div className='lg:pb-[100px] md:pb-20 sm:pb-16 pb-12 relative z-[1] overflow-x-clip'>
          <div className="container max-w-[1140px] px-3 mx-auto">
              <h2 className=' font-anton lg:pb-10 md:pb-8 sm:pb-6 pb-2 font-normal md:text-5xl sm:text-4xl text-3xl leading-[57.6px] text-white text-center mx-auto'>Juegos en vivo</h2>
              <div className="flex flex-row flex-wrap -mx-3 justify-center">
                {data}
              </div>
      </div>
                  <div className="w-[484px] h-[484px] opacity-[50%] blur-[179px] absolute bottom-[-10%] right-[-20%] z-[-1] bg-ellips"></div>

    </div>
  )
}

export default Jegus
