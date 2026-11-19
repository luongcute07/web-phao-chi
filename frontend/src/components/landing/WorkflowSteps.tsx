'use client';

import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Tiếp Nhận & Tư Vấn Mẫu',
    desc: 'Lắng nghe phong cách kiến trúc mong muốn, gửi catalogue 1.000+ mẫu phào thạch cao & GFRC mới nhất.',
  },
  {
    num: '02',
    title: 'Khảo Sát & Báo Giá Tận Gốc',
    desc: 'Cán bộ kỹ thuật trực tiếp đo đạc kích thước thực tế, lên dự toán chính xác, cam kết giá gốc tại kho không phát sinh.',
  },
  {
    num: '03',
    title: 'Giao Hàng & Thi Công Sắc Nét',
    desc: 'Xuất kho xe tải giao nhanh toàn tỉnh. Đội thợ chuyên nghiệp cắt góc mòi tỉ mỉ, dán keo T&P xử lý kín khít mối nối.',
  },
  {
    num: '04',
    title: 'Nghiệm Thu & Bảo Hành',
    desc: 'Khách hàng nghiệm thu độ sắc sảo từng góc cạnh. Kích hoạt bảo hành sản phẩm dài hạn, hỗ trợ kỹ thuật trọn đời công trình.',
  },
];

export default function WorkflowSteps() {
  return (
    <section className="py-20 lg:py-24 bg-navyDark text-white relative overflow-hidden" id="quy-trinh">
      {/* Decorative background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 font-semibold text-xs tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-gold-400" />
            <span>Quy Trình Chuyên Nghiệp</span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            4 Bước Đơn Giản Nhận Báo Giá &amp; Thi Công
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Quy trình khép kín, minh bạch từ kho hàng đến công trình, giúp gia chủ và nhà thầu an tâm trọn vẹn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-charcoal/60 rounded-2xl p-7 border border-slate-700/80 hover:border-gold-500/50 transition duration-300 relative group"
            >
              <div className="text-gold-500 font-serif font-bold text-5xl opacity-40 mb-4 group-hover:opacity-100 transition">
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
