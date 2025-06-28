"use client";

import React, { useState, useEffect } from "react";
import { useCameraContext } from "@/context/CameraContext";
import { Camera } from "@/app/types";

const CameraModal = () => {
  const { currentCamera, setCurrentCamera, addCamera, updateCamera } =
    useCameraContext();

  const [formData, setFormData] = useState<Omit<Camera, "id" | "createdAt">>({
    nama: "",
    deskripsi: "",
    harga: 0,
    gambar: "",
  });

  useEffect(() => {
    if (currentCamera) {
      setFormData({
        nama: currentCamera.nama,
        deskripsi: currentCamera.deskripsi,
        harga: currentCamera.harga,
        gambar: currentCamera.gambar,
      });
    } else {
      setFormData({
        nama: "",
        deskripsi: "",
        harga: 0,
        gambar: "",
      });
    }
  }, [currentCamera]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "harga" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentCamera) {
      updateCamera(currentCamera.id, formData);
    } else {
      addCamera(formData);
    }

    setCurrentCamera(null);
  };

  if (!currentCamera && !formData.nama) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden blur-bg">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">
              {currentCamera ? "Edit Kamera" : "Tambah Kamera Baru"}
            </h3>
            <button
              onClick={() => setCurrentCamera(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama Kamera
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  placeholder="Contoh: Canon EOS R5"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="deskripsi"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Deskripsi
                </label>
                <textarea
                  id="deskripsi"
                  name="deskripsi"
                  rows={3}
                  value={formData.deskripsi}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Jelaskan fitur kamera..."
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="harga"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Harga (Rp)
                </label>
                <input
                  type="number"
                  id="harga"
                  name="harga"
                  value={formData.harga}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  placeholder="Contoh: 12499999"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gambar"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  URL Gambar
                </label>
                <input
                  type="text"
                  id="gambar"
                  name="gambar"
                  value={formData.gambar}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  placeholder="https://example.com/kamera.jpg"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setCurrentCamera(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700"
                >
                  {currentCamera ? "Perbarui Kamera" : "Simpan Kamera"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraModal;
