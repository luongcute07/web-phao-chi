'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Tag, Layers } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-darkSlate text-pearl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] opacity-10 [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-sm border border-gold-400/40 bg-gold-500/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-300">
              <ShieldCheck className="h-4 w-4 text-gold-400" />
              <span>Tổng Kho Phân Phối Quảng Bình &amp; Miền Trung</span>
            </div>

            <h1 className="font-serif text-3xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[54px]">
              Phào Chỉ Thạch Cao &amp; <span className="font-normal italic text-gold-400">Xi Măng GFRC</span> Quảng Bình
            </h1>

            <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-pearl/80 sm:text-base lg:mx-0">
              Nhà phân phối chính hãng phào chỉ thạch cao sợi thủy tinh, xi măng GFRC Thành Phong, mâm trần dát vàng tại <strong className="font-medium text-white">Lệ Thủy &amp; Quảng Bình</strong>. Trực tiếp xuất xưởng tại kho, cam kết <strong className="font-medium text-gold-300">giá gốc không qua trung gian</strong>, sẵn sàng giao 2 - 4h.
            </p>

            <div className="flex flex-col items-stretch justify-center gap-4 pt-2 sm:flex-row sm:items-center lg:justify-start">
              <Link className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-gold-300 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-navyDark luxury-gold-gradient shadow-md transition-all hover:scale-[1.02] hover:shadow-gold-500/20" href="/bao-gia">
                <Tag className="h-4 w-4" />
                <span>Báo Giá Sỉ &amp; Dự Toán 1 Phút</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-gold-500/40 bg-pearl/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:border-gold-400 hover:bg-pearl/20" href="/san-pham">
                <Layers className="h-4 w-4 text-gold-400" />
                <span>Trải Nghiệm Sản Phẩm</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-pearl/10 pt-5 text-left text-xs text-pearl/80 sm:gap-6">
              <div className="flex items-center justify-center gap-2 lg:justify-start"><ShieldCheck className="h-4 w-4 shrink-0 text-gold-400" /><span>Sẵn Kho 20.000m</span></div>
              <div className="flex items-center justify-center gap-2 lg:justify-start"><Tag className="h-4 w-4 shrink-0 text-gold-400" /><span>Giá Gốc Tại Kho</span></div>
              <div className="flex items-center justify-center gap-2 lg:justify-start"><Layers className="h-4 w-4 shrink-0 text-gold-400" /><span>Bảo Hành 5 Năm</span></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:col-span-5">
            <div className="relative rounded-sm border border-gold-500/50 bg-charcoal p-2 shadow-2xl">
              <div className="relative h-[300px] overflow-hidden rounded-sm sm:h-[420px]">
                <img
                  alt="Phòng khách biệt thự tân cổ điển với trần dát vàng, phào chỉ và khung tường trang trí"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD45NLH6HG7a4Zvag1I8ic23rstn5tF1YeLuFYsHSqUiw8OxQcuFsCuHGBfKGzlvotK974xadF1T-z9Z_j4ffYlekOU-_6YnPh2zLsf85ebN3WvobtTDwtoSvbdMoFHCrFrfh7MC7tRx9L9XJfgKRwpepESxG__Ifpgf-fbLc9plXFNBJggivd2N_Xcz2nNrWSZvNKY9wWTXibrNvf6bRJrHTuZGQCcizfNW7uvC9D"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navyDark/95 via-navyDark/5 to-transparent" />
                <div className="absolute left-4 top-4 rounded-sm border border-gold-400 bg-navyDark/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gold-300 backdrop-blur-sm sm:left-6 sm:top-6">
                  Biệt Thự Tân Cổ Điển
                </div>
                <div className="absolute bottom-4 left-4 right-4 space-y-1.5 rounded-sm border border-pearl/10 bg-navyDark/95 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gold-400">Vật Liệu Chuẩn Quốc Tế</span>
                  <p className="font-serif text-base font-bold leading-snug text-white sm:text-lg">Thạch cao tinh khiết 99% đan sợi thủy tinh roving</p>
                  <p className="text-xs leading-relaxed text-pearl/75">Triệt tiêu hiện tượng nứt mối nối và cong vênh trước khí hậu khắc nghiệt miền Trung.</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -left-3 -top-3 h-14 w-14 border-l-2 border-t-2 border-gold-400 sm:-left-4 sm:-top-4 sm:h-16 sm:w-16" />
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-14 w-14 border-b-2 border-r-2 border-gold-400 sm:-bottom-4 sm:-right-4 sm:h-16 sm:w-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
