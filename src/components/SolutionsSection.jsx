const solutions = [
  {
    title: "Sales Automation",
    desc: "Automate repetitive sales tasks and close deals faster with smart workflows.",
  },
  {
    title: "Digital Marketing",
    desc: "Run targeted campaigns across channels with data-driven optimization.",
  },
  {
    title: "Customer Engagement",
    desc: "Improve customer retention with personalized engagement strategies.",
  },
  {
    title: "Analytics & Reporting",
    desc: "Get real-time insights and track business performance with clarity.",
  },
  {
    title: "Local Business Growth",
    desc: "Help small businesses scale with geo-targeted growth strategies.",
  },
  {
    title: "Enterprise Solutions",
    desc: "Scalable enterprise-grade tools for large organizations and teams.",
  },
];

export default function SolutionsSection() {
  return (
    <section
      style={{
        padding: "120px 80px",
        background: "#f9fafb",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "700",
          marginBottom: "10px",
          color: "#111827",
        }}
      >
        Solutions
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          fontSize: "18px",
          marginBottom: "70px",
        }}
      >
        Everything you need to scale your business with automation and intelligence
      </p>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {solutions.map((item) => (
          <div
            key={item.title}
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "18px",
              border: "1px solid #e5e7eb",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(0,0,0,0.12)";
              e.currentTarget.style.borderColor = "#c7d2fe";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.05)";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#111827",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
                fontSize: "15px",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}