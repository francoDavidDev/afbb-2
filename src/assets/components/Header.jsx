import React, { useEffect, useState } from "react";
import image from "../imgs/logo.png";
import Nav from "./Nav";
// import react icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";

const Header = () => {


  
  //estado del header
  const [isActive, setIsActive] = useState(false);

  //nav mobile estado
  const [navMobile, setNavMobile] = useState(false);

  
  

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <motion.header
    initial={{  opacity: 0 }}
    animate={{  opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    whileInView={{  opacity: 1 }}
    transition={{ ease: "easeOut", duration:0.5 }}
      className={`${
        isActive ? "bg-primary-300  py-[0px]" : "bg-primary-300  py-[10px]"
      }  sticky top-0 max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      <img src= {image} alt="logo" width={'100px'} />
      {/*nav initially hidden - show on desktop*/}
      <Nav />
      {/**btns - initially hidden -show on desktop */}

      <div
        onClick={() => setNavMobile(!navMobile)}
        className="sm:hidden absolute right-4  "
      >
        {navMobile ? (
          <RiCloseFill className="text-neutral-100 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-neutral-100 text-3xl cursor-pointer " />
        )}
      </div>
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </motion.header>
  );
};

export default Header;
