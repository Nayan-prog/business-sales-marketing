import { inputStyle } from "../../styles/styles";

export default function Step1({ setStep }) {
  return (
    <>
      

      {/* Form Card */}
      <div
        style={{
          background: "white",
          border: "1px solid #dadce0",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2>Business Information</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
          }}
        >
          <input placeholder="Business Name" style={inputStyle} />
          <input placeholder="Owner Name" style={inputStyle} />
          <input placeholder="Business Email" style={inputStyle} />
          <input placeholder="Phone Number" style={inputStyle} />
          <input placeholder="City" style={inputStyle} />
          <input placeholder="State" style={inputStyle} />
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "30px",
        }}
      >
        <button
          onClick={() => setStep(2)}
          style={{
            background: "#1a73e8",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "14px 40px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(26,115,232,0.25)",
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}