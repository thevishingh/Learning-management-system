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

      <section className="overflow-hidden py-16 sm:py-20 lg:py-24 bg-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <img
                src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-3.png"
                alt="Mobile App Interface"
                className="max-w-md lg:max-w-xl"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 max-md:px-6">
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                The Adventure of Our Success
              </h2>
              <p className="text-gray-600 text-lg">
                Our achievement story stands as a powerful testament to teamwork
                and perseverance. United, we have faced challenges, celebrated
                milestones, and woven a narrative of growth and success.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {/* Stat Item */}
                {[
                  { icon: "download", label: "Downloads", value: "17M+" },
                  { icon: "users", label: "Followers", value: "08M+" },
                  { icon: "message", label: "Reviews", value: "2300+" },
                  { icon: "devices", label: "Couriers", value: "150+" },
                ].map(({ icon, label, value }, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-center gap-4 transition hover:shadow-md"
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <span className={`icon-[tabler--${icon}] text-xl`} />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        {value}
                      </div>
                      <div className="text-sm text-gray-500">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <a
                  href="#"
                  className="bg-primary text-white text-center py-3 px-6 rounded-md font-semibold hover:bg-primary/90 transition"
                >
                  Start Free Trial
                </a>
                <a
                  href="#"
                  className="bg-primary text-white flex items-center justify-center py-3 px-6 rounded-md font-semibold hover:bg-primary/90 transition"
                >
                  Watch Demo
                  <span className="icon-[tabler--play] ml-2 text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
