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

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden pt-[90px]">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[600px]"
        role="banner"
        aria-label="About Hero Section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/About banner.jpg"
          alt="Teamwork and Strategy Banner at Mighty Five Agency"
          fill
          priority
          className="object-cover object-center"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/50 clip-triangle text-white flex flex-col justify-center items-start px-6 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mb-4">
            Get the Right People, Skills, and Tools — All the Time
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Mighty Five is a performance marketing agency trusted by growth-focused brands. We onboard a select few clients to deliver custom SEO, paid ads, and content strategy that gets real results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
            aria-label="Contact Mighty Five to discuss your project"
          >
            Let’s Connect!
          </a>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-24 bg-white px-6 md:px-20 text-center"
        role="region"
        aria-label="Mission Statement"
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
            Our mission is to help digital-first businesses grow with clarity and confidence through data-backed SEO, performance content, and ad strategy — not guesswork.
          </motion.p>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="relative bg-red-600 py-20 px-6 md:px-20 text-white"
        style={{ backgroundImage: "url('/diagmonds.png')" }}
        role="region"
        aria-label="Core Values"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
          <motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>
            We Live Our Values
          </motion.h2>
          <motion.p className="text-lg" variants={itemVariants}>
            These aren’t just words — they define how we build results-driven campaigns.
          </motion.p>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Integrity",
              description: "We say what we mean and follow through — with full transparency.",
            },
            {
              title: "Innovation",
              description: "We create modern marketing systems that scale with your business.",
            },
            {
              title: "Accountability",
              description: "Every decision, every dollar — we treat your growth like our own.",
            },
          ].map(({ title, description }, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-gray-800 p-8 rounded-xl shadow-xl text-left"
              aria-label={`Value: ${title}`}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.article>
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
        role="region"
        aria-label="Our Team"
      >
        <MeetOurTeam />
      </motion.section>

      {/* CTA Footer */}
      <motion.section
        className="relative bg-red-600 py-20 px-6 md:px-20 text-white flex justify-center items-center"
        style={{ backgroundImage: "url('/diagmonds.png')" }}
        role="contentinfo"
        aria-label="CTA Footer Section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="text-center">
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
            Let’s Create Growth That Lasts
          </motion.h2>
          <motion.p className="text-xl mb-8" variants={itemVariants}>
            Ready to take your business to the next level? We're here to build a strategy that delivers.
          </motion.p>
          <motion.a
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
            aria-label="Start your digital growth journey with Mighty Five"
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

export default AboutPage;
