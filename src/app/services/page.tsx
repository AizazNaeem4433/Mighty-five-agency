"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const logos = ["/logo1.png", "/image.png", "/image2.png", "/logo3.webp", "/logo4.webp", "/logo5.webp", "/logo6.webp", "/logo7.webp"];
const services = [
  "SEO", "Google Ads", "Social Media Ads", "YouTube Ads", "Amazon", "Facebook Ads", "TikTok Ads",
  "LinkedIn Ads", "Bing Ads", "X Ads", "Google Shopping", "Motion Ads", "Landing Pages", "Email Marketing",
  "Lead Nurture", "Creative Strategy", "Site Optimization", "BPO services", "Web development", "Branding"
];
const highlights = [
  { title: "24/7 Call Center", desc: "We deliver outbound telesales and responsive inbound support to drive results." },
  { title: "Social Media Management", desc: "We handle content, scheduling, and engagement to grow your presence." },
  { title: "Paid Social Media Advertising", desc: "We create and execute campaigns that convert—on all major platforms." },
  { title: "Service Design", desc: "Streamline journeys with UX strategy and seamless digital experiences." },
  { title: "Lead Generation", desc: "Drive qualified leads using optimized social strategies." },
  { title: "Virtual Assistant", desc: "Delegate admin, scheduling, and communication tasks efficiently." }
];

const ServicesPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-white text-gray-900 overflow-hidden pt-[80px]">

      {/* Hero */}
      <motion.section
        className="bg-red-600 text-white text-center py-20 px-6 md:px-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-4">Magnetic Marketing for Brands Ready to Scale</motion.h1>
        <motion.p className="max-w-2xl mx-auto text-lg">Use the right message and platforms to establish consistent marketing results.</motion.p>
        <motion.button
          onClick={() => router.push("/offers")}
          className="mt-6 px-6 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SEE ALL SERVICES
        </motion.button>
      </motion.section>

      {/* Logos */}
      <section className="overflow-hidden bg-gray-100 py-10">
  <motion.div
    className="flex gap-10 w-max"
    initial={{ x: 0 }}
    animate={{ x: "-50%" }}
    transition={{
      delay: 1.5, // 👈 Add delay here (1.5 seconds or as desired)
      repeat: Infinity,
      duration: 25,
      ease: "linear",
    }}
  >
    {[...logos, ...logos].map((logo, i) => (
      <div key={i} className="w-40 h-20 flex items-center justify-center bg-white rounded-xl shadow-md">
        <Image src={logo} alt={`Logo ${i + 1}`} width={160} height={80} className="object-contain" />
      </div>
    ))}
  </motion.div>
</section>

      {/* About Section */}
      <motion.section
        className="text-center py-16 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
          Make Your Marketing Irresistible
        </motion.h2>
        <motion.p className="max-w-3xl mx-auto text-lg text-gray-700" variants={itemVariants}>
          We help you attract, convert, and retain customers with world-class marketing strategies tailored for growth.
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="px-6 pb-16 pt-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {services.map((title, i) => (
            <motion.div
              key={i}
              className="bg-white border shadow-sm rounded-lg p-4 hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <p className="text-sm font-medium">{title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Timeline */}
      <motion.section
        className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Proven Process</motion.h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="border-l-2 border-red-500 absolute h-full left-1/2 transform -translate-x-1/2" />
          <div className="space-y-12">
            {["Discovery Call", "Solutions Call", "Marketing Level-Set", "Strategy Optimization", "Growth Strategy"].map((step, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row ${isRight ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: isRight ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className={`w-full md:w-1/2 ${isRight ? "pr-6" : "order-last pl-6"}`}>
                    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg relative hover:shadow-xl">
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-red-500 rounded-full border-4 border-gray-900" />
                      <h3 className="text-xl font-semibold mb-1 text-red-400">Step {i + 1}</h3>
                      <p>{step}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Highlighted Services */}
      <motion.section
        className="grid md:grid-cols-2 gap-6 px-6 py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {highlights.map(({ title, desc }, i) => (
          <motion.article
            key={i}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm">{desc}</p>
          </motion.article>
        ))}
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-red-600 py-20 px-6 md:px-20 text-white text-center"
        style={{ backgroundImage: "url('/diagmonds.png')" }}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-4">We Have a Passion for Magnetic Marketing</motion.h2>
        <motion.button
          onClick={() => router.push("/contact")}
          className="mt-4 px-6 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LET’S GO
        </motion.button>
      </motion.section>

      {/* Metrics */}
      <motion.section
        className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center py-16 px-6 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        {["5★ Avg Rating", "90+ Clients", "160+ Certifications", "#145 on Inc. 500", "$450M+ Ad Spend"].map((stat, i) => (
          <motion.div
            key={i}
            className="text-sm font-semibold"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            {stat}
          </motion.div>
        ))}
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="text-center text-black py-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">Want to talk about how we do this?</motion.h2>
        <motion.button
          onClick={() => router.push("/contact")}
          className="mt-2 px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SHOW ME HOW
        </motion.button>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
