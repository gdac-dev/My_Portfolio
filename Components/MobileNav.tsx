import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const { t } = useLanguage();
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const scrollTo = (id: string) => {
    closeNav();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000]`}
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-2">
        <div className="nav-link-mobile" onClick={() => scrollTo("hero")}>
          {t("nav.home")}
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("about")}>
          {t("nav.about")}
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("services")}>
          {t("nav.services")}
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("experience")}>
          {t("nav.experience")}
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("projects")}>
          {t("nav.projects")}
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("contact")}>
          {t("nav.contact")}
        </div>
      </div>

      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem]"
        style={{ color: "var(--accent-yellow)" }}
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;