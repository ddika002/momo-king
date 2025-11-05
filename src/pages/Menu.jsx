import React from "react";
import { useCart } from "../Context/CartContext";

const Menu = () => {
  const { addToCart } = useCart();

  const menuItems = [
    {
      name: "Steamed Momos",
      description: "Soft and juicy steamed momos",
      price: 10,
      image: "https://www.food2gotruck.ca/cdn/shop/files/Food2Go_Veg_Steam_Momos.jpg?v=1715705295&width=1445",
    },
    {
      name: "Fried Momos",
      description: "Crispy golden fried momos",
      price: 12,
      image: "https://i0.wp.com/bakaasur.com/wp-content/uploads/2022/12/fried-momo-recipe.jpg",
    },
    {
      name: "Jhol Momos",
      description: "Spicy chicken-filled dumplings",
      price: 15,
      image: "https://tse1.explicit.bing.net/th/id/OIP.WrjgsdWPpZwUABMCxHDgRgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "C Momos",
      description: "Healthy steamed vegetable momos",
      price: 18,
      image: "https://th.bing.com/th/id/R.23872582510e07fbccfd3b060d4d25c8?rik=3VIsH5Jc5wdGeQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-vgLWjBAoS3w%2fU5I-FvJ2y7I%2fAAAAAAAABfU%2fnX1UGQq5B6I%2fs1600%2fDSC04446.JPG&ehk=Ztk%2bxGYtdPUOZ7ykCdIDwPSuzOo%2bAWjWco7z1caqrVc%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <div style={{ padding: "120px 40px", textAlign: "center" }}>
      <h2 style={{ color: "#ff4757", marginBottom: "30px" }}>🥟 Our Menu</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item.name}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              width: "280px",
              overflow: "hidden",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "10px 0", color: "#333" }}>{item.name}</h3>
              <p style={{ color: "#777" }}>{item.description}</p>
              <h4 style={{ color: "#111", marginBottom: "10px" }}>{item.price}€</h4>

              <button
                onClick={() => addToCart(item)}
                style={{
                  backgroundColor: "#ff4757",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6b81")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4757")}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
