'use client';

import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, background: 'white', width: '100%', zIndex: 100 }}>
        <ul style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#kamera">Kamera</a></li>
          <li><a href="#sewa">Sewa</a></li>
        </ul>
      </nav>

      {/* Section: Beranda */}
      <section id="beranda" style={{ height: '100vh', paddingTop: '80px' }}>
        <h1>Beranda</h1>
      </section>

      {/* Section: Kamera */}
      <section id="kamera" style={{ height: '100vh', paddingTop: '80px' }}>
        <h1>Daftar Kamera</h1>
      </section>

      {/* Section: Sewa */}
      <section id="sewa" style={{ height: '100vh', paddingTop: '80px' }}>
        <h1>Form Penyewaan</h1>
      </section>
    </div>
  );
}
