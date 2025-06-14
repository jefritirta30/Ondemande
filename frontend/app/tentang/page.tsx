import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 mt-20">Tentang Kami</h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
            <Image
                src="/fotohero.PNG" // ganti dengan gambar yang sesuai di folder public
                alt="Tentang KameraKu"
                width={600}
                height={400}
                className="rounded-2xl shadow-md"
            />
            </div>

            {/* description */}
            <div className="md:w-1/2 text-gray-700 space-y-4 text-justify">
                <p>
                    <strong>KameraKu</strong> adalah layanan sewa kamera terpercaya yang
                    berdiri sejak 2020. Kami menyediakan berbagai pilihan kamera DSLR,
                    mirrorless, dan perlengkapan fotografi untuk mendukung aktivitas
                    kreatif Anda.
                </p>
                <p>
                    Dengan harga terjangkau dan layanan pelanggan yang ramah, kami
                    berkomitmen untuk memberikan pengalaman sewa kamera yang mudah,
                    aman, dan memuaskan.
                </p>
                <p>
                    Kami melayani kebutuhan foto dan video untuk acara pernikahan,
                    traveling, pembuatan konten, hingga proyek profesional.
                </p>
            </div>
        </div>
    </main>
  )
}
