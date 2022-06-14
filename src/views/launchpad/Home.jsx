import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CustomCarousel from "src/components/Timeline/CustomCarousel";
import DetailsModal from "./DetailsModal";

const LaunchPadHome = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="col-12 m-5">
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Check Deatils
      </button>
      <DetailsModal show={show} onHide={() => setShow(false)} />

      <div className="carousel mt-5 col-4">
        <CustomCarousel>
          <Carousel.Item className="carousel-item">
            <p>
              Complete the following tasks to get started with Cisco DNA Center
            </p>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <p>
              Complete the following tasks to get started with Cisco DNA Center
            </p>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <p>
              Complete the following tasks to get started with Cisco DNA Center
            </p>
          </Carousel.Item>
        </CustomCarousel>
      </div>
    </div>
  );
};

export default LaunchPadHome;
