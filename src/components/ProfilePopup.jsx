import {
  X,
  LayoutDashboard,
  Megaphone,
  Settings,
  LogOut,
} from "lucide-react";

export default function ProfilePopup({
  showProfile,
  setShowProfile,
  profileRef,
}) {
  if (!showProfile) return null;

  return (
    <div
      ref={profileRef}
      style={{
        position: "absolute",
        top: "80px",
        right: "30px",
        width: "420px",
        background: "#eef2f7",
        borderRadius: "30px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "20px 25px",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#202124",
          }}
        >
          alex@groov.com
        </span>

        <button
          onClick={() => setShowProfile(false)}
          style={{
            position: "absolute",
            right: "20px",
            top: "15px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "#5f6368",
          }}
        >
          <X size={28} />
        </button>
      </div>

      {/* Profile Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 30px 30px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            marginBottom: "15px",
          }}
        />

        <h2
          style={{
            margin: "0 0 20px",
            fontWeight: "500",
            fontSize: "42px",
            color: "#202124",
          }}
        >
          Hi, Alex
        </h2>

        <button
          style={{
            padding: "14px 30px",
            borderRadius: "30px",
            border: "1px solid #c7c7c7",
            background: "#fff",
            color: "#1565d8",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#1565d8";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#fff";
            e.target.style.color = "#1565d8";
          }}
        >
          Manage your account
        </button>
      </div>

      <hr style={{ border: "1px solid #d7dce3", margin: 0 }} />

      {/* Menu */}
      <div>
        <MenuItem
          icon={<LayoutDashboard size={20} />}
          title="Dashboard"
        />

        <MenuItem
          icon={<Megaphone size={20} />}
          title="My Campaigns"
        />

        <MenuItem
          icon={<Settings size={20} />}
          title="Settings"
        />

        <MenuItem
          icon={<LogOut size={20} />}
          title="Logout"
          color="#d93025"
        />
      </div>
    </div>
  );
}

function MenuItem({ icon, title, color = "#202124" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "18px 30px",
        cursor: "pointer",
        color,
        fontSize: "18px",
        transition: "0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
}