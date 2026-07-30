export default function HeroSection() {
  return (
    <section
      style={{
        padding: "80px 70px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* LEFT SIDE */}

        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#1a73e8",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            AI-Powered Advertising Platform
          </p>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.1",
              marginBottom: "25px",
              color: "#111827",
            }}
          >
            Grow Your Business
            <br />
            with Smarter Advertising
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#6b7280",
              lineHeight: "1.7",
              maxWidth: "650px",
            }}
          >
            Reach the right customers, generate quality
            leads, automate campaigns, and track results
            in real time with Groov.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "35px",
            }}
          >
            <button
              style={{
                background: "#1a73e8",
                color: "white",
                border: "none",
                padding: "16px 30px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Start Advertising
            </button>

            <button
              style={{
                background: "white",
                color: "#111827",
                border: "1px solid #d1d5db",
                padding: "16px 30px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Book a Demo
            </button>
          </div>

          {/* STATS */}

          <div
            style={{
              display: "flex",
              gap: "50px",
              marginTop: "50px",
            }}
          >
            <div>
              <h2 style={{ margin: 0 }}>12K+</h2>
              <p>Businesses</p>
            </div>

            <div>
              <h2 style={{ margin: 0 }}>₹50Cr+</h2>
              <p>Ad Spend Managed</p>
            </div>

            <div>
              <h2 style={{ margin: 0 }}>95%</h2>
              <p>Client Retention</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "550px",
              background: "#fff",
              borderRadius: "20px",
              padding: "25px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.12)",
            }}
          >
            <h3>Campaign Performance</h3>

            <div
              style={{
                height: "220px",
                background:
                  "linear-gradient(to top, #e8f0fe, white)",
                borderRadius: "12px",
                marginTop: "20px",
                position: "relative",
              }}
            >
              <svg
                width="100%"
                height="220"
                viewBox="0 0 500 220"
              >
                <polyline
                  fill="none"
                  stroke="#1a73e8"
                  strokeWidth="4"
                  points="
                  20,180
                  100,150
                  180,130
                  260,90
                  340,70
                  420,40
                  "
                />
              </svg>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "25px",
              }}
            >
              <div>
                <h2 style={{ margin: 0 }}>245K</h2>
                <p>Impressions</p>
              </div>

              <div>
                <h2 style={{ margin: 0 }}>18K</h2>
                <p>Clicks</p>
              </div>

              <div>
                <h2 style={{ margin: 0 }}>3.9%</h2>
                <p>CTR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}