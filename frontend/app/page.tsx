import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0950] text-gray-100 pt-20">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-yellow-300 font-poppins">
              Sewa Kamera Berkualitas di <span className="text-yellow-400">KameraKu</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Temukan berbagai pilihan kamera DSLR, mirrorless, dan perlengkapan fotografi terbaik untuk kebutuhanmu.
            </p>
            <div className="flex gap-4">
              <Link
                href="/kamera"
                className="px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 active:scale-95 transition transform"
              >
                Lihat Kamera
              </Link>
              <Link
                href="/sewa"
                className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-full font-semibold hover:bg-yellow-500 active:bg-yellow-600 active:scale-95 transition transform"
              >
                Sewa Sekarang
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#261FB3] pt-4 px-4 pb-0 rounded-xl shadow-2xl">
              <Image
                src="/fotohero.png"
                alt="Kamera Hero"
                width={500}
                height={350}
                className="rounded-b-xl w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="bg-[#0C0950] py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">Kenapa Memilih KameraKu?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-lg font-semibold mb-2">Pilihan Kamera Lengkap</h3>
              <p className="text-gray-300">
                DSLR, mirrorless, dan berbagai aksesoris tersedia untuk semua kebutuhan fotografi.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-2">Harga Terjangkau</h3>
              <p className="text-gray-300">
                Sewa kamera tanpa menguras dompet dengan berbagai paket fleksibel.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold mb-2">Layanan Terpercaya</h3>
              <p className="text-gray-300">
                Didukung oleh ulasan positif dan pelanggan setia di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16 bg-[#0C0950] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">Apa Kata Mereka?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 border rounded-lg shadow-sm border-blue-300 bg-[#1A175F]">
              <p className="italic">"Pelayanan cepat dan kameranya berkualitas. Sangat puas!"</p>
              <p className="mt-4 font-semibold">- Jefri Jaka Tirta, Bandar Lampung</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm border-blue-300 bg-[#1A175F]">
              <p className="italic">"Sewa kamera di KameraKu jadi solusi pas hunting dadakan."</p>
              <p className="mt-4 font-semibold">- Bejo, Metro</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm border-blue-300 bg-[#1A175F]">
              <p className="italic">"Harga bersahabat dan banyak pilihan. Recommended!"</p>
              <p className="mt-4 font-semibold">- Candra Sasmito, Pesawaran</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi Google Maps Section */}
      <section className="bg-[#0C0950] py-16 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">Lokasi KameraKu</h2>
          <div className="w-full h-[400px]">
            <iframe
              title="Lokasi KameraKu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.065981882909!2d105.27105807591224!3d-5.406644453933802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dbd0d019d4b5%3A0x1566e4f5b6a10c24!2sJl.%20Narada%2C%20Sawah%20Brebes%2C%20Kec.%20Tanjungkarang%20Tim.%2C%20Kota%20Bandar%20Lampung%2C%20Lampung!5e0!3m2!1sen!2sid!4v1716551032024!5m2!1sen!2sid"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md border-2 border-blue-200"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Akhir */}
      <section className="bg-[#0C0950] py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Siap untuk Menyewa Kamera?</h2>
          <p className="mb-8 text-lg">
            Nikmati pengalaman memotret dengan kamera terbaik hanya di KameraKu.
          </p>
          <Link
            href="/sewa"
            className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-500 active:bg-yellow-600 active:scale-95 transition transform"
          >
            Sewa Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
}
