import { inputStyle } from "../styles/styles";

export default function CreateCampaignStep3({
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
        <h2>Budget & Duration</h2>

        <div
          style={{
            display: "grid",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          <input
            placeholder="Daily Budget (₹)"
            style={inputStyle}
          />

          <select style={inputStyle}>
            <option>Campaign Duration</option>
            <option>7 Days</option>
            <option>15 Days</option>
            <option>30 Days</option>
            <option>60 Days</option>
          </select>
        </div>

        <div
          style={{
            background: "#f8fbff",
            border: "1px solid #d6e8ff",
            borderRadius: "12px",
            padding: "15px",
            marginTop: "20px",
          }}
        >
          Estimated reach will be calculated
          automatically based on budget.
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
          onClick={() => setStep(2)}
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
          onClick={() => setStep(4)}
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