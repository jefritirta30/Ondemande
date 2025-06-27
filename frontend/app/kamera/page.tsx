'use client';

import React from 'react';
import Image from 'next/image';

export default function KameraPage() {
  const kameraList = [
    {
      nama: 'Canon EOS 80D',
      deskripsi: 'Kamera DSLR profesional dengan fitur video dan autofocus canggih.',
      harga: 'Rp 150.000 / hari',
      gambar: '/kamera/kamera1.jpg',
    },
    {
      nama: 'Sony A6400',
      deskripsi: 'Mirrorless compact dengan kualitas gambar luar biasa dan real-time tracking.',
      harga: 'Rp 180.000 / hari',
      gambar: '/kamera/kamera2.jpg',
    },
    {
      nama: 'Fujifilm X-T30',
      deskripsi: 'Retro style, sensor APS-C, dan performa cepat.',
      harga: 'Rp 160.000 / hari',
      gambar: '/kamera/kamera3.jpg',
    },
    {
      nama: 'Nikon Z50',
      deskripsi: 'Mirrorless Z mount dengan body compact dan hasil tajam.',
      harga: 'Rp 170.000 / hari',
      gambar: '/kamera/kamera4.jpg',
    },
    {
      nama: 'Panasonic Lumix G7',
      deskripsi: 'Mirrorless 4K dengan fitur video dan kontrol manual lengkap.',
      harga: 'Rp 140.000 / hari',
      gambar: '/kamera/kamera5.jpg',
    },
    {
      nama: 'Olympus OM-D E-M10',
      deskripsi: 'Kamera ringan dengan stabilisasi gambar 5-axis.',
      harga: 'Rp 130.000 / hari',
      gambar: '/kamera/kamera6.jpg',
    },
    {
      nama: 'Canon EOS R10',
      deskripsi: 'Mirrorless entry-level dengan Dual Pixel AF II dan video 4K.',
      harga: 'Rp 155.000 / hari',
      gambar: '/kamera/kamera7.jpg',
    },
    {
      nama: 'Sony ZV-E10',
      deskripsi: 'Kamera vlogging dengan flip screen dan kualitas audio bagus.',
      harga: 'Rp 165.000 / hari',
      gambar: '/kamera/kamera8.jpg',
    },
    {
      nama: 'Fujifilm X-S10',
      deskripsi: 'Mirrorless dengan IBIS dan desain ergonomis.',
      harga: 'Rp 175.000 / hari',
      gambar: '/kamera/kamera9.jpg',
    },
    {
      nama: 'Nikon D5600',
      deskripsi: 'DSLR ringan dengan layar putar dan konektivitas SnapBridge.',
      harga: 'Rp 135.000 / hari',
      gambar: '/kamera/kamera10.jpg',
    },
    {
      nama: 'Panasonic GH5',
      deskripsi: 'Micro Four Thirds kelas profesional dengan performa video luar biasa.',
      harga: 'Rp 200.000 / hari',
      gambar: '/kamera/kamera11.jpg',
    },
    {
      nama: 'Olympus PEN E-PL10',
      deskripsi: 'Stylish dan ringan, cocok untuk travel dan konten harian.',
      harga: 'Rp 125.000 / hari',
      gambar: '/kamera/kamera12.jpg',
    },
    {
      nama: 'Canon EOS M50 Mark II',
      deskripsi: 'Vlogging camera dengan autofocus cepat dan layar sentuh.',
      harga: 'Rp 145.000 / hari',
      gambar: '/kamera/kamera13.jpg',
    },
    {
      nama: 'Sony A7 III',
      deskripsi: 'Full-frame mirrorless untuk profesional dengan dynamic range tinggi.',
      harga: 'Rp 250.000 / hari',
      gambar: '/kamera/kamera14.jpg',
    },
    {
      nama: 'Fujifilm X100V',
      deskripsi: 'Kamera fixed lens bergaya klasik dengan performa tinggi.',
      harga: 'Rp 180.000 / hari',
      gambar: '/kamera/kamera15.jpg',
    },
    {
      nama: 'Nikon Z6 II',
      deskripsi: 'Full-frame mirrorless dengan dual processor dan video 4K.',
      harga: 'Rp 240.000 / hari',
      gambar: '/kamera/kamera16.jpg',
    },
    {
      nama: 'Panasonic S5',
      deskripsi: 'Full-frame dengan fitur video dan stabilisasi handal.',
      harga: 'Rp 220.000 / hari',
      gambar: '/kamera/kamera17.jpg',
    },
    {
      nama: 'Olympus Tough TG-6',
      deskripsi: 'Kamera tahan air dan cuaca ekstrem, cocok untuk petualangan.',
      harga: 'Rp 110.000 / hari',
      gambar: '/kamera/kamera18.jpg',
    },
    {
      nama: 'Canon PowerShot G7 X III',
      deskripsi: 'Compact vlog camera dengan fitur live streaming.',
      harga: 'Rp 120.000 / hari',
      gambar: '/kamera/kamera19.jpg',
    },
    {
      nama: 'Sony RX100 VII',
      deskripsi: 'Compact premium dengan zoom panjang dan eye AF.',
      harga: 'Rp 190.000 / hari',
      gambar: '/kamera/kamera20.jpg',
    },
    {
      nama: 'Fujifilm X-Pro3',
      deskripsi: 'Mirrorless untuk street photography dengan viewfinder hybrid.',
      harga: 'Rp 210.000 / hari',
      gambar: '/kamera/kamera21.jpg',
    },
    {
      nama: 'Nikon D7500',
      deskripsi: 'DSLR dengan sensor besar dan kontrol profesional.',
      harga: 'Rp 170.000 / hari',
      gambar: '/kamera/kamera22.jpg',
    },
    {
      nama: 'Panasonic LX100 II',
      deskripsi: 'Compact dengan sensor besar dan kontrol manual.',
      harga: 'Rp 130.000 / hari',
      gambar: '/kamera/kamera23.jpg',
    },
    {
      nama: 'Olympus OM System OM-1',
      deskripsi: 'Kamera flagship dengan AI tracking dan burst 120fps.',
      harga: 'Rp 260.000 / hari',
      gambar: '/kamera/kamera24.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10 text-center">
          Daftar Kamera Tersedia
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {kameraList.map((kamera, index) => (
            <div
              key={index}
              className="border rounded-xl shadow hover:shadow-lg p-3 bg-white transition"
            >
              <div className="relative w-full h-32 mb-3 rounded-md overflow-hidden">
                <Image
                  src={kamera.gambar}
                  alt={kamera.nama}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="text-sm font-semibold">{kamera.nama}</h2>
              <p className="text-gray-600 text-xs mt-1">{kamera.deskripsi}</p>
              <p className="mt-1 text-sm font-medium text-blue-600">{kamera.harga}</p>
              <button className="mt-3 w-full py-1.5 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Sewa
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
