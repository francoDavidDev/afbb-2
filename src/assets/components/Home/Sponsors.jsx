import React from "react";
//import react icon
import { FaDumbbell } from "react-icons/fa6";
import { SPONSORS } from "../../../data";
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <section className="w-full h-[auto] py-10 flex flex-col ">
      <div className="w-[95%]  mx-auto  flex flex-col gap-5 ">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="flex justify-start items-center gap-2  py-5 "
        >
          <div>
            <FaDumbbell className="text-5xl text-primary-400" />
          </div>

          <h5 className="h5"> SPONSORS</h5>
          <motion.div className="w-full h-[2px] bg-primary-200 "></motion.div>
        </motion.div>

        <div className=" h-auto flex gap-x-10  justify-evenly items-center py-5 flex-wrap">
          {SPONSORS.map((item, i) => (
            <motion.div 
            key={i}
            initial={{  opacity:0 }}
            whileInView={{  opacity:1 }}
            transition={{ ease: "easeOut", duration:0.4, delay:item.delay }}
            className="flex my-5  w-[280px] h-[200px] bg-neutral-100 rounded-lg  justify-center hover:-translate-y-2 transition-all duration-300 hover:scale-110     cursor-pointer">
              <img src={item.image} className="p-7 w-full h-[200px] " />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
