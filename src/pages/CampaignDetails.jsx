export default function CampaignDetails({
  setActivePage,
}) {
  return (
    <div>
      {/* HEADER */}

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "25px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <button
  onClick={() =>
    setActivePage("campaigns")
  }
  style={{
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "#1a73e8",
    fontWeight: "600",
    marginBottom: "20px",
  }}
>
  ← Back to Campaigns
</button>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                color: "#0f172a",
              }}
            >
              React Course Campaign
            </h1>

            <p
              style={{
                color: "#64748b",
                marginTop: "10px",
              }}
            >
              Created: 25 June 2026
            </p>

            <p
              style={{
                color: "#64748b",
              }}
            >
              Campaign ID: CMP001
            </p>
          </div>

          <span
            style={{
              background: "#dcfce7",
              color: "#166534",
              padding: "8px 20px",
              borderRadius: "30px",
              fontWeight: "600",
            }}
          >
            Active
          </span>
        </div>

        {/* ACTION BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <button style={btn}>
            Edit Campaign
          </button>

          <button style={btn}>
            Pause
          </button>

          <button style={btn}>
            Duplicate
          </button>

          <button
            style={{
              ...btn,
              background: "#ef4444",
              color: "white",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const btn = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  background: "white",
  cursor: "pointer",
  fontWeight: "600",
};