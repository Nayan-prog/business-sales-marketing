import { useEffect, useState } from "react";
import { getCampaigns } from "../services/campaignService";
const statCard = {
  background: "white",
  borderRadius: "18px",
  padding: "25px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
};
export default function Campaigns({
  setActivePage,
}) {
const [campaigns, setCampaigns] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  fetchCampaigns();
}, []);

const fetchCampaigns = async () => {
  try {
    const data = await getCampaigns();
    setCampaigns(data);
  } catch (error) {
    console.error("Campaign Error:", error);
  } finally {
    setLoading(false);
  }
};
if (loading) {
  return <h2>Loading Campaigns...</h2>;
}
  return (
    <div>
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: "800",
              color: "#0f172a",
            }}
          >
            Campaigns
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "8px",
            }}
          >
            Manage and monitor your advertising campaigns.
          </p>
        </div>

        <button
  onClick={() =>
    setActivePage("create-campaign")
  }
          style={{
            background: "#1a73e8",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          + Create Campaign
        </button>
      </div>
  {/* TOP STATS */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "20px",
      marginBottom: "25px",
    }}
  >
    <div style={statCard}>
      <div>Total Campaigns</div>
      <h2>{campaigns.length}</h2>
    </div>

    <div style={statCard}>
      <div>Active Campaigns</div>
      <h2>
  {campaigns.filter(c => c.status === "active").length}
</h2>
    </div>

    <div style={statCard}>
      <div>Total Reach</div>
      <h2>82K</h2>
    </div>

    <div style={statCard}>
      <div>Total Leads</div>
      <h2>1,240</h2>
    </div>
  </div>

  {/* CAMPAIGNS */}
    <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
    gap: "20px",
  }}
> {campaigns.length > 0 ? (
  campaigns.map((campaign) => (
    <div
      key={campaign.id}
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "25px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{campaign.name}</h3>

        <span
          style={{
            background:
              campaign.status === "active"
                ? "#dcfce7"
                : "#fef3c7",
            color:
              campaign.status === "active"
                ? "#166534"
                : "#92400e",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {campaign.status}
        </span>
      </div>

      <p>Budget: ₹{campaign.budget}</p>

      <button
        onClick={() => setActivePage("campaign-details")}
        style={{
          marginTop: "20px",
          background: "#1a73e8",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        View Details
      </button>
    </div>
  ))
) : (
  <h3>No Campaigns Found</h3>
)}
  </div>
    </div>
  );
  
}