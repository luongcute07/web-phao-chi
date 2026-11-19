'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_TABLE_DATA } from '@/data/pricingData';

export default function PricePreview() {
  const previewRows = PRICING_TABLE_DATA.slice(0, 6);

  return (
    <section className="py-20 bg-cream border-y border-navyDark/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-gold-600 font-bold uppercase tracking-[0.16em] text-xs">
            Bảng Giá Xuất Xưởng Cạnh Tranh Nhất
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navyDark">
            Bảng Báo Giá Sỉ Tại Kho Tân Ninh, Lệ Thủy
          </h2>
          <p className="text-xs sm:text-sm text-navyDark/70">
            Cam kết giá gốc tại kho không qua trung gian. Bảng giá cập nhật mới nhất cho các dòng phào chỉ nội ngoại thất.
          </p>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-2" />
        </div>

        {/* Responsive Table */}
        <div className="bg-white rounded-sm border border-navyDark/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-navyDark text-pearl uppercase text-[11px] tracking-wider border-b border-gold-500/30">
                  <th className="py-3.5 px-4 font-bold">Tên Sản Phẩm</th>
                  <th className="py-3.5 px-4 font-bold">Quy Cách Kỹ Thuật</th>
                  <th className="py-3.5 px-4 font-bold">Đơn Vị</th>
                  <th className="py-3.5 px-4 font-bold">Giá Bán Lẻ</th>
                  <th className="py-3.5 px-4 font-bold text-gold-300">Giá Thầu Thợ (Sỉ)</th>
                  <th className="py-3.5 px-4 font-bold">Tình Trạng Kho</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navyDark/5 text-navyDark/90">
                {previewRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-gold-500/5 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-cream/40'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-semibold text-navyDark">
                      {row.name}
                      <span className="block text-[10px] text-navyDark/50 font-normal">
                        {row.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-navyDark/75">{row.spec}</td>
                    <td className="py-3.5 px-4 font-medium">{row.unit}</td>
                    <td className="py-3.5 px-4 text-navyDark/60 line-through">
                      {row.retailPrice}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-gold-600 text-sm">
                      {row.contractorPrice}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-[2px] border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {row.notes}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="p-4 bg-navyDark/5 border-t border-navyDark/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-navyDark/80">
              <ShieldCheck size={16} className="text-gold-600" />
              <span>
                <strong>Lưu ý:</strong> Đơn hàng từ 300m phào được miễn phí vận chuyển trong bán kính 30km từ kho Lệ Thủy.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/bao-gia"
                className="inline-flex items-center gap-1.5 luxury-gold-gradient text-navyDark font-bold text-xs uppercase px-4 py-2 rounded-sm shadow-sm hover:opacity-95"
              >
                <Calculator size={13} />
                <span>Mở Công Cụ Dự Toán</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
