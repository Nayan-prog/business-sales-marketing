import { useState } from "react";
import { inputStyle } from "../styles/styles";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
export default function CampaignForm() {
  const [selectedOption, setSelectedOption] =
    useState("website");
const [step, setStep] = useState(1);
return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Campaign Header */}
      <header
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 32px",
    background: "white",
    borderBottom: "1px solid #e5e7eb",
  }}
>
  <h2
    style={{
      color: "#1a73e8",
      margin: 0,
      fontSize: "24px",
    }}
  >
    Groov
  </h2>

  <div
  style={{
    display: "flex",
    alignItems: "center",
  }}
>
  <div
    style={{
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#1a73e8",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "600",
      fontSize: "14px",
    }}
  >
    A
  </div>
</div>
</header>
<div
  style={{
    maxWidth: "850px",
    margin: "0 auto",
    padding: "40px",
  }}
>

  <div
    style={{
      color: "#1a73e8",
      fontWeight: "600",
      marginBottom: "15px",
      fontSize: "14px",
      textTransform: "uppercase",
    }}
  >
    Step {step} of 4
  </div>

  <div
    style={{
      display: "flex",
      gap: "8px",
      marginBottom: "35px",
    }}
  >
    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        style={{
          flex: 1,
          height: "8px",
          borderRadius: "20px",
          background:
            step >= item
              ? "#1a73e8"
              : "#e5e7eb",
        }}
      />
    ))}
  </div>
  {step === 1 && (
    <Step1
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      setStep={setStep}
    />
  )}

  {step === 2 && (
    <Step2
      setStep={setStep}
    />
  )}

  {step === 3 && (
    <Step3
      setStep={setStep}
    />
  )}

  {step === 4 && (
    <Step4
      setStep={setStep}
    />
  )}
</div>
        {/* Rest of your form */}
      
    </div>
  );
}