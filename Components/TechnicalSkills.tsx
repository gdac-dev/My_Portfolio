import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { skills, skillCategories } from "@/data/skills";
import ParallaxItem from "./ParallaxItem";
import {
  HiCodeBracket,
  HiServerStack,
  HiChartBar,
  HiCircleStack,
  HiCloud,
  HiWrenchScrewdriver,
  HiCog6Tooth,
  HiGlobeAlt,
} from "react-icons/hi2";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <HiCodeBracket className="w-5 h-5" />,
  Backend: <HiServerStack className="w-5 h-5" />,
  "Data Analysis": <HiChartBar className="w-5 h-5" />,
  Databases: <HiCircleStack className="w-5 h-5" />,
  Cloud: <HiCloud className="w-5 h-5" />,
  Tools: <HiWrenchScrewdriver className="w-5 h-5" />,
  ERP: <HiCog6Tooth className="w-5 h-5" />,
  CMS: <HiGlobeAlt className="w-5 h-5" />,
};

const TechnicalSkills = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="section-tertiary pt-[6rem] md:pt-[8rem] pb-[5rem]"
    >
      <h2 className="heading">
        {t("skills.heading")}{" "}
        <span className="text-yellow-400">{t("skills.headingHighlight")}</span>
      </h2>

      <div className="w-[90%] lg:w-[80%] mx-auto pt-[3rem] grid grid-cols-1 md:grid-cols-2 gap-x-[3rem] gap-y-[2.5rem]">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category} data-aos="fade-up">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <ParallaxItem speed={6} className="inline-block">
                  <span
                    className="p-2 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(85, 230, 165, 0.12)",
                      color: "var(--accent-green)",
                    }}
                  >
                    {categoryIcons[category]}
                  </span>
                </ParallaxItem>
                <h3
                  className="text-[18px] font-bold font-heading uppercase tracking-wider"
                  style={{ color: "var(--text-primary)" }}
                >
                  {category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span
                        className="text-[14px] font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-[13px] font-bold"
                        style={{ color: "var(--accent-green)" }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-bar-fill ${isVisible ? "animate" : ""}`}
                        style={
                          {
                            "--skill-level": `${skill.percentage}%`,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalSkills;
