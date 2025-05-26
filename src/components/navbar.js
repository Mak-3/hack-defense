import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const dropdownWrapperRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 ">
      <div className="w-full bg-white text-black text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex flex-row flex-wrap gap-4 justify-end w-full">
          <span className="flex items-center gap-1">
            <FaWhatsapp className="text-green-500" /> +44 7937 54367
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope className="text-red-500" /> contact@hackdefense.org
          </span>
        </div>
      </div>
      <nav className="bg-opacity-90 backdrop-blur-md border-b-[0.5px] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="font-bold text-2xl">
                Hack defense
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive("/hack-defense")
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/services/penetration-testing"
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive("/services/penetration-testing")
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Penetration Testing
                </Link>
                <Link
                  to="/services/grc"
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive("/services/grc")
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  GRC
                </Link>
                <Link
                  to="/services/cybersecurity-maturity-assessment"
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive("/services/cybersecurity-maturity-assessment")
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Cyber Maturity
                </Link>
                <Link
                  to="/services/data-privacy"
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive("/services/data-privacy")
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Data Privacy
                </Link>
                <Link
                  to="/services/cybersecurity-for-startups"
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive("/services/cybersecurity-for-startups")
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  For Startups
                </Link>
                <Link
                  to="/services/cybersecurity-for-ai"
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive("/services/cybersecurity-for-ai")
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  For AI
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <a
                  href="/hack-defense#about"
                  className="text-sm font-medium text-gray-400 hover:text-white px-3 py-2 rounded-md transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="/hack-defense#contact"
                  className="text-sm font-medium text-gray-400 hover:text-white px-3 py-2 rounded-md transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
              <Link
                to="/hack-defense"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  isActive("/hack-defense")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Home
              </Link>
              <a
                href="/hack-defense#about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <div className="block w-full pt-4 pb-2">
                <h3 className="px-3 text-white font-semibold text-sm tracking-wide">
                  Services
                </h3>
              </div>

              <div className="space-y-1 ml-6">
                <Link
                  onClick={closeMenu}
                  to="/services/penetration-testing"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive("/services/penetration-testing")
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Penetration Testing
                </Link>
                <Link
                  onClick={closeMenu}
                  to="/services/grc"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive("/services/grc")
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  GRC
                </Link>
                <Link
                  onClick={closeMenu}
                  to="/services/cybersecurity-maturity-assessment"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive("/services/cybersecurity-maturity-assessment")
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Cyber Maturity
                </Link>
                <Link
                  onClick={closeMenu}
                  to="/services/data-privacy"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive("/services/data-privacy")
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Data Privacy
                </Link>
                <Link
                  onClick={closeMenu}
                  to="/services/cybersecurity-for-startups"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive("/services/cybersecurity-for-startups")
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Cybersecurity for Startups
                </Link>
                <Link
                  onClick={closeMenu}
                  to="/services/cybersecurity-for-ai"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive("/services/cybersecurity-for-ai")
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Cybersecurity for AI
                </Link>
              </div>
              <a
                href="/hack-defense#contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
