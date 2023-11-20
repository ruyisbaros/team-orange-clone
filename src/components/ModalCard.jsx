import React from "react";
import { motion } from "framer-motion";

const ModalCard = ({ item, setSelected }) => {
  //console.log(item);
  return (
    <div className="inline-block w-full bg-gradient-to-r from-[#a6a4a7] to-[#e2e2e4]">
      <motion.img
        src={item?.img}
        alt=""
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.85,
          dur: 2,
        }}
        onClick={() => setSelected(item)}
        className="w-full shadow-xl image-full cursor-pointer object-cover"
      />
      <div className="w-full flex flex-wrap mt-2 pb-1">
        {item.tags.map((tag) => (
          <div
            key={tag}
            className="badge bg-gradient-to-r from-[#ff692d] to-[#e6ad98] border-none text-white ml-1 mb-1 tracking-wide"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalCard;
