import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { portfoliItems } from "./Portfolio";

const PortfolioDetail = () => {
  const params = useParams();

  const id = params.id;
  const project = portfoliItems[parseInt(id!)];

  return (
    <>
      {project ? project.component : <Navigate to={"/Portfolio"} />}
      <Link style={{ padding: "10px 20px" }} to="/Portfolio">
        Back
      </Link>
    </>
  );
};

export default PortfolioDetail;
