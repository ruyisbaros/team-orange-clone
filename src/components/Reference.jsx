import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Tlikes from "./../assets/2kikes.jpg";
import { references } from "../utils/helpers";
import SingleReference from "./SingleReference";
import CounterUp from "react-countup";
import Trigger from "react-scroll-trigger";
import { motion, stagger } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const positions = [
  { top: "0", left: "0" },
  { top: "-230px", left: "396px" },
  { top: "-470px", left: "790px" },
  { top: "-435px", left: "0" },
  { top: "-670px", left: "396px" },
  { top: "-905px", left: "790px" },
  { top: "-870px", left: "0" },
  { top: "-1100px", left: "396px" },
  { top: "-1335px", left: "790px" },
  { top: "-1305px", left: "0" },
  { top: "-1535px", left: "396px" },
  { top: "-1770px", left: "790px" },
];

const Reference = () => {
  const refBox = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const [startCounter, setStartCounter] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isNowInView, setIsNowInView] = useState();

  let entry;
  useEffect(() => {
    const observer = new IntersectionObserver((ents) => {
      entry = ents[0];
      console.log(entry);
      setIsNowInView(entry.isIntersecting);
      setIsCompleted(false);
    });
    observer.observe(refBox.current);
  }, [entry]);
  console.log(isNowInView);
  const imgs = document.querySelectorAll(".anim-img");

  gsap.set(".anim-img", {
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
  });
  gsap.to(".anim-img", {
    scale: 1,
    width: "360px",
    height: "235px",
    stagger: 0.2,
    duration: 0.85,
    ease: "power2.out",
    delay: 1,
    onComplete: handleShrink,
  });
  function handleShrink() {
    setTimeout(() => {
      setIsCompleted(true);
    }, 2500);
  }

  return (
    <Trigger
      onEnter={() => setStartCounter(true)}
      onExit={() => setStartCounter(false)}
    >
      <section id="referenzen" className="w-full min-h-screen overflow-hidden">
        <div
          className={`w-full h-[600px] transition-all duration-300 flex items-center justify-center`}
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
                      <span
                        data-val="57"
                        className="text-designColor text-[60px]"
                      >
                        {startCounter && (
                          <CounterUp
                            start={0}
                            end={57}
                            duration={5}
                            delay={0}
                          />
                        )}
                      </span>
                      <span className="text-[40px] ml-2">%</span>
                    </div>
                    <p className="font-bold text-[20px]">Industrie</p>
                  </div>
                </div>
                <div className="w-[260px] h-[174px] parBox">
                  <div className="w-full h-full flex flex-col justify-center items-center gap-[1.5rem]">
                    <div>
                      <span
                        data-val="32"
                        className="text-designColor text-[60px] counter"
                      >
                        {startCounter && (
                          <CounterUp
                            start={0}
                            end={32}
                            duration={5}
                            delay={0}
                          />
                        )}
                      </span>
                      <span className="text-[40px] ml-2">%</span>
                    </div>
                    <p className="font-bold text-[20px]">Dienstleistung</p>
                  </div>
                </div>
                <div className="w-[260px] h-[174px] parBox">
                  <div className="w-full h-full flex flex-col justify-center items-center gap-[1.5rem]">
                    <div>
                      <span
                        data-val="11"
                        className="text-designColor text-[60px] counter"
                      >
                        {startCounter && (
                          <CounterUp
                            start={0}
                            end={11}
                            duration={5}
                            delay={0}
                          />
                        )}
                      </span>
                      <span className="text-[40px] ml-2">%</span>
                    </div>
                    <p className="font-bold text-[20px]">Handel</p>
                  </div>
                </div>
                <div className="w-[260px] h-[174px] parBox">
                  <div className="w-full h-full flex flex-col justify-center items-center gap-[1.5rem]">
                    <div>
                      <span
                        data-val="0"
                        className="counter text-designColor text-[60px]"
                      >
                        0
                      </span>
                      <span className="text-[40px] ml-2">%</span>
                    </div>
                    <p className="font-bold text-[20px]">Erdbeerjoghurt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[1170px] mx-auto relative ${
            isCompleted ? "img-anim-case" : ""
          }`}
          ref={refBox}
        >
          {references.map((ref, i) => (
            <SingleReference
              key={ref.id}
              img={ref.img}
              i={i}
              isNowInView={isNowInView}
              isCompleted={isCompleted}
            />
          ))}
        </div>
        <div className="w-full mt-[4rem] mb-[3rem] flex justify-center items-center">
          <p className="font-bold text-designColor text-[20px] cursor-pointer">
            ...mehr Referenzen
          </p>
        </div>
      </section>
    </Trigger>
  );
};

export default Reference;
