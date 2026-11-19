'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, PhoneCall, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darkSlate text-slate-300 pt-16 pb-12 border-t border-slate-800" id="lien-he">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg luxury-gold-gradient p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-navyDark rounded-[6px] flex items-center justify-center font-serif text-gold-400 font-bold">
                  TP
                </div>
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-white">PHÀO CHỈ QUẢNG BÌNH</div>
                <div className="text-[10px] uppercase tracking-wider text-gold-400">
                  Nhà Phân Phối Chính Hãng Thành Phong
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Đơn vị chuyên nhập khẩu và phân phối trực tiếp phào chỉ thạch cao, xi măng GFRC, phù điêu nghệ thuật hàng đầu tại Lệ Thủy và Quảng Bình. Giá tận kho – Mẫu mã đẳng cấp – Thi công chuyên nghiệp.
            </p>
            <div className="text-xs text-slate-300 space-y-2">
              <p>
                <strong className="text-gold-400">Slogan:</strong> PHÀO CHỈ THẠCH CAO – ĐẲNG CẤP CHO NGÔI NHÀ CỦA BẠN
              </p>
              <p>
                <strong className="text-gold-400">Giờ mở cửa:</strong> 07:00 – 18:30 (Thứ 2 – Chủ Nhật)
              </p>
            </div>
          </div>

          {/* Quick Links / Danh mục */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wide border-b border-gold-500/30 pb-2">
              Danh Mục Sản Phẩm
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link className="hover:text-gold-400 transition" href="/#san-pham">
                  Phào chỉ thạch cao tiêu chuẩn trắng
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold-400 transition" href="/#san-pham">
                  Thạch cao chống ẩm (Trắng &amp; Vàng)
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold-400 transition" href="/#san-pham">
                  Mâm trần, hoa văn góc tân cổ điển
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold-400 transition" href="/#san-pham">
                  Phào chỉ xi măng GFRC sợi thủy tinh
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold-400 transition" href="/#san-pham">
                  Lục bình bê tông &amp; Lục bình đá Lệ Thủy
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold-400 transition" href="/#san-pham">
                  Keo 2 thành phần T&amp;P &amp; Con kê bê tông
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5">
            <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wide border-b border-gold-500/30 pb-2">
              Thông Tin Liên Hệ &amp; Showroom
            </h4>
            <div className="space-y-3 text-xs text-slate-300 mb-5">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Địa chỉ kho &amp; showroom:</strong> Tân Ninh, Tân Thủy, Huyện Lệ Thủy, Tỉnh Quảng Bình
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>
                  <strong>Hotline 1 (Zalo):</strong>{' '}
                  <a className="text-white font-bold hover:text-gold-400" href="tel:0919051066">
                    0919.051.066
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>
                  <strong>Hotline 2:</strong>{' '}
                  <a className="text-white font-bold hover:text-gold-400" href="tel:0819519179">
                    0819.519.179
                  </a>
                </span>
              </p>
            </div>
            {/* Embedded Map */}
            <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-700">
              <iframe
                allowFullScreen
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60987.89209569752!2d106.74415848529241!3d17.20233076899723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314757c3d28929a7%3A0x6b63d9136e05697a!2zVMOibiBUaOG7p3ksIEzhu4cgVGjhu6d5LCBRdeG6o25nIELDrG5o!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn"
                style={{ border: 0 }}
                title="Bản đồ kho phào chỉ thạch cao Lệ Thủy Quảng Bình"
                width="100%"
              />
            </div>
          </div>
        </div>

        {/* Copyright & Local SEO Footer tags */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
          <div>
            © 2025 Phào Chỉ Thạch Cao &amp; Xi Măng GFRC Quảng Bình. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Phào chỉ Quảng Bình</span>
            <span>•</span>
            <span>Thi công GFRC Lệ Thủy</span>
            <span>•</span>
            <span>Mâm trần Tân Cổ Điển</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
