import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollBackground from "./components/ScrollBackground";
import MobileFooter from "./components/MobileFooter";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Activities from "./pages/Activities";
import HistoricalDirectives from "./pages/HistoricalDirectives";
import Inmersion360 from "./pages/Inmersion360";

function AppContent() {
  return (
    <div className="flex flex-col h-screen relative">
      <ScrollBackground />
      <Header />
      <div className="flex flex-grow overflow-hidden">
        <main className="flex-grow overflow-y-auto overflow-x-hidden relative z-10 flex flex-col">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/directivas-anteriores" element={<HistoricalDirectives />} />
              <Route path="/inmersion-360" element={<Inmersion360 />} />
            </Routes>
          </div>
          <MobileFooter />
          <Footer />
        </main>
      </div>
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
