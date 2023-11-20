import React, { useRef, useState } from "react";
//import Tlikes from "./../assets/2kikes.jpg";
import par from "./../assets/prlx.png";
import CounterUp from "react-countup";
import Trigger from "react-scroll-trigger";
import Modal from "./Modal";
import CustomerList from "./CustomerList";
import { motion, useScroll, useTransform } from "framer-motion";

const Reference = () => {
  const ref = useRef(null);
  const [startCounter, setStartCounter] = useState(false);
  const [selected, setSelected] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "220%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <Trigger
      onEnter={() => setStartCounter(true)}
      onExit={() => setStartCounter(false)}
    >
      <section id="referenzen" className="w-full min-h-screen overflow-hidden">
        <motion.div
          className={`w-full h-[600px] transition-all duration-300 flex items-center justify-center`}
          style={{
            backgroundImage: `url(${par})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "lighten",
          }}
          ref={ref}
        >
          <motion.div className="w-[70%] h-[70%] ">
            <motion.div
              className="flex flex-col items-center justify-center opacity-[.8]"
              style={{ y: yBg, fontSize: "12px" }}
            >
              <div className="w-[30%] pb-2 mb-2 text-center text-[#333] text-[16px] font-[500] tracking-tight border-b-[1px] border-b-[#333]">
                PRESENTAT:ON
              </div>
              <div
                className="w-[45%] text-center text-[#333] text-[39px] font-bold tracking-tight 
            leading-[40px] mt-2"
              >
                ERKLÄRUNGSBEDÜRFTIGE <br /> PRODUKTE UND DIENSTLEISTUNGEN <br />{" "}
                SEIT 1999
              </div>
            </motion.div>
            <motion.div className="text-white w-full h-[70%] flex justify-center mt-[1rem]">
              <motion.div className="text-white w-full flex items-center justify-center gap-[3rem]">
                <motion.div className="w-[260px] h-[174px] parBox">
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
                </motion.div>
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
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* List */}
        <div className="w-[1170px] mx-auto relative">
          <CustomerList setSelected={setSelected} />
          {selected && <Modal selected={selected} setSelected={setSelected} />}
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
