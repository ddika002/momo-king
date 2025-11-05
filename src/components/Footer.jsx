import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #ff4757, #ff6b81)",
        color: "#fff",
        textAlign: "center",
        padding: "60px 20px 30px",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: "32px",
          color: "#ffeaa7",
          marginBottom: "10px",
        }}
      >
        MoMo <span style={{ color: "#fff" }}>King</span>
      </h2>
      <p
        style={{
          fontSize: "18px",
          marginBottom: "40px",
          color: "#fff",
          opacity: "0.9",
        }}
      >
        Serving authentic Himalayan Momos with ❤️ since 2025.
      </p>

      {/* Social Media Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <a
          href="#"
          style={{
            color: "#fff",
            fontSize: "22px",
            transition: "transform 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#ffeaa7";
            e.target.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#fff";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            fontSize: "22px",
            transition: "transform 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#ffeaa7";
            e.target.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#fff";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            fontSize: "22px",
            transition: "transform 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#ffeaa7";
            e.target.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#fff";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FaTwitter />
        </a>
      </div>

      <hr
        style={{
          width: "70%",
          margin: "0 auto 20px",
          border: "none",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      />

      <p style={{ fontSize: "14px", opacity: "0.8" }}>
        © {new Date().getFullYear()} MoMo King | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
