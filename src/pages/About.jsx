import React from "react";

const About = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #fff5f5, #ffe6e6)",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#ff4757", marginBottom: "20px" }}>
        About MoMo King
      </h1>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        At <strong>MoMo King</strong>, we serve authentic Himalayan momos made
        with passion and tradition. Every momo is handcrafted using the freshest
        ingredients, ensuring a burst of flavor in every bite. From our classic
        steamed momos to crispy fried delights, we aim to bring the true taste
        of Nepal to your plate.
      </p>
      <img
        src="https://junifoods.com/wp-content/uploads/2023/11/Easy-Chicken-Momo-Dumplings-Sajilo-Kukhura-ko-Momo-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE-480x270.jpg"
        alt="About MoMo King"
        style={{
          width: "80%",
          maxWidth: "900px",
          borderRadius: "12px",
          marginTop: "40px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
      />
    </section>
  );
};

export default About;
