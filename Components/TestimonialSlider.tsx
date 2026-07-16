import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TestimonialSlider = () => {
  const { locale } = useLanguage();

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {testimonials.map((testimonial, index) => (
        <ClientReview
          key={index}
          image={testimonial.avatar}
          name={testimonial.name}
          role={testimonial.role}
          quote={testimonial.quote[locale]}
          rating={testimonial.rating}
        />
      ))}
    </Carousel>
  );
};

export default TestimonialSlider;
