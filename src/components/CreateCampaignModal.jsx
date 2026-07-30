import { useState } from "react";
import { createCampaign } from "../services/campaignService";

export default function CreateCampaignModal({ onClose }) {
  const [paymentMethod, setPaymentMethod] =
  useState("");

const [agreed, setAgreed] =
  useState(false);
    const [step, setStep] = useState(1);
  const [dailyBudget, setDailyBudget] = useState("");
const [totalBudget, setTotalBudget] = useState("");
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [campaignName, setCampaignName] =
  useState("");
  const [minAge, setMinAge] = useState("");
const [maxAge, setMaxAge] = useState("");
const [country, setCountry] = useState("");
const [city, setCity] = useState("");
const [adText, setAdText] = useState("");
const handlePublish = async () => {
  if (!paymentMethod) {
    alert("Select payment method");
    return;
  }

  if (!agreed) {
    alert("Accept terms and conditions");
    return;
  }

  try {
    await createCampaign({
      name: campaignName,
      description: adText,
      budget: totalBudget,
      status: "draft",
    });

    alert("Campaign Created Successfully");

    if (onClose) {
      onClose();
    }

  } catch (error) {
    console.error(error);

    alert("Failed to create campaign.");
  }
};

  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "30px",
        marginBottom: "25px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>
            Create Campaign
          </h2>

          <p
  style={{
    color: "#64748b",
    marginTop: "6px",
  }}
>
  Step {step} of 5
</p>
        </div>

        <button
  onClick={onClose}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ✕
        </button>
      </div>

{/* STEP 1 */}

{step === 1 && (
  <>
    <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          fontWeight: "600",
          display: "block",
          marginBottom: "8px",
        }}
      >
        Campaign Name
      </label>

      <input
  value={campaignName}
  onChange={(e) =>
    setCampaignName(e.target.value)
  }
  placeholder="React Course Promotion"
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
  }}
/>
    </div>

    <h3>Campaign Goal</h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "15px",
        marginBottom: "25px",
      }}
    >
      <div style={goalCard}>
        📈
        <h4>More Sales</h4>
      </div>

      <div style={goalCard}>
        🎯
        <h4>More Leads</h4>
      </div>

      <div style={goalCard}>
        🚀
        <h4>Brand Awareness</h4>
      </div>
    </div>

    <h3>Select Courses To Promote</h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "15px",
      }}
    >
      <div style={courseCard}>
        <h4>React Complete Course</h4>
        <p>Web Development</p>
        <p>Students: 4,200</p>
      </div>

      <div style={courseCard}>
        <h4>Python Masterclass</h4>
        <p>Programming</p>
        <p>Students: 6,500</p>
      </div>

      <div style={courseCard}>
        <h4>AI & Machine Learning</h4>
        <p>Artificial Intelligence</p>
        <p>Students: 3,800</p>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "25px",
      }}
    >
      <button
 onClick={() => {
  if (!campaignName) {
    alert("Enter campaign name");
    return;
  }

  setStep(2);
}}        
        style={nextBtn}
      >
        Continue
      </button>
    </div>
  </>
)}

{/* STEP 2 */}

{step === 2 && (
  <>
    <h3>Audience Targeting</h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      <input
  value={minAge}
  onChange={(e)=>setMinAge(e.target.value)}
  placeholder="Minimum Age"
  style={input}
/>
      <input
  value={maxAge}
  onChange={(e)=>setMaxAge(e.target.value)}
  placeholder="Maximum Age"
  style={input}
/>
      <input
  value={country}
  onChange={(e)=>setCountry(e.target.value)}
  placeholder="Country"
  style={input}
/>
     <input
  value={city}
  onChange={(e)=>setCity(e.target.value)}
  placeholder="City"
  style={input}
/>
      <input placeholder="Interest 1" style={input} />
      <input placeholder="Interest 2" style={input} />
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
    cursor: "pointer"
  }}
>
        Back
      </button>

      <button
        onClick={() => {
  if (
    !minAge ||
    !maxAge ||
    !country ||
    !city
  ) {
    alert("Fill all audience details");
    return;
  }

  setStep(3);
}}
        style={nextBtn}
      >
        Continue
      </button>
    </div>
  </>
)}

