'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SewaPage() {
  const searchParams = useSearchParams()

  // Ambil data kamera dari query parameter
  const namaKamera = searchParams.get('nama') || ''
  const hargaKamera = searchParams.get('harga') || ''
  const gambarKamera = searchParams.get('gambar') || ''

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    kamera: namaKamera,
    harga: hargaKamera,
    tanggal: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Data Formulir:', formData)
    alert('Form berhasil dikirim!')
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 px-4 pb-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
          Formulir Sewa Kamera
        </h1>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan nama Anda"
              required
              value={formData.nama}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="kamera" className="block text-sm font-medium text-gray-700">
              Kamera yang Disewa
            </label>
            <input
              type="text"
              name="kamera"
              id="kamera"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-gray-100"
              readOnly
              value={formData.kamera}
            />
          </div>

          <div>
            <label htmlFor="harga" className="block text-sm font-medium text-gray-700">
              Harga Sewa
            </label>
            <input
              type="text"
              name="harga"
              id="harga"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 bg-gray-100"
              readOnly
              value={formData.harga}
            />
          </div>

          <div>
            <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
              Tanggal Sewa
            </label>
            <input
              type="date"
              name="tanggal"
              id="tanggal"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.tanggal}
              onChange={handleChange}
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
