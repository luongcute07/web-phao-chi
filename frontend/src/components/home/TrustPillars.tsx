'use client';

import React from 'react';
import { Tag, Warehouse, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    icon: Tag,
    title: 'Giá Tận Gốc Tại Kho',
    subtitle: 'Không Qua Trung Gian',
    desc: 'Xuất xưởng trực tiếp tại tổng kho Lệ Thủy. Chiết khấu cao từ 15% – 25% cho thợ thi công, kiến trúc sư và đại lý vật liệu xây dựng.',
    badge: 'Tiết kiệm 20% chi phí'
  },
  {
    icon: Warehouse,
    title: 'Hàng Sẵn Số Lượng Lớn',
    subtitle: 'Kho Sẵn 20.000m Phào',
    desc: 'Đầy đủ mẫu mã phào cổ trần, chỉ tường, mâm hoa văn, xi măng GFRC. Đội xe tải chuyên dụng giao hàng tận chân công trình 2 – 4 giờ.',
    badge: 'Giao nhanh toàn tỉnh'
  },
  {
    icon: ShieldAlert,
    title: 'Chống Ẩm, Kháng Nứt',
    subtitle: 'Cốt Sợi Roving Bền Vững',
    desc: 'Cốt thạch cao bột tinh khiết gia cường lưới sợi thủy tinh kháng kiềm roving dẻo dai. Cam kết không rạn chân chim, không cong võng.',
    badge: 'Chống cháy & ẩm cấp A'
  },
  {
    icon: Sparkles,
    title: 'Thi Công Sắc Nét 100%',
    subtitle: 'Bảo Hành Kết Cấu 5 Năm',
    desc: 'Hỗ trợ đội thợ chuyên sâu kỹ thuật đắp chỉ, cắt mòi ăn khớp và thếp vàng lá 24K. Nghiệm thu từng mét phào phẳng lỳ tinh xảo.',
    badge: 'Bảo hành 5 năm'
  }
];

export default function TrustPillars() {
  return (
    <section className="py-16 bg-cream border-b border-navyDark/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-gold-600 font-bold uppercase tracking-[0.16em] text-xs">
            Uy Tín &amp; Năng Lực Cung Ứng
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navyDark">
            4 Trụ Cột Khẳng Định Vị Thế Tổng Kho
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-sm border border-navyDark/10 hover:border-gold-400 hover:shadow-relief transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-sm bg-navyDark flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-gold-600 bg-gold-500/10 px-2 py-0.5 rounded-[2px] border border-gold-500/20 uppercase tracking-wider">
                      {p.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-gold-600 uppercase tracking-wider block">
                      {p.subtitle}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-navyDark mt-0.5">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-xs text-navyDark/75 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-navyDark/5 flex items-center gap-1.5 text-[11px] font-semibold text-gold-600">
                  <CheckCircle2 size={13} className="text-gold-500" />
                  <span>Cam kết chất lượng thực tế</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
