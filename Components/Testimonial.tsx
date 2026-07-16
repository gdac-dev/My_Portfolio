import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { useLanguage } from "@/context/LanguageContext";

const Testimonial = () => {
  const { t } = useLanguage();

  return (
    <div id="testimonials" className="section-secondary pt-[6rem] md:pt-[8rem]">
      <h2 className="heading">
        {t("testimonials.heading")}{" "}
        <span className="text-yellow-400">{t("testimonials.headingHighlight")}</span>
      </h2>
      <div className="pt-[3rem] pb-[4rem] w-[90%] lg:w-[80%] mx-auto">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;