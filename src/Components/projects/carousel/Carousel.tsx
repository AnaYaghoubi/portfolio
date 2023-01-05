import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselFade = () => {
  return (
    <Carousel fade>
      <Carousel.Item style={{ height: "20rem", alignContent: "center" }}>
        <img
          className="d-block w-100"
          src="./assets/photo2.jpeg"
          alt="First slide"
          style={{ paddingBottom: "1rem" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "20rem" }}>
        <img
          className="d-block w-100"
          src="./assets/photo3.jpeg"
          alt="Second slide"
          style={{ paddingBottom: "1rem" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "20rem" }}>
        <img
          className="d-block w-100"
          src="./assets/photo6.jpeg"
          alt="Third slide"
          style={{ paddingBottom: "1rem" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselFade;
