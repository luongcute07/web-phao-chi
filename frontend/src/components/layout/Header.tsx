'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileSpreadsheet,
  PhoneCall,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import ProductDropdown3D from '@/components/layout/ProductDropdown3D';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProductMenuActive = pathname === '/san-pham' || pathname === '/mau-3d';
  const navigationItems = [
    { label: 'Trang Chủ', href: '/', active: pathname === '/' },
    { label: 'Sản Phẩm', href: '/san-pham', active: isProductMenuActive },
    { label: 'Công Trình', href: '/cong-trinh', active: pathname === '/cong-trinh' },
    { label: 'Quy Trình', href: '/quy-trinh', active: pathname === '/quy-trinh' },
   
    { label: 'Liên Hệ & Kho', href: '/lien-he', active: pathname === '/lien-he' },
  ];
  const quoteHref = '/bao-gia';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO & BRAND */}
        <Link className="flex items-center gap-3 group" href="/">
          <div className="w-12 h-12 rounded-lg luxury-gold-gradient p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-navyDark rounded-[6px] flex flex-col items-center justify-center text-center p-1">
              <span className="text-gold-400 font-serif font-bold text-lg leading-none tracking-tighter">
                TP
              </span>
              <span className="text-[8px] text-amber-200/80 uppercase font-sans font-medium tracking-widest mt-0.5">
                QB
              </span>
            </div>
          </div>
          <div>
            <div className="font-serif font-bold text-xl sm:text-2xl text-navyDark tracking-tight group-hover:text-gold-600 transition leading-snug">
              PHÀO CHỈ QUẢNG BÌNH
            </div>
            <p className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
              Thạch Cao &amp; Xi Măng GFRC Thành Phong
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-stone-700">
          {navigationItems.map((item) => item.label === 'Sản Phẩm' ? (
            <div
              className="relative"
              key={item.label}
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={productMenuOpen}
                className={`inline-flex items-center gap-1 transition ${item.active ? 'text-gold-600 border-b-2 border-gold-500 py-1 font-semibold' : 'hover:text-gold-600'}`}
                onClick={() => setProductMenuOpen(true)}
              >
                {item.label}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {productMenuOpen && <ProductDropdown3D onClose={() => setProductMenuOpen(false)} />}
            </div>
          ) : (
            <Link
              key={item.label}
              aria-current={item.active ? 'page' : undefined}
              className={`transition ${item.active ? 'text-gold-600 border-b-2 border-gold-500 py-1 font-semibold' : 'hover:text-gold-600'}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON IN HEADER */}
        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white luxury-gold-gradient shadow-md hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-95 transition-all"
            href={quoteHref}
          >
            <FileSpreadsheet className="w-4 h-4" />
            Nhận Báo Giá Kho
          </Link>
          <a
            className="p-2.5 rounded-full bg-cream border border-gold-400/40 text-gold-600 hover:bg-gold-500 hover:text-white transition md:hidden"
            href="tel:0919051066"
            aria-label="Gọi điện thoại"
          >
            <PhoneCall className="w-5 h-5" />
          </a>
          <button
            type="button"
            className="p-2 rounded-lg text-stone-600 hover:text-navyDark hover:bg-stone-100 transition md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          {navigationItems.map((item) => item.label === 'Sản Phẩm' ? (
            <div className="border-b border-stone-100" key={item.label}>
              <button
                type="button"
                aria-expanded={productMenuOpen}
                className={`flex w-full items-center justify-between py-2 text-left text-sm font-semibold ${item.active ? 'text-gold-600' : 'text-stone-800 hover:text-gold-600'}`}
                onClick={() => setProductMenuOpen((isOpen) => !isOpen)}
              >
                {item.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${productMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {productMenuOpen && (
                <div className="space-y-1 pb-2 pl-3">
                  <Link className="block py-2 text-sm text-stone-600 hover:text-gold-600" href="/san-pham" onClick={() => setMobileMenuOpen(false)}>Danh Mục Sản Phẩm</Link>
                  <Link className="block py-2 text-sm font-semibold text-gold-700 hover:text-gold-600" href="/mau-3d" onClick={() => setMobileMenuOpen(false)}>Mẫu 3D Tương Tác</Link>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              aria-current={item.active ? 'page' : undefined}
              className={`block border-b border-stone-100 py-2 text-sm font-semibold ${item.active ? 'text-gold-600' : 'text-stone-800 hover:text-gold-600'}`}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase text-white luxury-gold-gradient shadow-md"
            href={quoteHref}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileSpreadsheet className="w-4 h-4" />
            Nhận Báo Giá Kho
          </Link>
        </div>
      )}
    </header>
  );
}