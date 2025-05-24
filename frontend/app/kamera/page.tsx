'use client';

import React from 'react';
import Image from 'next/image';

export default function KameraPage() {
  const kameraList = [
    {
      nama: 'Canon EOS 80D',
      deskripsi: 'Kamera DSLR profesional dengan fitur video dan autofocus canggih.',
      harga: 'Rp 150.000 / hari',
      gambar: '/kamera/canon-eos.jpg',
    },
    {
      nama: 'Sony A6400',
      deskripsi: 'Kamera mirrorless compact dengan kualitas gambar luar biasa dan real-time tracking.',
      harga: 'Rp 180.000 / hari',
      gambar: '/kamera/sony-a6400.jpg',
    },
    {
      nama: 'Fujifilm X-T30',
      deskripsi: 'Kamera bergaya retro dengan sensor APS-C dan performa cepat.',
      harga: 'Rp 160.000 / hari',
      gambar: '/kamera/fujifilm-xt30.jpg',
    },
    {
      nama: 'Nikon Z50',
      deskripsi: 'Kamera mirrorless dengan sistem Z mount dan performa tinggi.',
      harga: 'Rp 170.000 / hari',
      gambar: '/kamera/nikon-z50.jpg',
    },
    {
      nama: 'Panasonic Lumix G7',
      deskripsi: 'Kamera 4K mirrorless dengan kontrol manual lengkap.',
      harga: 'Rp 140.000 / hari',
      gambar: '/kamera/panasonic-g7.jpg',
    },
    {
      nama: 'Olympus OM-D E-M10',
      deskripsi: 'Kamera kecil dan ringan dengan stabilisasi gambar 5-axis.',
      harga: 'Rp 130.000 / hari',
      gambar: '/kamera/olympus-omd.jpg',
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
