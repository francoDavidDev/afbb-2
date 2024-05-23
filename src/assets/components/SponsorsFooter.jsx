import React, { useRef } from 'react'
import { SPONSORS } from '../../data'
import poweradeVideo from "../videos/powerade.mp4";

const SponsorsFooter = () => {

    const videoRef = useRef();
  return (
    <div className="b w-full h-[auto] py-5 justify-center items-center ">
    <div className="w-[90%] flex justify-start items-center m-auto py-10 ">
      <h5 className="h5 text-primary-400 "> EVENT SPONSORS</h5>
    </div>
    <div className="w-[90%] m-auto  ">
      <div className="flex flex-row justify-start items-center  m-auto gap-x-10 ">
        {SPONSORS.map((item, index) => (
          <div key={index} className="w-[200px]  h-[100px]  ">
            <img src={item.image} alt="" className="w-full h-full" />
          </div>
        ))}
        <div className="w-[500px]  h-[200px] flex-grow ">
          <video
            className="pointer-events-none w-full h-full scale "
            playsInline
            preload="none"
            muted
            autoPlay
            loop
          >
            <source src={poweradeVideo} ref={videoRef} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SponsorsFooter
