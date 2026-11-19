'use client';

import React from 'react';
import { CheckCircle2, PhoneForwarded } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-pearl" id="gioi-thieu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image composition */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                alt="Phào chỉ trần thạch cao phòng khách sang trọng Quảng Bình"
                className="w-full h-[450px] object-cover"
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD45NLH6HG7a4Zvag1I8ic23rstn5tF1YeLuFYsHSqUiw8OxQcuFsCuHGBfKGzlvotK974xadF1T-z9Z_j4ffYlekOU-_6YnPh2zLsf85ebN3WvobtTDwtoSvbdMoFHCrFrfh7MC7tRx9L9XJfgKRwpepESxG__Ifpgf-fbLc9plXFNBJggivd2N_Xcz2nNrWSZvNKY9wWTXibrNvf6bRJrHTuZGQCcizfNW7uvC9D"
              />
            </div>
            {/* Sub float image */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-60 sm:w-72 rounded-xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden sm:block">
              <img
                alt="Chi tiết thi công phù điêu xi măng và phào chỉ biệt thự"
                className="w-full h-44 object-cover"
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBub2Hh0lpYyvD7uu2muMSOydXZySlUlRJMbHrRvJ1bwfj6fn6ltQufcZldh3M50Qms8xuX0z0L-fS4fnouhxVboRR8Z5VHLe6GkJ82JnisTYFzy_87u9S6NxWdP83ded1z882iipHQM10KbOnFN1K8Tb5fsyCdE4DRpDxcQEX6polCf4rNxTO1X8t-9wuekD_Y0x4xuzM0OluNLPSvuukG0f4XZ5Xns4_Iva8YMfls"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -top-6 -left-6 z-20 bg-navyDark text-white p-5 rounded-2xl shadow-xl border border-gold-500/40">
              <div className="text-gold-400 font-serif font-bold text-3xl">100%</div>
              <div className="text-xs font-medium text-slate-300">
                Chính Hãng<br />Thành Phong
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <div className="inline-flex items-center gap-2 text-gold-600 font-semibold text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-px bg-gold-500" />
              <span>Về Chúng Tôi</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navyDark leading-snug mb-6">
              Nâng Tầm Không Gian Sống Với Tinh Hoa Kiến Trúc Tân Cổ Điển
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Là đối tác và nhà phân phối chiến lược các dòng sản phẩm{' '}
              <strong className="text-navyDark">
                phào chỉ Thạch Cao và Xi Măng GFRC cao cấp thương hiệu Thành Phong
              </strong>{' '}
              tại tỉnh Quảng Bình, chúng tôi tự hào mang đến giải pháp trang trí nội – ngoại thất hoàn mỹ cho hàng trăm dinh thự, biệt thự, nhà phố và khách sạn cao cấp.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Mỗi thanh phào, hoa văn mâm trần, con bọ hay lục bình đều được đúc từ khuôn mẫu chính xác, đường nét thanh thoát, hoa văn sắc sảo. Đặc biệt, công nghệ bổ sung sợi thủy tinh gia cường (GFRC) giúp sản phẩm ngoại thất bền chắc vượt thời gian, chống chọi hoàn hảo với gió bão, nắng rát và hơi ẩm đặc thù của miền Trung.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-sm font-medium text-charcoal">
                  Phân phối tận gốc không qua đại lý trung gian – Tiết kiệm 15-25% chi phí
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-sm font-medium text-charcoal">
                  Đầy đủ chứng chỉ xuất xưởng, độ mịn cao, chống nứt mối nối tuyệt đối
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-sm font-medium text-charcoal">
                  Khảo sát, mang mẫu tận công trình tại Đồng Hới, Lệ Thủy, Quảng Ninh, Bố Trạch...
                </span>
              </div>
            </div>

            <a
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-navyDark text-white hover:bg-gold-600 transition font-medium text-sm"
              href="tel:0919051066"
            >
              <PhoneForwarded className="w-4 h-4 text-gold-400" />
              <span>Tư Vấn Trực Tiếp: 0919.051.066</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
