import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CameraProvider } from "@/context/CameraContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard - Manajemen Kamera",
  description: "Dashboard untuk manajemen inventaris kamera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <CameraProvider>
          {children}
        </CameraProvider>
      </body>
    </html>
  );
}
