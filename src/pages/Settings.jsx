import { useState, useEffect } from "react";
import {
  FiUser,
  FiShield,
  FiBell,
  FiUsers,
  FiCreditCard,
  FiMonitor,
  FiKey,
  FiCpu,
  FiTrash2,
  FiSave,
  FiCamera,
  FiMoon,
  FiSun,
  FiActivity,
  FiLogOut,
  FiPlus,
  FiCheck,
} from "react-icons/fi";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");

  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex@groov.ai",
    phone: "+91 9876543210",
    company: "Groov Technologies",
    role: "Administrator",
    country: "India",
    timezone: "GMT +5:30",
  });
const handleProfileSave = () => {
  localStorage.setItem(
    "profile",
    JSON.stringify(profile)
  );
useEffect(() => {
  const savedProfile = localStorage.getItem("profile");

  if (savedProfile) {
    setProfile(JSON.parse(savedProfile));
  }
}, []);
  setSaveStatus("Profile saved successfully!");

  setTimeout(() => {
    setSaveStatus("");
  }, 2500);
};
  const [notifications, setNotifications] = useState({
    email: true,
    campaign: true,
    ai: true,
    reports: false,
    desktop: true,
  });

  const [theme, setTheme] = useState("Light");
  const [saveStatus, setSaveStatus] = useState("");

  const tabs = [
    { name: "Profile", icon: <FiUser /> },
    { name: "Security", icon: <FiShield /> },
    { name: "Notifications", icon: <FiBell /> },
    { name: "Workspace", icon: <FiMonitor /> },
    { name: "Team", icon: <FiUsers /> },
    { name: "API", icon: <FiKey /> },
    { name: "AI", icon: <FiCpu /> },
    { name: "Appearance", icon: <FiMoon /> },
    { name: "Account", icon: <FiShield /> },
  ];

  return (
  <div
  style={{
    background: "#f4f7fb",
    minHeight: "100vh",
    padding: "15px 35px 35px 35px",
  }}
>
   <h1
  style={{
    margin: "0 0 30px 0",
    fontSize: "42px",
    fontWeight: "800",
    color: "#111827",
    letterSpacing: "-1px",
  }}
>
  Settings
</h1>
    {/* MAIN LAYOUT */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: 28,
        alignItems: "start",
      }}
    >
      {/* LEFT SIDEBAR */}

<div
  style={{
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 20,
    overflow: "hidden",
    position: "sticky",
    top: 20,
    height: "fit-content",
  }}
