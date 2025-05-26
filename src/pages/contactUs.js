const ContactUs = () => {
  return (
    <section>
      <div className="container flex flex-col lg:max-w-4xl w-full px-5 py-12 md:py-24 mx-auto">
        <div className="w-full">
          <h1 className="text-4xl text-gray-800 dark:text-white font-bold title-font mb-6">
            Contact Us
          </h1>
          <p className="leading-relaxed text-xl text-gray-600 dark:text-gray-300 mb-6">
            Looking to enhance your security, have questions, or need expert
            advice? Contact our team for a free consultation and see how we can
            support your business.
          </p>

          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:contact@hackdefense.org"
                className="text-green-500 hover:underline"
              >
                contact@hackdefense.org
              </a>
            </p>
            <p>📞 Phone: +44 7937 54367</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
