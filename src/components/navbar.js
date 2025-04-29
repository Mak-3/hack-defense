import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownWrapperRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md border-b-[0.5px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-2xl">
              Hack Defence
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">Home</a>
              <Link to="/services/penetration-testing" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">Penetration Testing</Link>
              <Link to="/services/grc" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">GRC</Link>
              <Link to="/services/cybersecurity-maturity-assessment" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">Cyber Maturity</Link>
              <Link to="/services/data-privacy" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">Data Privacy</Link>
              <Link to="/services/cybersecurity-for-startups" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">For Startups</Link>
              <Link to="/services/cybersecurity-for-ai" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">For AI</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">About</a>
              <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <Link to="/services/penetration-testing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Penetration Testing</Link>
            <Link to="/services/grc" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">GRC</Link>
            <Link to="/services/cybersecurity-maturity-assessment" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cyber Maturity</Link>
            <Link to="/services/data-privacy" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Data Privacy</Link>
            <Link to="/services/cybersecurity-for-startups" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cybersecurity for Startups</Link>
            <Link to="/services/cybersecurity-for-ai" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cybersecurity for AI</Link>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}