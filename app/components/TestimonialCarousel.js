"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialCarousel({ testimonials }) {
  return (
    <>
      <div className="testimonialGrid desktopTestimonials">
        {testimonials.map((item) => (
          <article key={item.author} className="testimonialCard">
            <span className="quoteMark">“</span>
            <p>{item.quote}</p>
            <strong>{item.author}</strong>
            <span>{item.role}</span>
          </article>
        ))}
      </div>

      <div className="mobileTestimonials">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".testimonialPagination",
          }}
          className="testimonialSwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.author}>
              <article className="testimonialRailCard">
                <span className="quoteMark">“</span>
                <p>{item.quote}</p>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonialPagination" aria-label="Testimonial navigation" />
      </div>
    </>
  );
}
