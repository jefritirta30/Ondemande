"use client";

import React from "react";
import { FaEdit, FaTrash, FaCamera } from "react-icons/fa";
import { useCameraContext } from "@/context/CameraContext";
import { formatRupiah } from "@/utils/formatRupiah";

const CameraTable = () => {
  const { cameras, setCurrentCamera, deleteCamera } = useCameraContext();

  if (cameras.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden blur-bg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gambar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deskripsi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Harga
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal Ditambahkan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-3 text-gray-300">
                      <FaCamera />
                    </div>
                    <p className="text-lg">Tidak ada kamera ditemukan</p>
                    <p className="mt-2">
                      Tambahkan kamera pertama Anda untuk memulai
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden blur-bg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gambar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deskripsi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Harga
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Ditambahkan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cameras.map((camera) => (
              <tr key={camera.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {camera.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={camera.gambar}
                    alt={camera.nama}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {camera.nama}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                  {camera.deskripsi}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  {formatRupiah(camera.harga)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(camera.createdAt).toLocaleDateString("id-ID")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => setCurrentCamera(camera)}
                    className="text-indigo-600 hover:text-indigo-900 mr-3 transition-transform duration-200 hover:scale-110"
                    title="Edit"
                  >
                    <FaEdit className="text-xl" />
                  </button>
                  <button
                    onClick={() => deleteCamera(camera.id)}
                    className="text-red-600 hover:text-red-900 transition-transform duration-200 hover:scale-110"
                    title="Hapus"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CameraTable;
