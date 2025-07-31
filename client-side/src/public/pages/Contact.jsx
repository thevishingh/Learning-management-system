import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const commonStyles = "transition-all duration-200 hover:text-opacity-80";

const Contact = () => {
  return (
    <div className="pt-10">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Unlock Scalable Training Success with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Borcella LMS
                  </h1>
                </div>
              </h1>
              <p className="mt-8 text-base text-black sm:text-xl">
                Whether you're onboarding, upskilling, or scaling your workforce —
                Borcella LMS helps you deliver learning experiences that drive real results.
                Let’s talk about how we can help transform your team’s growth journey.
              </p>
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title="Contact Our Team"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-600 hover:bg-green-700 focus:bg-green-700"
                  role="button"
                >
                  Contact Our Team
                </a>
                <a
                  href="#"
                  title="Watch Overview"
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <BiPlayCircle className="w-10 h-10 mr-3 text-green-600" />
                  Watch Overview
                </a>
              </div>
            </div>
            <div>
              <img
                className="w-full"
                src="https://www.auraui.com/memeimage/hero25.png"
                alt="Borcella LMS Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
