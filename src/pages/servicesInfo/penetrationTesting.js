import React from "react";
import penetrationTestingServices from "../../assets/images/services/penetration-testing-services.jpg";
import securityAssesment from "../../assets/images/services/security-assesment.jpg";
import penetrationTesting from "../../assets/images/services/penetration-testing.png"
const PenetrationTesting = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12 space-y-12 mt-20">
      <section className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold">
          Penetration Testing — Find Vulnerabilities Before Attackers Do
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Simulate real-world cyberattacks to uncover security gaps in your
          systems, applications, and networks — and fix them before they’re
          exploited.
        </p>
        <img src={penetrationTesting} alt="Penetration Testing" />
      </section>

      <hr className="border-gray-700 max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Our Penetration Testing Process
        </h3>
        <img
          src={securityAssesment}
          alt="Security Assessment"
          className="w-full md:w-auto md:h-[400px] object-cover rounded-lg shadow-md"
        />
        <div className="space-y-10 text-left">
          <div>
            <h4 className="text-xl font-bold text-white">
              1. Planning and Scoping
            </h4>
            <p>
              We start by understanding your business environment, security
              objectives, and potential risk areas. This phase helps define the
              scope and specific goals for the penetration test.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              2. Information Gathering
            </h4>
            <p>
              Our team collects data related to your systems and network
              configurations. We identify exposed assets, services, and
              technologies that may be vulnerable to attacks.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              3. Vulnerability Identification
            </h4>
            <p>
              Using a combination of automated tools and manual techniques, we
              search for weaknesses that could lead to exploitation, such as
              outdated software, misconfigurations, and insecure network
              protocols.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              4. Exploitation and Post-Exploitation
            </h4>
            <p>
              Once vulnerabilities are identified, we attempt to exploit them to
              gain access to your systems. This stage helps us assess the
              vulnerabilities' severity and potential impact. Post-exploitation
              efforts help understand the scope of an attack and whether further
              vulnerabilities can be leveraged.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              5. Reporting and Recommendations
            </h4>
            <p>
              Finally, we compile the findings into a comprehensive report that
              includes detailed descriptions of vulnerabilities, exploited
              weaknesses, and specific remediation steps.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
        <h3 className="text-3xl font-semibold mb-6 text-white">
          Comprehensive Penetration Testing Services
        </h3>
        <img
          src={penetrationTestingServices}
          alt="Penetration Testing Services"
          className="w-auto max-h-[500px] object-cover rounded-lg shadow-md"
        />

        <p>
          We offer a variety of penetration testing and vulnerability assessment
          services — tailored to fit your infrastructure, compliance needs, and
          business goals.
        </p>
        <p>
          Contact us today for a consultation and discover how we can help
          protect your infrastructure and ensure long-term security success.
        </p>
      </section>
    </div>
  );
};

export default PenetrationTesting;
