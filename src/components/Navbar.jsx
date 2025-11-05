import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "18px",
    transition: "color 0.3s, transform 0.3s",
  };

  const handleHover = (e, enter) => {
    e.target.style.color = enter ? "#ff6b81" : "#fff";
    e.target.style.transform = enter ? "scale(1.1)" : "scale(1)";
  };

  return (
    <nav
      style={{
        backgroundColor: "#2f3542",
        color: "#fff",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      }}
    >
      {/* Left Side - Brand */}
      <div
        style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: "30px",
          color: "#ffcc00",
          letterSpacing: "1px",
        }}
      >
        MoMo <span style={{ color: "#ff6b81" }}>King</span>
      </div>

      {/* Desktop Menu */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "35px",
          margin: 0,
          padding: 0,
        }}
      >
        {[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              style={navLinkStyle}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Cart Icon */}
      <div style={{ position: "relative" }}>
        <Link to="/checkout" style={{ color: "#fff", textDecoration: "none" }}>
          <FaShoppingCart size={22} />
          {itemCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                backgroundColor: "#ff6b81",
                color: "#fff",
                borderRadius: "50%",
                padding: "3px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {itemCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div
        style={{
          display: "none",
          flexDirection: "column",
          cursor: "pointer",
        }}
        className="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div style={barStyle}></div>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul
          style={{
            position: "absolute",
            top: "65px",
            right: "40px",
            backgroundColor: "#2f3542",
            borderRadius: "8px",
            listStyle: "none",
            padding: "15px 25px",
            boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
          }}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Checkout", path: "/checkout" },
          ].map((item) => (
            <li key={item.name} style={{ margin: "10px 0" }}>
              <Link
                to={item.path}
                style={{
                  ...navLinkStyle,
                  display: "block",
                  textAlign: "right",
                }}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

const barStyle = {
  width: "25px",
  height: "3px",
  backgroundColor: "#fff",
  margin: "4px 0",
};

export default Navbar;
