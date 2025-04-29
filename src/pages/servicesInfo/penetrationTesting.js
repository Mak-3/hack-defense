import React from "react";

const PenetrationTesting = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Penetration Testing — Find Vulnerabilities Before Attackers Do
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          Simulate real-world cyberattacks to uncover security gaps in your systems, applications, and networks — and fix them before they’re exploited.
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
          Book a Consultation
        </button>
      </section>

      <section className="px-6 py-20 text-center text-gray-300">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-white">
            Our Penetration Testing Process
          </h3>
          <div className="space-y-10 text-left md:text-center">
            <div>
              <h4 className="text-2xl font-bold text-white">1. Planning and Scoping</h4>
              <p>
                We start by understanding your business environment, security objectives, and potential risk areas. This phase helps define the scope and specific goals for the penetration test.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">2. Information Gathering</h4>
              <p>
                Our team collects data related to your systems and network configurations. We identify exposed assets, services, and technologies that may be vulnerable to attacks.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">3. Vulnerability Identification</h4>
              <p>
                Using a combination of automated tools and manual techniques, we search for weaknesses that could lead to exploitation, such as outdated software, misconfigurations, and insecure network protocols.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">4. Exploitation and Post-Exploitation</h4>
              <p>
                Once vulnerabilities are identified, we attempt to exploit them to gain access to your systems. This stage helps us assess the vulnerabilities' severity and potential impact. Post-exploitation efforts help understand the scope of an attack and whether further vulnerabilities can be leveraged.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">5. Reporting and Recommendations</h4>
              <p>
                Finally, we compile the findings into a comprehensive report that includes detailed descriptions of vulnerabilities, exploited weaknesses, and specific remediation steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center text-gray-300">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Comprehensive Penetration Testing Services
          </h3>
          <p className="text-lg mb-6">
            We offer a variety of penetration testing and vulnerability assessment services — tailored to fit your infrastructure, compliance needs, and business goals.
          </p>
          <p className="text-xl text-white italic">
            Contact us today for a consultation and discover how we can help protect your infrastructure and ensure long-term security success.
          </p>
        </div>
      </section>
    </>
  );
};

export default PenetrationTesting;