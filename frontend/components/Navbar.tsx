'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#261FB3] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logokamera.png" // Ganti dengan logo Kameraku
              alt="Logo Kameraku"
              width={45}
              height={45}
            />
            <span className="text-white font-bold text-xl ml-2">Kameraku</span>
          </div>

          {/* Menu Links */}
          <ul className="flex space-x-8 text-white text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">Beranda</Link>
            </li>
            <li>
              <Link href="/kamera" className="hover:text-yellow-300 transition">Kamera</Link>
            </li>
            <li>
              <Link href="/sewa" className="hover:text-yellow-300 transition">Sewa</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
