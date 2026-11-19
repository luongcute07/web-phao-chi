'use client';

import React, { useState } from 'react';
import { Sparkles, Building2, Hammer, MessageSquare } from 'lucide-react';

type TabType = 'tab-thachcao' | 'tab-gfrc' | 'tab-keo';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>('tab-thachcao');

  return (
    <section className="py-20 lg:py-28 bg-cream/70 border-y border-stone-200/80" id="san-pham">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-gold-600 font-semibold text-xs tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-gold-500" />
            <span>Sản Phẩm Chủ Lực</span>
            <span className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navyDark mb-4">
            Danh Mục Phào Chỉ &amp; Vật Tư Tại Kho Quảng Bình
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Tổng hợp các dòng phào chỉ nội thất thạch cao, xi măng GFRC ngoại thất và hệ phụ gia xây dựng cao cấp luôn sẵn hàng số lượng lớn.
          </p>

          {/* TABS NAVIGATION */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 p-1.5 bg-stone-200/70 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm">
            <button
              type="button"
              className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wide transition-all ${
                activeTab === 'tab-thachcao'
                  ? 'shadow-sm bg-white text-navyDark border border-gold-500/30'
                  : 'text-stone-600 hover:text-navyDark'
              }`}
              onClick={() => setActiveTab('tab-thachcao')}
            >
              <Sparkles
                className={`w-4 h-4 inline-block mr-1.5 ${
                  activeTab === 'tab-thachcao' ? 'text-gold-500' : 'text-stone-400'
                }`}
              />
              Phào Chỉ Thạch Cao
            </button>

            <button
              type="button"
              className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wide transition-all ${
                activeTab === 'tab-gfrc'
                  ? 'shadow-sm bg-white text-navyDark border border-gold-500/30'
                  : 'text-stone-600 hover:text-navyDark'
              }`}
              onClick={() => setActiveTab('tab-gfrc')}
            >
              <Building2
                className={`w-4 h-4 inline-block mr-1.5 ${
                  activeTab === 'tab-gfrc' ? 'text-gold-500' : 'text-stone-400'
                }`}
              />
              Xi Măng GFRC &amp; Ngoại Thất
            </button>

            <button
              type="button"
              className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wide transition-all ${
                activeTab === 'tab-keo'
                  ? 'shadow-sm bg-white text-navyDark border border-gold-500/30'
                  : 'text-stone-600 hover:text-navyDark'
              }`}
              onClick={() => setActiveTab('tab-keo')}
            >
              <Hammer
                className={`w-4 h-4 inline-block mr-1.5 ${
                  activeTab === 'tab-keo' ? 'text-gold-500' : 'text-stone-400'
                }`}
              />
              Keo Dán &amp; Vật Tư Phụ
            </button>
          </div>
        </div>

        {/* TAB CONTENT 1: PHÀO CHỈ THẠCH CAO */}
        {activeTab === 'tab-thachcao' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* Card 1 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  alt="Phào chỉ trần thạch cao tiêu chuẩn trắng sắc nét"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD45NLH6HG7a4Zvag1I8ic23rstn5tF1YeLuFYsHSqUiw8OxQcuFsCuHGBfKGzlvotK974xadF1T-z9Z_j4ffYlekOU-_6YnPh2zLsf85ebN3WvobtTDwtoSvbdMoFHCrFrfh7MC7tRx9L9XJfgKRwpepESxG__Ifpgf-fbLc9plXFNBJggivd2N_Xcz2nNrWSZvNKY9wWTXibrNvf6bRJrHTuZGQCcizfNW7uvC9D"
                />
                <span className="absolute top-4 left-4 bg-navyDark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold-400/40">
                  Bán chạy nhất
                </span>
                <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-gold-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                  Kho Lệ Thủy
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Phào Chỉ Trần &amp; Tường Thạch Cao Tiêu Chuẩn
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Bề mặt láng mịn, trắng tinh khiết, hoa văn cổ điển và trơn hiện đại. Chịu lực tốt, không cong vênh, thi công chuẩn góc 45 độ sắc nét.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Bản rộng 8cm - 15cm
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Độ dài 2.4m / thanh
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  alt="Mâm trần thạch cao hoa văn tân cổ điển và dát vàng Quảng Bình"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVwEjcWQa6HiIbi9dFseoJraN9uEYVcd92a7SlpqbHKIcNEsGwute6e3Pkbs6VaDdY4dUYQxzogJ4eimzqw1hFnTw4SHBbLOmH-EF0ra2YJbdx8huOVKg-Iho1KYr1BkH_HZB78BD__L0FT7VN3G9588mH2nsYllGFwnpg4tDoACdjR2lSexg_KBMH2wSMvkCpASf_HCuXjDE3t-AxRQKkKKOe0vqH4xK4ktMidzqn"
                />
                <span className="absolute top-4 left-4 luxury-gold-gradient text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Cao Cấp
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Mâm Trần &amp; Hoa Văn Phù Điêu Thạch Cao
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Thiết kế cầu kỳ cho đèn chùm phòng khách, hoa văn góc tường tân cổ điển. Có tùy chọn phủ nhũ vàng / dát vàng 24K sang trọng.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Đường kính D600 - D1200
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Hoa văn dập nổi sâu
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  alt="Phào chỉ thạch cao chống ẩm chống thấm cao cấp 2 màu trắng và vàng"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEzbRXxGM5WddHE6xhL8FfZjw8HhrnSy25pWhIO5-0lOX0IAPl7zBOobOr0Piw1mhuKx6OIw_lwSSpq0E62AoFzU0ZAMULEuACRKhzZLgvnofVUgqFCzJwyPI4on6DLjH5mZzaBcZ_Fo_tHXY1pcsFDHl6AKmSfgA0FbUh8vjj4IV13gKQPCHkR-hL5zd_wc6hZULwJfHVk2-GrATgeJtLdJgtcGI2hG-dbb4ZoE5D"
                />
                <span className="absolute top-4 left-4 bg-teal-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Chống Ẩm X5
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Phào Thạch Cao Chống Ẩm Cao Cấp (Trắng &amp; Vàng)
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Bổ sung hoạt chất kỵ nước chuyên biệt, kháng nồm ẩm tối đa cho vùng duyên hải Quảng Bình. Giữ màu bền bỉ không bị ố vàng theo năm tháng.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      2 màu: Trắng sứ &amp; Vàng kim
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Đặc chế khí hậu nồm
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>
          </div>
        )}

        {/* TAB CONTENT 2: XI MĂNG GFRC & NGOẠI THẤT */}
        {activeTab === 'tab-gfrc' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* Card GFRC 1 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  alt="Phào chỉ xi măng sợi thủy tinh GFRC ngoại thất biệt thự"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBub2Hh0lpYyvD7uu2muMSOydXZySlUlRJMbHrRvJ1bwfj6fn6ltQufcZldh3M50Qms8xuX0z0L-fS4fnouhxVboRR8Z5VHLe6GkJ82JnisTYFzy_87u9S6NxWdP83ded1z882iipHQM10KbOnFN1K8Tb5fsyCdE4DRpDxcQEX6polCf4rNxTO1X8t-9wuekD_Y0x4xuzM0OluNLPSvuukG0f4XZ5Xns4_Iva8YMfls"
                />
                <span className="absolute top-4 left-4 bg-navyDark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold-400/40">
                  Chịu bão nắng
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Phào Chỉ Xi Măng GFRC Ngoại Thất
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Gia cường sợi thủy tinh kháng kiềm cao cấp, chống rạn nứt mặt tiền, trọng lượng nhẹ hơn bê tông thường 60% giúp thi công an toàn trên cao.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Phào mái, phào phân tầng
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Độ bền &gt; 30 năm
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>

            {/* Card GFRC 2 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  alt="Lục bình bê tông xi măng GFRC và lục bình đá ban công Quảng Bình"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5ke62zHX3pcRNGBTkaal5GdJZ6ydIVbcfBUilm2KiuVh_N9_-fqkSCxQlAjKnjL14DjM8ltFhHPhBQKbM5khlvBHs7Eiphk0okL8cQXyWnyKV_wMiAm98wbs_Tvm18vo_9L6Q-tGNb7awfFjsCd5pCApyELbsUTsx3AnVyedpxxfl5B9YDcLdFFNzU52rxH2nXcShgVVqiCrAz6R0vxZz36IodcBhBOV-L1mKpy3y"
                />
                <span className="absolute top-4 left-4 luxury-gold-gradient text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Sẵn 5000+ cây
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Lục Bình Bê Tông GFRC &amp; Lục Bình Đá
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Dòng lục bình lan can, tường rào, ban công biệt thự đúc liền khối sắc sảo. Bề mặt mịn tuyệt đối, giảm 80% công bả sơn lót khi thi công.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Chiều cao 40cm, 50cm, 60cm, 70cm
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Có lõi thép trợ lực
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>

            {/* Card GFRC 3 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  alt="Đầu cột, con bọ xi măng và phù điêu ngoại thất tân cổ điển"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeF9vUxusaspFzntBTa1LD6qeN69olod6jCdQtQO_TzUBitECrH4rtgSSuAuLwUMqRkHf4T4orB0fzuhAEDvyq8eVn-FKdyDy9vdVO2MtIEZSOQx68cToiQnjasAxUc3vQ1UQkfa6O4FaVYznlxkbrbdrJszDSg5vGHrzL9RYGd3Si7uvtiXBLjzPzU0yLppR3p4JHjALehqsTzOkepuCB7XOeDN2eGAZSveNbSjrd"
                />
                <span className="absolute top-4 left-4 bg-navyDark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold-400/40">
                  Nghệ Thuật Đúc
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Đầu Cột Corinthian, Con Bọ &amp; Phù Điêu Ngoại Thất
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Hoa văn đầu cột tròn/vuông, con bọ đỡ dầm mái, phù điêu vòm cửa đại sảnh tinh xảo. Chuẩn tỷ lệ vàng kiến trúc Pháp cổ.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Cột D300 - D800mm
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Ốc nở M8x120 - M8x200mm
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>
          </div>
        )}

        {/* TAB CONTENT 3: KEO DÁN, PHỤ GIA & VẬT TƯ */}
        {activeTab === 'tab-keo' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* Card Keo 1 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100 flex items-center justify-center p-6">
                <img
                  alt="Keo 2 thành phần T&amp;P chuyên dụng xử lý mối nối và phào chỉ GFRC"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqkvfOe1hi-vGXuILfDvPkiwVXjuzbxnUrbYsGu8O5mc-9a5l1N9pgBYNS53AH7fN7yOdCiXEDn6SoYWOyINv6NfN5fgmVOj2WGI4J_DtlBGxnsu5R9zqfDZlWhIEqFHhzv2y1QA9nQdsZNX09aJmWJP2nGZgwrBsyQdMXeoA13upwUWrzanFfVvHWKBIT4VhgYqlTibWUjFkm5A6ZFdk8s3TjsSoXNc2Vy_QDWQfL"
                />
                <span className="absolute top-4 left-4 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Khuyên dùng
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Keo 2 Thành Phần T&amp;P Cao Cấp
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Chuyên trị mối nối tấm Cemboard, tấm Duraflex và ghép nối phào chỉ xi măng GFRC. Kháng nứt 100%, độ bám dính siêu cường không co ngót.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Bộ 1kg &amp; Thùng 5kg
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Chống tách nứt
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>

            {/* Card Keo 2 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  alt="Keo dán gạch và keo chà ron chống thấm X5 cao cấp"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                />
                <span className="absolute top-4 left-4 bg-navyDark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold-400/40">
                  Tiêu chuẩn ISO
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Keo Dán Gạch &amp; Keo Chà Ron Chống Thấm X5
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Dòng keo dán gạch ốp tường nội ngoại thất bám dính cực đỉnh, không trượt gạch khổ lớn. Keo chà ron vi sợi chống rêu mốc, chống ngấm nước.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Bao 25kg tiện dụng
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Keo chà ron đa sắc
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>

            {/* Card Keo 3 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group">
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  alt="Phụ gia chống nứt vữa tô, ốc vít nở và con kê bê tông tiêu chuẩn"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
                />
                <span className="absolute top-4 left-4 luxury-gold-gradient text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Đủ Kích Cỡ
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-navyDark group-hover:text-gold-600 transition mb-2">
                    Phụ Gia Chống Nứt &amp; Con Kê Bê Tông
                  </h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    Phụ gia hóa dẻo tăng mác vữa tô, ngăn chân chim; hệ thống con kê sàn bê tông đúc sẵn đảm bảo chuẩn lớp bê tông bảo vệ thép công trình.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium text-stone-600 mb-5">
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Ốc vít M4x30 - M8x200
                    </span>
                    <span className="bg-cream px-2.5 py-1 rounded border border-stone-200">
                      Con kê mác 350-450
                    </span>
                  </div>
                </div>
                <a
                  className="w-full py-2.5 rounded-lg border border-gold-500 text-gold-700 font-semibold text-xs tracking-wider uppercase text-center hover:bg-gold-500 hover:text-white transition flex items-center justify-center gap-2"
                  href="https://zalo.me/0919051066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Báo Giá Zalo Ngay</span>
                </a>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
