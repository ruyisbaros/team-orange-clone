import React, { useLayoutEffect } from "react";
import { customers } from "../utils/helpers";
import Tlikes from "./../assets/2kikes.jpg";
import indutrie from "./../assets/industrie-dienstleistung-handel.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Customers = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".kunden-img",
      { opacity: 0.1, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 4,
        scrollTrigger: {
          trigger: ".kunden-img",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section
      id="kunden"
      className="w-full min-h-screen pb-[2rem] overflow-hidden"
    >
      <div className="w-[6060px] h-[150px] bg-designColor flex items-center flex-nowrap overflow-hidden">
        {customers.map((cst) => (
          <div
            key={cst.id}
            className="w-[300px] h-[50px] flex items-center justify-center"
          >
            <img
              src={cst.img}
              alt=""
              className="w-[200px] h-[50px] object-contain"
            />
          </div>
        ))}
      </div>
      <div
        className="w-full h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Tlikes})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "lighten",
        }}
      >
        <div className="w-[70%] h-[70%] ">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-[30%] pb-2 mb-2 text-center text-white text-[16px] font-normal tracking-tight border-b-[1px] border-b-[#fff]">
              SPECIALIZAT:ON
            </div>
            <div
              className="w-[45%] text-center text-white text-[39px] font-bold tracking-tight 
            leading-[40px] mt-2"
            >
              BESONDERE WERBUNG <br /> FÜR BESONDERE UNTERNEHMEN
            </div>
          </div>
          <div className="w-[60%] mx-auto mt-[1.5rem]">
            <p className="text-white text-center text-[20px] leading-[26px]">
              team:orange macht keine Massenwerbung, Das können andere besser.
              Wir machen lieber Kommunikation für heterogene Zielgruppen und
              Unternehmen, die komplexe Produkte und Dienstleistungen anbieten.
              Denn{" "}
              <span className="bg-designColor p-[2px]">
                das können wir besser
              </span>{" "}
              als andere.
            </p>
          </div>
        </div>
      </div>
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
