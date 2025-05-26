import cybersecurityStandards from "../../assets/images/services/cybersecurity-standards.jpg";

const GRC = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12 space-y-12 mt-20">
      <section className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold">
          Comprehensive GRC Services
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Integrated Governance, Risk & Compliance Solutions tailored to
          optimize performance, mitigate risks, and ensure regulatory adherence.
        </p>
      </section>

      <hr className="border-gray-700 max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">What is GRC?</h3>
        <p>
          GRC is an integrated framework aligning governance, risk management,
          and compliance to drive business success. It improves transparency,
          accountability, and operational efficiency while keeping pace with
          regulatory changes and risks.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Why Invest in GRC Services?
        </h3>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Enhanced Operational Efficiency:</strong> Streamline
            policies and workflows.
          </li>
          <li>
            <strong>Improved Decision-Making:</strong> Leverage real-time
            insights.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> Stay audit-ready and
            penalty-free.
          </li>
          <li>
            <strong>Proactive Risk Mitigation:</strong> Address threats early.
          </li>
          <li>
            <strong>Strategic Alignment:</strong> Align operations with goals
            and standards.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Our Comprehensive GRC Methodology
        </h3>
        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-bold text-white">
              1. Integrated Governance Framework
            </h4>
            <p>
              Customized structures defining roles, responsibilities, and
              accountability.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              2. Robust Risk Management Solutions
            </h4>
            <p>
              Identify vulnerabilities and implement strategies to minimize
              threats.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              3. Structured Compliance Management
            </h4>
            <p>
              Continuously updated frameworks to meet evolving regulatory needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              4. Continuous Monitoring and Improvement
            </h4>
            <p>
              Ongoing evaluations and real-time monitoring for quick adaptation.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              5. Cybersecurity Audits
            </h4>
            <p>
              Comprehensive IT system reviews to strengthen security and ensure
              compliance.
            </p>
          </div>
        </div>
        <img
          src={cybersecurityStandards}
          alt="Cybersecurity Standards and frameworks"
          className="w-auto max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Key Benefits of Our GRC Services
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p>
              <strong>Custom-Tailored Solutions:</strong> Designed for your
              specific needs.
            </p>
            <p>
              <strong>Expert Guidance:</strong> Industry professionals at your
              service.
            </p>
            <p>
              <strong>Increased Transparency:</strong> Clear policies and
              constant oversight.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <strong>Cost Efficiency:</strong> Prevent expensive disruptions
              and fines.
            </p>
            <p>
              <strong>Competitive Advantage:</strong> A resilient, risk-aware
              organization wins.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Industries We Serve
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-4">
            <li>
              <strong>Financial Services:</strong> Manage financial risks and
              compliance.
            </li>
            <li>
              <strong>Healthcare:</strong> Meet stringent safety and compliance
              standards.
            </li>
            <li>
              <strong>Technology:</strong> Safeguard digital assets from
              cybersecurity threats.
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <strong>Manufacturing:</strong> Ensure quality control and
              compliance.
            </li>
            <li>
              <strong>Retail:</strong> Protect customer data and optimize
              operations.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GRC;
