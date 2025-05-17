import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';
import ContactUs from './pages/contactUs';
import GRC from './pages/servicesInfo/grc';
import CybersecurityMaturityAssessment from './pages/servicesInfo/cyberSecurityAssesment';
import DataPrivacy from './pages/servicesInfo/dataPrivacy';
import CybersecurityForAI from './pages/servicesInfo/forAI';
import CybersecurityForStartups from './pages/servicesInfo/forStartups';
import PenetrationTesting from './pages/servicesInfo/penetrationTesting';

function App() {
  return (
    <div className="bg-black text-white">
      <Router basename="/hack-defence">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <HomePage />
                </section>
                <section id="about">
                  <AboutUs />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="contact">
                  <ContactUs />
                </section>
              </>
            }
          />
          <Route path="/services/grc" element={<GRC />} />
          <Route path="/services/cybersecurity-maturity-assessment" element={<CybersecurityMaturityAssessment />} />
          <Route path="/services/data-privacy" element={<DataPrivacy />} />
          <Route path="/services/cybersecurity-for-ai" element={<CybersecurityForAI />} />
          <Route path="/services/cybersecurity-for-startups" element={<CybersecurityForStartups />} />
          <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
