import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-4 lg:px-12 p-12 rounded-2xl">
        <div className="flex flex-col min-[830px]:flex-row items-center justify-between gap-6 pb-10 border-b-2 border-gray-700">
          <span className="text-xl font-semibold text-white">Hack Defense</span>
          <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
            <li>
              <a
                href="/hack-defence"
                className="text-lg font-normal text-gray-300 transition-all duration-300 hover:text-white focus-within:text-white focus-within:outline-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/hack-defence#about"
                className="text-lg font-normal text-gray-300 transition-all duration-300 hover:text-white focus-within:text-white focus-within:outline-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/hack-defence#contact"
                className="text-lg font-normal text-gray-300 transition-all duration-300 hover:text-white focus-within:text-white focus-within:outline-0"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/hack-defence#services"
                className="text-lg font-normal text-gray-300 transition-all duration-300 hover:text-white focus-within:text-white focus-within:outline-0"
              >
                Services
              </a>
            </li>
          </ul>
        </div>

        <div className="pt-7 flex flex-col min-[520px]:flex-row items-center justify-between gap-6">
          <ul className="flex items-center gap-9">
            {[
              {
                label: "Email",
                value: "example@email.com",
                href: "mailto:example@email.com",
              },
              {
                label: "Phone",
                value: "+91-9876543210",
                href: "tel:+919876543210",
              },
            ].map(({ label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm font-normal text-gray-400 transition-all duration-300 hover:text-white focus-within:text-white focus-within:outline-0"
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 p-2 rounded-full aspect-square text-gray-400 transition-all duration-500 hover:text-white hover:border-white focus-within:outline-0 focus-within:text-white focus-within:border-white"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 p-2 rounded-full aspect-square text-gray-400 transition-all duration-500 hover:text-white hover:border-white focus-within:outline-0 focus-within:text-white focus-within:border-white"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
