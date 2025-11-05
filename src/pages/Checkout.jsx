import React from "react";
import { useCart } from "../Context/CartContext";

const Checkout = () => {
  const { cart, total, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty.</h2>;
  }

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Checkout</h2>
      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
          }}
        >
          <div>
            <h3>{item.name}</h3>
            <p>${item.price} × {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.name)}
            style={{
              background: "#ff4757",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <h3 style={{ textAlign: "right", marginTop: "20px" }}>Total: ${total.toFixed(2)}</h3>
      <button
        onClick={clearCart}
        style={{
          display: "block",
          margin: "20px auto",
          background: "#2ed573",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
