import { useState, useEffect } from "react";
import {
  getLeads,
  createLead,
  deleteLead,
} from "../services/leadService"; 
export default function Leads() {
const [showModal, setShowModal] = useState(false);
const [newLead, setNewLead] = useState({
  name: "",
  email: "",
  phone: "",
  source: "Website",
});
const [leadsData, setLeadsData] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  fetchLeads();
}, []);

const fetchLeads = async () => {
  try {
    const data = await getLeads();
    setLeadsData(data);
  } catch (error) {
    console.error("Lead Error:", error);
  } finally {
    setLoading(false);
  }
};
  const statusColor = (status) => {
    switch (status) {
      case "Qualified":
        return { bg: "#dcfce7", color: "#15803d" };
      case "Contacted":
        return { bg: "#dbeafe", color: "#2563eb" };
      case "New":
        return { bg: "#fef3c7", color: "#d97706" };
      default:
        return { bg: "#f3f4f6", color: "#6b7280" };
    }
  };
  const handleDeleteLead = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this lead?"
  );

  if (!confirmDelete) return;

  try {
    await deleteLead(id);

    alert("Lead Deleted Successfully");

    fetchLeads();
  } catch (error) {
    console.error(error);
    alert("Failed to delete lead");
  }
};

const editLead = (lead) => {
  alert("Edit feature coming soon!");
};

const viewLead = (lead) => {
  alert(
`Name: ${lead.name}

Company: ${lead.company}

Email: ${lead.email}

Phone: ${lead.phone}

Status: ${lead.status}`
  );
};
  
const exportCSV = () => {
  const headers = [
    "Name",
    "Company",
    "Email",
    "Phone",
    "Source",
    "Status",
    "Owner",
    "Last Contact",
  ];

  const rows = leadsData.map((lead) => [
    lead.name,
    lead.company,
    lead.email,
    lead.phone,
    lead.source,
    lead.status,
    lead.owner,
    lead.lastContact,
  ]);

  const csvContent =
    [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv",
  });

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Leads.csv";
  a.click();

  window.URL.revokeObjectURL(url);
};
if (loading) {
  return <h2>Loading Leads...</h2>;
}
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
            Leads
          </h1>

          <p
            style={{
              marginTop: "8px",
              fontSize: "16px",
              color: "#64748b",
            }}
          >
            Manage and track all your potential customers.
          </p>
        </div>
<div
  style={{
    display: "flex",
    gap: "12px",
  }}
