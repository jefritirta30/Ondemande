'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#261FB3] text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Left section */}
        <div>
          <h2 className="text-xl font-semibold">KameraKu</h2>
          <p className="text-sm text-gray-300 mt-1">© 2025 KameraKu. All rights reserved.</p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-yellow-300 transition">Beranda</Link>
          <Link href="/kamera" className="hover:text-yellow-300 transition">Kamera</Link>
          <Link href="/sewa" className="hover:text-yellow-300 transition">Sewa</Link>
        </div>

        {/* Right section - Contact / Socials */}
        <div className="text-sm text-gray-300">
          Dibuat oleh <span className="text-white font-semibold">Tim KameraKu</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
