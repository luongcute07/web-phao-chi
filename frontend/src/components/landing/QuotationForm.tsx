'use client';

import React, { useState } from 'react';
import { Phone, PhoneCall, MapPin, Send } from 'lucide-react';

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    productCategory: 'thachcao',
    locationArea: 'lethuy',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      productCategory: 'thachcao',
      locationArea: 'lethuy',
      notes: '',
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  return (
    <section className="py-20 lg:py-28 bg-cream/80 relative" id="bao-gia">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-stone-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 bg-navyDark p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                Đăng Ký Nhanh
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2 mb-4 leading-snug">
                Nhận Bảng Báo Giá Gốc &amp; Catalogue 2025
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Để lại thông tin, chuyên viên tư vấn của Tổng Kho Phào Chỉ Quảng Bình sẽ liên hệ lại ngay trong 5-10 phút để báo giá chi tiết và gửi mẫu miễn phí.
              </p>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Hotline 1:</strong> 0919.051.066 (Zalo)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Hotline 2:</strong> 0819.519.179
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Tân Ninh, Tân Thủy, Lệ Thủy, Quảng Bình</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 pt-8 mt-8 border-t border-slate-700/60">
              <p className="text-[11px] text-slate-400 italic">
                * Cam kết bảo mật thông tin 100%. Báo giá chính xác tận gốc không qua trung gian.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-navyDark uppercase tracking-wider mb-2" htmlFor="fullName">
                  Họ &amp; Tên của Quý khách *
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                  id="fullName"
                  placeholder="Ví dụ: Anh Tuấn / Chị Lan"
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navyDark uppercase tracking-wider mb-2" htmlFor="phoneNumber">
                  Số điện thoại / Zalo nhận báo giá *
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                  id="phoneNumber"
                  placeholder="Ví dụ: 0919.xxx.xxx"
                  required
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navyDark uppercase tracking-wider mb-2" htmlFor="productCategory">
                    Sản phẩm quan tâm
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-white transition"
                    id="productCategory"
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                  >
                    <option value="thachcao">Phào chỉ &amp; Mâm trần Thạch Cao</option>
                    <option value="gfrc">Xi măng GFRC &amp; Ngoại thất</option>
                    <option value="lucbinh">Lục bình bê tông / Lục bình đá</option>
                    <option value="keo">Keo dán 2 thành phần &amp; Vật tư phụ</option>
                    <option value="all">Thi công trọn gói nội ngoại thất</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-navyDark uppercase tracking-wider mb-2" htmlFor="locationArea">
                    Khu vực công trình
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-white transition"
                    id="locationArea"
                    value={formData.locationArea}
                    onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                  >
                    <option value="lethuy">Huyện Lệ Thủy</option>
                    <option value="donghoi">TP. Đồng Hới</option>
                    <option value="quangninh">Huyện Quảng Ninh</option>
                    <option value="botrach">Huyện Bố Trạch</option>
                    <option value="badon">Thị xã Ba Đồn / Quảng Trạch</option>
                    <option value="other">Khu vực lân cận khác</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navyDark uppercase tracking-wider mb-2" htmlFor="notes">
                  Ghi chú thêm (khối lượng, phong cách)
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                  id="notes"
                  placeholder="Ví dụ: Cần 200m phào trần thạch cao biệt thự 2 tầng tại Kiến Giang..."
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                className="w-full py-4 rounded-xl luxury-gold-gradient text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-gold-600/30 hover:shadow-gold-500/50 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                type="submit"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Yêu Cầu Nhận Báo Giá Gốc</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center font-medium animate-in fade-in duration-300">
                  Cảm ơn Quý khách! Đội ngũ tư vấn sẽ liên hệ lại qua số điện thoại/Zalo trong ít phút.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
