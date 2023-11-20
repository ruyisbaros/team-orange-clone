import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { customers } from "../utils/helpers";
import indutrie from "./../assets/industrie-dienstleistung-handel.jpg";
import par from "./../assets/prlx.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import c1 from "./../assets/c1.png";
import c2 from "./../assets/c2.png";
import c3 from "./../assets/c3.png";
import c4 from "./../assets/c4.png";
import c5 from "./../assets/c5.png";
import c6 from "./../assets/c6.png";
import c7 from "./../assets/c7.png";
import c8 from "./../assets/c8.png";
import c10 from "./../assets/c10.png";
import c9 from "./../assets/c9.png";
import c11 from "./../assets/c11.png";

const title1 = "BESONDERE WERBUNG";
const title2 = "FÜR BESONDERE UNTERNEHMEN";
const prg1 = `team:orange macht keine Massenwerbung, Das können andere besser.
              Wir machen lieber Kommunikation für heterogene Zielgruppen und
              Unternehmen, die komplexe Produkte und Dienstleistungen anbieten.
              Denn`;
const prg2 = "das können wir besser";
const prg3 = "als andere.";

const Customers = () => {
  const refCust = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0].isIntersecting);
    });
    observer.observe(refCust.current);
  }, []);
  console.log(isInView);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".kunden-img",
      { scale: 0.1, x: -600, background: "#ff692d" },
      {
        scale: 1,
        borderRadius: "0%",
        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: ".kunden-img",
          scrub: true,
        },
      }
    );
  }, []);

  /* Parallax animation */
  const { scrollYProgress } = useScroll({
    target: refCust,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  /* Text animation */
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };
  const titleChild = {
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  const parContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      delay: 6,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };

  return (
    <section
      id="kunden"
      className="w-full min-h-screen pb-[2rem] overflow-hidden"
    >
      <div className="slider h-[150px] bg-designColor overflow-hidden relative">
        <div className="slider-track">
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c1} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c2} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c3} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c4} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c5} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c6} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c7} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c8} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c9} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c10} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c11} alt="" className="w-full h-[50px] object-contain" />
          </div>
          {/* doubled */}
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c1} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c2} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c3} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c4} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c5} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c6} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c7} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c8} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c9} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c10} alt="" className="w-full h-[50px] object-contain" />
          </div>
          <div className="slide-img w-[280px] h-[50px] flex items-center justify-center">
            <img src={c11} alt="" className="w-full h-[50px] object-contain" />
          </div>
        </div>
      </div>
      <motion.div
        className="w-full h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${par})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "lighten",
        }}
        ref={refCust}
      >
        <motion.div className="w-[70%] h-[70%] " style={{ y: yBg }}>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-[30%] font-[500] pb-2 mb-2 text-center text-[#333] text-[16px] tracking-tight border-b-[1px] border-b-[#333]">
              SPECIALIZAT:ON
            </div>
            <motion.div
              variants={titleContainer}
              // initial="hidden"
              // animate="visible"
              animate={isInView ? "visible" : "hidden"}
              className="w-[45%] text-center text-[#333] text-[39px] font-bold tracking-tight 
            leading-[40px] mt-2"
            >
              {title1.split("").map((word, i) => (
                <motion.span variants={titleChild} key={i}>
                  {word}
                </motion.span>
              ))}{" "}
              <br />{" "}
              {title2.split("").map((word, i) => (
                <motion.span variants={titleChild} key={i}>
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className="w-[60%] mx-auto mt-[1.5rem]">
            <motion.p
              className="text-[#333] text-center text-[20px] leading-[26px]"
              variants={parContainer}
              animate={isInView ? "visible" : "hidden"}
            >
              {prg1.split("").map((word, i) => (
                <motion.span variants={titleChild} key={i}>
                  {word}
                </motion.span>
              ))}{" "}
              {prg2.split("").map((word, i) => (
                <motion.span
                  variants={titleChild}
                  className="bg-designColor p-[1px] tracking-tighter"
                  key={i}
                >
                  {word}
                </motion.span>
              ))}{" "}
              {prg3.split("").map((word, i) => (
                <motion.span variants={titleChild} key={i}>
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <div className="w-[1170px] mx-auto h-auto">
        <div className="w-full h-[300px]  flex items-center justify-center">
          <div className=" ">
            <div>
              <h3 className="text-[26px] text-[#333] tracking-tighter font-bold text-center">
                B2B Unternehmen ticken anders.
              </h3>
              <p className="text-center prozess w-[62%] mx-auto mt-[1rem]">
                B2B Unternehmen stehen selten im Scheinwerferlicht, verhelfen
                aber vielen Marken dazu. Sie agieren sowohl national als auch
                international – mit 10 oder 10.000 Mitarbeitern. Von einer
                Agentur erwarten sie{" "}
                <span className="text-designColor font-bold">
                  Kompetenz, Themenverständnis und Erfahrung
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[340px] flex items-center justify-center mt-[200px]">
          <img src={indutrie} alt="" className="kunden-img" />
        </div>
        <div className="w-full h-[300px]  flex items-center justify-center mt-[10rem]">
          <div className=" ">
            <div>
              <h3 className="text-[26px] text-[#333] tracking-tighter font-bold text-center">
                B2B Produkte verkauft man anders.
              </h3>
              <p className="text-center prozess w-[62%] mx-auto mt-[1rem]">
                Investitionsgüter sind keine Konsumprodukte. Man bewirbt sie
                nicht zur Primetime im Fernsehen und sie eignen sich selten zum
                Sammeln von Treuepunkten.{" "}
                <span className="text-designColor font-bold">
                  team:orange sagt Ihnen, wie
                </span>{" "}
                diese Produkte dennoch an die Zielgruppe gebracht werden können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
