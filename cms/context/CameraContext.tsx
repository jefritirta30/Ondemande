"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { Camera } from "@/app/types";

interface CameraContextType {
  cameras: Camera[];
  addCamera: (camera: Omit<Camera, "id" | "createdAt">) => void;
  updateCamera: (id: number, camera: Partial<Camera>) => void;
  deleteCamera: (id: number) => void;
  currentCamera: Camera | null;
  setCurrentCamera: (camera: Camera | null) => void;
  notification: { message: string; type: "success" | "error" } | null;
  showNotification: (message: string, type: "success" | "error") => void;
}

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider = ({ children }: { children: ReactNode }) => {
  const [cameras, setCameras] = useState<Camera[]>([
    {
      id: 1,
      nama: "Canon EOS R5",
      deskripsi: "Kamera mirrorless full-frame dengan sensor 45MP dan video 8K",
      harga: 38999999,
      gambar:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-05-15T10:30:00Z",
    },
    {
      id: 2,
      nama: "Sony A7 IV",
      deskripsi: "Kamera mirrorless full-frame 33MP dengan autofocus canggih",
      harga: 24999999,
      gambar:
        "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-06-20T14:45:00Z",
    },
    {
      id: 3,
      nama: "Nikon Z7 II",
      deskripsi: "Kamera mirrorless full-frame 45.7MP dengan dual prosesor",
      harga: 29999999,
      gambar:
        "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-07-10T09:15:00Z",
    },
    {
      id: 4,
      nama: "Fujifilm X-T4",
      deskripsi:
        "Kamera mirrorless APS-C 26.1MP dengan stabilisasi dalam badan",
      harga: 16990000,
      gambar:
        "https://images.unsplash.com/photo-1564466809057-b976ceb0e5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-08-05T11:20:00Z",
    },
    {
      id: 5,
      nama: "Panasonic Lumix S5",
      deskripsi: "Kamera mirrorless full-frame 24.2MP dengan video 4K",
      harga: 19979999,
      gambar:
        "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-09-12T16:30:00Z",
    },
  ]);

  const [currentCamera, setCurrentCamera] = useState<Camera | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const addCamera = (camera: Omit<Camera, "id" | "createdAt">) => {
    const newId =
      cameras.length > 0 ? Math.max(...cameras.map((c) => c.id)) + 1 : 1;
    const newCamera = {
      ...camera,
      id: newId,
      createdAt: new Date().toISOString(),
    };
    setCameras([...cameras, newCamera]);
    showNotification("Kamera berhasil ditambahkan!", "success");
  };

  const updateCamera = (id: number, updates: Partial<Camera>) => {
    setCameras(
      cameras.map((camera) =>
        camera.id === id ? { ...camera, ...updates } : camera
      )
    );
    showNotification("Kamera berhasil diperbarui!", "success");
  };

  const deleteCamera = (id: number) => {
    const cameraName = cameras.find((c) => c.id === id)?.nama || "";
    setCameras(cameras.filter((camera) => camera.id !== id));
    showNotification(`"${cameraName}" telah dihapus!`, "success");
  };

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <CameraContext.Provider
      value={{
        cameras,
        addCamera,
        updateCamera,
        deleteCamera,
        currentCamera,
        setCurrentCamera,
        notification,
        showNotification,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};

export const useCameraContext = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error("useCameraContext must be used within a CameraProvider");
  }
  return context;
};
