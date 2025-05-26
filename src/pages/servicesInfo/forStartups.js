import React from "react";

const ForStartups = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12 space-y-12 mt-20">
      <section className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold">
          Cybersecurity for Startups — Secure Your Growth from Day One
        </h1>
        <h2 className="text-gray-400 text-lg md:text-xl">
          Protect your business, customers, and reputation with tailored
          cybersecurity solutions designed for startups at every stage — from
          MVP to global scale.
        </h2>
      </section>

      <hr className="border-gray-700 max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Why Cybersecurity Matters for Startups
        </h3>
        <p className="max-w-3xl">
          Startups are innovative — but cyber threats don't wait. Early breaches
          can mean lost customer trust, regulatory fines, and missed funding
          opportunities.
        </p>
        <p className="max-w-3xl">
          Whether you're launching a SaaS platform, managing sensitive customer
          data, or scaling fast, our cybersecurity experts help you build
          security the right way — efficiently, affordably, and without slowing
          you down.
        </p>
        <p className="text-xl mt-6 text-white italic max-w-3xl">
          Security today protects success tomorrow.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Our Startup-Focused Cybersecurity Services
        </h3>
        <div className="space-y-10 max-w-3xl text-left">
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
              <h4 className="text-xl font-bold text-white">
                {idx + 1}. {item.title}
              </h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Our Approach: Security That Grows With You
        </h3>
        <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-left">
          <li>
            <strong>Startup-Speed Deployment:</strong> Fast onboarding without
            technical headaches.
          </li>
          <li>
            <strong>Flexible Packages:</strong> Pay only for what you need,
            scale up as you grow.
          </li>
          <li>
            <strong>Cloud-Native Expertise:</strong> Specialists in securing
            AWS, Azure, GCP, M365.
          </li>
          <li>
            <strong>Compliance Built-In:</strong> Start your journey towards SOC
            2, ISO 27001, HIPAA with confidence.
          </li>
          <li>
            <strong>Affordable & Scalable:</strong> Enterprise-grade protection
            — startup-friendly costs.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Industries We Serve
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl text-left">
          <ul className="space-y-4">
            <li>
              <strong>SaaS Startups</strong>
            </li>
            <li>
              <strong>FinTech and Payments</strong>
            </li>
            <li>
              <strong>HealthTech and MedTech</strong>
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <strong>E-commerce and D2C Brands</strong>
            </li>
            <li>
              <strong>AI and Data-Driven Startups</strong>
            </li>
            <li>
              <strong>Web3 and Blockchain Startups</strong>
            </li>
          </ul>
        </div>
        <p className="text-xl mt-8 text-white italic max-w-3xl">
          Wherever innovation happens, cybersecurity must follow.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 text-white">
          Secure Your Startup's Future with Confidence
        </h3>
        <p className="text-gray-300 text-base md:text-lg mb-6 max-w-3xl leading-relaxed">
          Building security into your startup from the ground up isn’t just
          smart — it’s essential. Let our experts guide you every step of the
          way.
        </p>
        <p className="text-gray-300 text-base md:text-lg max-w-3x leading-relaxed">
          Contact us today to start your cybersecurity journey and protect what
          you’ve worked so hard to build.
        </p>
      </section>
    </div>
  );
};

export default ForStartups;