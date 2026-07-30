import MenuItem from "./MenuItem";
import { linkStyle } from "../styles/styles";


export default function Navbar({
  startMenuRef,
  supportMenuRef,
  profileRef,
  showStartMenu,
  setShowStartMenu,
  showSupportMenu,
  setShowSupportMenu,
  setShowCampaignForm,
  showProfile,
  setShowProfile,
  showSolutionsMenu,
  setShowSolutionsMenu,
  solutionsMenuRef,
  setShowLogin,
})  {
  
  return (
    <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 40px",
          borderBottom: "1px solid #e5e5e5",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "white",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          
          {/* Groov Logo */}
          <h2
            style={{
              margin: 0,
              color: "#1a73e8",
              fontSize: "28px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Groov
          </h2>

          <div 
          ref={startMenuRef}
          style={{ position: "relative" }}>
  {showStartMenu && (
  <div
    style={{
      position: "absolute",
      top: "42px",
      left: 0,
      width: "260px",
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "14px",
      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
      overflow: "hidden",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        padding: "16px 20px",
        fontWeight: "600",
        fontSize: "15px",
        color: "#202124",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      Start Advertising
    </div>

    <MenuItem>Overview</MenuItem>
<MenuItem>How it Works</MenuItem>
<MenuItem>Cost</MenuItem>
<MenuItem>Privacy</MenuItem>
  </div>
)}
</div>

          <div 
          ref={solutionsMenuRef}
          style={{ position: "relative" }}>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      setShowSolutionsMenu(!showSolutionsMenu);
    }}
    style={linkStyle}
  >
    Solutions
  </a>

  {showSolutionsMenu && (
    <div
      style={{
        position: "absolute",
        top: "40px",
        left: 0,
        width: "280px",
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
        overflow: "hidden",
        zIndex: 1000,
      }}
    >
      <MenuItem>Lead Generation</MenuItem>
      <MenuItem>Sales Automation</MenuItem>
      <MenuItem>Digital Marketing</MenuItem>
      <MenuItem>Customer Engagement</MenuItem>
      <MenuItem>Analytics & Reporting</MenuItem>
      <MenuItem>Local Business Growth</MenuItem>
      <MenuItem>Enterprise Solutions</MenuItem>
    </div>
  )}
</div>

          <div 
          ref={supportMenuRef}
          style={{ position: "relative" }}>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      setShowSupportMenu(!showSupportMenu);
    }}
    style={linkStyle}
  >
    Get Support
  </a>

  {showSupportMenu && (
  <div
    style={{
      position: "absolute",
      top: "40px",
      left: 0,
      width: "220px",
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      overflow: "hidden",
      zIndex: 1000,
    }}
  >
    <div
      onClick={() => alert("Help Center")}
      style={{
        padding: "14px 18px",
        cursor: "pointer",
        borderBottom: "1px solid #eee",
      }}
    >
      Help Center
    </div>

    <div
      onClick={() => alert("Get Expert Support")}
      style={{
        padding: "14px 18px",
        cursor: "pointer",
        borderBottom: "1px solid #eee",
      }}
    >
      Get Expert Support
    </div>

    <div
      onClick={() => alert("FAQs")}
      style={{
        padding: "14px 18px",
        cursor: "pointer",
      }}
    >
      FAQs
    </div>
  </div>
)}
</div>
        </div>

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <span
            style={{
              color: "#1a73e8",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            📞 1800 572 8309
          </span>

          <button
  onClick={() => {
  window.history.pushState({}, "");
  setShowCampaignForm(true);
}}
  style={{
    padding: "10px 22px",
    borderRadius: "999px",
    border: "none",
    background: "#1a73e8",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  }}
>
  Get Started
</button>
  <div
ref={profileRef}
style={{position:"relative"}}
>
          {/* Right Profile */}
          <img
  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  alt="profile"
  width="40"
  onClick={() => setShowProfile(!showProfile)}
  style={{
    border: "1px solid #dadce0",
    borderRadius: "50%",
    padding: "3px",
    cursor: "pointer",
  }}
/>
{showProfile && (
  <div
    style={{
      position: "absolute",
      top: "55px",
      right: 0,
      width: "220px",
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
      overflow: "hidden",
      zIndex: 1000,
    }}
  >
    <div
      onClick={() => setShowLogin(true)}
      style={{
        padding: "14px 18px",
        cursor: "pointer",
        borderBottom: "1px solid #eee",
      }}
    >
      Sign In
    </div>

    <div
      style={{
        padding: "14px 18px",
        cursor: "pointer",
      }}
    >
      Contact Support
    </div>
  </div>
)}
</div>
        </div>
        </nav>
  );
}