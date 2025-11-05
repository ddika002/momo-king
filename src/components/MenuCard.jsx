import React from "react";

const MenuCard = ({ name, description, price, image }) => {
  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "10px 0", color: "#333" }}>{name}</h3>
        <p style={{ color: "#555", fontSize: "14px", marginBottom: "10px" }}>
          {description}
        </p>
        <p style={{ fontWeight: "bold", color: "#ff4757" }}>${price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
