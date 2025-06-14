'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#261FB3] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logokamera.png"
              alt="Logo KameraKu"
              width={65}
              height={65}
            />
            <span className="text-white font-bold text-xl ml-2">KameraKu</span>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu Links (desktop) */}
          <ul className="hidden lg:flex space-x-8 text-white text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">Beranda</Link>
            </li>
            <li>
              <Link href="/kamera" className="hover:text-yellow-300 transition">Kamera</Link>
            </li>
            <li>
              <Link href="/sewa" className="hover:text-yellow-300 transition">Sewa</Link>
            </li>
            <li>
              <Link href="/layanan" className="hover:text-yellow-300 transition">Layanan</Link>
            </li>
          </ul>
        </div>

        {/* Menu Links (mobile) */}
        {menuOpen && (
          <div className="lg:hidden mt-2 pb-4">
            <ul className="space-y-3 text-white text-lg font-medium">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>Beranda</Link>
              </li>
              <li>
                <Link href="/kamera" onClick={() => setMenuOpen(false)}>Kamera</Link>
              </li>
              <li>
                <Link href="/sewa" onClick={() => setMenuOpen(false)}>Sewa</Link>
              </li>
              <li>
                <Link href="/layanan" onClick={() => setMenuOpen(false)}>Layanan</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