>
  {/* User */}

  <div
    style={{
      padding: 30,
      borderBottom: "1px solid #eef2f7",
      textAlign: "center",
    }}
  >
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: "#111827",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28,
        fontWeight: 700,
        margin: "0 auto",
      }}
    >
      A
    </div>

    <h3
      style={{
        marginTop: 16,
        marginBottom: 4,
        color: "#111827",
      }}
    >
      {profile.name}
    </h3>

    <p
      style={{
        color: "#6b7280",
        fontSize: 14,
        marginBottom: 18,
      }}
    >
      {profile.email}
    </p>

    <div
      style={{
        display: "inline-block",
        background: "#ecfdf5",
        color: "#059669",
        padding: "6px 12px",
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      Enterprise Plan
    </div>
  </div>

  {/* Navigation */}

  <div
    style={{
      padding: 15,
    }}
  >
    {tabs.map((tab) => (
      <button
        key={tab.name}
        onClick={() => setActiveTab(tab.name)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "13px 16px",
          border: "none",
          borderRadius: 12,
          marginBottom: 6,
          cursor: "pointer",
          fontWeight: 600,
          fontSize: 15,
          background:
            activeTab === tab.name ? "#111827" : "transparent",
          color:
            activeTab === tab.name ? "#fff" : "#475569",
          transition: ".2s",
        }}
      >
        <span style={{ fontSize: 18 }}>
          {tab.icon}
        </span>

        {tab.name}
      </button>
    ))}
  </div>

  {/* Footer */}

  <div
    style={{
      borderTop: "1px solid #eef2f7",
      padding: 18,
    }}
  >
    <button
      style={{
        width: "100%",
        background: "#f8fafc",
        border: "1px solid #e5e7eb",
        padding: "12px",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        cursor: "pointer",
        fontWeight: 600,
        color: "#475569",
      }}
    >
      <FiLogOut />
      Logout
    </button>
  </div>
</div>
      {/* RIGHT */}

      <div style={{ flex: 1 }}>
        

        

        {activeTab === "Profile" && (
  <div style={card}>
    <SectionTitle
      icon={<FiUser />}
      title="Profile"
    />

    {/* Top Profile */}

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 30,
        marginBottom: 35,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "#111827",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          {profile.name.charAt(0)}
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              color: "#111827",
            }}
          >
            {profile.name}
          </h2>

          <p
            style={{
              marginTop: 6,
              color: "#6b7280",
            }}
          >
            {profile.email}
          </p>

          <span
            style={{
              display: "inline-block",
              marginTop: 12,
              background: "#ecfdf5",
              color: "#059669",
              padding: "6px 12px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Administrator
          </span>
        </div>
      </div>

      <button style={outlineBtn}>
        <FiCamera />
        Change Photo
      </button>
    </div>

    {/* Form */}

    <div style={grid}>
      <Input
        label="Full Name"
        value={profile.name}
        onChange={(e) =>
          setProfile({
            ...profile,
            name: e.target.value,
          })
        }
      />

      <Input
        label="Email Address"
        value={profile.email}
        onChange={(e) =>
          setProfile({
            ...profile,
            email: e.target.value,
          })
        }
      />

      <Input
        label="Phone Number"
        value={profile.phone}
        onChange={(e) =>
          setProfile({
            ...profile,
            phone: e.target.value,
          })
        }
      />

      <Input
        label="Company"
        value={profile.company}
        onChange={(e) =>
          setProfile({
            ...profile,
            company: e.target.value,
          })
        }
      />

      <Input
        label="Country"
        value={profile.country}
        onChange={(e) =>
          setProfile({
            ...profile,
            country: e.target.value,
          })
        }
      />

      <Input
        label="Timezone"
        value={profile.timezone}
        onChange={(e) =>
          setProfile({
            ...profile,
            timezone: e.target.value,
          })
        }
      />
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 35,
        borderTop: "1px solid #e5e7eb",
        paddingTop: 25,
      }}
    >
      <p
        style={{
          color: "#6b7280",
          margin: 0,
        }}
      >
        Last updated 2 hours ago
      </p>

      <button
  style={saveBtn}
  onClick={handleProfileSave}
>
  <FiSave />
  Save Changes
</button>
    </div>
  </div>
)}
                {activeTab === "Security" && (
  <div style={card}>
    <SectionTitle
      icon={<FiShield />}
      title="Security"
    />

    {/* Password */}

    <div
      style={{
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: 18,
        padding: 25,
        marginBottom: 30,
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 20,
          color: "#111827",
        }}
      >
        Change Password
      </h3>

      <div style={grid}>
        <Input
          label="Current Password"
          type="password"
        />

        <Input
          label="New Password"
          type="password"
        />

        <Input
          label="Confirm Password"
          type="password"
        />
      </div>
    </div>

    {/* 2FA */}

    <div style={infoCard}>
      <div>
        <h3
          style={{
            margin: 0,
            color: "#111827",
          }}
        >
          Two-Factor Authentication
        </h3>

        <p style={grayText}>
          Add an extra layer of security using OTP verification.
        </p>
      </div>

      <button
        style={{
          ...saveBtn,
          background: "#16a34a",
        }}
      >
        Enable
      </button>
    </div>

    {/* Active Sessions */}

    <div
      style={{
        marginTop: 35,
      }}
    >
      <h3
        style={{
          marginBottom: 20,
          color: "#111827",
        }}
      >
        Active Sessions
      </h3>

      {[
        {
          device: "Windows • Chrome",
          location: "Pune, India",
          status: "Active now",
        },
        {
          device: "Android App",
          location: "Mumbai",
          status: "Yesterday",
        },
        {
          device: "MacBook Pro",
          location: "Delhi",
          status: "3 days ago",
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 22px",
            border: "1px solid #e5e7eb",
            borderRadius: 14,
            marginBottom: 14,
          }}
        >
          <div>
            <h4
              style={{
                margin: 0,
                color: "#111827",
              }}
            >
              {item.device}
            </h4>

            <p
              style={{
                marginTop: 5,
                color: "#6b7280",
              }}
            >
              {item.location} • {item.status}
            </p>
          </div>

          <button style={dangerOutline}>
            Logout
          </button>
        </div>
      ))}
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 35,
      }}
    >
      <button style={saveBtn}>
        <FiSave />
        Update Security
      </button>
    </div>
  </div>
)}

        {activeTab === "Notifications" && (
  <div style={card}>
    <SectionTitle
      icon={<FiBell />}
      title="Notifications"
    />

    <p
      style={{
        color: "#6b7280",
        marginTop: -15,
        marginBottom: 30,
      }}
    >
      Choose which updates you want to receive.
    </p>

    {[
      {
        key: "email",
        title: "Email Notifications",
        desc: "Receive important account updates by email.",
      },
      {
        key: "campaign",
        title: "Campaign Alerts",
        desc: "Be notified whenever a campaign status changes.",
      },
      {
        key: "ai",
        title: "AI Suggestions",
        desc: "Receive AI recommendations for optimization.",
      },
      {
        key: "reports",
        title: "Weekly Reports",
        desc: "Weekly analytics summary every Monday.",
      },
      {
        key: "desktop",
        title: "Desktop Notifications",
        desc: "Browser notifications while using Groov.",
      },
    ].map((item) => (
      <div
        key={item.key}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 24px",
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          marginBottom: 18,
          background: "#fff",
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: 17,
              color: "#111827",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              marginTop: 6,
              color: "#6b7280",
              fontSize: 14,
            }}
          >
            {item.desc}
          </p>
        </div>

        <label
          style={{
            position: "relative",
            width: 56,
            height: 30,
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={notifications[item.key]}
            onChange={() =>
              setNotifications({
                ...notifications,
                [item.key]: !notifications[item.key],
              })
            }
            style={{ display: "none" }}
          />

          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 30,
              background: notifications[item.key]
                ? "#111827"
                : "#d1d5db",
              transition: ".25s",
            }}
          />

          <span
            style={{
              position: "absolute",
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "#fff",
              top: 3,
              left: notifications[item.key] ? 29 : 3,
              transition: ".25s",
            }}
          />
        </label>
      </div>
    ))}

    <div
      style={{
        borderTop: "1px solid #e5e7eb",
        paddingTop: 25,
        marginTop: 30,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#6b7280",
        }}
      >
        Notification preferences are saved automatically.
      </p>

      <button style={saveBtn}>
        <FiSave />
        Save Preferences
      </button>
    </div>
  </div>
)}

        {activeTab === "Workspace" && (
  <div style={card}>
    <SectionTitle
      icon={<FiMonitor />}
      title="Workspace"
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 30,
      }}
    >
      {/* LEFT */}

      <div>
        <div style={grid}>
          <Input
            label="Workspace Name"
            value="Groov"
          />

          <Input
            label="Industry"
            value="Sales & Marketing"
          />

          <Input
            label="Website"
            value="https://groov.ai"
          />

          <Input
            label="Language"
            value="English"
          />

          <Input
            label="Timezone"
            value="GMT +5:30"
          />

          <Input
            label="Currency"
            value="INR"
          />
        </div>
      </div>

      {/* RIGHT */}

      <div
        style={{
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: 18,
          padding: 25,
          height: "fit-content",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            marginBottom: 20,
            color: "#111827",
          }}
        >
          Workspace Summary
        </h3>

        <Stat title="Plan" value="Enterprise" />
        <Stat title="Members" value="8 Users" />
        <Stat title="Campaigns" value="42 Active" />
        <Stat title="Storage" value="82 GB / 100 GB" />
        <Stat title="Region" value="India" />

        <button
          style={{
            ...outlineBtn,
            width: "100%",
            marginTop: 25,
          }}
        >
          Manage Workspace
        </button>
      </div>
    </div>

    <div
      style={{
        marginTop: 35,
        borderTop: "1px solid #e5e7eb",
        paddingTop: 25,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#6b7280",
        }}
      >
        Changes will affect all members in this workspace.
      </p>

      <button style={saveBtn}>
        <FiSave />
        Save Workspace
      </button>
    </div>
  </div>
)}

        {activeTab === "Team" && (
  <div style={card}>
    <SectionTitle
      icon={<FiUsers />}
      title="Team Members"
    />

    {/* Top Bar */}

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <div>
        <h3
          style={{
            margin: 0,
            color: "#111827",
          }}
        >
          Members
        </h3>

        <p
          style={{
            marginTop: 6,
            color: "#6b7280",
          }}
        >
          Manage workspace members and permissions.
        </p>
      </div>

      <button style={saveBtn}>
        <FiPlus />
        Invite Member
      </button>
    </div>

    {/* Table Header */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1.3fr 1fr 1fr",
        padding: "14px 20px",
        background: "#f9fafb",
        borderRadius: 12,
        fontWeight: 700,
        color: "#64748b",
        fontSize: 14,
      }}
    >
      <div>Member</div>
      <div>Role</div>
      <div>Status</div>
      <div style={{ textAlign: "right" }}>
        Action
      </div>
    </div>

    {[
      {
        name: "Alex Johnson",
        role: "Administrator",
        status: "Online",
      },
      {
        name: "John Carter",
        role: "Marketing Manager",
        status: "Away",
      },
      {
        name: "Sara Wilson",
        role: "Sales Executive",
        status: "Online",
      },
      {
        name: "Emma Thomas",
        role: "Viewer",
        status: "Offline",
      },
    ].map((member, index) => (
      <div
        key={index}
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1.3fr 1fr 1fr",
          alignItems: "center",
          padding: "18px 20px",
          borderBottom: "1px solid #eef2f7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "#111827",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            {member.name.charAt(0)}
          </div>

          <div>
            <div
              style={{
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {member.name}
            </div>

            <div
              style={{
                color: "#6b7280",
                fontSize: 13,
              }}
            >
              member@groov.ai
            </div>
          </div>
        </div>

        <div>{member.role}</div>

        <div>
          <span
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              background:
                member.status === "Online"
                  ? "#dcfce7"
                  : member.status === "Away"
                  ? "#fef3c7"
                  : "#f3f4f6",
              color:
                member.status === "Online"
                  ? "#15803d"
                  : member.status === "Away"
                  ? "#b45309"
                  : "#6b7280",
            }}
          >
            {member.status}
          </span>
        </div>

        <div
          style={{
            textAlign: "right",
          }}
        >
          <button style={outlineBtn}>
            Manage
          </button>
        </div>
      </div>
    ))}
  </div>
)}
                {activeTab === "Billing" && (
  <div style={card}>
    <SectionTitle
      icon={<FiCreditCard />}
      title="Billing & Subscription"
    />

    {/* Current Plan */}

    <div
      style={{
        background: "linear-gradient(135deg,#111827,#1f2937)",
        color: "#fff",
        borderRadius: 20,
        padding: 30,
        marginBottom: 35,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              opacity: .8,
            }}
          >
            Current Plan
          </p>

          <h2
            style={{
              margin: "10px 0",
              fontSize: 34,
            }}
          >
            Enterprise
          </h2>

          <p
            style={{
              opacity: .8,
            }}
          >
            Unlimited campaigns • AI features • API Access
          </p>
        </div>

        <button
          style={{
            background: "#fff",
            color: "#111827",
            border: "none",
            padding: "12px 20px",
            borderRadius: 10,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Upgrade Plan
        </button>
      </div>
    </div>

    {/* Statistics */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 20,
      }}
    >
      <InfoBox
        title="Monthly Cost"
        value="₹9,999"
      />

      <InfoBox
        title="Next Billing"
        value="28 Jul 2026"
      />

      <InfoBox
        title="Users"
        value="8 / 10"
      />

      <InfoBox
        title="Storage"
        value="82 GB"
      />
    </div>

    {/* Payment Method */}

    <div
      style={{
        marginTop: 35,
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 24,
      }}
    >
      <h3
        style={{
          marginTop: 0,
          color: "#111827",
        }}
      >
        Payment Method
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <div>
          <strong>Visa •••• 4587</strong>

          <p
            style={{
              marginTop: 6,
              color: "#6b7280",
            }}
          >
            Expires 07/28
          </p>
        </div>

        <button style={outlineBtn}>
          Update Card
        </button>
      </div>
    </div>

    {/* Footer */}

    <div
      style={{
        marginTop: 35,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #e5e7eb",
        paddingTop: 25,
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#6b7280",
        }}
      >
        Download invoices or update your subscription anytime.
      </p>

      <button style={saveBtn}>
        Billing History
      </button>
    </div>
  </div>
)}

        {/* API */}

        {activeTab === "API" && (
          <div style={card}>
            <SectionTitle
              icon={<FiKey />}
              title="API Keys & Integrations"
            />

            <div style={infoCard}>
              <div>
                <b>Production API Key</b>
                <p style={grayText}>
                  sk_live_xxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>

              <button style={outlineBtn}>
                Regenerate
              </button>
            </div>

            <div style={infoCard}>
              <div>
                <b>Development API Key</b>
                <p style={grayText}>
                  sk_test_xxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>

              <button style={outlineBtn}>
                Regenerate
              </button>
            </div>

            <h3
              style={{
                marginTop: 35,
                marginBottom: 15,
              }}
            >
              Connected Apps
            </h3>

            <div style={sessionCard}>
              <div>
                <b>Google Analytics</b>
                <p style={grayText}>Connected</p>
              </div>

              <button style={outlineBtn}>
                Manage
              </button>
            </div>

            <div style={sessionCard}>
              <div>
                <b>Slack</b>
                <p style={grayText}>Connected</p>
              </div>

              <button style={outlineBtn}>
                Manage
              </button>
            </div>

            <div style={sessionCard}>
              <div>
                <b>Meta Ads</b>
                <p style={grayText}>Not Connected</p>
              </div>

              <button style={saveBtn}>
                Connect
              </button>
            </div>
          </div>
        )}

        {/* AI */}

        {activeTab === "AI" && (
          <div style={card}>
            <SectionTitle
              icon={<FiCpu />}
              title="AI Preferences"
            />

            <ToggleCard
              title="Enable AI Assistant"
              value={true}
              onChange={() => {}}
            />

            <ToggleCard
              title="Auto Campaign Suggestions"
              value={true}
              onChange={() => {}}
            />

            <ToggleCard
              title="Lead Scoring"
              value={true}
              onChange={() => {}}
            />

            <ToggleCard
              title="Generate Weekly Reports"
              value={false}
              onChange={() => {}}
            />

            <div style={{ marginTop: 25 }}>
              <label style={label}>
                AI Response Style
              </label>

              <select style={inputStyle}>
                <option>Balanced</option>
                <option>Creative</option>
                <option>Professional</option>
                <option>Precise</option>
              </select>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 30,
              }}
            >
              <button style={saveBtn}>
                <FiSave />
                Save AI Settings
              </button>
            </div>
          </div>
        )}

        {/* APPEARANCE */}

        {activeTab === "Appearance" && (
          <div style={card}>
            <SectionTitle
              icon={<FiSun />}
              title="Appearance"
            />

            <div
              style={{
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              {["Light", "Dark", "System"].map((mode) => (
                <div
                  key={mode}
                  onClick={() => setTheme(mode)}
                  style={{
                    flex: 1,
                    minWidth: 180,
                    padding: 30,
                    borderRadius: 18,
                    textAlign: "center",
                    cursor: "pointer",
                    border:
                      theme === mode
                        ? "2px solid #2563eb"
                        : "1px solid #e5e7eb",
                    background:
                      theme === mode
                        ? "#eff6ff"
                        : "#fff",
                  }}
                >
                  <h3>{mode}</h3>

                  {theme === mode && (
                    <FiCheck
                      size={24}
                      color="#2563eb"
                    />
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 30,
              }}
            >
              <button style={saveBtn}>
                Save Theme
              </button>
            </div>
          </div>
        )}

        {/* DANGER */}

        {activeTab === "Account" && (
          <div style={card}>
            <SectionTitle
  icon={<FiShield />}
  title="Account Management"
/>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

  <div style={infoCard}>
    <div>
      <b>Export Workspace Data</b>
      <p style={grayText}>
        Download all workspace data including campaigns, leads and reports.
      </p>
    </div>

    <button style={outlineBtn}>
      Export
    </button>
  </div>

  <div style={infoCard}>
    <div>
      <b>Archive Workspace</b>
      <p style={grayText}>
        Archive the workspace without permanently deleting your data.
      </p>
    </div>

    <button style={outlineBtn}>
      Archive
    </button>
  </div>

  <div style={infoCard}>
    <div>
      <b>Transfer Ownership</b>
      <p style={grayText}>
        Transfer this workspace to another administrator.
      </p>
    </div>

    <button style={outlineBtn}>
      Transfer
    </button>
  </div>

  <div
    style={{
      ...infoCard,
      border: "1px solid #ef4444",
      background: "#fef2f2",
    }}
  >
    <div>
      <b style={{ color: "#b91c1c" }}>Delete Workspace</b>

      <p style={grayText}>
        Permanently delete this workspace and all associated data. This action cannot be undone.
      </p>
    </div>

    <button
      style={{
        background: "#ef4444",
        color: "#fff",
        border: "none",
        padding: "12px 22px",
        borderRadius: 10,
        cursor: "pointer",
        fontWeight: 700,
      }}
    >
      Delete
    </button>
  </div>

</div></div>
        )}

      </div>

    </div>

  </div>
  );
}
/* ---------- COMPONENTS ---------- */

function SectionTitle({ icon, title }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 35,
        paddingBottom: 20,
        borderBottom: "1px solid #edf2f7",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "#eef4ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2563eb",
            fontSize: 20,
          }}
        >
          {icon}
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              marginTop: 6,
              color: "#64748b",
              fontSize: 14,
            }}
          >
            Configure and manage your {title.toLowerCase()}.
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 15,
      }}
    >
      <span style={{ color: "#64748b" }}>{title}</span>

      <b>{value}</b>
    </div>
  );
}

