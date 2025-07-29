import React from "react";

export default function ComingSoonPage() {
  return (
    <>
      <section className="h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 animate-glow">
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-7xl text-center">
            <h1 className="text-3xl font-syne sm:text-5xl tracking-widest text-white lg:text-7xl font-bold uppercase">
              <span className="text-green-500 italic" >Borcella</span> is Coming Soon
            </h1>

            <p className="mt-6 text-white lg:text-lg">
              We’re working hard behind the scenes to bring you an exciting new
              experience. This page is currently under development and will be
              available very soon. Thank you for your patience and continued
              support!
            </p>

            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <input
                id="email"
                type="email"
                className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2"
                placeholder="Enter your email to get notified"
              />

              <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium uppercase tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
