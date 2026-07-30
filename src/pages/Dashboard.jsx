import Sidebar from "../components/Sidebar";
import CreateCampaign from "./CreateCampaign";
import Home from "./Home";
import CampaignDetails from "./CampaignDetails";
import Campaigns from "./Campaigns";
import Leads from "./Leads";
import Analytics from "./Analytics";
import Audience from "./Audience";
import Billing from "./Billing";
import Settings from "./Settings";

export default function Dashboard({ activePage, setActivePage }) {
  const renderPage = () => {
    switch (activePage) {
      case "campaigns":
        return (
  <Campaigns
    setActivePage={setActivePage}
  />
);
        case "create-campaign":
  return <CreateCampaign />;
  case "campaign-details":
  return (
    <CampaignDetails
      setActivePage={setActivePage}
    />
  );
      case "leads":
        return <Leads />;
      case "analytics":
        return <Analytics />;
      case "audience":
        return <Audience />;
      case "billing":
        return <Billing />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ display: "flex", minheight: "100vh" }}>
      <Sidebar setActivePage={setActivePage} />

      <div
  style={{
    flex: 1,
    background: "#f5f7fb",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }}
>
  <div style={{ flex: 1, padding: "30px 40px" }}>
    {renderPage()}
  </div>

  </div>
    </div>
  );
}