export default function Support() {
  const faqs = [
    "How do I reset my password?",
    "How do I create a campaign?",
    "How does billing work?",
    "How do I use AI tools?",
    "How do I upgrade my plan?",
  ];

  const quickHelp = [
    "Account Issues",
    "Billing Help",
    "Campaign Problems",
    "AI Tools Guide",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>

      {/* HEADER */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "34px",
            fontWeight: "800",
            color: "#0f172a",
          }}
        >
           Support Center
        </h1>

        <p style={{ marginTop: "8px", color: "#64748b" }}>
          Get help, find answers, or contact our support team.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <input
          placeholder="Search help articles..."
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            outline: "none",
          }}
        />
      </div>

      {/* QUICK HELP */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <h3>Quick Help</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginTop: "15px",
          }}
        >
          {quickHelp.map((item) => (
            <div
              key={item}
              style={{
                padding: "16px",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                background: "#f8fafc",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <h3>Frequently Asked Questions</h3>

        <div style={{ marginTop: "15px" }}>
          {faqs.map((q, i) => (
            <div
              key={i}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid #e5e7eb",
                color: "#374151",
                cursor: "pointer",
              }}
            >
              {q}
            </div>
          ))}
        </div>
      </div>

      {/* RAISE TICKET */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <h3>Raise a Ticket</h3>

        <input
          placeholder="Subject"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            outline: "none",
          }}
        />

        <textarea
          placeholder="Describe your issue..."
          style={{
            width: "100%",
            height: "100px",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            outline: "none",
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
          Submit Ticket
        </button>
      </div>

      {/* CONTACT SUPPORT */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <h3>Contact Support</h3>

        <p style={{ color: "#64748b", marginTop: "10px" }}>
          📧 support@groov.com
        </p>
        <p style={{ color: "#64748b" }}>💬 Live Chat: 9 AM - 9 PM</p>
        <p style={{ color: "#64748b" }}>📞 +91 98765 43210</p>
      </div>

      {/* SYSTEM STATUS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #16a34a",
        }}
      >
        <h3 style={{ color: "#16a34a" }}>System Status</h3>
        <p style={{ color: "#64748b" }}>
          🟢 All systems are operational
        </p>
      </div>

    </div>
  );
}