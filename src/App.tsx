import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/galeria" element={<Gallery />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>;
}