import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HiBriefcase } from "react-icons/hi2";

const Skills = () => {
  const { t } = useLanguage();
  const items = t("experience.items") as Array<{
    dateRange: string;
    title: string;
    company: string;
    description: string;
  }>;

  return (
    <div id="experience" className="section-secondary pt-[6rem] md:pt-[8rem] pb-[5rem]">
      <h2 className="heading">
        {t("experience.heading")}{" "}
        <span className="text-yellow-400">{t("experience.headingHighlight")}</span>
      </h2>

      <div className="w-[90%] lg:w-[80%] mx-auto pt-[4rem] relative">
        {/* Timeline line */}
        <div
          className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] hidden md:block"
          style={{ background: "var(--accent-green)", opacity: 0.3, transform: "translateX(-50%)" }}
        />

        {Array.isArray(items) &&
          items.map((item, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
              className={`flex flex-col md:flex-row items-start mb-[3rem] relative ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[12px] md:left-1/2 top-[1.5rem] w-[18px] h-[18px] rounded-full border-[3px] z-10 hidden md:block"
                style={{
                  borderColor: "var(--accent-green)",
                  background: "var(--bg-secondary)",
                  transform: "translateX(-50%)",
                }}
              />

              {/* Content card */}
              <div className={`glass-card p-[2rem] w-full md:w-[45%] ${
                index % 2 === 0 ? "md:mr-auto md:pr-[3rem]" : "md:ml-auto md:pl-[3rem]"
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <HiBriefcase
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "var(--accent-green)" }}
                  />
                  <span
                    className="px-3 py-1 text-[13px] font-bold rounded-full"
                    style={{
                      background: "rgba(85, 230, 165, 0.15)",
                      color: "var(--accent-green)",
                      border: "1px solid rgba(85, 230, 165, 0.3)",
                    }}
                  >
                    {item.dateRange}
                  </span>
                </div>

                <h3
                  className="text-[18px] md:text-[22px] font-bold font-heading mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-[14px] font-semibold mb-3 uppercase tracking-wider"
                  style={{ color: "var(--accent-yellow)" }}
                >
                  {item.company}
                </p>

                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;