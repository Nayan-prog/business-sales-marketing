import { inputStyle } from "../../styles/styles";

export default function Step3({ setStep }) {
  return (
    <>
      <div
        style={{
          background: "white",
          border: "1px solid #dadce0",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2>Advertiser Verification</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
          }}
        >
          <input
            placeholder="Company Website"
            style={inputStyle}
          />

          <input
            placeholder="LinkedIn Company Page"
            style={inputStyle}
          />

          <input
            placeholder="Company Registration Number"
            style={inputStyle}
          />

          <input
            type="file"
            style={inputStyle}
          />
        </div>
      </div>

      <div
        style={{
          background: "white",
          border: "1px solid #dadce0",
          borderRadius: "16px",
          padding: "30px",
          marginTop: "24px",
        }}
      >
        <h3>Campaign Destination</h3>

        <input
          placeholder="Website URL"
          style={inputStyle}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <button onClick={() => setStep(2)}>
          Back
        </button>

        <button
          onClick={() => setStep(4)}
          style={{
            cursor: "pointer",
            background: "#1a73e8",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "16px 48px",
            fontWeight: "600",
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}