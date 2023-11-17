import React from "react";
import Tlikes from "./../assets/2kikes.jpg";
const Reference = () => {
  return (
    <section id="referenzen" className="w-full min-h-screen">
      <div
        className="w-full h-[600px]"
        style={{
          backgroundImage: `url(${Tlikes})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "lighten",
        }}
      ></div>
    </section>
  );
};

export default Reference;
