import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <div className="portfolioContainer">
        <Header />
        <main>
          {" "}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
