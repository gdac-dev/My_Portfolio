import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HiCodeBracket, HiCog6Tooth, HiChartBar } from "react-icons/hi2";
import ParallaxItem from "./ParallaxItem";

const serviceIcons = [
  <HiCodeBracket key="code" className="w-12 h-12" />,
  <HiCog6Tooth key="cog" className="w-12 h-12" />,
  <HiChartBar key="chart" className="w-12 h-12" />,
];

const serviceGradients = [
  "linear-gradient(135deg, rgba(85, 230, 165, 0.15), rgba(85, 230, 165, 0.05))",
  "linear-gradient(135deg, rgba(250, 204, 21, 0.15), rgba(250, 204, 21, 0.05))",
  "linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(96, 165, 250, 0.05))",
];

const iconColors = ["var(--accent-green)", "var(--accent-yellow)", "#60a5fa"];

const Services = () => {
  const { t } = useLanguage();
  const items = t("services.items") as Array<{ title: string; description: string }>;

  return (
    <div id="services" className="section-tertiary pt-[6rem] md:pt-[8rem] pb-[5rem]">
      <h2 className="heading">
        {t("services.heading")}{" "}
        <span className="text-yellow-400">{t("services.headingHighlight")}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] mx-auto items-stretch gap-[2rem] mt-[4rem]">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div
                className="glass-card p-[2.5rem] h-full flex flex-col items-center text-center group cursor-default"
                style={{ background: serviceGradients[index] }}
              >
                <ParallaxItem speed={10} reverse={index % 2 === 0}>
                  <div
                    className="p-4 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${serviceGradients[index]}`,
                      color: iconColors[index],
                    }}
                  >
                    {serviceIcons[index]}
                  </div>
                </ParallaxItem>

                <h3
                  className="text-[20px] md:text-[24px] font-bold mb-4 font-heading"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>

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

export default Services;
