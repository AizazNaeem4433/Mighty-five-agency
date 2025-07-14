"use client";

import React, { useEffect, useState, useRef } from "react";
import { useMotionValue, animate, motion, useInView } from "framer-motion";

type StatProps = {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

const Stat: React.FC<StatProps> = ({ end, label, prefix = "", suffix = "" }) => {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { duration: 2 });
      const unsubscribe = count.on("change", (latest) => {
        setDisplayCount(Math.floor(latest));
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [count, end, isInView]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {prefix}
        {displayCount}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-white">{label}</p>
    </motion.div>
  );
};

const Count: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        <Stat end={5} label="Average Star Rating" suffix="★" />
        <Stat end={90} label="Clients with us for 4+ years" suffix="+" />
        <Stat end={160} label="Employees aligned with our mission" suffix="+" />
        <Stat end={145} label="On the Inc. 500" prefix="#" />
        <Stat end={450} label="Annual Ad Spend Managed" prefix="$" suffix="M+" />
      </div>
    </section>
  );
};

export default Count;
