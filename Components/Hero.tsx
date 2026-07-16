/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { HiOutlineArrowDown } from "react-icons/hi";
import { useLanguage } from "@/context/LanguageContext";
import ParallaxItem from "./ParallaxItem";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="hero"
      className="min-h-[100vh] bg-[url('/images/banner.jpg')] bg-cover bg-center bg-fixed relative"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <Particle />

      <div className="w-[90%] lg:w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] min-h-[100vh] items-center relative z-[2] pt-[14vh] pb-[4vh]">
        {/* Text content */}
        <div className="animate-fade-in-up">
          <h1 className="text-[32px] md:text-[48px] lg:text-[56px] text-white font-bold font-heading leading-tight">
            {t("hero.greeting")}{" "}
            <span className="text-yellow-400">{t("hero.name")}</span>
          </h1>

          <div className="mt-2">
            <TextEffect />
          </div>

          <p className="mt-[1.5rem] text-[16px] md:text-[18px] text-gray-300 leading-relaxed max-w-[550px]">
            {t("hero.subtitle")}
          </p>

          <div className="mt-[2.5rem] flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1R0b0aiudlF4yoZr6JGIrX5TrhBMX8I5U/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                <span>{t("hero.downloadCv")}</span>
                <ArrowDownTrayIcon className="w-5 h-5 text-black" />
              </button>
            </a>

            <button
              onClick={scrollToProjects}
              className="btn-secondary text-white border-white hover:bg-white hover:text-black"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
            >
              <span>{t("hero.viewProjects")}</span>
              <HiOutlineArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile image with parallax */}
        <div className="hidden lg:flex justify-center items-center">
          <ParallaxItem speed={15} className="w-[450px] h-[450px] relative">
            <div
              className="absolute inset-0 rounded-full animate-pulse-glow"
              style={{ background: "var(--accent-green)", opacity: 0.15 }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "var(--accent-green)" }}>
              <Image
                src="/images/Me_pro.PNG"
                alt="Arsene Demenou — Fullstack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ParallaxItem>
        </div>
      </div>
    </div>
  );
};

export default Hero;
