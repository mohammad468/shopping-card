import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";
import "../App.scss";

const MyCarousel = () => {
  return (
    <Container>
      <Carousel className="mt-3">
        <div className="rounded-3">
          <img
            alt="01"
            src="https://api.freerealapi.com/upload/images/2021/10/5/snow-mountains-01.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div className="rounded-3">
          <img
            alt="02"
            src="https://api.freerealapi.com/upload/images/2021/10/6/earthquake.jpg"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div className="rounded-3">
          <img
            alt="03"
            src="https://api.freerealapi.com/upload/images/2021/10/6/darkmatter.jpg"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default MyCarousel;
