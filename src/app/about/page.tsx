"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MeetOurTeam from "@/app/components/Team";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Page = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden pt-[90px]">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[600px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/About banner.jpg"
          alt="About banner"
          fill
          className="object-cover object-center"
          priority
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/50 clip-triangle text-white flex flex-col justify-center items-start px-6 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold max-w-3xl mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Get the Right People, Skills, and Tools — All the Time
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Mighty Five is the go-to SEO &amp; marketing agency for performance-driven brands.
            We onboard only a few select clients each month.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Connect!
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-24 bg-white px-6 md:px-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
            Our Mission
          </motion.h2>
          <motion.p className="text-gray-600 text-lg leading-relaxed" variants={itemVariants}>
            Our mission is simple: help businesses achieve sustainable growth through data-driven SEO, strategic content, and performance marketing.
            We believe digital marketing should never be guesswork.
          </motion.p>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="relative bg-red-600 py-20 px-6 md:px-20 text-white"
        style={{ backgroundImage: "url('/diagmonds.png')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="absolute inset-0"></div>
        <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
          <motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>
            We Live Our Values
          </motion.h2>
          <motion.p className="text-lg" variants={itemVariants}>
            They&apos;re not just words — they&apos;re our way of working.
          </motion.p>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Integrity", "Innovation", "Accountability"].map((title, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-gray-800 p-8 rounded-xl shadow-xl text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">
                {title === "Integrity"
                  ? "We say what we mean and do what we say."
                  : title === "Innovation"
                  ? "We find creative solutions that scale."
                  : "Every campaign. Every click. We own it."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-5 bg-white px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <MeetOurTeam />
      </motion.section>

      {/* CTA Footer */}
      <motion.section
        className="relative bg-red-600 py-20 px-6 md:px-20 text-white items-center flex justify-center"
        style={{ backgroundImage: "url('/diagmonds.png')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <div>
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
            Let&apos;s Create Growth That Lasts
          </motion.h2>
          <motion.p className="text-xl mb-8" variants={itemVariants}>
            We&apos;re ready to be your digital marketing partner. Are you ready to lead your industry?
          </motion.p>
          <motion.a
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
};

export default Page;
