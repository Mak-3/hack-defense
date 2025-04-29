import React from 'react';

const Services = () => {
  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          our <span className="text-blue-500">Cybersecurity Services</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {/* Service 1 */}
          <div className="flex flex-col items-center p-6 space-y-3 text-center border-[0.5px] border-gray-400 hover:border-white rounded-xl">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              {/* Shield Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Penetration Testing</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Protect your organization's network from unauthorized access, breaches, and threats with our comprehensive network security solutions.
            </p>
            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center border-[0.5px] border-gray-400 hover:border-white rounded-xl">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              {/* Lock Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V7a5 5 0 00-10 0v4H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">GRC</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Secure sensitive information with advanced encryption methods, backup strategies, and compliance with data protection regulations.
            </p>
            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center border-[0.5px] border-gray-400 hover:border-white rounded-xl">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              {/* Bug Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14h6m-6-4h6m-7 8a9 9 0 0014 0M3 12a9 9 0 0114 0" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Cybersecurity Maturity Assessment</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Identify and remediate vulnerabilities across your infrastructure with our proactive security testing and detailed reporting services.
            </p>
            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center border-[0.5px] border-gray-400 hover:border-white rounded-xl">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Data Privacy</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Protect your organization's network from unauthorized access, breaches, and threats with our comprehensive network security solutions.
            </p>
            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center border-[0.5px] border-gray-400 hover:border-white rounded-xl">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V7a5 5 0 00-10 0v4H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Cybersecurity for Startups</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Secure sensitive information with advanced encryption methods, backup strategies, and compliance with data protection regulations.
            </p>
            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center border-[0.5px] border-gray-400 hover:border-white rounded-xl">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14h6m-6-4h6m-7 8a9 9 0 0014 0M3 12a9 9 0 0114 0" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Cybersecurity for AI</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Identify and remediate vulnerabilities across your infrastructure with our proactive security testing and detailed reporting services.
            </p>
            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;