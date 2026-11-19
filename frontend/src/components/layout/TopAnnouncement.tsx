'use client';

import React from 'react';
import { MapPin, Award, PhoneCall, Phone } from 'lucide-react';

export default function TopAnnouncement() {
  return (
    <div className="bg-navyDark text-slate-300 text-xs py-2 px-4 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Tân Ninh, Tân Thủy, Lệ Thủy, Quảng Bình</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>Phân phối chính hãng sản phẩm Thành Phong</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="flex items-center gap-1.5 text-white hover:text-gold-400 transition font-semibold"
            href="tel:0919051066"
          >
            <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
            <span>0919.051.066</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            className="flex items-center gap-1.5 text-white hover:text-gold-400 transition font-semibold"
            href="tel:0819519179"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>0819.519.179</span>
          </a>
          <span className="hidden lg:inline text-gold-400 font-medium">
            ● Giá tận kho - Giao hàng nhanh
          </span>
        </div>
      </div>
    </div>
  );
}
