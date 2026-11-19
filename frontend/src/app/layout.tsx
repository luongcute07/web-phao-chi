import type { Metadata } from 'next';
import './globals.css';
import TopAnnouncement from '@/components/layout/TopAnnouncement';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingDock from '@/components/layout/FloatingDock';

export const metadata: Metadata = {
  title: 'Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình – Đẳng Cấp Cho Ngôi Nhà Của Bạn',
  description: 'Nhà phân phối chính hãng phào chỉ thạch cao, xi măng GFRC Thành Phong, mâm trần, lục bình bê tông, keo dán chuyên dụng tại Quảng Bình & Lệ Thủy. Giá tận gốc kho, thi công trọn gói sắc nét. Hotline: 0919.051.066.',
  keywords: [
    'phào chỉ thạch cao Quảng Bình',
    'phào chỉ xi măng GFRC Lệ Thủy',
    'thi công phào chỉ tân cổ điển Quảng Bình',
    'lục bình bê tông Quảng Bình',
    'mâm trần thạch cao',
    'keo dán phào chỉ'
  ],
  authors: [{ name: 'Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình' }],
  openGraph: {
    title: 'Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình – Đẳng Cấp Cho Ngôi Nhà Của Bạn',
    description: 'Nhà phân phối & thi công trọn gói phào chỉ thạch cao, hoa văn GFRC nghệ thuật tại Quảng Bình. Cam kết hàng có sẵn số lượng lớn, giá tận gốc.',
    url: 'https://phaochiquangbinh.vn/',
    siteName: 'Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  'name': 'Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình',
  'alternateName': 'Đại lý phân phối phào chỉ Thành Phong Quảng Bình',
  'description': 'Nhà phân phối và thi công trọn gói phào chỉ thạch cao, xi măng GFRC, phù điêu, mâm trần dát vàng tại Quảng Bình và lân cận.',
  'telephone': ['+84919051066', '+84819519179'],
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Tân Ninh, Tân Thủy',
    'addressLocality': 'Lệ Thủy',
    'addressRegion': 'Quảng Bình',
    'addressCountry': 'VN',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 17.2023,
    'longitude': 106.7788,
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'opens': '07:00',
    'closes': '18:30',
  },
  'priceRange': '$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-pearl font-sans text-charcoal selection:bg-gold-500 selection:text-white">
        <TopAnnouncement />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingDock />
      </body>
    </html>
  );
}
