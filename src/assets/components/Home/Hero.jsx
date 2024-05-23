import React, { useEffect, useRef, useState } from "react";
//import video
import video from "../../videos/video.mp4";
//import logo
import logo from "../../imgs/logo.png";
//import banner
import banner from "../../imgs/hero/4.jpg";
import CarrouselHero from "./CarrouselHero";
//import framer motion
import { animate, motion } from "framer-motion";

function Hero() {
  const videoRef = useRef();

  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
    
      className="text-white pt-auto h-[100vh] bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center "
      style={{ backgroundImage: `url('${banner}')` }}
    >


      {/* title and subtitle */}
      <div className="absolute w-[80%] m-auto  text-white flex flex-col justify-center items-center left-0 right-0  gap-y-1 ">
       
        <div className="text-center flex flex-col gap-y-4">
          <h1 className="h2 text-primary-400">FAMF</h1>
          <h2 className="h4  text-white uppercase w-[100%] m-auto ">
            Federacion de Fisicoculturismo & Fitness
          </h2>
        </div>
      </div>
      {/* carrousel 
      <div className=" absolute bottom-1 w-full h-[200px] flex flex-col justify-center items-center" >
      <CarrouselHero/>
      </div>*/}
     
    </motion.div>
  );
}

export default Hero;
