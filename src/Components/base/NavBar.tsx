import * as React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul
        style={{
          color: "black",
          display: "flex",
          alignItems: "flex-start",
          listStyle: "none",
          background: "#0a3d66",
          margin: "0",
        }}
      >
        <li style={{ marginLeft: "3em", padding: "1em 0" }}>
          <NavLink style={{ color: "white" }} to={"/Home"}>
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li style={{ marginLeft: "3em", padding: "1em 0" }}>
          <NavLink style={{ color: "white" }} to={"/Portfolio"}>
            {" "}
            Portfolio{" "}
          </NavLink>
        </li>
        <li style={{ marginLeft: "3em", padding: "1em 0" }}>
          <NavLink style={{ color: "white" }} to={"/ContactMe"}>
            {" "}
            Contact{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
