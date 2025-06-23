import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo or Brand */}
        <div className="text-xl font-semibold text-white">
          <span className="text-blue-500">ABC</span> Company
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-white text-lg">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center sm:text-right">
          © {new Date().getFullYear()} ABC Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
