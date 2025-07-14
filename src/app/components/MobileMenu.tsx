"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: { name: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigationItems }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-4 z-50 bg-white w-72 rounded-2xl shadow-xl px-6 py-6 border"
        >
          {/* Header: Logo + Close */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" onClick={onClose}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={onClose}
              className="text-xl text-gray-500 hover:text-red-600"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-800">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className="hover:text-red-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Optional CTA */}
          <div className="mt-6">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full text-center bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
