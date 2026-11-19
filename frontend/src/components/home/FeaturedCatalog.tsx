'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Tag, Check, Download } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/productsData';

export default function FeaturedCatalog() {
  const featured = PRODUCTS_DATA.slice(0, 4);

  return (
    <section className="py-20 bg-pearl">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-gold-600 font-bold uppercase tracking-[0.16em] text-xs">
              Mẫu Mã Đa Dạng &amp; Sắc Nét
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-navyDark">
              Danh Mục Sản Phẩm Tiêu Biểu Tại Kho
            </h2>
            <p className="text-xs sm:text-sm text-navyDark/70 max-w-xl">
              Hơn 300+ profile phào chỉ thạch cao, xi măng GFRC và mâm trần đúc sẵn, tương thích các phong cách Tân Cổ Điển &amp; Hoàng Gia Châu Âu.
            </p>
          </div>

          <Link
            href="/san-pham"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navyDark hover:text-gold-600 border-b-2 border-gold-500 pb-1 self-start sm:self-auto transition-colors"
          >
            <span>Xem Toàn Bộ 300+ Mẫu</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-sm border border-navyDark/10 overflow-hidden hover:border-gold-400 hover:shadow-relief transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-charcoal">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-navyDark/90 backdrop-blur-sm text-gold-300 text-[10px] font-bold px-2 py-0.5 rounded-[2px] border border-gold-500/40 uppercase tracking-wider">
                    {prod.code}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-gold-500 text-navyDark text-[10px] font-bold px-2 py-0.5 rounded-[2px] shadow-sm uppercase tracking-wider">
                    {prod.categoryLabel}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-serif font-bold text-base text-navyDark group-hover:text-gold-600 transition-colors line-clamp-2">
                    {prod.name}
                  </h3>

                  <div className="text-xs space-y-1.5 text-navyDark/80 pt-1 border-t border-navyDark/5">
                    <p className="flex items-center justify-between">
                      <span className="text-navyDark/50">Quy cách:</span>
                      <strong className="text-navyDark font-medium">{prod.dimensions}</strong>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-navyDark/50">Chiều dài:</span>
                      <strong className="text-navyDark font-medium">{prod.standardLength}</strong>
                    </p>
                    <p className="flex items-center justify-between text-gold-600">
                      <span className="text-navyDark/50">Đơn giá tham khảo:</span>
                      <strong className="font-bold text-sm">{prod.priceEstimate}</strong>
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {prod.features.slice(0, 2).map((feat, fidx) => (
                      <span
                        key={fidx}
                        className="inline-flex items-center gap-1 text-[10px] bg-cream text-navyDark/80 px-2 py-0.5 rounded-[2px] border border-navyDark/10"
                      >
                        <Check size={10} className="text-gold-600" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 pt-0">
                <Link
                  href="/bao-gia"
                  className="w-full flex items-center justify-center gap-1.5 luxury-gold-gradient text-navyDark font-bold text-xs uppercase tracking-wider py-2.5 rounded-sm hover:opacity-95 transition-opacity border border-gold-300"
                >
                  <Tag size={13} />
                  <span>Nhận Báo Giá Sỉ</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA in Section */}
        <div className="mt-12 p-6 sm:p-8 rounded-sm bg-navyDark text-pearl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-gold-500/30">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block">
              Hỗ Trợ Kỹ Thuật Độc Quyền
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Cần Bóc Tách Bản Vẽ CAD &amp; Thiết Kế Riêng Theo Yêu Cầu?
            </h3>
            <p className="text-xs text-pearl/75 max-w-xl">
              Đội ngũ kỹ sư tại tổng kho Lệ Thủy hỗ trợ bóc tách khối lượng và thiết kế khuôn mẫu GFRC độc bản cho biệt thự hoàn toàn miễn phí.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://zalo.me/0919051066"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0068FF] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm shadow-md"
            >
              <span>Gửi Bản Vẽ Qua Zalo</span>
            </a>
            <a
              href="tel:0919051066"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/80 text-gold-300 border border-gold-500/30 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm"
            >
              <span>Hotline: 0919.051.066</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
