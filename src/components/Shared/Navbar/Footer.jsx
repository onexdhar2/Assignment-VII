import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-center bg-[#244D3F] text-white py-20">
      <h2 className="text-6xl font-bold mb-5">KeenKeeper</h2>
      <p className="mb-5">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <p className="font-bold mb-5">Social Links</p>
      <div className="flex justify-center gap-5 mb-5">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
        <p className="text-sm">&copy; 2026 KeenKeeper. All rights reserved.</p>
    </div>
  );
};

export default Footer;
