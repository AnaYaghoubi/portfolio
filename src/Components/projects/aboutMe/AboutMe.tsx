import React from "react";
import styles from "./AboutMe.module.css";

interface AboutMeProps {
  titel: string;
  image: string;
  about: JSX.Element[];
}

const AboutMe = ({ titel, image, about }: AboutMeProps) => {
  return (
    <div>
      <h2 className={styles.aboutTitel}>{titel}</h2>
      <nav className={styles.aboutMe}>
        <img src={image} alt="Ana" />
        <div className={styles.aboutMeDetail}>{about}</div>
      </nav>
    </div>
  );
};

export default AboutMe;
