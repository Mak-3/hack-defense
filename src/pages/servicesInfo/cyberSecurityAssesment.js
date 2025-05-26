import cybersecurityMaturityFramework from "../../assets/images/services/cybersecurity-maturity-framework.jpg";

const CybersecurityMaturityAssessment = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12 space-y-12 mt-20">
      <section className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold">
          Cybersecurity Maturity Assessment
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Enhance your cybersecurity posture with our comprehensive
          Cybersecurity Maturity Assessment. We utilize best practices from
          CMMI, ENISA, and C2M2 to identify gaps, benchmark performance, and
          drive continuous improvement.
        </p>
      </section>

      <hr className="border-gray-700 max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Cybersecurity Maturity Assessment: A Framework-Driven Approach
        </h3>
        <p>
          In today’s digital era, a robust cybersecurity framework is essential
          to protect your organization against evolving threats. Our
          Cybersecurity Maturity Assessment leverages globally recognized
          frameworks—CMMI, ENISA, NIST, and C2M2—to provide an in-depth
          evaluation of your security posture and guide you on a clear path
          toward improvement.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          What is a Cybersecurity Maturity Assessment?
        </h3>
        <p>
          A Cybersecurity Maturity Assessment is a systematic evaluation of your
          organization’s cybersecurity capabilities. By benchmarking your
          current practices against industry-leading frameworks like CMMI,
          ENISA, NIST, and C2M2, our assessment helps you understand where you
          stand, identify gaps, and develop targeted strategies for continuous
          improvement.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-12 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Our Framework-Driven Methodology
        </h3>
        <div className="space-y-10 text-left">
          <div>
            <h4 className="text-xl font-bold text-white">Leveraging CMMI</h4>
            <p>
              <strong>Process Improvement:</strong> Our assessment draws on the
              CMMI framework to evaluate your organizational processes, ensuring
              your cybersecurity practices are efficient, scalable, and
              continuously improving.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              Integrating ENISA Best Practices
            </h4>
            <p>
              <strong>European Standards for Resilience:</strong> We emphasize
              risk management, threat intelligence, and resilience by aligning
              your practices with ENISA’s guidelines.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              Utilizing C2M2 Insights
            </h4>
            <p>
              <strong>Capability Maturity Modeling:</strong> We assess your
              cybersecurity maturity using C2M2’s domains, offering a
              comprehensive view and actionable insights for enhancement.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              Adopting NIST Cybersecurity Framework
            </h4>
            <p>
              <strong>Risk-Based Approach & Continuous Improvement:</strong> Our
              assessments follow NIST’s structured guidance to help you stay
              proactive and compliant in a changing threat landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Key Benefits of Our Cybersecurity Maturity Assessment
        </h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Comprehensive Analysis:</strong> Evaluate your cybersecurity
            operations using frameworks like CMMI, ENISA, NIST, and C2M2.
          </li>
          <li>
            <strong>Actionable Roadmap:</strong> Get prioritized recommendations
            to improve your security operations.
          </li>
          <li>
            <strong>Benchmarking:</strong> Understand how you compare to
            industry standards and make informed decisions.
          </li>
          <li>
            <strong>Risk Management:</strong> Identify vulnerabilities and
            reduce risk using globally trusted methodologies.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> Evolve your cybersecurity
            capabilities to stay ahead of emerging threats.
          </li>
        </ul>
        <img
          src={cybersecurityMaturityFramework}
          alt="Cybersecurity Maturity Framework"
          className="w-auto max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Why Choose Our Assessment?
        </h3>
        <p>
          Our Cybersecurity Maturity Assessment blends global frameworks and
          real-world expertise. Whether you’re aiming for compliance or
          transformation, we deliver insights that matter.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Secure Your Digital Future
        </h3>
        <p>
          Understand your current cybersecurity maturity, unlock opportunities
          for growth, and gain confidence in your ability to protect what
          matters most.
        </p>
        <p>
          Contact us today to begin your maturity assessment journey and take
          the next step in fortifying your digital landscape.
        </p>
      </section>
    </div>
  );
};

export default CybersecurityMaturityAssessment;