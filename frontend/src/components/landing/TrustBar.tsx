'use client';

import React from 'react';
import { BadgeDollarSign, PackageCheck, Droplets, Hammer } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/60 border border-stone-200/80 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
        <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
          <div className="w-12 h-12 rounded-xl bg-cream flex-shrink-0 flex items-center justify-center text-gold-600 border border-gold-500/20">
            <BadgeDollarSign className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-navyDark text-sm sm:text-base">Giá Tận Gốc Tại Kho</h3>
            <p className="text-xs text-stone-500 mt-1">
              Đại lý phân phối cấp 1 không qua trung gian, chiết khấu tối đa cho thầu thợ &amp; chủ nhà.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
          <div className="w-12 h-12 rounded-xl bg-cream flex-shrink-0 flex items-center justify-center text-gold-600 border border-gold-500/20">
            <PackageCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-navyDark text-sm sm:text-base">Hàng Sẵn Số Lượng Lớn</h3>
            <p className="text-xs text-stone-500 mt-1">
              Kho bãi quy mô tại Lệ Thủy, cung ứng tức thì cho các công trình biệt thự, lâu đài, nhà phố.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
          <div className="w-12 h-12 rounded-xl bg-cream flex-shrink-0 flex items-center justify-center text-gold-600 border border-gold-500/20">
            <Droplets className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-navyDark text-sm sm:text-base">Chống Ẩm, Chống Thấm</h3>
            <p className="text-xs text-stone-500 mt-1">
              Thạch cao &amp; xi măng sợi thủy tinh GFRC chịu nhiệt, không rạn nứt trước thời tiết miền Trung.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-3">
          <div className="w-12 h-12 rounded-xl bg-cream flex-shrink-0 flex items-center justify-center text-gold-600 border border-gold-500/20">
            <Hammer className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-navyDark text-sm sm:text-base">Thi Công Sắc Nét 100%</h3>
            <p className="text-xs text-stone-500 mt-1">
              Đội thợ tay nghề cao, cắt góc chuẩn khớp, xử lý mối nối phẳng mịn, chuẩn thiết kế tân cổ điển.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
