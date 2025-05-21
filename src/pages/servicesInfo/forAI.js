import React from "react";

const CybersecurityForAI = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12 space-y-12 mt-12">
      <section className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold">
          Cybersecurity for AI — Safeguarding Your AI Initiatives
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          At Hack Defense, we specialize in evaluating and fortifying the
          cybersecurity posture of AI systems.
        </p>
      </section>

      <hr className="border-gray-700 max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">Our Services</h3>
        <div className="space-y-10 text-left">
          <div>
            <h4 className="text-xl font-bold text-white">
              1. AI Risk Identification & Assessment
            </h4>
            <p>
              Analyze potential vulnerabilities in AI models, data pipelines,
              and deployment environments to identify risks like data leakage,
              model bias, and adversarial attacks.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              2. Governance & Compliance Evaluation
            </h4>
            <p>
              Assess adherence to AI regulations and standards, ensuring that
              proper governance structures manage AI responsibly.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              3. Security Controls Review
            </h4>
            <p>
              Evaluate access controls, encryption, and monitoring mechanisms
              protecting your AI systems against evolving threats.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              4. Third-Party Risk Management
            </h4>
            <p>
              Assess external AI vendors and tools to ensure secure integrations
              and prevent third-party risks.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              5. Incident Response Planning
            </h4>
            <p>
              Develop and enhance strategies for quickly detecting and
              mitigating AI-specific cybersecurity incidents.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Why Choose Hack Defense?
        </h3>
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <strong>Expertise in AI and Cybersecurity:</strong> We blend deep AI
            knowledge with robust cybersecurity experience.
          </li>
          <li>
            <strong>Tailored Solutions:</strong> Each assessment is customized
            for your unique use cases and operational needs.
          </li>
          <li>
            <strong>Proactive Risk Management:</strong> Identify and mitigate
            risks early to secure your AI infrastructure.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-4 text-white">
          Secure Your AI Investments
        </h3>
        <p>
          Ensure your AI initiatives are built on a foundation of robust
          security and compliance.
        </p>
        <p>
          Contact Hack Defense today to schedule your AI Risk & Controls
          Assessment.
        </p>
      </section>
    </div>
  );
};

export default CybersecurityForAI;
