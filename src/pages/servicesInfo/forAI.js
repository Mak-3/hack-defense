import React from "react";

const CybersecurityForAI = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Cybersecurity for AI</h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          Safeguarding Your AI Initiatives with Robust Risk Management
        </h2>
        <p className="max-w-2xl text-lg text-gray-300">
          At Hack Defense, we specialize in evaluating and fortifying the cybersecurity posture of AI systems.
        </p>
      </section>

      <section className="px-6 py-20 text-center text-gray-300">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-white">Our Services</h3>
          <div className="space-y-8 text-left">
            <div>
              <h4 className="text-2xl font-bold text-white">1. AI Risk Identification & Assessment</h4>
              <p>Analyze potential vulnerabilities in AI models, data pipelines, and deployment environments to identify risks like data leakage, model bias, and adversarial attacks.</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">2. Governance & Compliance Evaluation</h4>
              <p>Assess adherence to AI regulations and standards, ensuring that proper governance structures manage AI responsibly.</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">3. Security Controls Review</h4>
              <p>Evaluate access controls, encryption, and monitoring mechanisms protecting your AI systems against evolving threats.</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">4. Third-Party Risk Management</h4>
              <p>Assess external AI vendors and tools to ensure secure integrations and prevent third-party risks.</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">5. Incident Response Planning</h4>
              <p>Develop and enhance strategies for quickly detecting and mitigating AI-specific cybersecurity incidents.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center text-gray-300">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-white">Why Choose Hack Defense?</h3>
          <ul className="space-y-4 text-lg">
            <li><strong>Expertise in AI and Cybersecurity:</strong> We blend deep AI knowledge with robust cybersecurity experience.</li>
            <li><strong>Tailored Solutions:</strong> Each assessment is customized for your unique use cases and operational needs.</li>
            <li><strong>Proactive Risk Management:</strong> Identify and mitigate risks early to secure your AI infrastructure.</li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">Secure Your AI Investments</h3>
          <p className="text-lg text-gray-300 mb-6">
            Ensure your AI initiatives are built on a foundation of robust security and compliance.
          </p>
          <p className="text-lg text-gray-300">Contact Hack Defense today to schedule your AI Risk & Controls Assessment.</p>
        </div>
      </section>
    </>
  );
};

export default CybersecurityForAI;
