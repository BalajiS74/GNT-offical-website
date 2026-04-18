import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import review1 from "../../assets/reviews/re1.png";
import review2 from "../../assets/reviews/re2.png";
import review3 from "../../assets/reviews/re3.png";
import review4 from "../../assets/reviews/re4.png";

const reviews = [review1, review2, review3, review4];

const Review = () => {
  return (
    <section className="review-section">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-4">
          <h3 className="fw-bold">
             <span>Reviews</span>
          </h3>
          <p className="text-muted small">Real feedback from our students</p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true} // 🔥 infinite loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {reviews.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <img src={img} alt="review" />

                <div className="footer">⭐⭐⭐⭐⭐</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* STYLES */}
      <style>
        {`
        .review-section {
          padding: 70px 0;
          background: #f7f9f6;
        }

        h3 span {
          color: #3a7b20;
        }

        /* CARD */
        .review-card {
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .review-card img {
          width: 100%;
          height: 140px; /* 🔥 bigger */
          object-fit: cover;
        }

        .review-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .footer {
          text-align: center;
          padding: 10px;
          font-size: 16px;
        }
        `}
      </style>
    </section>
  );
};

export default Review;
