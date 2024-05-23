import React from "react";
//import image
import banner from "../../imgs/banners/arnold.jpeg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className= " overflow-hidden w-full lg:h-[300px] h-auto flex lg:flex-row my-10 flex-col-reverse ">
      {/* container text */}
      <motion.div
       initial={{ x: -100, opacity:0 }}
       whileInView={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut" }}
        className="w-full h-full  bg-black flex   "
      >
        <div className=" w-[90%] m-auto  h-[250px] lg:h-full flex flex-col justify-center ">
          <h6 className="h6 text-primary-200">
            MARZO 9-12, 2024 | BUENOS AIRES, ARG
          </h6>
          <h4 className="h4 text-primary-300">
            {" "}
            2024 CAMPEONATO IFBB ARGENTINO
          </h4>
          <p className=" h6 font-normal text-primary-200 mt-5">
            CHEKEA NUESTRAS REDES
          </p>
        </div>
      </motion.div>
      <motion.div
      initial={{ x: 100, opacity:0 }}
      whileInView={{ x: 0, opacity:1 }}
       transition={{ ease: "easeOut" }}
      className="w-full h-full bg-cover bg-no-repeat bg-center  ">
        <img src={banner} alt="banner" className="w-full  h-full  " />
      </motion.div>
    </section>
  );
};

export default Banner;
