import './styles/globals.css';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Selamat Datang di <span className="text-gray-900">Kameraku</span>
          </h1>
          <p className="text-lg text-gray-700">
            Website sewa kamera terpercaya untuk kebutuhan fotografi dan videografi Anda.
          </p>
        </div>

        {/* Bagian Fitur / Keunggulan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Kamera Berkualitas</h2>
            <p className="text-gray-600">
              Tersedia berbagai pilihan kamera DSLR, mirrorless, hingga action cam dengan kondisi prima.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Harga Terjangkau</h2>
            <p className="text-gray-600">
              Nikmati harga sewa yang bersaing dengan berbagai paket hemat sesuai kebutuhan Anda.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Pemesanan Mudah</h2>
            <p className="text-gray-600">
              Proses sewa cepat dan praktis langsung melalui website kami.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/sewa"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition"
          >
            Mulai Sewa Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
