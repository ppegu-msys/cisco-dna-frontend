import {
  faCircle,
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CustomCarousel = ({ onSlide, children }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="col-12">
      <Carousel
        indicators={false}
        onSlide={(eventKey) => {
          if (onSlide) onSlide(eventKey);
          setActiveSlide(eventKey);
        }}
      >
        {children}
      </Carousel>
      <div className="d-flex align-items-center justify-content-center">
        <FontAwesomeIcon
          className="mx-1"
          icon={faCircleChevronLeft}
          color="#1170CF"
        />
        {Array.isArray(children) &&
          children.map((a, i) => {
            console.log(activeSlide, i);
            return (
              <FontAwesomeIcon
                className="mx-1"
                icon={faCircle}
                color={activeSlide === i ? "#1170CF" : "#E9EBEC"}
                height={12}
                width={12}
              />
            );
          })}
        {!Array.isArray(children) && (
          <FontAwesomeIcon
            className="mx-1"
            icon={faCircle}
            color={"#1170CF"}
            height={12}
            width={12}
          />
        )}
        <FontAwesomeIcon
          className="mx-1"
          icon={faCircleChevronRight}
          color="#1170CF"
          height={24}
          width={24}
        />
      </div>
    </div>
  );
};

export default CustomCarousel;
