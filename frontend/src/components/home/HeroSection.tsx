'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  Calculator, 
  ArrowRight, 
  FileDown, 
  Box, 
  CheckCircle 
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navyDark via-navyDark/95 to-charcoal text-pearl py-16 sm:py-24 border-b border-gold-500/30">
      {/* Background Decorative Grid and Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Architectural Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-[0.14em] shadow-sm">
              <Sparkles size={14} className="text-gold-400 animate-pulse" />
              <span>Tổng Kho Phân Phối Quảng Bình & Miền Trung</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-[54px] leading-[1.15] text-white tracking-tight">
              Phào Chỉ Thạch Cao &amp;{' '}
              <span className="text-gold-gradient italic block sm:inline">
                Xi Măng GFRC
              </span>{' '}
              Quảng Bình
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-pearl/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Nhà phân phối chính hãng phào chỉ thạch cao sợi thủy tinh, xi măng GFRC Thành Phong, mâm trần dát vàng tại <strong className="text-white">Lệ Thủy &amp; Quảng Bình</strong>. Trực tiếp xuất xưởng tại kho, cam kết <span className="text-gold-300 font-semibold">giá gốc không qua trung gian</span>, sẵn sàng giao 2 - 4h.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/bao-gia"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 luxury-gold-gradient text-navyDark font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-sm border border-gold-300 shadow-md hover:shadow-gold-500/20 hover:scale-[1.02] transition-all"
              >
                <Calculator size={16} />
                <span>Báo Giá Sỉ &amp; Dự Toán 1 Phút</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/mau-3d"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-pearl/10 hover:bg-pearl/20 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm border border-gold-500/40 transition-all hover:border-gold-400"
              >
                <Box size={16} className="text-gold-400" />
                <span>Trải Nghiệm Mẫu 3D 360°</span>
              </Link>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-6 border-t border-pearl/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-pearl/80">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle size={16} className="text-gold-400 shrink-0" />
                <span>Sẵn Kho 20.000m</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Truck size={16} className="text-gold-400 shrink-0" />
                <span>Giao Toàn Tỉnh 2-4h</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck size={16} className="text-gold-400 shrink-0" />
                <span>Bảo Hành 5 Năm</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-charcoal p-2">
              <div className="relative h-[360px] sm:h-[420px] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Phào chỉ thạch cao dát vàng tân cổ điển"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navyDark/90 via-navyDark/20 to-transparent" />
                
                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4 bg-navyDark/90 backdrop-blur-md px-3 py-1.5 rounded-[2px] border border-gold-400 text-gold-300 text-[11px] font-bold uppercase tracking-wider">
                  Biệt Thự TP. Đồng Hới
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-navyDark/90 backdrop-blur-md p-4 rounded-sm border border-pearl/10 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-widest block">
                    Vật Liệu Chuẩn Quốc Tế
                  </span>
                  <p className="font-serif font-bold text-white text-base leading-snug">
                    Thạch cao tinh khiết 99% đan sợi thủy tinh roving
                  </p>
                  <p className="text-xs text-pearl/75">
                    Triệt tiêu hiện tượng nứt mối nối &amp; cong vênh trước khí hậu khắc nghiệt miền Trung.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Trim */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold-400 rounded-br-sm -z-0 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold-400 rounded-tl-sm -z-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
