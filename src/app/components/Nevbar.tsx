"use client";

import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import MobileMenu from "@/app/components/MobileMenu";
import Link from "next/link";
import Image from "next/image";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "What we offer", href: "/offers" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 flex items-center justify-between bg-auto">

      {/* Logo (visible on all screens, links to home) */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="block"
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain shadow-amber-100"
          />
        </Link>
      </motion.div>

      {/* Desktop Nav */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="hidden sm:flex bg-white text-black py-3 px-8 justify-center rounded-full border-[2.5px] border-gray-200 shadow-md mx-auto"
      >
        <ul className="flex space-x-6 items-center">
          {navigationItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-red-600 transition-colors"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden sm:flex space-x-3 items-center"
      >
        <SocialIcon url="https://www.linkedin.com/company/mighty-five-agency/posts/?feedView=all" style={{ height: 28, width: 28 }} />
        <SocialIcon url="https://www.instagram.com/mightyfive.agency?igsh=YXJ2eWY1cTBjZHpp" style={{ height: 28, width: 28 }} />
        <SocialIcon url="https://facebook.com/" style={{ height: 28, width: 28 }} />
        <SocialIcon url="https://x.com/" style={{ height: 28, width: 28 }} />
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 bg-white border rounded-full shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          navigationItems={navigationItems}
        />
      )}
    </nav>
  );
};

export default Navbar;
