import React from "react";
//import icon
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className=" w-full h-[300px] flex flex-col justify-center items-center gap-y-5 text-center  ">
      <motion.div
       initial={{ y: 100, opacity:0 }}
       whileInView={{ y: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration:0.2 }}
      >
  <AiOutlineMail className="text-5xl text-primary-400 " />
      </motion.div>
    

      <motion.h3 
       initial={{ y: 100, opacity:0 }}
       whileInView={{ y: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration:0.4 }}
      className="h4 text-primary-200 "> INSCRÍBASE A NUESTRO NEWSLETTER</motion.h3>

      <motion.p
       initial={{ y: 100, opacity:0 }}
       whileInView={{ y: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration:0.6 }}
      className="text-primary-200 w-[90%] ">
       Suscríbase a Newsletter para mantenerse informado sobre los últimos eventos y acontecimientos.
      </motion.p>

      <motion.form
       initial={{ y: 100, opacity:0 }}
       whileInView={{ y: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration:0.8 }}
      className="flex  flex-col sm:flex-row  w-[90%] sm:w-[60%] mx-auto mt-4">
        <label className="w-full">
          <input
            type="email"
            placeholder="Coloca tu Email*"
            className=" bg-primary-200 py-2 px-2 w-full outline-none border-none font-medium "
          />
        </label>
        <motion.button
        whileHover={{textShadow:"0px 0px 8px rgb(225,225,225)"}}
        className="btn  h-50 w-[100px] m-auto sm:h-full sm:mt-0 mt-3 bg-primary-100 border-none">Enviar</motion.button>
      </motion.form>
    </section>
  );
};

export default Newsletter;
