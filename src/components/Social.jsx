import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Social() {
  return (
    <div className="flex justify-center gap-4">
      <a href="https://www.instagram.com/n_j_niraj/" target="_blank">
        <FaInstagram className="w-6 h-6" />
      </a>
      <a href="https://twitter.com/N_J_NIRAJ_" target="_blank">
        <FaTwitter className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/njn1raj/" target="_blank">
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
  );
}

export default Social;
