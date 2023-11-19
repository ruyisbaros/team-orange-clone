import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const SingleReference = ({ img, i, isNowInView, isCompleted }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      className={`w-[360px] h-[235px] cursor-pointer  ${
        !isCompleted ? "anim-img" : ""
      } `}
      onMouseOver={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <img
        src={img}
        alt=""
        className="ref-img transition-all duration-300 anim-img-instance"
      />
      <div className={`overlay ${showOverlay ? "overlay2" : ""}`}>
        <div>
          <h1 className="uppercase font-normal text-white text-[18px] text-center">
            Lorem
          </h1>
          <h2 className="uppercase font-normal text-white text-[18px] text-center">
            Lorem, ipsum.
          </h2>
          <p className="uppercase font-normal text-white text-[14px] text-center">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleReference;