>
  <button
    onClick={exportCSV}
    style={{
      padding: "10px 18px",
      background: "#fff",
      color: "#0f172a",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    Export CSV
  </button>

  <button
  onClick={() => setShowModal(true)}
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
  + Add Lead
</button>
</div>
      </div>

      {/* KPI CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "16px",
        }}
      >
        {[
          {
    title: "Total Leads",
    value: leadsData.length,
},
          { title: "New Leads", value: "48" },
          { title: "Qualified Leads", value: "185" },
          { title: "Converted Leads", value: "126" },
          { title: "Conversion Rate", value: "24%" },
        ].map((card) => (
          <div
            key={card.title}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,.06)",
            }}
          >
            <div
              style={{
                color: "#64748b",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {card.title}
            </div>

            <h2 style={{ marginTop: "12px" }}>{card.value}</h2>
          </div>
        ))}
      </div>

      {/* SEARCH BAR */}
      <div
        style={{
          background: "#fff",
          padding: "18px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <input
          placeholder="Search leads..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
          }}
        />

        <select
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
          }}
        >
          <option>Status</option>
          <option>New</option>
          <option>Qualified</option>
          <option>Contacted</option>
        </select>

        <select
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
          }}
        >
          <option>Source</option>
          <option>Website</option>
          <option>LinkedIn</option>
          <option>Facebook</option>
        </select>
      </div>

      {/* TABLE */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
          overflowX: "auto",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Lead Database</h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                color: "#64748b",
                textAlign: "left",
              }}
            >
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Source</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Actions</th>
              <th>Last Contact</th>
            </tr>
          </thead>

          <tbody>
            {leadsData.map((lead) => (
              <tr
                key={lead.email}
                style={{
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <td style={{ padding: "14px 0", fontWeight: "600" }}>
                  {lead.name}
                </td>

                <td>{lead.company}</td>

                <td>{lead.email}</td>

                <td>{lead.phone}</td>

                <td>{lead.source}</td>

                <td>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "20px",
                      background: statusColor(lead.status).bg,
                      color: statusColor(lead.status).color,
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    {lead.status}
                  </span>
                </td>

                <td>{lead.owner}</td>

                <td>{lead.lastContact}</td>
                
                  <td>
  <div
    style={{
      display: "flex",
      gap: "8px",
      alignItems: "center",
    }}
  >
    <button
      onClick={() => viewLead(lead)}
      title="View"
      style={{
        background: "#eff6ff",
        border: "1px solid #bfdbfe",
        color: "#2563eb",
        padding: "6px 10px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      👁
    </button>

    <button
      onClick={() => editLead(lead)}
      title="Edit"
      style={{
        background: "#fef9c3",
        border: "1px solid #fde047",
        color: "#ca8a04",
        padding: "6px 10px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      ✏
    </button>

    <button
  onClick={() => handleDeleteLead(lead.id)}
  title="Delete"
  style={{
    width: "38px",
    height: "38px",
    background: "#fee2e2",
    border: "1px solid #fca5a5",
    color: "#dc2626",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  }}
>
  🗑
</button>
  </div>  
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BOTTOM SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* FUNNEL */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,.06)",
          }}
        >
          <h3>Lead Conversion Funnel</h3>

          <div style={{ lineHeight: "2.2" }}>
            🟡 New (48)
            <br />
            ↓
            <br />
            🔵 Contacted (310)
            <br />
            ↓
            <br />
            🟢 Qualified (185)
            <br />
            ↓
            <br />
            🟣 Proposal Sent (80)
            <br />
            ↓
            <br />
            ✅ Converted (126)
          </div>
        </div>
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
        <h3>AI Insights</h3>

        <ul style={{ lineHeight: "2", color: "#64748b" }}>
          <li>LinkedIn leads have the highest conversion rate.</li>
          <li>15 leads haven't been contacted in the last 7 days.</li>
          <li>8 qualified leads require immediate follow-up.</li>
          <li>Most conversions happen between 3 PM and 6 PM.</li>
        </ul>
      </div>

{showModal && (
  <div
    onClick={() => setShowModal(false)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
    onClick={(e) => e.stopPropagation()}  
      style={{
        background: "#fff",
        width: "650px",
padding: "35px",
borderRadius: "18px",
boxShadow: "0 20px 50px rgba(0,0,0,.25)",
        borderRadius: "15px",
      }}
    >
      <div
    style={{
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: "15px",
        marginBottom: "25px",
    }}
>
    <h2 style={{ margin: 0 }}>
        Add New Lead
    </h2>

    <p
        style={{
            color: "#64748b",
            marginTop: "8px",
        }}
    >
        Fill the details below to create a new lead.
    </p>
</div>
<label
  style={{
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
  }}
>
  Full Name
</label>
      <input
        placeholder="Name"
        value={newLead.name}
        onChange={(e) =>
          setNewLead({
            ...newLead,
            name: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />
<label
  style={{
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
  }}
>
  Full Name
</label>
      <input
        placeholder="Email"
        value={newLead.email}
        onChange={(e) =>
          setNewLead({
            ...newLead,
            email: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />
<label
  style={{
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
  }}
>
  Full Name
</label>
      <input
        placeholder="Phone"
        value={newLead.phone}
        onChange={(e) =>
          setNewLead({
            ...newLead,
            phone: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>

        <button
  onClick={async () => {
    if (
      !newLead.name ||
      !newLead.email ||
      !newLead.phone
    ) {
      alert("Fill all fields");
      return;
    }

    try {
      await createLead({
        name: newLead.name,
        email: newLead.email,
        phone: newLead.phone,
        company: "-",
        source: newLead.source,
        status: "new",
      });

      alert("Lead Created Successfully");

      fetchLeads();

      setNewLead({
        name: "",
        email: "",
        phone: "",
        source: "Website",
      });

      setShowModal(false);

    } catch (error) {
      console.error(error);
      alert("Failed to create lead");
    }
  }}
  style={{
    padding: "12px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Save Lead
</button>
  
      </div>
    </div>
  </div>
)}
    </div>
  );
}