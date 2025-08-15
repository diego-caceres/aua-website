import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
export function App() {
  return <Router>
      <div className="flex flex-col h-screen bg-gradient-to-b from-blue-900 to-blue-950">
        <Header />
        <div className="flex flex-grow overflow-hidden">
          <Sidebar />
          <main className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </Router>;
}
