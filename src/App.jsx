import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Dashboard from "./pages/Dashboard";
import { useLocation } from "react-router-dom";
import Login from "./pages/Login";
import CampaignDetails from "./pages/CampaignDetails";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProfilePopup from "./components/ProfilePopup";
import CampaignForm from "./components/CampaignForm";
import WhyChooseGroov from "./components/WhyChooseGroov";
import Footer from "./components/Footer";
import Campaigns from "./pages/Campaigns";
import SolutionsSection from "./components/SolutionsSection";

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [showSupportMenu, setShowSupportMenu] = useState(false);
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
  const profileRef = useRef(null);
  const startMenuRef = useRef(null);
  const supportMenuRef = useRef(null);
  const solutionsMenuRef = useRef(null);
  const [activePage, setActivePage] = useState("home");
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const handleBack = () => {
      setShowCampaignForm(false);
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setShowProfile(false);
    }

    if (
      startMenuRef.current &&
      !startMenuRef.current.contains(event.target)
    ) {
      setShowStartMenu(false);
    }

    if (
      supportMenuRef.current &&
      !supportMenuRef.current.contains(event.target)
    ) {
      setShowSupportMenu(false);
    }

    if (
      solutionsMenuRef.current &&
      !solutionsMenuRef.current.contains(event.target)
    ) {
      setShowSolutionsMenu(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);
    return (
  <Routes>
    <Route
      path="/"
      element={
        showLogin ? (
          <Login onBack={() => setShowLogin(false)} />
        ) : (
          <>
            <Navbar
              startMenuRef={startMenuRef}
              supportMenuRef={supportMenuRef}
              solutionsMenuRef={solutionsMenuRef}
              showStartMenu={showStartMenu}
              setShowStartMenu={setShowStartMenu}
              showSupportMenu={showSupportMenu}
              setShowSupportMenu={setShowSupportMenu}
              showSolutionsMenu={showSolutionsMenu}
              setShowSolutionsMenu={setShowSolutionsMenu}
              showProfile={showProfile}
              setShowProfile={setShowProfile}
              setShowCampaignForm={setShowCampaignForm}
              profileRef={profileRef}
              setShowLogin={setShowLogin}
            />

            {showProfile && <ProfilePopup />}

            <HeroSection />
            <WhyChooseGroov />
            <SolutionsSection />
            <Footer />
          </>
        )
      }
    />

    <Route
      path="/dashboard"
      element={
        <Dashboard
          activePage={activePage}
          setActivePage={setActivePage}
        />
      }
    />

    <Route
      path="/campaigns"
      element={<Campaigns />}
    />

    <Route
      path="/campaigns/1"
      element={<CampaignDetails />}
    />
  </Routes>
);
}

export default App;