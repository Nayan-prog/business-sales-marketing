export default function AITools() {
  const tools = [
    "📝 Ad Copy Generator",
    "📧 Email Generator",
    "📱 Social Media Post Generator",
    "🔑 SEO Keyword Generator",
    "🎯 Audience Suggestion",
    "🤖 Campaign Optimizer",
  ];

  const history = [
    { type: "Ad Copy", status: "Completed", date: "Today" },
    { type: "Email", status: "Completed", date: "Yesterday" },
    { type: "SEO Keywords", status: "Completed", date: "2 Days Ago" },
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
             AI Tools
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            Use AI to generate high-converting marketing content.
          </p>
        </div>

        <button
          style={{
            padding: "10px 18px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Upgrade to Pro
        </button>
      </div>

      {/* KPI CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
        }}
      >
        {[
          { title: "AI Credits", value: "1,250" },
          { title: "Content Generated", value: "340" },
          { title: "Saved Hours", value: "86 hrs" },
          { title: "Success Rate", value: "92%" },
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

      {/* AI TOOLS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>AI Marketing Tools</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool}
              style={{
                padding: "16px",
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* QUICK GENERATOR */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Quick Generator</h3>

        <textarea
          placeholder="Write your prompt here..."
          style={{
            width: "100%",
            height: "100px",
            marginTop: "10px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
          }}
        />

        <button
          style={{
            marginTop: "12px",
            padding: "10px 16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Generate
        </button>
      </div>

      {/* RECENT GENERATIONS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Recent AI Generations</h3>

        <table style={{ width: "100%", marginTop: "15px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", color: "#64748b" }}>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr key={item.type} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={{ padding: "12px 0", fontWeight: "600" }}>
                  {item.type}
                </td>
                <td>{item.status}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PROMPTS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Recommended Prompts</h3>

        <ul style={{ lineHeight: "2", color: "#64748b" }}>
          <li>Generate a Facebook ad for a clothing brand</li>
          <li>Write an email for abandoned carts</li>
          <li>Create Instagram captions</li>
          <li>Generate SEO keywords for fitness products</li>
        </ul>
      </div>

      {/* INSIGHTS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>AI Insights</h3>

        <ul style={{ lineHeight: "2", color: "#64748b" }}>
          <li>Email campaigns generated by AI have 18% higher CTR.</li>
          <li>SEO keywords improved search traffic by 26%.</li>
          <li>AI reduced campaign creation time by 70%.</li>
        </ul>
      </div>

    </div>
  );
}