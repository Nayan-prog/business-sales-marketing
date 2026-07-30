import { inputStyle } from "../../styles/styles";

export default function Step2({ setStep }) {
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
        <h2>Business Verification</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
          }}
        >
          <input
            placeholder="GST Number"
            style={inputStyle}
          />

          <input
            placeholder="PAN Number"
            style={inputStyle}
          />

          <select style={inputStyle}>
            <option>Select Business Type</option>
            <option>Proprietorship</option>
            <option>Partnership</option>
            <option>LLP</option>
            <option>Private Limited</option>
          </select>

          <input
            type="file"
            style={inputStyle}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <button onClick={() => setStep(1)}>
          Back
        </button>

        <button
          onClick={() => setStep(3)}
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