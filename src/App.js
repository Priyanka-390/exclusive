import React, { useEffect, useState } from "react";
import "./App.css";
import Mynav from "./components/Mynav";
import Herosec from "./components/Herosec";
import Mission from "./components/Mission";
import Neustros from "./components/Neustros";
import Slotsec from "./components/Slotsec";
import Jackpot from "./components/Jackpot";
import Lanza from "./components/Lanza";
import Jegus from "./components/Jegus";
import Casinonight from "./components/Casinonight";
import Massec from "./components/Massec";
import Offertas from "./components/Offertas";
import Luxury from "./components/Luxury";
import Platinum from "./components/Platinum";
import Ellos from "./components/Ellos";
import Preguntas from "./components/Preguntas";
import Platformsec from "./components/Platformsec";
import Footer from "./components/Footer";
import Backtop from "./components/Backtop";
import Preloader from "./components/Preloader";
import AOS from 'aos';
import 'aos/dist/aos.css';

document.body.classList.add("overflow-hidden")
const App = () => {
   useEffect(() => {
    AOS.init(
      {
         once: true,
         duration:2000,
      }
        );
      }, [])
   const [preloader, setpreloader] = useState(true)
  setTimeout(() => {
    setpreloader(false)
    document.body.classList.remove("overflow-hidden")
  }, 3000);
  return (
     <div>
       {preloader&& <Preloader/>}
           <div className="bg-[#001418]">
        <div className="bg-[url(./assets/images/herobg.webp)] flex flex-col min-h-screen bg-cover bg-center bg-no-repeat">
          <Mynav />
          <Herosec />
        </div>
        <Mission />
        <div className="lg:bg-[url(./assets/images/white-bg1.webp)] xl:bg-size bg-cover  bg-no-repeat">
          <Neustros />
          <Slotsec />
        </div>
        <div className="md:bg-[url(./assets/images/bg3.webp)] bg-size bg-no-repeat">
          <Jackpot />
          <Lanza />
          <Jegus />
        </div>
        <div className="md:bg-[url(./assets/images/whitebg.webp)] bg-no-repeat bg-size">
          <Casinonight />
        </div>
        <Massec />
        <Offertas />
        <Luxury />
        <Platinum />
        <Ellos />
        <Preguntas />
        <Platformsec />
        <Footer />
        <Backtop/>
           </div>
     </div>
  );
};

export default App;
