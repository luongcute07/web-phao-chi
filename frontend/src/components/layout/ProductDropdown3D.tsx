'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  RotateCw, 
  Sun, 
  Moon, 
  Sparkles, 
  Maximize2, 
  Layers, 
  Building2, 
  Box, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Play, 
  Pause,
  ChevronRight,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';

interface ProductDropdown3DProps {
  onClose: () => void;
}

const CATEGORIES = [
  {
    title: 'Phào Chỉ Thạch Cao',
    badge: 'Nội thất',
    desc: 'Hoa văn tân cổ điển, chỉ khung tranh, máng hắt trần giật cấp.',
    href: '/san-pham?cat=thach-cao',
    icon: Layers,
    count: '150+ mẫu',
  },
  {
    title: 'Xi Măng GFRC Ngoại Thất',
    badge: 'Mặt tiền',
    desc: 'Phào mái biệt thự, đầu cột Corinthian, phù điêu chịu bão.',
    href: '/san-pham?cat=gfrc',
    icon: Building2,
    count: '80+ mẫu',
  },
  {
    title: 'Mâm Trần & Phù Điêu',
    badge: 'Dát vàng',
    desc: 'Mâm tròn hoa Acanthus D600-D1600mm, vương miện hoàng gia.',
    href: '/san-pham?cat=mam-tran',
    icon: Sparkles,
    count: '45+ mẫu',
  },
  {
    title: 'Con Tiện & Lục Bình',
    badge: 'Lan can',
    desc: 'Con tiện bê tông đúc đặc ruột, lan can ban công, cầu thang.',
    href: '/san-pham?cat=con-tien',
    icon: Box,
    count: '30+ mẫu',
  },
];

const PATTERNS_3D = [
  {
    name: 'Mâm Trần Cổ Điển Hoàng Gia D1200',
    shortName: 'Mâm Trần D1200',
    code: 'MT-HG1200',
    reliefType: 'Mâm tròn Acanthus đối xứng',
    depth: 'Độ nổi hoa văn 45mm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtHd0xK0wYIVlEN97ZnRTIFHbR_q6gzBTyP2wsjbYNWRxRqi3nDZNYEQ7gpxZGGVKX8xYpL7pSMMT6L1wR6pVEoAChso9ZEgSd7WjsCw_VdLFlOEwmCO-kVh8TvLZcwL5_qLn5Tjd9JzRxH281dFTam7qdDZbdpzkxZVhfEdVa2yYDJg5ItlRlIyMsnbsvutvZZHDS8CgoTX1462LbYePQHthLWhlgGFmGkmRnWt9U',
    tag: 'Bán chạy nhất'
  },
  {
    name: 'Phào Cổ Trần Baroque Lá Tây HG120',
    shortName: 'Phào Cổ Trần HG120',
    code: 'TC-HG120',
    reliefType: 'Máng hắt hoa dây kéo dài',
    depth: 'Bản 120mm x Nhô 100mm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQe_7NmITOyCe7kiFAwlUvmQvjFLcrj22qUShlNOBzvvPUK0zHdF7klOogHV0Q5fwS75141TtB_SQeVM-EsMp147O2JuU7TjEl9_mWi7DRfHCp7nW-Q5oV4P2VsGIs2ziCkqgC1Kb1ifhzYtqtFsLWCaKwQ-WIY2UhCDiMiyYKJTbgtwZsuVs8nGIyfrOzM4uR9xholoY1jB2EX8t4hYkFrr96D166KqPDYPoiVJue',
    tag: 'Tân Cổ Điển'
  },
  {
    name: 'Phù Điêu Vương Miện Cung Điện V1',
    shortName: 'Phù Điêu Vòm V1',
    code: 'PD-ROYAL80',
    reliefType: 'Phù điêu vòm cuốn trung tâm',
    depth: 'Cao 800mm x Dày 60mm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy_jPsoIepUO_JnjoLvNNajnnfqZ9LPpDkRh8xZb0QUbDVTDtVlwFl0R_k9lflD0wu3n96CR3LX14fUy3Og4jXsXnCICPJWgDaKO_HaE77eAa66lAC-7H38Du9M-SP9UbYsqZ7JWoX-4PxRAjeAqxwjENfeFbXhrbi_YCeASU8atvDIY0yd8ucOiHyjTSnlJurS2Szfg0c5amT0U8U_EAmeFxH-QTI_03JXA8ibJx1',
    tag: 'Hoàng Gia'
  }
];

