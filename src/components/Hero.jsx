import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/menu"); // Navigate to Menu page
  };

  return (
    <section
  style={{
    position: "relative",
    width: "100%",
    height: "100vh",
    marginTop: "-80px", // moves hero up under the sticky navbar
    backgroundImage:
      "url('https://www.food2gotruck.ca/cdn/shop/files/Food2Go_Veg_Steam_Momos.jpg?v=1715705295&width=1445')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
  }}
>


      {/* Dark overlay for better contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
          zIndex: 1,
        }}
      ></div>

      {/* Text content */}
      <div style={{ position: "relative", zIndex: 2, padding: "0 20px" }}>
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "900",
            marginBottom: "20px",
            color: "#ffcc00",
            textShadow: "3px 3px 8px rgba(0,0,0,0.8)",
            letterSpacing: "2px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          MoMo King
        </h1>
        <p
          style={{
            fontSize: "22px",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
            color: "#fff",
            textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
          }}
        >
          Taste the royal flavors of authentic Himalayan momos, crafted with
          love, spice, and tradition.
        </p>
        <button
          onClick={handleOrderNow}
          style={{
            padding: "14px 32px",
            fontSize: "20px",
            fontWeight: "700",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#ff6b81",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff4757")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff6b81")
          }
        >
          Order Now 🍴
        </button>
      </div>
    </section>
  );
};

export default Hero;

