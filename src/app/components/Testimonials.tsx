"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dider Bizimungu",
    title: "Matterport, Paid Media Director",
    image: "/testimonials/image1.jpg",
    quote:
      "We are a unique company with unique solutions, so having a flexible, receptive, & knowledgeable partner is crucial to us achieving our goals.",
  },
  {
    name: "Maggie Li",
    title: "Growth Marketing Manager, MyHealthTeams",
    image: "/testimonials/image3.jpg",
    quote:
      "The workflow between our teams is seamless and based on mutual trust and communication. The team at Mighty Five is really knowledgeable.",
  },
  {
    name: "Kaili Spear",
    title: "Marketing Manager, Grow.com",
    image: "/testimonials/image2.jpg",
    quote:
      "They started getting results quickly and the leads are already moving through the funnel. We are super happy.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-20 text-center">
      <p className="text-sm text-gray-500 tracking-wide mb-2">
        ★ ★ ★ ★ ★ &nbsp; Loved by Business Owners & Marketers
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        WHAT MARKETERS SAY ABOUT{" "}
        <span className="text-black underline decoration-red-600">
          MIGHTY FIVE
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Image
              src={t.image}
              alt={t.name}
              width={120}
              height={120}
              className="rounded-full mb-4 object-cover"
            />
            <p className="text-lg text-gray-700 mb-4">★ ★ ★ ★ ★</p>
            <p className="text-gray-800 text-sm italic mb-4 max-w-sm">
              “{t.quote}”
            </p>
            <p className="text-black font-semibold text-sm uppercase">
              {t.name}, {t.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
