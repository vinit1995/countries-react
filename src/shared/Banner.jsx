import React from "react";
import "./banner.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-bootstrap";

const Banner = ({ countries }) => {
  const maxSlides = Math.min(5, countries.length);
  const shuffledCountries = [...countries].sort(() => 0.5 - Math.random());
  const visibleCountries = shuffledCountries.slice(0, maxSlides);

  return (
    <Carousel
      nextIcon={<FaArrowRight className="text-light fs-3" />}
      prevIcon={<FaArrowLeft className="text-light fs-3" />}
      indicators
    >
      {visibleCountries.map((country, index) => (
        <Carousel.Item key={index}>
          <div
            className="position-relative d-flex justify-content-center align-items-center custom-carousel"
            style={{
              backgroundImage: `url(${country.flag})`,
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>

            <h2
              className="position-absolute text-white fw-bold text-uppercase text-center"
              style={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                zIndex: 1,
              }}
            >
              {country.name}
            </h2>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
