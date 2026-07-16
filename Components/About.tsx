import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const About = () => {
  const { t } = useLanguage();

  return (
    <div
      id="about"
      className="section-secondary pb-[4rem] pt-[6rem] md:pt-[8rem]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] lg:w-[80%] mx-auto gap-[3rem] items-center">
        {/* Text content */}
        <div data-aos="fade-right">
          <h2
            className="text-[14px] font-bold uppercase tracking-[3px] mb-[1rem]"
            style={{ color: "var(--accent-green)" }}
          >
            {t("about.sectionLabel")}
          </h2>

          <h3
            className="text-[28px] md:text-[36px] lg:text-[44px] md:leading-[3rem] leading-[2.2rem] capitalize mb-[2rem] font-bold font-heading"
            style={{ color: "var(--text-primary)" }}
          >
            {t("about.heading")}{" "}
            <span className="text-yellow-400">{t("about.headingHighlight")}</span>
          </h3>

          <div className="mb-[2rem] flex items-start md:space-x-6">
            <span
              className="w-[80px] hidden md:block h-[4px] rounded-full mt-3 flex-shrink-0"
              style={{ background: "var(--accent-green)" }}
            />
            <p
              className="text-[16px] leading-[1.8] md:text-[17px]"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("about.bio")}
            </p>
          </div>

          {/* Social Links + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="https://www.linkedin.com/in/arsene-demenou/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                <span>{t("about.viewProfile")}</span>
              </button>
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/gdac-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(85, 230, 165, 0.1)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent-green)";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(85, 230, 165, 0.1)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                <FaGithub className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/guekoue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(85, 230, 165, 0.1)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent-green)";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(85, 230, 165, 0.1)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                <FaXTwitter className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/arsene-demenou/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(85, 230, 165, 0.1)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent-green)";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(85, 230, 165, 0.1)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          data-aos="fade-left"
          className="lg:w-[450px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[350px] relative"
        >
          <div className="relative z-[11] w-[100%] h-[100%] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Me_pro.PNG"
              alt="Arsene Demenou"
              fill
              style={{ objectFit: "cover" }}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div
            className="absolute w-[100%] h-[100%] z-[10] rounded-2xl top-[-1.5rem] right-[-1.5rem]"
            style={{ background: "var(--accent-green)", opacity: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
