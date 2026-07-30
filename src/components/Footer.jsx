export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "50px 60px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#60a5fa",
              marginBottom: "15px",
            }}
          >
            Groov
          </h2>

          <p
            style={{
              color: "#d1d5db",
              maxWidth: "300px",
              lineHeight: "1.6",
            }}
          >
            Helping businesses grow through smart sales,
            digital marketing, lead generation and
            data-driven strategies.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Services</p>
          <p>Contact</p>
          <p>Pricing</p>
        </div>

        <div>
          <h3>Legal</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Refund Policy</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0 20px",
          borderColor: "#374151",
        }}
      />

      <div
        style={{
          textAlign: "center",
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        © 2026 Groov. All Rights Reserved.
      </div>
    </footer>
  );
}