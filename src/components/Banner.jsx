import React, { useEffect, useState } from "react";
import { banners } from "../utils/helpers";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  //const [isCompleted, setIsCompleted] = useState(true);

  const BannerTitle = () => {
    return (
      <div>
        <h1 className="text-white font-bold text-[70px] w-full text-center uppercase titleAnim">
          {banners[activeIndex].title1}
        </h1>
        <h1 className="text-designColor font-bold text-[70px] w-full text-center uppercase -mt-[35px]  titleAnim">
          {banners[activeIndex].title2}
        </h1>
      </div>
    );
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (activeIndex >= 0 && activeIndex < banners.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (activeIndex === banners.length - 1) {
        setActiveIndex(0);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [activeIndex]);
  useEffect(() => {
    BannerTitle();
  }, []);
  return (
    <div
      data-image={banners[activeIndex].img}
      className="w-full h-screen banCover overflow-hidden relative"
    >
      <div>
        <img src={banners[activeIndex].img} alt="" className="w-full -h-full" />
      </div>
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="w-full h-full flex items-center justify-center banContext overflow-hidden"
        >
          <div className="w-[45%] h-1/2 flex flex-col items-center justify-center ">
            <div className="w-full flex flex-col items-center border-b-[1px] border-b-[#ddd] border-opacity-50">
              <p className="w-full text-center text-white tracking-[1.5px] font-[600] opacity-[.8]">
                TEST WEB- UND WERBEAGENTUR FÜR ERKLÄRUNGSBEDÜRFTIGE PRODUKTE UND
              </p>
              <p className="w-full text-center text-white tracking-[1.5px] font-[600] opacity-[.8]">
                DIENSTLEISTUNGEN
              </p>
            </div>
            <BannerTitle />
            <button className="uppercase text-[13px] banBut opacity-[.8] tracking-[1.5px]">
              <a href="#kommunikation">enter workstat:on</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
