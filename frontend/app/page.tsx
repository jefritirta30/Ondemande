// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-700 font-poppins">
              Sewa Kamera Berkualitas di <span className="text-yellow-400">KameraKu</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Temukan berbagai pilihan kamera DSLR, mirrorless, dan perlengkapan fotografi terbaik untuk kebutuhanmu.
            </p>
            <div className="flex gap-4">
              <Link
                href="/kamera"
                className="px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition"
              >
                Lihat Kamera
              </Link>
              <Link
                href="/sewa"
                className="px-6 py-3 border border-blue-700 text-blue-700 rounded-full font-medium hover:bg-blue-700 hover:text-white transition"
              >
                Sewa Sekarang
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/fotohero.png"
              alt="Kamera Hero"
              width={500}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-700">Kenapa Memilih KameraKu?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-lg font-semibold mb-2">Pilihan Kamera Lengkap</h3>
              <p className="text-gray-600">DSLR, mirrorless, dan berbagai aksesoris tersedia untuk semua kebutuhan fotografi.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-2">Harga Terjangkau</h3>
              <p className="text-gray-600">Sewa kamera tanpa menguras dompet dengan berbagai paket fleksibel.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold mb-2">Layanan Terpercaya</h3>
              <p className="text-gray-600">Didukung oleh ulasan positif dan pelanggan setia di seluruh Indonesia.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
