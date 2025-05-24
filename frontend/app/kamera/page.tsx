import React from 'react'

export default function KameraPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">Daftar Kamera Tersedia</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contoh Kartu Kamera */}
          <div className="border rounded-2xl shadow-md hover:shadow-lg p-4 transition">
            <img
              src="/kamera/canon-eos.jpg"
              alt="Canon EOS 80D"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold">Canon EOS 80D</h2>
            <p className="text-gray-600 mt-1">Kamera DSLR profesional dengan fitur video dan autofocus canggih.</p>
            <p className="mt-2 font-medium text-blue-600">Rp 150.000 / hari</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Sewa Sekarang
            </button>
          </div>

          {/* Tambahkan kamera lainnya di sini */}
        </div>
      </div>
    </div>
  )
}
