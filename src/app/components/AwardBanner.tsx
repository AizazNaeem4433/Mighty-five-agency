'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';

const AwardBanner: React.FC = () => {
  const router = useRouter(); // ✅ use this instead of importing router directly

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div
      className="relative text-white text-center px-4 py-16 sm:py-20 overflow-hidden z-10"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
        backgroundPositionY: bgY,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Curved Background + Stars */}
      <div className="relative w-full h-28 flex justify-center items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-white/10 rounded-b-full blur-sm"></div>

        <div className="relative w-[160px] h-[80px]">
          {Array.from({ length: 5 }).map((_, i) => {
            const angle = -60 + i * 30;
            return (
              <motion.svg
                key={i}
                className="w-6 h-6 text-white fill-current absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-40px) rotate(-${angle}deg)`,
                  transformOrigin: 'center',
                }}
                viewBox="0 0 24 24"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
            );
          })}
        </div>
      </div>

      {/* Text & CTA */}
      <motion.span
        className="text-xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        1,000+ REVIEWS
      </motion.span>
      <motion.h2
        className="text-3xl md:text-4xl font-bold uppercase mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Award Winning Agency
      </motion.h2>
      <motion.button
      onClick={() => router.push('/contact')}

        className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        LEARN MORE ABOUT DISRUPTIVE
      </motion.button>
    </motion.div>
  );
};

export default AwardBanner;
