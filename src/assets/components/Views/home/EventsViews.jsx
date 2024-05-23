import React from "react";
import { Link, useParams } from "react-router-dom";
import { EVENTS } from "../../../data/home";
import { motion } from "framer-motion";

const EventsViews = () => {
  const { id } = useParams();

  const item = EVENTS.find((item) => item.id === id);
  const { title, image, description } = item;

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 100, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className=" flex flex-col justify-center h-auto items-center w-full"
    >
      <div
        className="w-full h-[100vh] ] bg-cover bg-top bg-no-repeat "
        style={{ backgroundImage: `url('${image}')` }}
      ></div>

      <section className="w-full h-auto   flex flex-col justify-center gap-y-10">
        {/* Contenedor de texto/ */}
        <div className="w-full h-auto  flex">
          {/* Contenido de texto/ */}
          <div className="w-full h-full   flex flex-col justify-center">
            {/* Texto */}
            <div className="text-center my-10 flex flex-col gap-y-10">
              <h1 className="h1 w-[90%] m-auto md:w-[full] text-primary-400">
                {title}
              </h1>
              <p className=" w-[90%] md:w-[70%]  text-md md:text-2xl text-left m-auto leading-relaxed tracking-[4px] font-light">
                <span className="text-primary-400 ">{title}</span> {description}
              </p>
            </div>
            {/* Texto animado */}
            <motion.h5
             initial={{ y: 100, opacity: 0 }}
             exit={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ ease: "easeOut", delay: 0.3 }}
            className="h5 text-start w-[90%] m-auto py-5 tracking-widest text-primary-400 ">
              INFORMACION
            </motion.h5>
            <div className="gap-y-5 flex flex-col">
              {" "}
              {/* INFO informacion */}
              <motion.div 
               initial={{ y: 100, opacity: 0 }}
               exit={{ y: 100, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ ease: "easeOut", delay: 0.3 }}
              className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start ">
                <div className="w-[70%]  m-auto">
                  <img src={image} alt="image-info" className="w-full h-full" />
                </div>
                <div className=" w-[100%] md:w-[50%]   justify-end  m-auto  text-left px-5 gap-5 flex flex-col">
                  <h2 className=" h3 text-primary-400 ">REGLAS</h2>
                  <p className=" w-[90%] text-lg xl:text-xl tracking-wider font-light tracking-widest  ">
                    El Comité Directivo de la Asociación de Fisicoculturismo en
                    Argentina es el cuerpo de liderazgo encargado de establecer
                    la dirección estratégica y las políticas que guían el
                    desarrollo y la promoción del fisicoculturismo en el país.
                  </p>
                  <Link to={"/moreComite"}>
                    <button className="btn-lg  bg-neutral-400 border-none tracking-[3px] font-light hover:bg-primary-300 hover:text-primary-400  hover:rounded-md hover:scale-110 transition-all duration-100 hover:font-bold hover:text-md  ">
                      {" "}
                      VER MAS
                    </button>
                  </Link>
                </div>
              </motion.div>{" "}
              {/* INFO informacion */}
              <motion.div 
               initial={{ y: 100, opacity: 0 }}
               exit={{ y: 100, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ ease: "easeOut", delay: 0.3 }}
              className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start ">
                <div className=" w-[100%] md:w-[50%]   justify-end  m-auto  text-left px-5 gap-5 flex flex-col">
                  <h2 className=" h3 text-primary-400 ">INSCRIPCION</h2>
                  <p className=" w-[90%] text-lg xl:text-xl font-light  tracking-widest ">
                    Desde la planificación inicial hasta la ejecución y el
                    seguimiento posterior, este equipo trabajará incansablemente
                    para garantizar que cada evento sea un éxito.
                  </p>
                  <Link to={`/EventViews/${id}/RegistrationForm`}>
                    <button className="btn-lg  bg-neutral-400 border-none tracking-[3px] font-light hover:bg-primary-300 hover:text-primary-400  hover:rounded-md hover:scale-110 transition-all duration-100 hover:font-bold hover:text-md  ">
                      {" "}
                      INSCRIBIRSE
                    </button>
                  </Link>
                </div>
                <div className="w-[70%]  m-auto">
                  <img src={image} alt="image-info" className="w-full h-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default EventsViews;
