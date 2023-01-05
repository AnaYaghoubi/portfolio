import React from "react";
import { Link } from "react-router-dom";
import { IPortfolio } from "../../../pages/Portfolio";
import styles from "./PortfolioCard.module.css";

type PortfolioCardProps = {
  project: IPortfolio;
};

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <>
      <div className={styles.portfolioCard}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <button>
          <Link to={`${project.id}`}>Bekijk Project</Link>
        </button>
      </div>
    </>
  );
};

export default PortfolioCard;
