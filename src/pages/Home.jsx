import React from "react";
import Hero from "../components/Hero";
import MenuCard from "../components/MenuCard";

const featuredItems = [
  { name: "Steamed Momos", description: "Soft and juicy steamed momos", price: 10, image: "https://source.unsplash.com/200x200/?momos" },
  { name: "Fried Momos", description: "Crispy fried momos", price: 15, image: "https://source.unsplash.com/200x200/?fried-momos" },
  { name: "Chicken Momos", description: "Delicious chicken momos with special sauce", price: 12, image: "https://source.unsplash.com/200x200/?chicken-momos" },
  { name: "Veg Momos", description: "Healthy and tasty vegetable momos", price: 10, image: "https://source.unsplash.com/200x200/?veg-momos" }
];

const Home = () => {
  return (
    <div>
      <Hero />
      <h2 style={{ textAlign: "center", marginTop: "40px", fontSize: "32px" }}>Featured Dishes</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
        paddingBottom: "40px",
      }}>
        {featuredItems.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
