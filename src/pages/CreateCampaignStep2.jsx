import { inputStyle } from "../styles/styles";

export default function CreateCampaignStep2({
  setStep,
}) {
  return (
    <>
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "30px",
          border: "1px solid #dadce0",
        }}
      >
        <h2>Target Audience</h2>

        <div
          style={{
            display: "grid",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          <select style={inputStyle}>
            <option>Age Group</option>
            <option>18-24</option>
            <option>25-34</option>
            <option>35-44</option>
            <option>45+</option>
          </select>

          <select style={inputStyle}>
            <option>Gender</option>
            <option>All</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            placeholder="Country"
            style={inputStyle}
          />

          <input
            placeholder="State"
            style={inputStyle}
          />

          <input
            placeholder="City"
            style={inputStyle}
          />

          <input
            placeholder="Interests (Programming, AI, Design)"
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
        <button
          onClick={() => setStep(1)}
          style={{
            padding: "14px 35px",
            borderRadius: "12px",
            border: "1px solid #dadce0",
            cursor: "pointer",
          }}
        >
          Back
        </button>

        <button
          onClick={() => setStep(3)}
          style={{
            background: "#1a73e8",
            color: "white",
            border: "none",
            padding: "14px 35px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}