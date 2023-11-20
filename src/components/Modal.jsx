import React, { useState } from "react";
import { motion } from "framer-motion";

const Modal = ({ selected, setSelected }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div
      className="modalClass bg-black/50 z-50 cursor-pointer overflow-y-scroll scrollBar"
      onClick={() => setSelected(null)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] mx-auto px-8 py-8 mt-[2rem] bg-slate-900 text-white text-[4rem] rounded-md shadow-shadowOne"
        onMouseOver={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <div className="relative">
          <img
            src={selected?.img}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
          <div
            className={`overlay ${showOverlay ? "overlay2 rounded-md" : ""}`}
          >
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

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="bg-white p-4 w-full flex items-center justify-center flex-wrap gap-5 rounded-md"
        >
          {selected.tags.map((tag) => (
            <div
              key={tag}
              className="badge bg-gradient-to-r from-[#ff692d] to-[#e6ad98] border-none text-white tracking-wide"
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
