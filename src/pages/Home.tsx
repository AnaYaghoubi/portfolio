import React from "react";
import AboutMe from "../Components/projects/aboutMe/AboutMe";
import Cv from "../Components/projects/Cv";
import ProgressBar from "../Components/projects/ProgressBar";
import { Link } from "react-router-dom";
import CarouselFade from "../Components/projects/carousel/Carousel";

const Home = () => {
  return (
    <>
      <CarouselFade />
      <AboutMe
        titel="Over mij:"
        image="/assets/me.jpg"
        about={[
          <p key={1}>
            Mijn naam is Ana en ik studeer programmeren op de Ap Hogeschool
            Antwerpen. Ik ben een hardwerkende student met hoge motivatie en
            ga graag die ene stap verder om de details uit te pluizen. <br />
            Ik wil graag leren en sta open voor feedback.
          </p>,
        ]}
      />
      <hr />
      <ProgressBar />
      <Cv />
      <button
        style={{
          borderColor: "#246397",
          backgroundColor: "#5885af",
          display: "block",
          borderRadius: "20px",
          borderStyle: "outset",
          width: "30%",
          margin: " 1rem auto",
        }}
      >
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/ContactMe">
          Contacteer mij
        </Link>
      </button>
    </>
  );
};

export default Home;
