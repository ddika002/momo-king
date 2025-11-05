import React from "react";

const Contact = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "#fffaf0",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#ff4757", marginBottom: "20px" }}>
        Contact Us
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Have a question or want to place an order? We’d love to hear from you!
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "12px 15px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "12px 15px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          style={{
            padding: "12px 15px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        ></textarea>
        <button
          style={{
            backgroundColor: "#ff4757",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 25px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6b81")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4757")}
        >
          Send Message
        </button>
      </div>

      <div style={{ marginTop: "50px", fontSize: "16px" }}>
        <p>
          📍 <strong>Address:</strong> Teljokuja 3 B 12,50170,Mikkeli
        </p>
        <p>
          ☎️ <strong>Phone:</strong> +358 449823004
        </p>
        <p>
          📧 <strong>Email:</strong> dkadelnew@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
