'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // ✅ App Router-compatible

const GuaranteeSection: React.FC = () => {
  const router = useRouter(); // ✅ use this instead of importing router directly

  return (
    <div className="bg-white py-10 px-6 flex flex-col md:flex-row justify-between items-center">
      <motion.div
        className="text-left mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-red-600 text-sm uppercase">RISK-FREE GUARANTEE</p>
        <h2 className="text-5xl font-bold mt-2">
          Get Results in 90 Days—Or<br />You Don’t Pay
        </h2>
        <hr className="border-t-2 border-red-600 w-16 mt-2" />
      </motion.div>

      <motion.div
        className="text-left max-w-md"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-gray-700 mb-4">
          Most Agencies Guess. We Audit, Prove, and Guarantee.
        </p>
        <p className="text-gray-700 mb-4">
          Our free marketing audit is your first step to identifying wasted spend and missed opportunities. Whether you hire us or not, you’ll walk away with a clear roadmap to grow faster and smarter.
        </p>
        <p className="text-gray-700 mb-4">
          For qualifying brands, we guarantee measurable growth within 90 days—or your money back. No fluff. No long-term contracts. Just real results.
        </p>
        <button
          onClick={() => router.push('/contact')}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
        >
          GET YOUR FREE MARKETING AUDIT
        </button>
      </motion.div>
    </div>
  );
};

export default GuaranteeSection;
