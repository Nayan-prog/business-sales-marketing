{showStartMenu && (
  <div
    style={{
      position: "absolute",
      top: "42px",
      left: 0,
      width: "260px",
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "14px",
      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
      overflow: "hidden",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        padding: "16px 20px",
        fontWeight: "600",
        fontSize: "15px",
        color: "#202124",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      Start Advertising
    </div>

    <MenuItem>Overview</MenuItem>
    <MenuItem>How it Works</MenuItem>
    <MenuItem>Cost</MenuItem>
    <MenuItem>Privacy</MenuItem>
  </div>
)}