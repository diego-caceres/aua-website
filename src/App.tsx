import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollBackground from "./components/ScrollBackground";
import MobileFooter from "./components/MobileFooter";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Activities from "./pages/Activities";
import HistoricalDirectives from "./pages/HistoricalDirectives";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col h-screen relative">
      <ScrollBackground />
      <Header />
      <div className="flex flex-grow overflow-hidden">
        {isHomePage && <Sidebar />}
        <main className="flex-grow overflow-y-auto relative z-10 flex flex-col">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/directivas-anteriores" element={<HistoricalDirectives />} />
            </Routes>
          </div>
          <MobileFooter />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
