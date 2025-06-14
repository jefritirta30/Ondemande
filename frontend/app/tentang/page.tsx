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
        </div>
    </main>
  )
}
