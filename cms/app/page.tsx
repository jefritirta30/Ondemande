"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import Header from "@/components/ui/Header";
import StatsCards from "@/components/StatsCards";
import CameraTable from "@/components/CameraTable";
import CameraModal from "@/components/CameraModal";
import DeleteModal from "@/components/DeleteModal";
import Notification from "@/components/ui/Notification";
import { useCameraContext } from "@/context/CameraContext";

export default function Home() {
  const { currentCamera, setCurrentCamera, notification } = useCameraContext();

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50 font-sans">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header />

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Manajemen Kamera
              </h2>
              <p className="text-gray-600">
                Kelola inventaris dan detail kamera Anda
              </p>
            </div>
            <button
              onClick={() => setCurrentCamera(null)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 shadow-md hover:shadow-lg transition-all"
            >
              <FaPlus />
              <span>Tambah Kamera</span>
            </button>
          </div>

          <StatsCards />
          <CameraTable />

          {/* Modals */}
          {currentCamera !== undefined && <CameraModal />}
          {currentCamera?.id && <DeleteModal />}

          {/* Notification */}
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
            />
          )}
        </main>
      </div>
    </div>
  );
}
