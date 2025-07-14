'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  '/logo1.png',
  '/image.png',
  '/image2.png',
  '/logo3.webp',
  '/logo4.webp',
  '/logo5.webp',
  '/logo6.webp',
  '/logo7.png',
];

export default function LogoCarousel() {
  const duplicatedLogos = [...logos, ...logos]; // For smooth infinite loop

  return (
    <div className="overflow-hidden bg-gray-100 py-10">
      <motion.div
        className="flex gap-6 sm:gap-10 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >
        {duplicatedLogos.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 h-14 sm:w-40 sm:h-20 flex items-center justify-center bg-white rounded-xl shadow-md"
          >
            <Image
              src={src}
              alt={`Logo ${index}`}
              width={160}
              height={80}
              className="object-contain max-h-12 sm:max-h-16 w-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
