import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="bg-top">
        <section className="bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-clash font-semibold tracking-wider text-green-600 uppercase">
                  The Future of Learning
                </p>
                <h1 className="mt-4 font-syne text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                  Upskill faster with <br className="hidden lg:block" />
                  <span className="text-yellow-500">Borcella LMS</span>
                </h1>
                <p className="mt-4 sm:text-xl font-mont-alt capitalize font-medium text-black lg:mt-8 md:text-lg">
                  Learn from industry pros, build real-world projects, and join
                  a powerful community that's redefining online education.
                </p>

                <Link
                  href="#"
                  className="inline-flex font-mont-alt items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                >
                  Start Learning Now
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt="Borcella LMS Preview"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