{/* STEP 3 */}

{step === 3 && (
  <>
    <h3>Budget & Schedule</h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      <input
  value={dailyBudget}
  onChange={(e) =>
    setDailyBudget(e.target.value)
  }
  placeholder="Daily Budget"
  style={input}
/>

      <input
  value={totalBudget}
  onChange={(e) =>
    setTotalBudget(e.target.value)
  }
  placeholder="Total Budget"
  style={input}
/>

      <input
  type="date"
  value={startDate}
  onChange={(e) =>
    setStartDate(e.target.value)
  }
  style={input}
/>

      <input
  type="date"
  value={endDate}
  onChange={(e) =>
    setEndDate(e.target.value)
  }
  style={input}
/>
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
    cursor: "pointer"
  }}
>
        Back
      </button>

      <button
        onClick={() => {
  if (
    !dailyBudget ||
    !totalBudget ||
    !startDate ||
    !endDate
  ) {
    alert("Fill all budget details");
    return;
  }

  setStep(4);
}}
        style={nextBtn}
      >
        Continue
      </button>
    </div>
  </>
)}

{/* STEP 4 */}

{step === 4 && (
  <>
    <h3>Ad Creative</h3>

    <textarea
  value={adText}
  onChange={(e) =>
    setAdText(e.target.value)
  }
  placeholder="Write ad description..."
      style={{
        width: "100%",
        height: "140px",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
      }}
    />

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
    cursor: "pointer"
  }}
>
        Back
      </button>

      <button
        onClick={() => {
  if (!adText) {
    alert("Enter Ad Description");
    return;
  }

  setStep(5);
}}
        style={nextBtn}
      >
        Continue
      </button>
    </div>
  </>
)}
{step === 5 && (
  <>
    <h2>Review Campaign</h2>

    <div style={reviewCard}>
      <p>
        <strong>Campaign Name:</strong>
        {" "}
        {campaignName}
      </p>

      <p>
        <strong>Audience:</strong>
        {" "}
        {minAge}-{maxAge}
      </p>

      <p>
        <strong>Location:</strong>
        {" "}
        {city}, {country}
      </p>

      <p>
        <strong>Daily Budget:</strong>
        ₹{dailyBudget}
      </p>

      <p>
        <strong>Total Budget:</strong>
        ₹{totalBudget}
      </p>

      <p>
        <strong>Start Date:</strong>
        {" "}
        {startDate}
      </p>

      <p>
        <strong>End Date:</strong>
        {" "}
        {endDate}
      </p>

      <p>
        <strong>Ad Description:</strong>
      </p>

      <p>{adText}</p>
    </div>

    <h3
      style={{
        marginTop: "30px",
      }}
    >
      Payment Method
    </h3>

    <select
  value={paymentMethod}
  onChange={(e)=>
    setPaymentMethod(e.target.value)
  }
  style={input}
>
      <option>UPI</option>
      <option>Credit Card</option>
      <option>Debit Card</option>
      <option>Net Banking</option>
    </select>

    <div
      style={{
        marginTop: "25px",
      }}
    >
      <label>
        <input
  type="checkbox"
  checked={agreed}
  onChange={(e)=>
    setAgreed(e.target.checked)
  }
/>
        {" "}
        I agree to the terms and
        conditions.
      </label>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent:
          "space-between",
        marginTop: "30px",
      }}
    >
      <button
        onClick={() => setStep(4)}
        style={{
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <button
  style={nextBtn}
  onClick={handlePublish}
>
  Pay & Publish Campaign
</button>
    </div>
  </>
)}
    </div>
  );
}

const goalCard = {
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

const courseCard = {
    cursor: "pointer",
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  padding: "20px",
};

const selectBtn = {
  marginTop: "10px",
  background: "#1a73e8",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "10px",
  cursor: "pointer",
};
const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
};

const nextBtn = {
  background: "#1a73e8",
  color: "white",
  border: "none",
  padding: "12px 30px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
};
const reviewCard = {
  background: "#f8fafc",
  padding: "25px",
  borderRadius: "16px",
  border: "1px solid #e5e7eb",
  marginTop: "20px",
};
