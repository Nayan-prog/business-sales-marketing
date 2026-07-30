import { cardStyle } from "../styles/styles";

export default function WhyChooseGroov() {
  return (
    <section
      style={{
        padding: "80px 60px",
        backgroundColor: "#f8fafc",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "15px",
          color: "#111827",
        }}
      >
        Why Choose Groov?
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "#6b7280",
          marginBottom: "50px",
        }}
      >
        We help businesses grow through smart sales and marketing strategies.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        <div style={cardStyle}>
          <h3>🚀 Experienced Team</h3>
          <p>
            Skilled professionals with expertise in digital marketing and sales.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📊 Data Driven Decisions</h3>
          <p>
            Every campaign is optimized using real analytics and performance
            data.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>📈 ROI Focused</h3>
          <p>
            Our strategies are designed to maximize revenue and business growth.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>🔍 Transparent Reporting</h3>
          <p>
            Get clear reports and insights so you always know what is happening.
          </p>
        </div>
      </div>
    </section>
  );
}