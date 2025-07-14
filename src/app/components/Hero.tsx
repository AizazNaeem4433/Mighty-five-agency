"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <section
      className="w-full min-h-screen mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-white"
      role="region"
      aria-label="Hero Section"
    >
      {/* Animated Heading & CTA */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black leading-tight">
          Transform Your Brand with{" "}
          <span className="text-red-600">Mighty Five</span>
        </h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Top-rated digital marketing agency delivering custom web, social, and paid strategies to accelerate growth and revenue.
        </motion.p>

       <div className="w-full flex justify-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group flex items-center gap-2 border border-transparent bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-transparent hover:border-red-600 hover:text-red-600 cursor-pointer"
    onClick={() => router.push("/contact")}
    aria-label="Start Your Project with Mighty Five"
  >
    Start Your Project
    <span className="opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
      →
    </span>
  </motion.button>
</div>

      </motion.div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-2xl aspect-video bg-black"
        role="complementary"
        aria-label="Promotional Agency Video"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          poster="/fallback.jpg"
          title="Mighty Five agency introduction video"
        >
          <source src="/hero-video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Badge Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 flex flex-col items-center"
        role="note"
        aria-label="Trusted by Industry Leaders"
      >
        <div className="text-gray-500 uppercase text-sm tracking-widest mb-2">
          Trusted by Industry Leaders
        </div>
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="img"
            aria-label="Star badge"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
