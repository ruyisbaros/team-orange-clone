import React, { useEffect, useLayoutEffect, useRef } from "react";
import { FaPlusCircle } from "react-icons/fa";
import gear from "./../assets/pa_1-removebg-preview.png";
import fleisch from "./../assets/fleischwolf.png";
import process from "./../assets/prozess.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Communication = () => {
  const comRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    /* const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".comL1",
        markers: true,
      },
    }); */
    gsap.fromTo(
      ".comL1",
      {
        x: -100,
        opacity: 0.2,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".comL1",
          //scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".comR1",
      {
        x: 100,
        opacity: 0.2,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".comR1",
          //scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".comL2",
      {
        x: -100,
        opacity: 0.2,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".comL2",
          //scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".comR2",
      {
        x: 100,
        opacity: 0.2,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".comR2",
          //scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".comL3",
      {
        x: -100,
        opacity: 0.2,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
        scrollTrigger: {
          trigger: ".comL2",
          //scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".comR3",
      {
        x: 100,
        opacity: 0.2,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
        scrollTrigger: {
          trigger: ".comR2",
          //scrub: true,
        },
      }
    );
  }, []);

  /*  right: 10rem;
  top: -43px;
  width: 26%; */
  useLayoutEffect(() => {
    gsap.fromTo(
      ".fleisch",
      { x: -700, opacity: 0.1, scale: 0.5 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".fleisch",
          scrub: true,
        },
      }
    );
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".process",
      { x: 700, opacity: 0.1 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".process",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section
      id="kommunikation"
      className="w-full min-h-screen pt-[3rem] pb-[2rem]"
    >
      <div className="w-[1170px] mx-auto">
        <div className="w-[750px] mx-auto h-[280px]  text-center flex items-center justify-center">
          <div className="">
            <div>
              <div className="w-[45%] pb-[10px] mx-auto border-b-[1px] border-b-designColor">
                POSIT:ON
              </div>
              <h1 className="text-[40px] text-[#33333] font-[700] tracking-tighter">
                B2B KOMMUNIKATION,
              </h1>
              <h1 className="text-[40px] text-[#33333] -mt-[20px] font-[700] tracking-tighter">
                DIE SICH AUSZAHLT
              </h1>
            </div>
            <div className="mt-[20px]">
              <p className="text-[19.5px] text-[#4d4b4b]">
                Als{" "}
                <span className="text-designColor font-bold">
                  Web- und Werbeagentur
                </span>{" "}
                mit Sitz in Esslingen bei Stuttgart wissen wir, worauf es vielen
                Unternehmen aus dem B2B Umfeld ankommt: ein hoher
                Kosten-Nutzen-Effekt. Deswegen zeigen Aktionen von team:orange
                nicht nur kurzfristig Wirkung, sondern zahlen auch langfristig
                immer auf das Konto Ihrer Marke ein.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[500px] flex items-center gap-[1.5rem]"
          ref={comRef}
        >
          <div className="left">
            <ul>
              <li className="comL1 w-full h-[140px] flex gap-[1rem]">
                <div className="w-[97px] h-[87px]  flex items-center justify-center">
                  <div className="bg-designColor w-[72px] h-[72px] rounded-full flex items-center justify-center">
                    <span className="text-white text-[25px]">
                      <i className="fa fa-external-link"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#333] text-[20px] mb-[10px] mt-[10px]">
                    Hoher Kosten-Nutzen-Effekt
                  </h1>
                  <p className="text-[#4d4b4b]">
                    Gerade kleine Werbebudgets bedürfen einer{" "}
                    <span className="text-designColor font-bold">
                      maximalen Werbewirkung.
                    </span>{" "}
                    team:orange erreicht dies mit frischen Ideen und
                    maßgeschneiderten Strategien. So machen wir Unternehmen von
                    10 bis 10.000 Mitarbeitern erfolgreich.
                  </p>
                </div>
              </li>
              <li className="comL2 w-full h-[140px] flex gap-[1rem]">
                <div className="w-[97px] h-[87px]  flex items-center justify-center">
                  <div className="bg-designColor w-[72px] h-[72px] rounded-full flex items-center justify-center">
                    <span className="text-white text-[25px]">
                      <i className="fa-regular fa-circle-dot"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#333] text-[20px] mb-[10px] mt-[10px]">
                    Integrierte Kommunikation
                  </h1>
                  <p className="text-[#4d4b4b]">
                    Bei jedem Projekt, das team:orange betreut, wird immer auch
                    die{" "}
                    <span className="text-designColor font-bold">
                      ganzheitliche Unternehmenskommunikation
                    </span>{" "}
                    beachtet. So wird gewährleistet, dass alle Maßnahmen
                    ineinander greifen und sich ihre Werbewirkung multipliziert.
                  </p>
                </div>
              </li>
              <li className="comL3 w-full h-[140px] flex gap-[1rem]">
                <div className="w-[97px] h-[87px]  flex items-center justify-center">
                  <div className="bg-designColor w-[72px] h-[72px] rounded-full flex items-center justify-center">
                    <span className="text-white text-[25px]">
                      <i className="fa fa-desktop"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#333] text-[20px] mb-[10px] mt-[10px]">
                    Effektive Weblösungen
                  </h1>
                  <p className="text-[#4d4b4b]">
                    Aufgaben im Web erfordern individuelle Vorgehensweisen. Mal
                    ist eine spezialisierte Individuallösung gefragt, mal eine
                    kosten­orientierte Standardlösung. Denn was zählt, sind{" "}
                    <span className="text-designColor font-bold">
                      Leads, Suchmaschinen­treffer und Inhalte,
                    </span>{" "}
                    die überzeugen.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li className="comR1 w-full h-[140px] flex gap-[1rem]">
                <div className="w-[97px] h-[87px]  flex items-center justify-center">
                  <div className="bg-designColor w-[72px] h-[72px] rounded-full flex items-center justify-center">
                    <img src={gear} alt="" className="gear" />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#333] text-[20px] mb-[10px] mt-[10px]">
                    Erklärungsbedürftige Themen
                  </h1>
                  <p className="text-[#4d4b4b]">
                    Wer im B2B-Umfeld Kunden auf sich ziehen will, kommt mit der
                    immer gleichen Werbung nicht weiter. Er braucht eine
                    Agentur, die auf die Vermarktung{" "}
                    <span className="text-designColor font-bold">
                      erklärungsbedürftiger Produkte und Dienstleistungen
                    </span>{" "}
                    spezialisiert ist.
                  </p>
                </div>
              </li>
              <li className="comR2 w-full h-[140px] flex gap-[1rem]">
                <div className="w-[97px] h-[87px]  flex items-center justify-center">
                  <div className="bg-designColor w-[72px] h-[72px] rounded-full flex items-center justify-center">
                    <span className="text-white text-[25px]">
                      <i className="fa fa-users"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#333] text-[20px] mb-[10px] mt-[10px]">
                    Besondere Kunden und Zielgruppen
                  </h1>
                  <p className="text-[#4d4b4b]">
                    Die Spezialität von team:orange ist die Kommunikation für{" "}
                    <span className="text-designColor font-bold">
                      kleine und heterogene Zielgruppen.
                    </span>{" "}
                    Unser Motto lautet: Besser 100 gut ausgesuchte Kunden
                    erfolgreich ansprechen, als an 1.000 vorbeikommunizieren.
                  </p>
                </div>
              </li>
              <li className="comR3 w-full h-[140px] flex gap-[1rem]">
                <div className="w-[97px] h-[87px]  flex items-center justify-center">
                  <div className="bg-designColor w-[72px] h-[72px] rounded-full flex items-center justify-center">
                    <FaPlusCircle size={25} color="#fff" />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#333] text-[20px] mb-[10px] mt-[10px]">
                    Nachhaltige Betreuung
                  </h1>
                  <p className="text-[#4d4b4b]">
                    Ist ein Projekt beendet, fängt die Betreuung an. Zu dieser
                    gehören Schulungen und Support bei{" "}
                    <span className="text-designColor font-bold">
                      Newsletterversand, Content Management, Social-Media
                    </span>{" "}
                    genauso wie die kontinuierliche Durchführung von Updates
                    oder Backups.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[410px] flex items-center relative">
        <div className="w-full h-[170px] bg-designColor flex items-center justify-center">
          <h1 className="underline text-[22px] font-bold text-white">
            PERSÖNLICH KENNENLERNEN
          </h1>
        </div>
        <img
          src={fleisch}
          alt=""
          className="fleisch bg-transparent imgFleisch"
        />
      </div>
      <div className="w-full h-[180px]">
        <div className="w-[30%] mx-auto ">
          <div>
            <h3 className="text-[22px] text-[#333] tracking-tighter font-bold text-center">
              Effizienz ist ein Prozess.
            </h3>
            <p className="text-center prozess">
              Klar strukturierte Abläufe erhöhen die Effizienz und{" "}
              <span className="text-designColor font-bold">
                sparen Nerven, Zeit und Geld.
              </span>{" "}
              Deshalb arbeitet team:orange als Agentur nicht irgendwie, sondern
              nach einer erprobten und bewährten Methode.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[340px] flex items-center justify-center overflow-hidden">
        <img src={process} alt="" className="process" />
      </div>
      <div className="w-full h-[182px] flex items-center justify-center">
        <p className="w-[40%] text-[14px] text-[#4f4d43]">
          Konzeption, Text, Grafik, Programmierung, Logo, Briefbogen,
          Visitenkarten, Mappe Website, Webspecials, Webbanner, Webgames,
          Anzeigen, Broschüre, Flyer, Folder, Corporate Design, Relaunch,
          Beschilderung, Mailing, Stellenanzeigen, Anzeigenkoordination,
          Website, Homepage, Internet, Katalog, Onlineshop, Webshop,
          Konfigurator, Geschäftsausstattung, Fahrzeugbeschriftung,
          Kundenmagazin, Karriereportal, Webdesign, Digital Druck, Veredelung,
          Produktion, Messe, Event, OneOnOne, PHP, HTML5, Concrete5, Marketing,
          klassische Werbung, Broschüren, Produkteinführung, Print & Screen,
          Dienstleistung
        </p>
      </div>
    </section>
  );
};

export default Communication;
