export default function Step4({ setStep }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "30px",
        border: "1px solid #dadce0",
      }}
    >
      <h2>Review & Submit</h2>

      <p>
        Review all details before creating your
        Groov advertiser account.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <button
          onClick={() => setStep(3)}
        >
          Back
        </button>

        <button
  style={{
    background: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "16px 48px",
    fontSize: "16px",
    fontWeight: "600",
    boxShadow: "0 8px 20px rgba(26,115,232,0.25)",
    cursor: "pointer",
  }}
>
  Submit
</button>
      </div>
    </div>
  );
}