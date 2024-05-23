import React, { useEffect, useState } from "react";
//import logo
import { delay, motion, useAnimate } from "framer-motion";
// Importamos motion y useAnimate de la biblioteca framer-motion, que nos permite crear animaciones en React

//import image
import image from "../imgs/calendar/wheyProtein.jpg";
//import info image
import banner from "../imgs/calendar/bannerMain2.png";
//import sponsorts
import { CALENDAR, SPONSORS } from "../../data";
// import video powerade



import CardLarge from "../components/Calendar/CardLarge";
import CardSmall from "../components/Calendar/CardSmall";
import file from "../../files/rules.pdf";

const ElitePro = () => {
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
  const [dropdown, setDropdown] = useState("");
  

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 100, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full h-auto   flex flex-col justify-center "
    >
      <div
        className="w-full  h-[100vh] flex flex-col-reverse bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('${banner}')` }}
      ></div>

      {/* Contenedor de texto/banner */}
      <div className="w-full h-auto  flex">
        {/* Contenido de texto/banner */}
        <div className="w-full h-full   flex flex-col justify-center">
          {/* Texto */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", delay: 0.3 }}
            className="text-center my-10 flex flex-col gap-y-10"
          >
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 0.3 }}
              className="h1 text-primary-400"
            >
              CALENDARIO
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 0.3 }}
              className=" w-[90%] md:w-[70%]  text-lg md:text-2xl text-left m-auto  tracking-[4px] leading-loose  font-light"
            >
              <span className="text-primary-400   ">
                La Federación de Fisicoculturismo
              </span>{" "}
              El calendario a es una herramienta indispensable para los
              aficionados y competidores de todo el país. Aquí, los usuarios
              pueden explorar y acceder a información detallada sobre los
              próximos torneos, incluyendo fechas, ubicaciones y detalles sobre
              las categorías de competición. Además, el calendario proporciona
              información sobre las reglas y regulaciones de cada torneo,
              garantizando así que los participantes estén debidamente
              informados y preparados para competir. Ya sea que se trate de un
              culturista experimentado o un novato entusiasta.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col text-center gap-y-6 py-10 ">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.3 }}
          className=" h3 uppercase text-primary-400  w-[90%]  "
        >
          ENTERATE DE LOS ULTIMOS EVENTOS
        </motion.h2>
        <motion.h5
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.3 }}
          className="h5 w-[90%]  md:w-[70%] text-left text-lg tracking-[4px]  font-light "
        >
          Podes ver en nuestro calendario los ultimos eventos, no te quedes
          afuera, anotate como competidor o como visitante. Lee bien las reglas
          y las fechas de los evento
        </motion.h5>
      </div>

      {/* DATES */}

      <motion.div
       initial={{ y: 100, opacity: 0 }}
       exit={{ y: 100, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeOut", delay: 0.3 }}
      className=" h-[auto] w-[98%] m-auto flex lg:flex-row flex-col justify-center gap-y-5   items-start ">
        <div className="  md:w-[100%] w-[100%]  h-[auto] gap-y-5 flex  flex-col  justify-center items-center  ">
          {CALENDAR.map((item, index) =>
            w <= 640 ? (
              <CardSmall
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.subtitle}
                hour={item.hour}
                hours={item.hours}
                zone={item.zone}
                rules={item.rules}
                file={file}
              />
            ) : (
              <CardLarge
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.subtitle}
                hour={item.hour}
                hours={item.hours}
                zone={item.zone}
                rules={item.rules}
                file={file}
              />
            )
          )}
        </div>

        <div className="h-[full]  md:h-[auto] w-full lg:w-[30%]  flex flex-row  gap-5 lg:flex-col  justify-center items-center flex-wrap ">
          <img
            src={image}
            alt=""
            className="w-full h-full sm:w-[300px] sm:h-[200px] "
          />
          <img
            src={image}
            alt=""
            className="w-full h-full sm:w-[300px]  sm:h-[200px]  "
          />
        </div>
      </motion.div>

  

    </motion.section>
  );
};

export default ElitePro;
{
  /*{dropdown === item.img? (  <div   ref={scope} className="bg-red-500/40 w-[100%] h-[100%]  z-10  ">
ENTRAR
</div>):(null)}*/
}
