import React from "react";

const CybersecurityForStartups = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Cybersecurity for Startups — Secure Your Growth from Day One
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          Protect your business, customers, and reputation with tailored cybersecurity solutions designed for startups at every stage — from MVP to global scale.
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
          Get a Free Security Assessment
        </button>
      </section>

      <section className="px-6 py-20 text-center text-gray-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Why Cybersecurity Matters for Startups
          </h3>
          <p className="text-lg mb-6">
            Startups are innovative — but cyber threats don't wait. Early breaches can mean lost customer trust, regulatory fines, and missed funding opportunities.
          </p>
          <p className="text-lg">
            Whether you're launching a SaaS platform, managing sensitive customer data, or scaling fast, our cybersecurity experts help you build security the right way — efficiently, affordably, and without slowing you down.
          </p>
          <p className="text-xl mt-6 text-white italic">
            Security today protects success tomorrow.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center text-gray-300">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-white">
            Our Startup-Focused Cybersecurity Services
          </h3>
          <div className="space-y-8">
            {[
              {
                title: "Cloud Security Assessment",
                desc: "Secure your AWS, Azure, GCP environments from misconfigurations and insider threats.",
              },
              {
                title: "Web & API Penetration Testing",
                desc: "Find and fix vulnerabilities in your applications before attackers do.",
              },
              {
                title: "Security Policy Development",
                desc: "Build essential policies like Acceptable Use, Incident Response, and Data Protection.",
              },
              {
                title: "Risk Assessment and Gap Analysis",
                desc: "Identify key risks and prioritize cybersecurity improvements aligned with your business goals.",
              },
              {
                title: "Compliance Readiness (ISO 27001, SOC 2, GDPR)",
                desc: "Prepare for audits and client security reviews with confidence.",
              },
              {
                title: "Employee Awareness Training",
                desc: "Empower your team to become your first line of defense against phishing and social engineering.",
              },
              {
                title: "Managed Detection & Response (MDR)",
                desc: "24/7 monitoring to detect and respond to cyber threats, keeping your business running smoothly.",
              },
              {
                title: "Virtual CISO (vCISO) Services",
                desc: "Get executive-level cybersecurity leadership at a startup-friendly price.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="text-2xl font-bold text-white">
                  {idx + 1}. {item.title}
                </h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center text-gray-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Our Approach: Security That Grows With You
          </h3>
          <ul className="space-y-4 text-lg text-left md:text-center">
            <li>
              <strong>Startup-Speed Deployment:</strong> Fast onboarding without technical headaches.
            </li>
            <li>
              <strong>Flexible Packages:</strong> Pay only for what you need, scale up as you grow.
            </li>
            <li>
              <strong>Cloud-Native Expertise:</strong> Specialists in securing AWS, Azure, GCP, M365.
            </li>
            <li>
              <strong>Compliance Built-In:</strong> Start your journey towards SOC 2, ISO 27001, HIPAA with confidence.
            </li>
            <li>
              <strong>Affordable & Scalable:</strong> Enterprise-grade protection — startup-friendly costs.
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 text-center text-gray-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Industries We Serve
          </h3>
          <div className="flex flex-col md:flex-row gap-8 text-lg justify-between">
            <ul className="space-y-4 text-left">
              <li><strong>SaaS Startups</strong></li>
              <li><strong>FinTech and Payments</strong></li>
              <li><strong>HealthTech and MedTech</strong></li>
            </ul>
            <ul className="space-y-4 text-left">
              <li><strong>E-commerce and D2C Brands</strong></li>
              <li><strong>AI and Data-Driven Startups</strong></li>
              <li><strong>Web3 and Blockchain Startups</strong></li>
            </ul>
          </div>
          <p className="text-xl mt-8 text-white italic">
            Wherever innovation happens, cybersecurity must follow.
          </p>
        </div>
      </section>
    </>
  );
};

export default CybersecurityForStartups;