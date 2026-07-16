import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HiArrowTopRightOnSquare, HiLockClosed, HiCalendar } from "react-icons/hi2";

const Projects = () => {
  const { t, locale } = useLanguage();
  const items = t("projects.items") as Array<{
    title: string;
    dateRange: string;
    tech: string[];
    description: string;
    link: string | null;
  }>;

  return (
    <div id="projects" className="section-primary pt-[6rem] md:pt-[8rem] pb-[5rem]">
      <h2 className="heading">
        {t("projects.heading")}
        <span className="text-yellow-400">{t("projects.headingHighlight")}</span>
      </h2>

      <div className="w-[90%] lg:w-[80%] mx-auto pt-[3rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="glass-card p-[2rem] h-full flex flex-col group">
                {/* Date range */}
                <div className="flex items-center gap-2 mb-3">
                  <HiCalendar
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--accent-green)" }}
                  />
                  <span
                    className="text-[13px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.dateRange}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[18px] md:text-[20px] font-bold font-heading mb-3 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="text-[14px] md:text-[15px] leading-relaxed mb-6 flex-grow"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.description}
                </p>

                {/* Link button */}
                <div className="mt-auto">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-300 hover:translate-x-1"
                      style={{
                        background: "rgba(85, 230, 165, 0.12)",
                        color: "var(--accent-green)",
                        border: "1px solid rgba(85, 230, 165, 0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--accent-green)";
                        e.currentTarget.style.color = "#000";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(85, 230, 165, 0.12)";
                        e.currentTarget.style.color = "var(--accent-green)";
                      }}
                    >
                      <span>{t("projects.viewProject")}</span>
                      <HiArrowTopRightOnSquare className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-semibold"
                      style={{
                        background: "rgba(250, 204, 21, 0.1)",
                        color: "var(--accent-yellow)",
                        border: "1px solid rgba(250, 204, 21, 0.2)",
                      }}
                    >
                      <HiLockClosed className="w-4 h-4" />
                      <span>{t("projects.privateProject")}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
