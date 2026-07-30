export default function Analytics() {
  const campaigns = [
    {
      name: "Summer Sale",
      revenue: "₹1,25,000",
      roi: "410%",
      leads: 320,
      status: "Excellent",
    },
    {
      name: "Brand Awareness",
      revenue: "₹95,000",
      roi: "290%",
      leads: 210,
      status: "Very Good",
    },
    {
      name: "Winter Offer",
      revenue: "₹72,000",
      roi: "180%",
      leads: 160,
      status: "Good",
    },
  ];

  const monthly = [
    { month: "Jan", value: 70 },
    { month: "Feb", value: 90 },
    { month: "Mar", value: 65 },
    { month: "Apr", value: 95 },
    { month: "May", value: 80 },
    { month: "Jun", value: 100 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>

      {/* HEADER */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    flexWrap: "wrap",
    gap: "15px",
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
      📊 Analytics Dashboard
    </h1>

    <p
      style={{
        marginTop: "8px",
        color: "#64748b",
        fontSize: "15px",
      }}
    >
      Track marketing performance, campaign ROI and customer growth.
    </p>
  </div>

  <div
    style={{
      display: "flex",
      gap: "12px",
    }}
  >
    <select
      style={{
        padding: "10px 15px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        cursor: "pointer",
      }}
    >
      <option>Last 7 Days</option>
      <option>Last 30 Days</option>
      <option>Last Quarter</option>
      <option>This Year</option>
    </select>

    <button
      style={{
        padding: "10px 18px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      📥 Export Report
    </button>
  </div>
</div>

{/* KPI CARDS */}

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
    gap: "18px",
  }}
>
  {[
    {
      title: "ROI",
      value: "320%",
      change: "+12%",
      icon: "📈",
      color: "#2563eb",
    },

    {
      title: "Conversion",
      value: "5.2%",
      change: "+0.8%",
      icon: "🎯",
      color: "#7c3aed",
    },

    {
      title: "Campaigns",
      value: "12",
      change: "+2 Active",
      icon: "🚀",
      color: "#ea580c",
    },
  ].map((card) => (
    <div
      key={card.title}
      style={{
        background: "#fff",
        padding: "22px",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#64748b",
            fontWeight: "600",
          }}
        >
          {card.title}
        </span>

        <span style={{ fontSize: "28px" }}>
          {card.icon}
        </span>
      </div>

      <h1
        style={{
          marginTop: "18px",
          marginBottom: "10px",
          color: "#0f172a",
        }}
      >
        {card.value}
      </h1>

      <span
        style={{
          color: card.color,
          fontWeight: "700",
        }}
      >
        ▲ {card.change}
      </span>
    </div>
  ))}
</div>

      {/* REVENUE OVERVIEW */}

<div
  style={{
    background: "#fff",
    borderRadius: "18px",
    padding: "25px",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "25px",
    }}
  >
    <div>
      <h2
  style={{
    margin: 0,
    color: "#0f172a",
  }}
>
  Lead Generation Overview
</h2>
      <p
        style={{
          marginTop: "8px",
          color: "#64748b",
        }}
      >
        Performance during the selected period
      </p>
    </div>

    <span
      style={{
        background: "#dbeafe",
        color: "#2563eb",
        padding: "8px 14px",
        borderRadius: "20px",
        fontWeight: "600",
      }}
    >
      ▲ 18% Growth
    </span>
  </div>

  {/* GRAPH */}

  <div
    style={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      height: "260px",
      marginBottom: "30px",
    }}
  >
    {monthly.map((item) => (
      <div
        key={item.month}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: `${item.value * 2}px`,
            background:
              "linear-gradient(to top,#2563eb,#60a5fa)",
            borderRadius: "12px 12px 0 0",
            transition: ".3s",
          }}
        />

        <span
          style={{
            marginTop: "10px",
            fontWeight: "600",
            color: "#64748b",
          }}
        >
          {item.month}
        </span>
      </div>
    ))}
  </div>

  {/* BOTTOM STATS */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "18px",
    }}
  >
    <div
      style={{
        background: "#f8fafc",
        borderRadius: "12px",
        padding: "18px",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        Total Leads
      </div>

      <h2
        style={{
          marginTop: "10px",
          marginBottom: 0,
        }}
      >
        1,248
      </h2>
    </div>

    <div
      style={{
        background: "#f8fafc",
        borderRadius: "12px",
        padding: "18px",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        Qualified Leads
      </div>

      <h2
        style={{
          marginTop: "10px",
          marginBottom: 0,
        }}
      >
        842
      </h2>
    </div>

    <div
      style={{
        background: "#f8fafc",
        borderRadius: "12px",
        padding: "18px",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        Conversion Rate
      </div>

      <h2
        style={{
          marginTop: "10px",
          marginBottom: 0,
        }}
      >
        5.2%
      </h2>
    </div>

    <div
      style={{
        background: "#f8fafc",
        borderRadius: "12px",
        padding: "18px",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        Active Campaigns
      </div>

      <h2
        style={{
          marginTop: "10px",
          marginBottom: 0,
        }}
      >
        12
      </h2>
    </div>
  </div>
</div>

      {/* TRAFFIC & DEVICE ANALYTICS */}

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  }}
>

  {/* TRAFFIC SOURCES */}

  <div
    style={{
      background: "#fff",
      padding: "25px",
      borderRadius: "18px",
      boxShadow: "0 8px 20px rgba(0,0,0,.08)",
    }}
  >
    <h2 style={{ marginTop: 0 }}>
      🌐 Traffic Sources
    </h2>

    <p
      style={{
        color: "#64748b",
        marginBottom: "25px",
      }}
    >
      Visitors by acquisition channel
    </p>

    {[
      { name: "Website", value: 45, color: "#2563eb" },
      { name: "Facebook", value: 20, color: "#3b82f6" },
      { name: "Instagram", value: 18, color: "#ec4899" },
      { name: "LinkedIn", value: 10, color: "#0a66c2" },
      { name: "Referral", value: 7, color: "#22c55e" },
    ].map((item) => (
      <div key={item.name} style={{ marginBottom: "18px" }}>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span>{item.name}</span>

          <strong>{item.value}%</strong>
        </div>

        <div
          style={{
            height: "10px",
            background: "#e5e7eb",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: `${item.value}%`,
              height: "100%",
              background: item.color,
              borderRadius: "10px",
            }}
          />
        </div>

      </div>
    ))}
  </div>

  {/* DEVICE DISTRIBUTION */}

  <div
    style={{
      background: "#fff",
      padding: "25px",
      borderRadius: "18px",
      boxShadow: "0 8px 20px rgba(0,0,0,.08)",
    }}
  >
    <h2 style={{ marginTop: 0 }}>
      📱 Device Distribution
    </h2>

    <p
      style={{
        color: "#64748b",
        marginBottom: "25px",
      }}
    >
      Users by device type
    </p>

    {[
      { name: "Mobile", value: 61, color: "#2563eb" },
      { name: "Desktop", value: 28, color: "#10b981" },
      { name: "Tablet", value: 11, color: "#f59e0b" },
    ].map((item) => (
      <div key={item.name} style={{ marginBottom: "22px" }}>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span>{item.name}</span>

          <strong>{item.value}%</strong>
        </div>

        <div
          style={{
            height: "10px",
            background: "#e5e7eb",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: `${item.value}%`,
              height: "100%",
              background: item.color,
              borderRadius: "10px",
            }}
          />
        </div>

      </div>
    ))}

    <div
      style={{
        marginTop: "30px",
        padding: "15px",
        borderRadius: "12px",
        background: "#f8fafc",
      }}
    >
      <strong>💡 Insight</strong>

      <p
        style={{
          color: "#64748b",
          marginTop: "10px",
          lineHeight: "1.7",
        }}
      >
        Mobile users contribute to more than half of your traffic.
        Optimizing landing pages for mobile can significantly improve
        conversions.
      </p>
    </div>

  </div>

</div>

      {/* CAMPAIGN PERFORMANCE */}

<div
  style={{
    background: "#fff",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
  }}
>
  {/* Header */}

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    }}
  >
    <div>
      <h2
        style={{
          margin: 0,
          color: "#0f172a",
        }}
      >
        Campaign Performance
      </h2>

      <p
        style={{
          color: "#64748b",
          marginTop: "6px",
        }}
      >
        Monitor the performance of your active campaigns.
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
      + New Campaign
    </button>
  </div>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
    }}
  >
    <thead>
      <tr
        style={{
          background: "#f8fafc",
          color: "#64748b",
          textAlign: "left",
        }}
      >
        <th style={{ padding: "14px" }}>Campaign</th>
        <th>Revenue</th>
        <th>ROI</th>
        <th>Leads</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {campaigns.map((item) => (
        <tr
          key={item.name}
          style={{
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <td
            style={{
              padding: "18px 14px",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                color: "#0f172a",
              }}
            >
              {item.name}
            </div>

            <div
              style={{
                color: "#64748b",
                fontSize: "13px",
                marginTop: "4px",
              }}
            >
              Marketing Campaign
            </div>
          </td>

          <td
            style={{
              fontWeight: "600",
            }}
          >
            {item.revenue}
          </td>

          <td>
            <span
              style={{
                color: "#16a34a",
                fontWeight: "700",
              }}
            >
              {item.roi}
            </span>
          </td>

          <td>{item.leads}</td>

          <td>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                background:
                  item.status === "Excellent"
                    ? "#dcfce7"
                    : item.status === "Very Good"
                    ? "#dbeafe"
                    : "#fef3c7",

                color:
                  item.status === "Excellent"
                    ? "#166534"
                    : item.status === "Very Good"
                    ? "#1d4ed8"
                    : "#92400e",

                fontWeight: "600",
              }}
            >
              {item.status}
            </span>
          </td>

          <td>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid #dbeafe",
                  background: "#eff6ff",
                  cursor: "pointer",
                }}
              >
                👁
              </button>

              <button
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid #fde68a",
                  background: "#fef9c3",
                  cursor: "pointer",
                }}
              >
                ✏
              </button>

              <button
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid #fecaca",
                  background: "#fee2e2",
                  cursor: "pointer",
                }}
              >
                ⋮
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* MONTHLY PERFORMANCE */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Monthly Performance</h3>

        {monthly.map((item) => (
          <div key={item.month} style={{ marginBottom: "15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
              }}
            >
              <span>{item.month}</span>
              <span>{item.value}%</span>
            </div>

            <div
              style={{
                height: "10px",
                background: "#e5e7eb",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: `${item.value}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        ))}
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

        <ul style={{ color: "#64748b", lineHeight: "2" }}>
          <li>Revenue increased by 18% compared to last month.</li>
          <li>Google Ads generated the highest ROI.</li>
          <li>Mobile users account for 61% of total traffic.</li>
          <li>Summer Sale campaign is the top performer this quarter.</li>
          <li>Facebook CTR dropped by 9% this month.</li>
        </ul>
      </div>

    </div>
  );
}