function QuickButton({ icon, text }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "12px 18px",
        borderRadius: 12,
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      {icon}
      {text}
    </button>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
    </div>
  );
}

function ToggleCard({
  title,
  value,
  onChange,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginBottom: 18,
        borderRadius: 16,
        border: "1px solid #e5e7eb",
        background: "#fff",
      }}
    >
      <b>{title}</b>

      <label
        style={{
          position: "relative",
          width: 54,
          height: 28,
          display: "inline-block",
        }}
      >
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          style={{ display: "none" }}
        />

        <span
          style={{
            position: "absolute",
            inset: 0,
            background: value ? "#2563eb" : "#cbd5e1",
            borderRadius: 30,
            transition: ".3s",
          }}
        />

        <span
          style={{
            position: "absolute",
            top: 3,
            left: value ? 29 : 3,
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#fff",
            transition: ".3s",
          }}
        />
      </label>
    </div>
  );
}

function MemberCard({
  name,
  role,
  status,
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 18,
        padding: 22,
      }}
    >
      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#6366f1,#2563eb)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 15,
        }}
      >
        {name.charAt(0)}
      </div>

      <h3 style={{ margin: 0 }}>{name}</h3>

      <p style={grayText}>{role}</p>

      <span
        style={{
          display: "inline-block",
          padding: "6px 14px",
          borderRadius: 20,
          background:
            status === "Online"
              ? "#dcfce7"
              : status === "Away"
              ? "#fef9c3"
              : "#e5e7eb",
          color:
            status === "Online"
              ? "#16a34a"
              : status === "Away"
              ? "#ca8a04"
              : "#475569",
          fontWeight: 600,
          fontSize: 13,
        }}
      >
        {status}
      </span>
    </div>
  );
}

