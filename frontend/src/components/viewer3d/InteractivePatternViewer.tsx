'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  RotateCw, 
  Sun, 
  Moon, 
  Sparkles, 
  Download, 
  Maximize2, 
  Layers, 
  ZoomIn, 
  Check, 
  Phone 
} from 'lucide-react';

export default function InteractivePatternViewer() {
  const [rotation, setRotation] = useState(15);
  const [goldFinish, setGoldFinish] = useState(true);
  const [lightingPreset, setLightingPreset] = useState<'day' | 'warm'>('warm');
  const [selectedPattern, setSelectedPattern] = useState(0);
  const [sampleForm, setSampleForm] = useState({ name: '', phone: '', location: '', interest: 'mam-tran', notes: '' });
  const [sampleSubmitted, setSampleSubmitted] = useState(false);

  const PATTERNS = [
    {
      name: 'Mâm Trần Cổ Điển Hoàng Gia D1200',
      code: 'MT-HG1200',
      reliefType: 'Mâm tròn hoa văn Acanthus đối xứng',
      depth: 'Độ nổi hoa văn 45mm',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtHd0xK0wYIVlEN97ZnRTIFHbR_q6gzBTyP2wsjbYNWRxRqi3nDZNYEQ7gpxZGGVKX8xYpL7pSMMT6L1wR6pVEoAChso9ZEgSd7WjsCw_VdLFlOEwmCO-kVh8TvLZcwL5_qLn5Tjd9JzRxH281dFTam7qdDZbdpzkxZVhfEdVa2yYDJg5ItlRlIyMsnbsvutvZZHDS8CgoTX1462LbYePQHthLWhlgGFmGkmRnWt9U',
      cadAvailable: true
    },
    {
      name: 'Phào Cổ Trần Baroque Lá Tây HG120',
      code: 'TC-HG120',
      reliefType: 'Máng hắt hoa dây kéo dài',
      depth: 'Bản rộng 120mm x Nhô 100mm',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      cadAvailable: true
    },
    {
      name: 'Phù Điêu Vương Miện Cung Điện V1',
      code: 'PD-ROYAL80',
      reliefType: 'Phù điêu vòm cuốn trung tâm',
      depth: 'Chiều cao 800mm x Dày 60mm',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80',
      cadAvailable: true
    },
    {
      name: 'Đầu Cột Corinthian GFRC D400',
      code: 'GFRC-DC40',
      reliefType: 'Đầu cột lá Acanthus đúc sợi thủy tinh',
      depth: 'Đường kính cột D400mm',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy_jPsoIepUO_JnjoLvNNajnnfqZ9LPpDkRh8xZb0QUbDVTDtVlwFl0R_k9lflD0wu3n96CR3LX14fUy3Og4jXsXnCICPJWgDaKO_HaE77eAa66lAC-7H38Du9M-SP9UbYsqZ7JWoX-4PxRAjeAqxwjENfeFbXhrbi_YCeASU8atvDIY0yd8ucOiHyjTSnlJurS2Szfg0c5amT0U8U_EAmeFxH-QTI_03JXA8ibJx1',
      cadAvailable: true
    },
    {
      name: 'Con Bọ Đỡ Dầm GFRC Kháng Muối',
      code: 'GFRC-CB35',
      reliefType: 'Con sơn hoa văn cuộn sóng cổ điển',
      depth: 'Cao 350mm x Nhô 250mm',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN1mVyfIxD6dPxBA0XecMc-CRN-jIt4XfbGzWiDmFAe1y9oR1otL2uGGMsI1Yj-p3lvyI99QeoYThIKJpNvNfZQyhWr8OYY4hyf8-hHeyWQ6SDrV2-CEjTI7VzLC7IsBhrJSmmanfUz2_65TaPfmQuGlgscLGhhO2d_c3uveHiVZuoqz8KURYRBN43S9q66NjFv8p_4eeTv77DrrZeDJdBg2oPbbToRDaHgff4AN-C',
      cadAvailable: true
    },
    {
      name: 'Lục Bình Bê Tông Đúc Sẵn LB-65',
      code: 'LB-65XM',
      reliefType: 'Con tiện lan can biệt thự',
      depth: 'Chiều cao tiêu chuẩn 650mm',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOrI-r1bFiXJ2Sj20Jj-Y6-FpbGnVak9UKrjILy8k7OOB_VYyFguWHNI1cQ_2tX6y9D9qlA5z2IGmfTPNnKIp7sAilBz9sUJmmwBBzf1DKGyRWTfH8nPnU3mV4zhxI3x5YOhsp1lWTPLRyj-lhgIWdo6IJmsXEzU_aqlVcxAos9aXpXyG7L_ztFZqkwvOrQFbo4Cv5PRyuNExjiuA03UshWitepUB5WIMJWrkF321l',
      cadAvailable: true
    }
  ];

  const current = PATTERNS[selectedPattern];

  const handleSampleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSampleSubmitted(true);
  };

  return (
    <div className="py-12 bg-pearl">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <section className="relative -mx-4 -mt-12 overflow-hidden bg-surface px-4 py-8 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-stone-500"><Link className="hover:text-gold-600" href="/">Trang Chủ</Link><span aria-hidden="true">›</span><Link className="hover:text-gold-600" href="/san-pham">Kho Sản Phẩm</Link><span aria-hidden="true">›</span><span className="font-semibold text-navyDark">Trải Nghiệm Mẫu 3D</span></nav>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-700 shadow-sm"><span className="h-2 w-2 animate-pulse rounded-full bg-gold-500" />Đột phá trải nghiệm kiến trúc tại Quảng Bình • Công nghệ số hóa 3D</div>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8"><h1 className="mb-2 font-serif text-3xl font-bold leading-tight text-navyDark sm:text-4xl">Trải Nghiệm Mẫu Hoa Văn Phào Chỉ 3D &amp; Giả Lập Chi Tiết Điêu Khắc</h1><p className="max-w-3xl text-sm leading-relaxed text-navyDark/70 sm:text-base">Dành riêng cho chủ nhà, kiến trúc sư và nhà thầu tại Quảng Bình. Khám phá từng đường gân hoa văn Acanthus, mâm trần dát vàng 24K và phào chỉ GFRC ngoại thất ở mọi góc nhìn, giả lập ánh sáng thực tế trước khi đưa vào công trình.</p></div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
                {[['view_in_ar', '200+ Model 3D', 'Thư viện mẫu số hóa có sẵn tại xưởng'], ['cloud_download', 'File Thiết Kế Free', 'Hỗ trợ SKP, MAX, DWG, CAD'], ['verified', 'Đúng Tỉ Lệ 1:1', 'Đối chiếu mẫu trước khi sản xuất']].map(([icon, title, description]) => <article className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-md" key={title}><span className="material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-300/30 text-xl text-gold-700">{icon}</span><div><h2 className="font-serif text-base font-bold text-navyDark">{title}</h2><p className="text-xs text-stone-500">{description}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        {/* 3D Viewer Canvas Container */}
        <div id="interactive-stage" className="bg-navyDark rounded-sm border-2 border-gold-400 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 text-pearl">
          {/* Main Visualizer Area (8 cols) */}
          <div className="lg:col-span-8 relative p-6 sm:p-10 flex flex-col justify-between min-h-[480px] sm:min-h-[580px] bg-gradient-to-b from-darkSlate via-navyDark to-charcoal overflow-hidden">
            {/* Ambient Lighting Simulation */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                lightingPreset === 'warm'
                  ? 'bg-amber-500/10 mix-blend-color-dodge'
                  : 'bg-blue-400/5'
              }`}
            />

            {/* Top Toolbar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="bg-navyDark/90 backdrop-blur-md px-3.5 py-1.5 rounded-[2px] border border-gold-400/50 flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-gold-300">{current.code}</span>
                <span className="text-pearl/40">|</span>
                <span className="text-pearl/80">{current.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightingPreset(lightingPreset === 'warm' ? 'day' : 'warm')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] text-xs font-semibold border transition-all ${
                    lightingPreset === 'warm'
                      ? 'bg-gold-500/20 text-gold-300 border-gold-400'
                      : 'bg-navyDark text-pearl/80 border-pearl/20'
                  }`}
                  title="Chuyển chế độ đèn hắt dạ trần 3000K / Ánh sáng tự nhiên"
                >
                  {lightingPreset === 'warm' ? <Sun size={13} className="text-gold-400" /> : <Moon size={13} />}
                  <span>{lightingPreset === 'warm' ? 'Đèn Dạ 3000K' : 'Ánh Sáng Ngày'}</span>
                </button>

                <button
                  onClick={() => setGoldFinish(!goldFinish)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] text-xs font-semibold border transition-all ${
                    goldFinish
                      ? 'luxury-gold-gradient text-navyDark border-gold-300 shadow-sm font-bold'
                      : 'bg-navyDark text-pearl/80 border-pearl/20'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>{goldFinish ? 'Thếp Vàng 24K: BẬT' : 'Thạch Cao Trắng'}</span>
                </button>
              </div>
            </div>

            {/* Central 3D Object View with simulated interactive perspective & rotation */}
            <div className="relative my-auto flex items-center justify-center py-8">
              <div
                style={{
                  transform: `perspective(1000px) rotateY(${rotation}deg) rotateX(${rotation > 0 ? 6 : -6}deg)`,
                  transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  filter: goldFinish ? 'drop-shadow(0 20px 30px rgba(197, 160, 89, 0.35))' : 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.5))'
                }}
                className="relative max-w-md w-full aspect-square rounded-full overflow-hidden border-4 border-gold-500/40 p-2 bg-navyDark shadow-2xl group cursor-grab active:cursor-grabbing"
              >
                <img
                  src={current.image}
                  alt={current.name}
                  className={`w-full h-full object-cover rounded-full transition-all duration-500 ${
                    goldFinish ? 'sepia-[0.35] contrast-125 brightness-105' : 'grayscale-[0.2]'
                  }`}
                />
                {goldFinish && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-500/30 via-gold-300/10 to-transparent mix-blend-overlay pointer-events-none" />
                )}
              </div>
            </div>

            {/* Bottom Controls Slider & Specs */}
            <div className="relative z-10 bg-navyDark/90 backdrop-blur-md p-4 rounded-sm border border-pearl/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <RotateCw size={16} className="text-gold-400 shrink-0" />
                <span className="text-xs text-pearl/80 whitespace-nowrap">Xoay góc nhìn:</span>
                <input
                  type="range"
                  min="-45"
                  max="45"
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full sm:w-48 accent-gold-500 cursor-pointer"
                />
                <span className="text-xs font-mono text-gold-300 w-8">{rotation}°</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-pearl/70">
                <span>{current.depth}</span>
                <span>•</span>
                <span className="text-gold-400 font-semibold">{current.reliefType}</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar Options (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-charcoal border-t lg:border-t-0 lg:border-l border-gold-500/20 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-gold-400 text-[10px] font-bold uppercase tracking-widest block mb-1">
                  Chọn Mẫu 3D Khác
                </span>
                <h3 className="font-serif font-bold text-xl text-white">
                  Profile Hoa Văn Điêu Khắc
                </h3>
              </div>

              {/* Pattern Selector Cards */}
              <div className="space-y-3">
                {PATTERNS.map((pat, idx) => {
                  const isSelected = selectedPattern === idx;
                  return (
                    <button
                      key={pat.code}
                      onClick={() => {
                        setSelectedPattern(idx);
                        setRotation(0);
                      }}
                      className={`w-full text-left p-3 rounded-sm border transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'bg-gold-500/15 border-gold-400 shadow-sm'
                          : 'bg-navyDark/60 border-pearl/10 hover:border-pearl/30'
                      }`}
                    >
                      <img
                        src={pat.image}
                        alt={pat.name}
                        className="w-12 h-12 rounded-sm object-cover shrink-0 border border-gold-500/30"
                      />
                      <div className="space-y-0.5 overflow-hidden">
                        <span className="text-[10px] font-bold text-gold-400 block">{pat.code}</span>
                        <h4 className="text-xs font-bold text-white truncate">{pat.name}</h4>
                        <span className="text-[10px] text-pearl/60 block truncate">{pat.depth}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Advantages */}
              <div className="p-4 bg-navyDark rounded-sm border border-pearl/10 space-y-2 text-xs text-pearl/80">
                <h4 className="font-bold text-gold-300 text-xs uppercase flex items-center gap-1.5">
                  <Check size={14} className="text-gold-400" />
                  <span>Lợi Ích Khi Xem File 3D:</span>
                </h4>
                <ul className="space-y-1.5 text-[11px] text-pearl/75 pl-4 list-disc">
                  <li>Chính xác 100% tỷ lệ đắp phào trên thực tế</li>
                  <li>Xem trước hiệu ứng ánh sáng đèn hắt trần</li>
                  <li>Hỗ trợ tải miễn phí file CAD cho thầu thợ</li>
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-pearl/10">
              <a
                href="https://zalo.me/0919051066?text=Tôi%20muốn%20xin%20file%20CAD%20và%203D%20phào%20chỉ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 luxury-gold-gradient text-navyDark font-bold text-xs uppercase tracking-wider py-3 rounded-sm hover:opacity-95 shadow-md"
              >
                <Download size={14} />
                <span>Tải File CAD / 3Ds Max</span>
              </a>

              <a
                href="tel:0919051066"
                className="w-full flex items-center justify-center gap-2 bg-navyDark hover:bg-navyDark/80 text-white font-semibold text-xs uppercase tracking-wider py-2.5 rounded-sm border border-pearl/20"
              >
                <Phone size={13} className="text-gold-400" />
                <span>Tư Vấn Kỹ Thuật Đắp Mẫu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-label-caps uppercase tracking-widest text-gold-600">Bộ Sưu Tập Phổ Biến Nhất</span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-navyDark sm:text-3xl">Chọn Mẫu Để Tải Lên 3D Viewer</h2>
            </div>
            <p className="max-w-md text-sm text-stone-500">Chọn một mẫu để xem thông số và hiệu ứng hoàn thiện trong studio phía trên.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {PATTERNS.map((pattern, index) => (
              <button
                className={`group flex flex-col justify-between rounded-xl bg-white p-3 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl ${selectedPattern === index ? 'ring-2 ring-gold-500' : ''}`}
                key={pattern.code}
                type="button"
                aria-pressed={selectedPattern === index}
                onClick={() => {
                  setSelectedPattern(index);
                  setRotation(15);
                  document.getElementById('interactive-stage')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div>
                  <div className="mb-3 aspect-square overflow-hidden rounded-lg bg-cream">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={pattern.image} alt={pattern.name} loading="lazy" />
                  </div>
                  <span className="rounded bg-navyDark px-2 py-0.5 font-mono text-[10px] text-pearl">{pattern.code}</span>
                  <h3 className="mt-2 line-clamp-2 font-serif text-sm font-bold text-navyDark group-hover:text-gold-600">{pattern.name}</h3>
                  <p className="mt-1 text-xs text-stone-500">{pattern.depth}</p>
                </div>
                <span className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3 text-xs font-semibold text-gold-700">Nạp Vào 3D <span aria-hidden="true">→</span></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="font-label-caps uppercase tracking-widest text-gold-600">Chuẩn Mực Kiến Trúc Châu Âu</span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-navyDark sm:text-3xl">Tại Sao Nên Duyệt Mẫu 3D Trước Khi Đúc?</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['architecture', 'Chính Xác Tỉ Lệ Không Gian', 'Đối chiếu hoa văn và kích thước phào với chiều cao trần trước khi chốt mẫu.', 'CHUẨN TỈ LỆ 1:1'],
              ['wb_sunny', 'Trực Quan Ánh Sáng & Vàng 24K', 'Xem bề mặt thạch cao trắng hoặc hiệu ứng dát vàng dưới các chế độ ánh sáng.', '3 CHẾ ĐỘ ÁNH SÁNG'],
              ['savings', 'Hạn Chế Sai Sót Thi Công', 'Thống nhất mã mẫu, kích thước và chi tiết hoa văn trước khi đặt sản xuất.', 'CHỐT MẪU TRƯỚC KHI ĐÚC'],
              ['support_agent', 'Kỹ Thuật Hỗ Trợ File', 'Kỹ sư hỗ trợ đối chiếu file mẫu với bản vẽ và phối cảnh công trình.', 'TƯ VẤN TẠI LỆ THỦY'],
            ].map(([icon, title, description, detail]) => (
              <article className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-md" key={title}>
                <div>
                  <span className="material-symbols-outlined mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-xl text-gold-600">{icon}</span>
                  <h3 className="mb-2 font-serif text-base font-bold text-navyDark">{title}</h3>
                  <p className="text-xs leading-relaxed text-stone-500">{description}</p>
                </div>
                <span className="mt-4 font-label-caps text-gold-700">{detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20" id="form-order-sample">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10">
            <div className="mx-auto mb-8 max-w-xl text-center">
              <span className="font-label-caps uppercase tracking-widest text-gold-600">Đăng Ký Trực Tiếp Tại Kho Lệ Thủy</span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-navyDark sm:text-3xl">Nhận Mẫu Thực Tế &amp; Báo Giá Tận Gốc</h2>
              <p className="mt-2 text-sm text-stone-500">Giao mẫu gân phào chỉ cắt khúc và hoa văn mẫu tận công trình tại Quảng Bình.</p>
            </div>
            {!sampleSubmitted ? (
              <form className="space-y-4" onSubmit={handleSampleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-sm font-semibold text-navyDark" htmlFor="sample-name">Họ và Tên Gia Chủ / Kiến Trúc Sư *</label><input className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/50" id="sample-name" required value={sampleForm.name} onChange={(event) => setSampleForm({ ...sampleForm, name: event.target.value })} /></div>
                  <div><label className="mb-1.5 block text-sm font-semibold text-navyDark" htmlFor="sample-phone">Số Điện Thoại Nhận Zalo Báo Giá *</label><input className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/50" id="sample-phone" type="tel" required value={sampleForm.phone} onChange={(event) => setSampleForm({ ...sampleForm, phone: event.target.value })} /></div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-sm font-semibold text-navyDark" htmlFor="sample-location">Địa Chỉ Công Trình Tại Quảng Bình *</label><input className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/50" id="sample-location" placeholder="TP. Đồng Hới hoặc Huyện Lệ Thủy..." required value={sampleForm.location} onChange={(event) => setSampleForm({ ...sampleForm, location: event.target.value })} /></div>
                  <div><label className="mb-1.5 block text-sm font-semibold text-navyDark" htmlFor="sample-interest">Dòng Sản Phẩm Cần Nhận Mẫu</label><select className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark" id="sample-interest" value={sampleForm.interest} onChange={(event) => setSampleForm({ ...sampleForm, interest: event.target.value })}><option value="mam-tran">Mâm Trần &amp; Phù Điêu Góc</option><option value="phao-chi">Phào Cổ Trần &amp; Nẹp Tường</option><option value="gfrc-ngoai-that">GFRC Đầu Cột &amp; Con Bọ</option><option value="luc-binh">Lục Bình Bê Tông</option><option value="tron-goi">Báo Giá Trọn Gói</option></select></div>
                </div>
                <div><label className="mb-1.5 block text-sm font-semibold text-navyDark" htmlFor="sample-notes">Ghi Chú Kỹ Thuật</label><textarea className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/50" id="sample-notes" rows={3} placeholder="Diện tích công trình, loại trần, mã mẫu quan tâm..." value={sampleForm.notes} onChange={(event) => setSampleForm({ ...sampleForm, notes: event.target.value })} /></div>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-gold-600" type="submit"><Download size={17} />Gửi Yêu Cầu Nhận Mẫu Thực Tế Miễn Phí</button>
              </form>
            ) : (
              <div className="rounded-lg bg-emerald-50 p-5 text-center text-sm text-emerald-900" role="status"><span className="material-symbols-outlined text-3xl text-emerald-600">check_circle</span><h3 className="font-serif text-lg font-bold">Đã ghi nhận yêu cầu!</h3><p>Chuyên viên kỹ thuật sẽ liên hệ {sampleForm.name} qua số {sampleForm.phone} để xác nhận mẫu và địa chỉ giao.</p></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
