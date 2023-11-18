import React, { useState } from "react";
import Tlikes from "./../assets/2kikes.jpg";
import { references } from "../utils/helpers";
import SingleReference from "./SingleReference";

const Reference = () => {
  return (
    <section id="referenzen" className="w-full min-h-screen">
      <div
        className="w-full h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Tlikes})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "lighten",
        }}
      >
        <div className="w-[70%] h-[70%] ">
          <div className="flex flex-col items-center justify-center opacity-[.8]">
            <div className="w-[30%] pb-2 mb-2 text-center text-white text-[16px] font-normal tracking-tight border-b-[1px] border-b-[#fff]">
              PRESENTAT:ON
            </div>
            <div
              className="w-[45%] text-center text-white text-[39px] font-bold tracking-tight 
            leading-[40px] mt-2"
            >
              ERKLÄRUNGSBEDÜRFTIGE <br /> PRODUKTE UND DIENSTLEISTUNGEN <br />{" "}
              SEIT 1999
            </div>
          </div>
          <div className="text-white w-full h-[70%] flex justify-center mt-[1rem]">
            <div className="text-white w-full flex items-center justify-center gap-[3rem]">
              <div className="w-[260px] h-[174px] parBox">
                <div className="w-full h-full flex flex-col justify-center items-center gap-[1.5rem]">
                  <div className="">
                    <span className="text-designColor text-[60px]">57</span>
                    <span className="text-[40px] ml-2">%</span>
                  </div>
                  <p className="font-bold text-[20px]">Industrie</p>
                </div>
              </div>
              <div className="w-[260px] h-[174px] parBox">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div>
                    <span className="text-designColor text-[60px]">32</span>
                    <span className="text-[40px] ml-2">%</span>
                  </div>
                  <p className="font-bold text-[20px]">Dienstleistung</p>
                </div>
              </div>
              <div className="w-[260px] h-[174px] parBox">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div>
                    <span className="text-designColor text-[60px]">11</span>
                    <span className="text-[40px] ml-2">%</span>
                  </div>
                  <p className="font-bold text-[20px]">Handel</p>
                </div>
              </div>
              <div className="w-[260px] h-[174px] parBox">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div>
                    <span className="text-designColor text-[60px]">0</span>
                    <span className="text-[40px] ml-2">%</span>
                  </div>
                  <p className="font-bold text-[20px]">Erdbeerjoghurt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1170px] mx-auto flex flex-wrap mt-[5rem] mb-[5rem] gap-[2rem]">
        {references.map((ref) => (
          <SingleReference key={ref.id} img={ref.img} />
        ))}
        <div className="w-full mt-[3rem] flex justify-center items-center">
          <p className="font-bold text-designColor text-[20px] cursor-pointer">
            ...mehr Referenzen
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reference;
