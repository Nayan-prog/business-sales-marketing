export default function CreateCampaignStep4({
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
        <h2>Review & Launch</h2>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  }}
>
  <div
    style={{
      background: "#f8fafc",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
    }}
  >
    <h3>Campaign Summary</h3>

    <p>Course: React Complete Course</p>
    <p>Audience: 18-24 Years</p>
    <p>Location: India</p>
    <p>Budget: ₹500/day</p>
    <p>Duration: 30 Days</p>
  </div>

  <div
    style={{
      background: "#eff6ff",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #bfdbfe",
    }}
  >
    <h3>Estimated Results</h3>

    <p>Reach: 8,000 - 12,000 students</p>
    <p>Clicks: 300 - 600</p>
    <p>Expected Leads: 20 - 50</p>
  </div>
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
          onClick={() => setStep(3)}
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
          style={{
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "14px 35px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Launch Campaign
        </button>
      </div>
    </>
  );
}