/* eslint-disable */
// src/app/components/WhatWeOffer.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';

const WhatWeOffer: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What We Offer
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-2xl shadow-md p-6 border relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.shortDescription}</p>
            <button
              onClick={() =>
                setActiveId(activeId === service.id ? null : service.id)
              }
              className="text-red-600 mt-4 font-medium hover:underline"
            >
              {activeId === service.id ? 'Hide Details' : 'Learn More'}
            </button>

            <AnimatePresence>
              {activeId === service.id && (
                <motion.div
                  className="mt-4 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{service.fullDescription}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
