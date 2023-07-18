import React from "react";
import Code from "./code.png";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "5px",
        backgroundColor: " #F8F9FA",
        color: "white",
      }}
    >
      <h4
        style={{ color: "#564256", textAlign: "center", marginBottom: "10px" }}
      >
        Follow us on Github!
      </h4>
      <div class="footer__redes">
        <ul class="footer__redes-wrapper">
          <li style={{ textAlign: "center", display: "grid" }}>
            <p>
              <img alt="Code" src={Code} width="30px" height="30px" />
              <a href="https://github.com/GR33NAP3">Eric Bunn</a>
            </p>
            <p>
              <img alt="Code" src={Code} width="30px" height="30px" />
              <a href="https://github.com/LuisPimentel93">Luis Pimentel</a>
            </p>
            <p>
              <img alt="Code" src={Code} width="30px" height="30px" />
              <a href="https://github.com/FernandaRKennedy">Fernanda Kennedy</a>
            </p>
            <p>
              <img alt="Code" src={Code} width="30px" height="30px" />
              <a href="https://github.com/VincentS972">Vincent Sechi</a>
            </p>
          </li>
        </ul>
      </div>
      <footer
        style={{
          marginTop: "20px",
          marginBottom: "5px",
          backgroundColor: " #F8F9FA",
          color: "#564256",
        }}
      >
        <p> Copyright © 2023 | CodeBook</p>
      </footer>
    </div>
  );
};
export default Footer;
