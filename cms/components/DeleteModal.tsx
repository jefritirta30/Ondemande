"use client";

import React from "react";
import { useCameraContext } from "@/context/CameraContext";

const DeleteModal = () => {
  const { currentCamera, setCurrentCamera, deleteCamera } = useCameraContext();

  if (!currentCamera) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden blur-bg">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Konfirmasi Penghapusan</h3>
            <button
              onClick={() => setCurrentCamera(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          <div className="p-6">
            <p className="mb-6">
              Apakah Anda yakin ingin menghapus kamera{" "}
              <strong>{currentCamera.nama}</strong>? Tindakan ini tidak dapat
              dibatalkan.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setCurrentCamera(null)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteCamera(currentCamera.id);
                  setCurrentCamera(null);
                }}
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-md hover:from-red-700 hover:to-orange-700"
              >
                Hapus Kamera
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
