import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10">
      <h1 className="w-fit leading-snug mx-auto text-4xl text-center font-bold text-yellow-400">
        Connect Me
      </h1>
      <div className="flex justify-center gap-5 ">
        <div className="hover:scale-105 flex items-center justify-center w-12 h-12 bg-zinc-800 border border-yellow-400 rounded-full text-2xl">
          <a href="https://www.linkedin.com/in/himaaanshu/">
            <FaLinkedin />
          </a>
        </div>
        <div className="hover:scale-105 flex items-center justify-center w-12 h-12 bg-zinc-800 border border-yellow-400 rounded-full text-2xl">
          <a href="https://github.com/himaaanshu18">
          <FaGithub />
          </a>
        </div>
        <div className="hover:scale-105 flex items-center justify-center w-12 h-12 bg-zinc-800 border border-yellow-400 rounded-full text-2xl">
          <a href="https://www.instagram.com/himaaanshu18/">
          <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
