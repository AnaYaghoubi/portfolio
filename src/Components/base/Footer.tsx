import * as React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ textAlign: "center", width: "100%", color: "#fff" }}
    >
      <footer style={{ background: "#0a3d66", height: "5rem" }}>
        <p style={{ margin: "2rem 0", paddingTop: "0.6rem" }}>
          Copyright &copy; 2022 <br /> Gemaakt door Ana{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
