// app/layout.tsx

// import './styles/globals.css';
import './globals.css';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'KameraKu - Sewa Kamera',
  description: 'Situs penyewaan kamera terpercaya',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen pt-16"> {/* pt-16 biar isi tidak ketutup navbar */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
