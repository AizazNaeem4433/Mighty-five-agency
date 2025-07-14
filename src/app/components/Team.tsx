"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mehr Haider",
    title: "Founder",
    image: "/founder/founder1.webp",
    description:
      "A graduate of the University of Toronto, Syed Mehr Haider spent 10 years in California’s tech scene, sharpening his skills in growth, strategy, and innovation. He was a founding team member at Airlift, one of Pakistan’s most funded startups, playing a key role in scaling operations. Syed thrives at the intersection of tech, scale, and impact. He’s also passionate about golf and fitness.",
  },
  {
    name: "Maheen",
    title: "Co-Founder",
    image: "/founder/founder2.webp",
    description:
      "Maheen excels at building and scaling high-impact businesses. As Co-Founder of Mighty Five, she combines a passion for tech with sharp insight into emerging trends. She’s worked with 150+ U.S. clients, driving results through strategy and innovation. Maheen thrives on turning bold ideas into winning ventures—and finds energy in businesses that perform.",
  },
  {
    name: "Obaid",
    title: "COO for BPO",
    image: "/founder/founder3.webp",
    description:
      "Obaid builds high-performing systems and leads telesales operations with unmatched precision. As an entrepreneur, he’s known for delivering exceptional results through structure and strategy. With a focus on efficiency, Obaid ensures seamless performance. Outside of work, he has a sharp eye for detail and a deep love for Persian literature, blending his analytical mindset with creative passion.",
  },
  {
    name: "Asma Asad Khan",
    title: "Digital Innovation Lead",
    image: "/founder/founder4.webp",
    description:
      "Asma is a global experience and service design leader with interest in digital innovation of systems and services. She also teaches service design and UX at higher education level in Toronto, Canada. She uses a human-centered approach to improve services across public and private sectors. Outside of work, \n\nAsma loves traveling and finds inspiration in mindfulness and Zen living.",
  },
  {
    name: "Mirza Muhammad Harris",
    title: "Director Business & Operations",
    image: "/founder/haris.webp",
    description:
      "Mirza is a results-driven leader specializing in business operations, HR management, and customer success. His expertise includes scaling operations, optimizing workflows, and driving revenue growth through high-performance teams and process efficiency. With experience in digital marketing, BPO, and tech-enabled outsourcing, he delivers measurable improvements in efficiency, compliance, and client retention.\n\nMirza designs operational frameworks that enhance productivity and profitability. His career highlights include reducing costs by 30% in US-Pakistan operations, leading 200+ professionals, and generating $700K+ in business value through strategic expansion.\n\nBeyond work, Mirza is an avid traveler and hiker, finding inspiration in nature and diverse cultures. A lifelong learner, he collects books on leadership and history, crafts handmade jewelry as a creative outlet, and enjoys strategic challenges like chess. He holds an MBA in HR Management and a BS in Computer Science, blending analytical rigor with people-centric leadership.",
  },
];

const MeetOurTeam: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-white py-5 px-4 sm:px-8 lg:px-24 scroll-mt-25" id="team">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Meet <span className="text-red-600">Our Team</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Behind Mighty Five is a team of passionate leaders with a shared goal: delivering impact through strategy, tech, and creativity.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-red-100 transform -translate-x-1/2"></div>

        <div className="space-y-14">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:ml-auto' : 'md:pl-10'} relative`}
            >
              <div className="bg-gray-50 p-6 rounded-xl border shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full border object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{member.name}</h4>
                    <p className="text-sm text-red-600 font-medium">{member.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-line">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;