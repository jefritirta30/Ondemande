import React from 'react'

export default function SewaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 px-4 pb-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
          Formulir Sewa Kamera
        </h1>

        <form className="bg-gray-50 p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="kamera" className="block text-sm font-medium text-gray-700">
              Pilih Kamera
            </label>
            <select
              id="kamera"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">-- Pilih Kamera --</option>
              <option value="canon">Canon EOS 80D</option>
              <option value="sony">Sony A6400</option>
              <option value="gopro">GoPro Hero 9</option>
            </select>
          </div>

          <div>
            <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
              Tanggal Sewa
            </label>
            <input
              type="date"
              id="tanggal"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition font-medium"
          >
            Konfirmasi Sewa
          </button>
        </form>
      </div>
    </div>
  )
}
