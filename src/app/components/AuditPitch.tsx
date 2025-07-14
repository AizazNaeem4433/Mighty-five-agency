'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AuditPitch: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-20">
            <motion.div
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.4 }}
            >

                {/* Left Content */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <p className="text-red-600 text-sm font-semibold tracking-wider uppercase mb-4">
                        Top Reviewed Agency in the USA | No Strings Attached Audit
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Most Marketing Budgets Are <br />
                        <span className="text-black">Wasted—Let’s Fix That</span>
                    </h2>
                    <div className="w-12 h-1 bg-red-600 mb-6" />
                    <p className="text-gray-700 mb-6">
                        After thousands of audits, we’ve found that{" "}
                        <span className="font-bold">76% of marketing spend goes to waste</span>.
                        We’ll show you where yours is leaking—and how to fix it fast.
                    </p>
                    <Link href="/contact">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition duration-300 cursor-pointer">
                            GET YOUR FREE MARKETING AUDIT
                        </button>
                    </Link>
                </motion.div>

                {/* Right Icon or Image */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Image
                        src="/M.jpg"
                        alt="Award Badge"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AuditPitch;
