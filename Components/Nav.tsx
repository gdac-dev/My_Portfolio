import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-[100%] fixed z-[10000] top-0 h-[12vh] shadow-lg transition-all duration-300"
      style={{
        background: "var(--bg-nav)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--glass-border)",
      }}
    >
      <div className="flex items-center justify-between w-[90%] lg:w-[80%] mx-auto h-[100%]">
        {/* Logo */}
        <div
          className="flex-[0.6] cursor-pointer flex items-center"
          onClick={() => scrollTo("hero")}
        >
          <Image
            src="/images/logo.png"
            alt="GDAC Tech Logo"
            width={150}
            height={45}
            className="object-contain dark:invert-0 invert transition-all duration-300"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="nav-link" onClick={() => scrollTo("hero")}>
            {t("nav.home")}
          </div>
          <div className="nav-link" onClick={() => scrollTo("about")}>
            {t("nav.about")}
          </div>
          <div className="nav-link" onClick={() => scrollTo("services")}>
            {t("nav.services")}
          </div>
          <div className="nav-link" onClick={() => scrollTo("experience")}>
            {t("nav.experience")}
          </div>
          <div className="nav-link" onClick={() => scrollTo("projects")}>
            {t("nav.projects")}
          </div>
          <div className="nav-link" onClick={() => scrollTo("contact")}>
            {t("nav.contact")}
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLocale(locale === "en" ? "fr" : "en")}
            className="px-3 py-1.5 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all duration-300 border"
            style={{
              borderColor: "var(--accent-green)",
              color: "var(--accent-green)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-green)";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--accent-green)";
            }}
            aria-label={`Switch to ${locale === "en" ? "French" : "English"}`}
          >
            {locale === "en" ? "FR" : "EN"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-300"
            style={{
              color: "var(--accent-yellow)",
              background: "rgba(250, 204, 21, 0.1)",
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLocale(locale === "en" ? "fr" : "en")}
            className="px-2 py-1 rounded text-[12px] font-bold uppercase border"
            style={{
              borderColor: "var(--accent-green)",
              color: "var(--accent-green)",
            }}
          >
            {locale === "en" ? "FR" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded"
            style={{ color: "var(--accent-yellow)" }}
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
          <div onClick={openNav}>
            <Bars3Icon
              className="w-[2rem] h-[2rem] cursor-pointer"
              style={{ color: "var(--accent-yellow)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