export default function ProductDropdown3D({ onClose }: ProductDropdown3DProps) {
  const [selectedPattern, setSelectedPattern] = useState(0);
  const [rotation, setRotation] = useState(15);
  const [goldFinish, setGoldFinish] = useState(true);
  const [lightingPreset, setLightingPreset] = useState<'warm' | 'day'>('warm');
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number>(0);
  const dragStartRotation = useRef<number>(15);

  const currentPattern = PATTERNS_3D[selectedPattern];

  // Auto rotation effect if toggled
  useEffect(() => {
    if (!isAutoRotating) return;
    let forward = true;
    const interval = setInterval(() => {
      setRotation((prev) => {
        if (prev >= 35) forward = false;
        if (prev <= -35) forward = true;
        return forward ? prev + 1 : prev - 1;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Mouse Drag handlers for 3D rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    dragStartX.current = e.clientX;
    dragStartRotation.current = rotation;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    const newRot = Math.max(-45, Math.min(45, Math.round(dragStartRotation.current + deltaX * 0.4)));
    setRotation(newRot);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setIsAutoRotating(false);
      dragStartX.current = e.touches[0].clientX;
      dragStartRotation.current = rotation;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - dragStartX.current;
    const newRot = Math.max(-45, Math.min(45, Math.round(dragStartRotation.current + deltaX * 0.4)));
    setRotation(newRot);
  };

  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[960px] max-w-[calc(100vw-32px)]"
      onMouseUp={handleMouseUp}
    >
      <div className="bg-navyDark text-pearl rounded-md border-2 border-gold-500/50 shadow-2xl shadow-navyDark/70 overflow-hidden backdrop-blur-xl">
        {/* Top Gold Accent Strip */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        <div className="grid grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-gold-500/20">
          
          {/* ================= LEFT COLUMN: Categories & Shortcuts (5 cols) ================= */}
          <div className="col-span-12 md:col-span-5 p-5 sm:p-6 flex flex-col justify-between bg-darkSlate/80">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-pearl/10 pb-3">
                <div>
                  <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest block">
                    Tổng Kho Lệ Thủy
                  </span>
                  <h3 className="font-serif font-bold text-base text-white">
                    Danh Mục Sản Phẩm Đúc Sẵn
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-pearl/60 bg-pearl/5 px-2 py-0.5 rounded-[2px] border border-pearl/10">
                  300+ Mã
                </span>
              </div>

              {/* Category links list */}
              <div className="space-y-2">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.title}
                      href={cat.href}
                      onClick={onClose}
                      className="group flex items-start gap-3 p-2.5 rounded-sm bg-navyDark/50 hover:bg-gold-500/10 border border-pearl/5 hover:border-gold-500/40 transition-all"
                    >
                      <div className="w-8 h-8 rounded-sm bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-navyDark transition-colors mt-0.5">
                        <Icon size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-pearl group-hover:text-gold-300 transition-colors truncate">
                            {cat.title}
                          </span>
                          <span className="text-[9px] font-semibold text-gold-400/90 shrink-0">
                            {cat.count}
                          </span>
                        </div>
                        <p className="text-[11px] text-pearl/65 line-clamp-1 mt-0.5 leading-tight">
                          {cat.desc}
                        </p>
                      </div>
                      <ChevronRight size={14} className="text-pearl/30 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all self-center shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Catalog Actions at Bottom of Left Col */}
            <div className="pt-4 mt-4 border-t border-pearl/10 space-y-2">
              <Link
                href="/san-pham"
                onClick={onClose}
                className="w-full flex items-center justify-between px-3 py-2 rounded-sm text-xs font-bold text-gold-300 hover:text-white bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 transition-all"
              >
                <span>Xem Tất Cả 300+ Mẫu Tại Kho</span>
                <ArrowRight size={13} className="text-gold-400" />
              </Link>

              <div className="flex items-center justify-between text-[11px] text-pearl/70 pt-1 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-400" /> Sợi roving kháng kiềm
                </span>
                <span className="text-gold-400 font-semibold">
                  Chiết khấu thầu thợ 15-25%
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3D Interactive Model (7 cols) ================= */}
          <div className="col-span-12 md:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-charcoal/90 relative overflow-hidden">
            {/* Ambient Lighting Simulation */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                lightingPreset === 'warm'
                  ? 'bg-amber-500/10 mix-blend-color-dodge'
                  : 'bg-blue-400/5'
              }`}
            />

            {/* 3D Header Bar inside Dropdown */}
            <div className="relative z-10 flex items-center justify-between gap-2 border-b border-pearl/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-gold-500/15 px-2 py-0.5 rounded-[2px] border border-gold-500/30">
                  Mẫu 3D Tương Tác
                </span>
                <span className="text-xs font-bold text-white hidden sm:inline">
                  {currentPattern.code}
                </span>
              </div>

              {/* Toggles: Lighting & Gold finish */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setLightingPreset(lightingPreset === 'warm' ? 'day' : 'warm')}
                  className={`flex items-center gap-1 px-2 py-1 rounded-[2px] text-[10px] font-semibold border transition-all ${
                    lightingPreset === 'warm'
                      ? 'bg-gold-500/20 text-gold-300 border-gold-400'
                      : 'bg-navyDark text-pearl/80 border-pearl/20'
                  }`}
                  title="Chuyển chế độ đèn dạ 3000K / Ánh sáng tự nhiên"
                >
                  {lightingPreset === 'warm' ? <Sun size={11} className="text-gold-400" /> : <Moon size={11} />}
                  <span>{lightingPreset === 'warm' ? 'Đèn Dạ 3000K' : 'Ánh Sáng Ngày'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGoldFinish(!goldFinish)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-[2px] text-[10px] font-semibold border transition-all ${
                    goldFinish
                      ? 'luxury-gold-gradient text-navyDark border-gold-300 shadow-sm font-bold'
                      : 'bg-navyDark text-pearl/80 border-pearl/20'
                  }`}
                  title="Bật/Tắt hiệu ứng phủ vàng lá 24K"
                >
                  <Sparkles size={11} />
                  <span>{goldFinish ? 'Vàng 24K: BẬT' : 'Thạch Cao Trắng'}</span>
                </button>
              </div>
            </div>

            {/* Pattern Selection Tabs (Quick Switcher) */}
            <div className="relative z-10 flex items-center gap-1.5 pt-3">
              {PATTERNS_3D.map((pat, idx) => (
                <button
                  key={pat.code}
                  type="button"
                  onClick={() => {
                    setSelectedPattern(idx);
                    setRotation(idx === 0 ? 15 : idx === 1 ? -15 : 10);
                  }}
                  className={`flex-1 text-center py-1.5 px-2 rounded-[2px] text-[10px] font-semibold border transition-all truncate ${
                    selectedPattern === idx
                      ? 'bg-gold-500/25 border-gold-400 text-gold-300 font-bold shadow-sm'
                      : 'bg-navyDark/70 border-pearl/10 text-pearl/70 hover:text-white hover:border-pearl/30'
                  }`}
                >
                  {pat.shortName}
                </button>
              ))}
            </div>

            {/* 3D Model Display Stage */}
            <div 
              className="relative z-10 my-3 flex flex-col items-center justify-center p-3 select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              {/* Interaction Hint Overlay */}
              <div className="absolute top-1 right-2 text-[10px] text-pearl/50 flex items-center gap-1 pointer-events-none">
                <Compass size={11} className="text-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Kéo để xoay 3D</span>
              </div>

              {/* 3D Transforming Object */}
              <div
                style={{
                  transform: `perspective(800px) rotateY(${rotation}deg) rotateX(${rotation > 0 ? 5 : -5}deg)`,
                  transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  filter: goldFinish
                    ? 'drop-shadow(0 16px 26px rgba(197, 160, 89, 0.4))'
                    : 'drop-shadow(0 16px 22px rgba(0, 0, 0, 0.6))',
                  cursor: isDragging ? 'grabbing' : 'grab',
                }}
                className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-gold-500/50 p-1.5 bg-navyDark shadow-2xl transition-all"
              >
                <img
                  src={currentPattern.image}
                  alt={currentPattern.name}
                  draggable={false}
                  className={`w-full h-full object-cover rounded-full pointer-events-none transition-all duration-300 ${
                    goldFinish ? 'sepia-[0.35] contrast-125 brightness-105' : 'grayscale-[0.2]'
                  }`}
                />
                {goldFinish && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-500/35 via-gold-300/15 to-transparent mix-blend-overlay pointer-events-none" />
                )}
                {/* 3D Depth Spec overlay pill */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-navyDark/90 backdrop-blur-sm border border-gold-400/40 px-2 py-0.5 rounded-[2px] text-[9px] font-mono text-gold-300 whitespace-nowrap shadow-sm">
                  {currentPattern.code} ({rotation}°)
                </div>
              </div>
            </div>

            {/* 3D Controls Strip (Angle Preset & Slider) */}
            <div className="relative z-10 bg-navyDark/90 p-2.5 rounded-sm border border-pearl/10 flex items-center justify-between gap-3 text-xs">
              {/* Quick Rotation Buttons */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setRotation(-30)}
                  className="px-2 py-1 rounded-[2px] text-[10px] bg-charcoal hover:bg-gold-500/20 text-pearl/80 hover:text-gold-300 border border-pearl/15"
                  title="Góc nghiêng trái -30°"
                >
                  -30°
                </button>
                <button
                  type="button"
                  onClick={() => setRotation(0)}
                  className="px-2 py-1 rounded-[2px] text-[10px] bg-charcoal hover:bg-gold-500/20 text-pearl/80 hover:text-gold-300 border border-pearl/15 font-semibold"
                  title="Góc nhìn chính diện 0°"
                >
                  0°
                </button>
                <button
                  type="button"
                  onClick={() => setRotation(30)}
                  className="px-2 py-1 rounded-[2px] text-[10px] bg-charcoal hover:bg-gold-500/20 text-pearl/80 hover:text-gold-300 border border-pearl/15"
                  title="Góc nghiêng phải +30°"
                >
                  +30°
                </button>
                <button
                  type="button"
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className={`p-1 rounded-[2px] border ${
                    isAutoRotating
                      ? 'bg-gold-500 text-navyDark border-gold-400'
                      : 'bg-charcoal text-pearl/80 border-pearl/15 hover:text-gold-300'
                  }`}
                  title={isAutoRotating ? 'Dừng tự động xoay' : 'Tự động xoay 3D'}
                >
                  {isAutoRotating ? <Pause size={12} /> : <Play size={12} />}
                </button>
              </div>

              {/* Angle Slider */}
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="range"
                  min="-45"
                  max="45"
                  value={rotation}
                  onChange={(e) => {
                    setIsAutoRotating(false);
                    setRotation(Number(e.target.value));
                  }}
                  className="w-full accent-gold-500 cursor-pointer h-1.5 bg-pearl/20 rounded-lg"
                />
                <span className="text-[10px] font-mono text-gold-300 w-7 text-right shrink-0">
                  {rotation}°
                </span>
              </div>
            </div>

            {/* Bottom Actions of 3D Panel */}
            <div className="relative z-10 pt-3 mt-3 border-t border-pearl/10 flex items-center justify-between gap-3">
              <div className="text-[11px] text-pearl/75 truncate">
                <span className="text-gold-400 font-semibold">{currentPattern.reliefType}</span>
                <span className="mx-1.5 text-pearl/30">•</span>
                <span>{currentPattern.depth}</span>
              </div>

              <Link
                href="/mau-3d"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm luxury-gold-gradient text-navyDark font-bold text-xs hover:opacity-95 shadow-sm transition-all shrink-0"
              >
                <Maximize2 size={12} />
                <span>Mẫu 3D Tương Tác</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
