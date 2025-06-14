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
        <h1 className="text-3xl font-bold mb-6 text-center my-20">Layanan Sewa Kamera</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
                <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
                >
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <span className="text-indigo-600 font-bold">{service.price}</span>
            </div>
            ))}  
        </div>
    </main>
  )
}
