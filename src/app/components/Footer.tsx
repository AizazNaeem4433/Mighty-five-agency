"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 border-t border-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + CTA */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Mighty Five Logo"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </Link>
          <p className="text-sm">
            We help bold brands grow with data-driven SEO, performance marketing, and creative strategy.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-2 bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition"
          >
            Let’s Work Together →
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-red-600 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition">Contact</Link></li>
            <li><Link href="/offers" className="hover:text-red-600 transition">What We Offer</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm">
            Email: <a href="mailto:hello@mightyfive.com" className="hover:text-red-600">hello@mightyfive.com</a><br />
            WhatsApp: +123 456 7890<br />
            Mon - Fri: 9:00AM - 6:00PM
          </p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-3">
            <SocialIcon url="https://x.com" bgColor="#000" style={{ height: 28, width: 28 }} />
            <SocialIcon url="https://www.instagram.com/mightyfive.agency?igsh=YXJ2eWY1cTBjZHpp" style={{ height: 28, width: 28 }} />
            <SocialIcon url="https://facebook.com" style={{ height: 28, width: 28 }} />
            <SocialIcon url="https://www.linkedin.com/company/mighty-five-agency/posts/?feedView=all" style={{ height: 28, width: 28 }} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-sm text-center py-4 px-4 border-t border-gray-300">
        <span>© {new Date().getFullYear()} Mighty Five Agency. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
