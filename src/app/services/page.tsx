/* eslint-disable */

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

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
    transition: {
      duration: 0.8,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const ServicesPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-900 overflow-hidden pt-[80px]">
      {/* Stage Banner Section */}
      <motion.section
        className="w-full bg-red-600 py-20 px-6 md:px-20 text-white text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold"
          variants={itemVariants}
        >
          MAGNETIC MARKETING FOR BRANDS READY TO SCALE
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-base md:text-lg"
          variants={itemVariants}
        >
          Use the right message and methods to establish marketing certainty leveraging the best platforms.
        </motion.p>
        <motion.button
                            onClick={() => router.push("/offers")}

          className="mt-6 px-6 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SEE ALL SERVICES
        </motion.button>
      </motion.section>

      {/* Logos Row */}
      <div className="overflow-hidden bg-gray-100 py-10">
        <motion.div
          className="flex gap-10 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[
            ...[
              '/logo1.png',
              '/image.png',
              '/image2.png',
              '/logo3.webp',
              '/logo4.webp',
              '/logo5.webp',
              '/logo6.webp',
              '/logo7.webp',
            ],
            ...[
              '/logo1.png',
              '/image.png',
              '/image2.png',
              '/logo3.webp',
              '/logo4.webp',
              '/logo5.webp',
              '/logo6.webp',
              '/logo7.webp',
            ],
          ].map((logo, i) => (
            <div
              key={i}
              className="w-40 h-20 flex justify-center items-center bg-white rounded-xl shadow-md"
            >
              <img
                src={logo}
                alt={`logo-${i}`}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* About Section */}
      <motion.section
        className="px-6 py-16 bg-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-4" variants={itemVariants}>
          Make Your Marketing Irresistible
        </motion.h2>
        <motion.p className="max-w-3xl mx-auto text-lg" variants={itemVariants}>
          Not only does our work look great, but it also performs great.
          Whatever you need... we’re here to help you get results. Browse all of our digital marketing services.
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="px-6 py-16 text-center bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {"SEO,Google Ads,Social Media Ads,YouTube Ads,Amazon,Facebook Ads,TikTok Ads,LinkedIn Ads,Bing Ads,X Ads,Google Shopping,Motion Ads,Landing Pages,Email Marketing,Lead Nurture,Creative Strategy,Site Optimization,BPO services,Web development,Branding"
            .split(",")
            .map((service, i) => (
              <motion.div
                key={service}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300"
                variants={itemVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(185, 28, 28, 0.3)",
                }}
              >
                <p className="text-sm font-medium">{service}</p>
              </motion.div>
            ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Proven Process
        </motion.h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="border-l-2 border-red-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {[
              "Discovery Call",
              "Solutions Call",
              "Marketing Level-Set",
              "Strategy Optimization",
              "Growth Strategy",
            ].map((step, index) => {
              const isRight = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${isRight ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: isRight ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-full md:w-1/2 ${isRight ? "pr-6" : "order-last pl-6"}`}>
                    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg relative hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] transition-shadow duration-300">
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-red-500 rounded-full border-4 border-gray-900"></div>
                      <h3 className="text-xl font-semibold mb-1 text-red-400">Step {index + 1}</h3>
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
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {[
          {
            title: "24/7 Call Center",
            description: "We help you connect with your customers by understanding their needs and delivering personalized outbound telesales and responsive inbound customer support that drives results.",
          },
          {
            title: "Social Media Management",
            description: "We manage your social media channels end-to-end—creating content, scheduling posts, engaging with your audience, and providing insights to grow your online presence.",
          },
          {
            title: "Paid Social Media Advertising",
            description: "Our advertising experts will help you create and execute targeted social media advertising campaigns that drive results.",
          },
          {
            title: "Service Design",
            description: "Our service design solutions blend strategy, UX, and innovation to streamline customer journeys—creating seamless, intuitive, and engaging user experiences.",
          },
          {
            title: "Lead Generation",
            description: "Our team will handle your social media with a focus on lead generation—creating strategic content, running campaigns, and engaging prospects to drive results.",
          },
          {
            title: "Virtual Assistant",
            description: "Free up your time with Mighty Five’s expert virtual assistants—handling admin, scheduling, emails, and more. We streamline your workflow so you can focus on growth.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(185, 28, 28, 0.3)",
            }}
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="mb-4 text-sm">{service.description}</p>
            {/* <motion.button
              className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              whileHover={{ x: 5 }}
            >
              TELL ME MORE
            </motion.button> */}
          </motion.div>
        ))}
      </motion.section>

      {/* Red CTA Section */}
      <motion.section
        className="relative bg-red-600 py-20 px-6 md:px-20 text-white"
        style={{ backgroundImage: "url('/diagmonds.png')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          WE HAVE A PASSION FOR MAGNETIC MARKETING
        </motion.h2>
        <motion.button
          onClick={() => router.push("/contact")}

          className="mt-4 px-6 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          LET'S GO
        </motion.button>
      </motion.section>

      {/* Metrics Section */}
      <motion.section
        className="px-6 py-16 bg-gray-900 text-white grid grid-cols-2 md:grid-cols-5 gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {["5 Avg Rating", "90+ Clients", "160+ Certifications", "#145 on Inc. 500", "$450M+ Ad Spend"].map((metric, i) => (
          <motion.div
            key={metric}
            className="text-sm font-medium"
            variants={itemVariants}
            custom={i}
            whileHover={{ scale: 1.05 }}
          >
            {metric}
          </motion.div>
        ))}
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="py-4 text-black text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Wants to talk how we do this?
        </motion.h2>
        <motion.button
          onClick={() => router.push("/contact")}

          className="mt-2 px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          SHOW ME HOW
        </motion.button>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
