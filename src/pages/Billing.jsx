export default function Billing() {
  const invoices = [
    { id: "#INV001", date: "12 Jun 2026", amount: "₹1,999", status: "Paid" },
    { id: "#INV002", date: "12 May 2026", amount: "₹1,999", status: "Paid" },
    { id: "#INV003", date: "12 Apr 2026", amount: "₹1,999", status: "Paid" },
  ];

  const plans = [
    { name: "Free Plan", price: "₹0 / month", recommended: false },
    { name: "Pro Plan", price: "₹1,999 / month", recommended: true },
    { name: "Enterprise Plan", price: "Custom Pricing", recommended: false },
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
            Billing & Subscription
          </h1>

          <p style={{ marginTop: "8px", color: "#64748b", fontSize: "16px" }}>
            Manage your subscription, invoices, and payment details.
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
          Manage Plan
        </button>
      </div>

      {/* CURRENT PLAN + USAGE */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Current Plan</h3>

        <div style={{ lineHeight: "2", marginTop: "10px" }}>
          <p><b>Plan:</b> Pro Plan</p>
          <p><b>Status:</b> Active</p>
          <p><b>Renewal Date:</b> 12 Jul 2026</p>
          <p><b>Payment Method:</b> Card ending **** 4242</p>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "16px",
          }}
        >
          {[
            { title: "AI Credits Used", value: "780 / 1000" },
            { title: "Storage Used", value: "4.2 GB" },
            { title: "API Calls", value: "12,400" },
            { title: "Active Campaigns", value: "6" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#f8fafc",
                padding: "18px",
                borderRadius: "10px",
              }}
            >
              <div style={{ color: "#64748b", fontWeight: "600" }}>
                {item.title}
              </div>
              <h2 style={{ marginTop: "10px" }}>{item.value}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* UPGRADE PLANS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Upgrade Plan</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "18px",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                border: plan.recommended
                  ? "2px solid #2563eb"
                  : "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                background: plan.recommended ? "#eff6ff" : "#fff",
              }}
            >
              <h3 style={{ margin: 0 }}>{plan.name}</h3>
              <p style={{ color: "#64748b", marginTop: "10px" }}>
                {plan.price}
              </p>

              <button
                style={{
                  marginTop: "12px",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                  background: plan.recommended ? "#2563eb" : "#e5e7eb",
                  color: plan.recommended ? "white" : "#0f172a",
                }}
              >
                {plan.recommended ? "Current Plan" : "Upgrade"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* INVOICES */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
          overflowX: "auto",
        }}
      >
        <h3>Invoices</h3>

        <table style={{ width: "100%", marginTop: "15px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", color: "#64748b" }}>
              <th>Invoice</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={{ padding: "12px 0", fontWeight: "600" }}>
                  {inv.id}
                </td>
                <td>{inv.date}</td>
                <td>{inv.amount}</td>
                <td style={{ color: "#16a34a", fontWeight: "600" }}>
                  {inv.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAYMENT METHODS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}
      >
        <h3>Payment Methods</h3>

        <p style={{ marginTop: "10px" }}>
          💳 Card ending **** 4242
        </p>

        <button
          style={{
            marginTop: "10px",
            padding: "10px 16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          + Add New Card
        </button>
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
        <h3>Billing Insights</h3>

        <ul style={{ color: "#64748b", lineHeight: "2" }}>
          <li>Next payment is due in 7 days.</li>
          <li>You are using 78% of your AI credits.</li>
          <li>Upgrade recommended for higher limits.</li>
          <li>Pro plan gives 3x more AI generation capacity.</li>
        </ul>
      </div>

    </div>
  );
}