function InfoBox({ title, value }) {
  return (
    <div
      style={{
        background: "#f8fafc",
        padding: 22,
        borderRadius: 18,
        border: "1px solid #e5e7eb",
      }}
    >
      <p
        style={{
          color: "#64748b",
          marginBottom: 10,
        }}
      >
        {title}
      </p>

      <h2
        style={{
          margin: 0,
          color: "#0f172a",
        }}
      >
        {value}
      </h2>
    </div>
  );
}

/* ---------- STYLES ---------- */

const card = {
  background: "#ffffff",
  borderRadius: 24,
  padding: "35px",
  border: "1px solid #e8edf4",
  boxShadow: "0 12px 35px rgba(15,23,42,.05)",
  minHeight: "650px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 20,
};

const inputStyle = {
  width: "100%",
  padding: "13px 15px",
  borderRadius: 12,
  border: "1px solid #d1d5db",
  marginTop: 8,
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = {
  fontWeight: 600,
  color: "#334155",
};

const grayText = {
  color: "#64748b",
  marginTop: 6,
};

const infoCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  borderRadius: 18,
  border: "1px solid #e5e7eb",
  marginBottom: 18,
};

const sessionCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 18,
  border: "1px solid #e5e7eb",
  borderRadius: 16,
  marginBottom: 16,
};

const saveBtn = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "13px 24px",
  borderRadius: 12,
  cursor: "pointer",
  fontWeight: 700,
};

const outlineBtn = {
  background: "#fff",
  border: "1px solid #2563eb",
  color: "#2563eb",
  padding: "11px 20px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 600,
};

const dangerOutline = {
  background: "#fff",
  border: "1px solid #ef4444",
  color: "#ef4444",
  padding: "11px 20px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 600,
};