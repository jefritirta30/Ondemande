import React from 'react'

// data dummy services layanan
const services = [
    {
        title: "Sewa Kamera DSLR",
        description: "Kamera DSLR berkualitas tinggi untuk kebutuhan foto profesional, prewedding, dan dokumentasi acara.",       
        price: "Rp 150.000 / hari",
    },
    {
        title: "Sewa Kamera Mirrorless",
        description: "Kamera mirrorless ringan dan praktis untuk vlog, traveling, dan keperluan konten kreatif.",
        price: "Rp 120.000 / hari",
    },
    {
        title: "Sewa Lensa Tambahan",
        description: "Berbagai jenis lensa seperti wide, tele, dan fix untuk memenuhi kebutuhan pemotretan spesifik.",
        price: "Mulai dari Rp50.000 / hari",
    },
    {
        title: "Paket Sewa Lengkap",
        description: "Paket lengkap termasuk kamera, lensa, tripod, dan memory card siap digunakan langsung.",
        price: "Rp250.000 / hari",
    },
]

export default function LayananPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Layanan Sewa Kamera</h1>
    </main>
  )
}
