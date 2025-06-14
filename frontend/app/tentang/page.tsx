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
            <div className="md:w-1/2 text-white space-y-4 text-justify">
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
    </main>
  )
}
