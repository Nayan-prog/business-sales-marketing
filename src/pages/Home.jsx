import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";

export default function Home() {
  const [dashboard, setDashboard] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();
      setDashboard(data);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchDashboard();
}, []);
if (loading) {
  return <h2>Loading Dashboard...</h2>;
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
            }}
          >
            Groov Workspace
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "8px",
            }}
          >
            Manage campaigns, leads and audience growth.
          </p>
        </div>
      </div>

      {/* KPI CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {[
  {
    title: "Campaigns",
    value: dashboard?.total_campaigns ?? 0,
  },
  {
    title: "Active Campaigns",
    value: dashboard?.active_campaigns ?? 0,
  },
  {
    title: "Total Budget",
    value: `₹${dashboard?.total_budget ?? 0}`,
  },
  {
    title: "Draft Campaigns",
    value: dashboard?.draft_campaigns ?? 0,
  },
].map((card) => (
          <div
            key={card.title}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              {card.title}
            </div>

            <div
              style={{
                fontSize: "26px",
                fontWeight: "700",
                marginTop: "10px",
              }}
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>

      {/* CAMPAIGNS */}

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h3>Campaign Performance</h3>

<table
  style={{
    width: "100%",
    marginTop: "15px",
  }}
>
  <thead>
    <tr>
      <th align="left">Campaign</th>
      <th align="left">Status</th>
      <th align="left">Budget</th>
    </tr>
  </thead>

  <tbody>
    {dashboard?.recent_campaigns?.length > 0 ? (
      dashboard.recent_campaigns.map((campaign) => (
        <tr key={campaign.id}>
          <td>{campaign.name}</td>
          <td>{campaign.status}</td>
          <td>₹{campaign.budget}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="3">No campaigns found.</td>
      </tr>
    )}
  </tbody>
</table>
      </div>

      {/* ACTIVITY */}

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h3>Recent Activity</h3>

        <p>✔ Campaign approved</p>
        <p>✔ 120 leads imported</p>
        <p>✔ Payment received</p>
        <p>✔ Audience updated</p>
      </div>
    </div>
  );
}