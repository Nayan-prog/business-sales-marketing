import { useState } from "react";

export default function MenuItem({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "14px 20px",
        cursor: "pointer",
        fontSize: "14px",
        color: "#374151",
        background: hover ? "#f8fafc" : "#fff",
        transition: "background 0.2s ease",
      }}
    >
      {children}
    </div>
  );
}