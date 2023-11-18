import React, { useState } from "react";

const SingleReference = ({ img }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div
      className="w-[360px] h-[235px] relative cursor-pointer"
      onMouseOver={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <img src={img} alt="" className="ref-img" />
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
