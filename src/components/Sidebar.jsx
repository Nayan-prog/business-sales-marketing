export default function Sidebar({ setActivePage }) {
  const menu = [
  { title: "Campaigns", key: "campaigns" },
  { title: "Leads", key: "leads" },
  { title: "Analytics", key: "analytics" },
  { title: "Audience", key: "audience" },
  { title: "Billing", key: "billing" },
  { title: "Settings", key: "settings" },
];

  return (
    <div
  style={{
    width: "300px",
    height: "100%",
    minHeight: "100vh",
    background: "#0f172a",
    color: "#e5e7eb",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  }}
>
      {/* BRAND */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: "800",
          color: "white",
          marginBottom: "20px",
        }}
      >
        Groov
      </div>
<div
  style={{
    background: "#1e293b",
    borderRadius: "14px",
    padding: "18px",
    marginTop: "25px",
    marginBottom: "25px",
  }}
>
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "#2563eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
      fontSize: "18px",
      color: "white",
    }}
  >
    A
  </div>

  <div
    style={{
      marginTop: "12px",
      fontWeight: "700",
    }}
  >
    Alex
  </div>

  <div
    style={{
      color: "#94a3b8",
      fontSize: "13px",
    }}
  >
    Advertiser Account
  </div>
</div>
      {/* DASHBOARD BUTTON (HOME) */}
      <div
        onClick={() => setActivePage("home")}
        style={{
          padding: "12px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "700",
          background: "#1e293b",
        }}
      >
        Dashboard
      </div>

      {menu.map((item) => (
  <div
    key={item.title}
    onClick={() => setActivePage(item.key)}
    style={{
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "700",
    }}
  >
    {item.title}
  </div>
))}
<div
  style={{
    marginTop: "auto",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
  }}
>
  <div
    style={{
      color: "#94a3b8",
      fontSize: "14px",
      cursor: "pointer",
      marginBottom: "10px",
    }}
  >
    Contact Support
  </div>

  <div
    style={{
      color: "#64748b",
      fontSize: "12px",
    }}
  >
    © 2026 Groov
  </div>
</div>
    </div>
  );
}