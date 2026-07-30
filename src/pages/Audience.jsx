export default function Audience() {
  const segments = [
    { name: "Students", users: "32,000" },
    { name: "Working Professionals", users: "41,000" },
    { name: "Business Owners", users: "18,000" },
    { name: "Freelancers", users: "15,000" },
    { name: "Premium Customers", users: "8,500" },
  ];

  const ageGroups = [
    { label: "18 - 24", value: 22 },
    { label: "25 - 34", value: 40 },
    { label: "35 - 44", value: 21 },
    { label: "45 - 54", value: 11 },
    { label: "55+", value: 6 },
  ];

  const interests = [
    "Technology",
    "Marketing",
    "Finance",
    "Fitness",
    "Education",
    "Travel",
    "Gaming",
    "Food",
    "Artificial Intelligence",
    "Startups",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
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
            Audience
          </h1>

          <p
            style={{
              marginTop: "8px",
              fontSize: "16px",
              color: "#64748b",
            }}
          >
            Understand and manage your target audience.
          </p>
        </div>

        <button
          style={{
            padding: "10px 18px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          + Create Audience
        </button>
      </div>

      {/* KPI CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "16px",
        }}
      >
        {[
          { title: "Total Audience", value: "124,500" },
          { title: "Active Segments", value: "18" },
          { title: "Average Age", value: "29 Years" },
          { title: "Returning Users", value: "61%" },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,.06)",
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontWeight: "600",
              }}
            >
              {item.title}
            </div>

            <h2 style={{ marginTop: "12px" }}>{item.value}</h2>
          </div>
        ))}
      </div>

      {/* AUDIENCE SEGMENTS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Audience Segments</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {segments.map((segment) => (
            <div
              key={segment.name}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <h4 style={{ margin: 0 }}>{segment.name}</h4>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "10px",
                }}
              >
                {segment.users} Users
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* LOCATION + GENDER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,.06)",
          }}
        >
          <h3>Top Locations</h3>

          <div style={{ lineHeight: "2.4", marginTop: "15px" }}>
            🇮🇳 India — 65%
            <br />
            🇺🇸 USA — 15%
            <br />
            🇬🇧 UK — 10%
            <br />
            🇨🇦 Canada — 10%
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,.06)",
          }}
        >
          <h3>Gender Distribution</h3>

          <div style={{ lineHeight: "2.4", marginTop: "15px" }}>
            👨 Male — 58%
            <br />
            👩 Female — 40%
            <br />
            ⚧ Other — 2%
          </div>
        </div>
      </div>

      {/* AGE DISTRIBUTION */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Age Distribution</h3>

        {ageGroups.map((age) => (
          <div key={age.label} style={{ marginBottom: "18px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
              }}
            >
              <span>{age.label}</span>
              <span>{age.value}%</span>
            </div>

            <div
              style={{
                height: "10px",
                background: "#e5e7eb",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  width: `${age.value}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* TOP INTERESTS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Top Interests</h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "18px",
          }}
        >
          {interests.map((interest) => (
            <span
              key={interest}
              style={{
                background: "#dbeafe",
                color: "#1d4ed8",
                padding: "8px 16px",
                borderRadius: "20px",
                fontWeight: "600",
              }}
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* DEVICE USAGE */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Device Usage</h3>

        <div style={{ marginTop: "18px", lineHeight: "2.3" }}>
          📱 Mobile — 68%
          <br />
          💻 Desktop — 24%
          <br />
          📟 Tablet — 8%
        </div>
      </div>

      {/* AI INSIGHTS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>AI Insights</h3>

        <ul
          style={{
            lineHeight: "2",
            color: "#64748b",
          }}
        >
          <li>Most users are between 25–34 years old.</li>
          <li>Technology is the most popular interest.</li>
          <li>68% of visitors access the platform using mobile devices.</li>
          <li>Returning users increased by 14% this month.</li>
          <li>India contributes the highest engagement across campaigns.</li>
        </ul>
      </div>

    </div>
  );
}