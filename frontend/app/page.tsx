import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Teks Kiri */}
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

        {/* Gambar Kanan */}
        <div className="flex justify-center">
          <Image
            src="/fotohero.png" // Pastikan gambar ini tersedia di public/kamera
            alt="Kamera Hero"
            width={500}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
