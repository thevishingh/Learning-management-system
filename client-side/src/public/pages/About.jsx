"use client";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BrocellaAbout2 from "@/assets/Informative-pages/Banner-page/Brocella-About-2.png";
import { GlowingEffectDemoSecond } from "../components/GlowingEffect";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrocellaAbout3 from "@/assets/Informative-pages/Banner-page/Brocella-About-3.jpg"
import BrocellaAbout4 from "@/assets/Informative-pages/Banner-page/Brocella-About-4.jpg"
import StatsSection from "@/components/stats-4";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".animated-img");

    gsap.from(images, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

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

      <section className="overflow-hidden py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <img
                src={BrocellaAbout2}
                alt="Borcella LMS Dashboard"
                className="max-w-md lg:max-w-xl"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 max-md:px-6">
              <h2 className="text-3xl font-mont-alt font-bold text-gray-900 lg:text-4xl">
                Empowering Growth with Smarter Learning
              </h2>
              <p className="text-gray-600 font-mont text-lg">
                At Borcella LMS, we're redefining how teams learn and grow. Our
                journey has been driven by one mission: to make learning simple,
                engaging, and measurable for every business, at every stage.
              </p>
              <p className="text-gray-600 font-mont text-lg">
                From fast growing startups to global enterprises, Borcella
                equips organizations with powerful tools to onboard faster,
                upskill smarter, and drive measurable impact across every
                department.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "download", label: "Platform Users", value: "17M+" },
                  {
                    icon: "users",
                    label: "Enterprise Clients",
                    value: "1.2K+",
                  },
                  { icon: "message", label: "5-Star Reviews", value: "2,300+" },
                  {
                    icon: "devices",
                    label: "Courses Delivered",
                    value: "150K+",
                  },
                ].map(({ icon, label, value }, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-center gap-4 transition hover:shadow-md"
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <span className={`icon-[tabler--${icon}] text-xl`} />
                    </div>
                    <div>
                      <div className="text-lg font-syne font-semibold text-gray-900">
                        {value}
                      </div>
                      <div className="text-sm font-mont-alt text-gray-500">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-mont-alt font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-xl lg:mx-0">
                Unlock Powerful Learning Tools for Smarter Teams
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-mont font-normal text-gray-500 mb-5">
                Borcella LMS equips organizations with modern, flexible learning
                experiences designed to drive engagement, upskill teams, and
                track progress all from one place.
              </p>
              <a
                href="#"
                className="flex font-mont-alt flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700"
              >
                Explore LMS Features
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {/* Feature Card */}
            {[
              {
                icon: "📚",
                title: "Tailored Path",
                description:
                  "Deliver curated training journeys for individuals or departments with goal-based modules and progress tracking.",
              },
              {
                icon: "🔒",
                title: "Secure & Scalable",
                description:
                  "From startups to enterprises, Borcella LMS scales securely with your team while protecting sensitive learner data.",
              },
              {
                icon: "⚡",
                title: "Fast Onboarding",
                description:
                  "Upload content, assign courses, and launch training programs in minutes—with no technical skills required.",
              },
              {
                icon: "📊",
                title: "Real-Time Analytics",
                description:
                  "Monitor learner engagement, identify skill gaps, and export performance reports that inform smarter decisions.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-200"
              >
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 text-2xl">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 font-mont-alt">
                  {feature.title}
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 font-mont-alt">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-12">
          <div className="">
            <ColourfulText text="Brocella" />
            <h1 className="mb-8 flex font-mont-alt leading-[5rem] font-extrabold max-w-7xl text-4xl tracking-tight text-gray-800 md:text-7xl">
              Powering Learning for Modern Teams & Future Leaders
            </h1>
            <p className="max-w-7xl font-mont-alt capitalize font-medium text-lg leading-relaxed text-gray-500">
              Borcella LMS is your all-in-one platform to train, upskill, and
              engage your workforce. With interactive courses, smart analytics,
              and seamless onboarding, we make learning a competitive advantage
              for fast-moving companies.
            </p>
          </div>
        </div>
        <section className="mx-auto pb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <GlowingEffectDemoSecond />
        </section>
      </section>

      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                <svg className="text-red-600 w-7 h-7" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h16v16H4z"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-mont-alt text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Built for Growth,
                  <br className="hidden md:block" />
                  Designed for{" "}
                  <span className="text-red-600 tracking-wide inline-block font-syne">
                    Learning
                  </span>
                </h2>
                <p className="text-base text-gray-700 font-mont md:text-[1rem] font-medium">
                  At Borcella LMS, we help teams and individuals unlock their
                  full potential with over 5,500 expert-led courses tailored for
                  real-world success.
                </p>
                <p className="text-base font-mont text-gray-700 md:text-[1rem] font-medium mt-4">
                  Whether you're stepping into tech for the first time or
                  advancing your leadership capabilities, Borcella provides
                  affordable, flexible, and engaging learning—designed for
                  today’s fast-paced world.
                </p>
                <p className="text-base font-mont text-gray-700 md:text-[1rem] font-medium mt-4">
                  With lifetime access, remote-friendly formats, and powerful
                  insights, we’re more than just a platform we're your long term
                  learning partner.
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div
              ref={containerRef}
              className="flex items-center justify-center -mx-4 lg:pl-8"
            >
              <div className="flex flex-col items-end px-3">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="animated-img object-cover mb-6 rounded-2xl shadow-2xl h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src={BrocellaAbout4}
                  alt="Borcella Learning Demo"
                />
                <motion.img
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="animated-img object-cover w-20 h-20 rounded-2xl shadow-2xl sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src={BrocellaAbout3}
                  alt="Engaging Content"
                />
              </div>
              <div className="px-3">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="animated-img object-cover w-40 h-40 rounded-2xl shadow-2xl sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg"
                  alt="Team Learning"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <section class="flex flex-col mt-20">
  <p class="font-semibold text-2xl md:text-3xl text-center">Our Outstanding Achievements</p>
  <div
    class="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
    <div
      class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
      <div class="flex flex-row justify-center items-center">
        <svg class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]" viewBox="0 0 50 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
            stroke="#FF6D42" stroke-width="3.473" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
            stroke="#FF6D42" stroke-width="3.473" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">75K+</p>
      </div>
      <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">Expert Chat &amp; Call Minutes</p>
    </div>
    <div
      class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
      <div class="flex flex-row justify-center items-center">
        <svg class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]" viewBox="0 0 51 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#a)">
            <path
              d="m26.91 5.776 4.483 10.683a1.544 1.544 0 0 0 1.287.942l11.474.992a1.544 1.544 0 0 1 .876 2.715L36.325 28.7a1.559 1.559 0 0 0-.49 1.523l2.61 11.296a1.544 1.544 0 0 1-2.295 1.677l-9.86-5.982a1.53 1.53 0 0 0-1.59 0l-9.861 5.982a1.544 1.544 0 0 1-2.295-1.677l2.609-11.296a1.56 1.56 0 0 0-.49-1.523l-8.705-7.593a1.544 1.544 0 0 1 .876-2.715l11.474-.992a1.544 1.544 0 0 0 1.287-.942l4.483-10.683a1.544 1.544 0 0 1 2.833 0Z"
              stroke="#FF6D42" stroke-width="4.341" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.8.2h49.4v49.4H.8z"></path>
            </clipPath>
          </defs>
        </svg>
        <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">4.9</p>
      </div>
      <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">Average Expert Rating</p>
    </div>
    <div
      class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
      <div class="flex flex-row justify-center items-center">
        <svg class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]" viewBox="0 0 50 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#a)" stroke="#FF6D42" stroke-width="3.473" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M10.811 39.091c-1.775-1.775-.598-5.505-1.5-7.69-.939-2.255-4.377-4.089-4.377-6.5 0-2.413 3.438-4.246 4.376-6.502.903-2.182-.274-5.914 1.501-7.69 1.776-1.775 5.508-.598 7.69-1.5 2.266-.939 4.09-4.377 6.501-4.377 2.412 0 4.246 3.438 6.501 4.376 2.185.903 5.915-.274 7.69 1.501 1.776 1.776.598 5.506 1.502 7.69.937 2.266 4.376 4.09 4.376 6.501 0 2.412-3.439 4.246-4.377 6.501-.903 2.185.274 5.915-1.5 7.69-1.776 1.776-5.506.598-7.69 1.501-2.256.938-4.09 4.377-6.502 4.377s-4.245-3.439-6.5-4.377c-2.183-.903-5.915.275-7.69-1.5Z">
            </path>
            <path d="m17.281 26.444 4.632 4.631L32.718 20.27"></path>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.3.2h49.4v49.4H.3z"></path>
            </clipPath>
          </defs>
        </svg>
        <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">8900+</p>
      </div>
      <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">Sessions Completed</p>
    </div>
    <div
      class="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
      <div class="flex flex-row justify-center items-center">
        <svg class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]" viewBox="0 0 51 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M45.571 12.006 27.046 30.531l-7.719-7.718L5.434 36.706" stroke="#FF6D42" stroke-width="4.341"
            stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M45.569 24.356v-12.35h-12.35" stroke="#FF6D42" stroke-width="4.341" stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
        <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">1.5M+</p>
      </div>
      <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">App Downloads</p>
    </div>
  </div>
</section>

            

    </>
  );
}
