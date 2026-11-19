'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Download, 
  FileCheck, 
  HelpCircle, 
  PhoneCall, 
  Tag, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { PRICING_TABLE_DATA } from '@/data/pricingData';

const PRICE_GROUPS = [
  { title: '1. Phào Chỉ Thạch Cao Nội Thất & Mâm Trần', subtitle: 'Trắng Tinh Khiết & Kháng Ẩm', categories: ['Phào Chỉ Thạch Cao Nội Thất', 'Mâm Trần & Phù Điêu'] },
  { title: '2. Xi Măng GFRC Ngoại Thất & Cấu Kiện Điêu Khắc', subtitle: 'Kháng Kiềm - Chịu Bão Gió', categories: ['Xi Măng GFRC Ngoại Thất'] },
  { title: '3. Vật Tư Liên Kết, Keo Dán T&P & Con Kê', subtitle: 'Chống Co Ngót Mối Nối', categories: ['Keo & Phụ Kiện'] },
];

const DISCOUNT_TIERS = [
  { tier: 'Hạng Bạc', discount: 'CK 15%', value: 'Công Trình < 50 Triệu', description: 'Phù hợp căn hộ, nhà phố nhỏ hoặc cải tạo phòng khách tân cổ điển.', benefits: ['Chiết khấu trực tiếp 15% trên giá niêm yết', 'Hỗ trợ cắt mẫu gửi tận công trình', 'Đổi trả 1-1 trong 48h nếu phát hiện cong vênh'] },
  { tier: 'Hạng Vàng', discount: 'CK 20%', value: 'Công Trình 50 - 150 Triệu', description: 'Dành cho biệt thự liền kề, nhà vườn kiểu Pháp hoặc cụm nhà hàng.', benefits: ['Chiết khấu 20% thẳng vào hóa đơn kho', 'Miễn phí vận chuyển toàn tỉnh Quảng Bình', 'Kỹ sư bóc tách bản vẽ CAD 2D/3D miễn phí', 'Tặng 1 thùng keo dán T&P 2 thành phần'], featured: true },
  { tier: 'Hạng Kim Cương', discount: 'CK 25%', value: 'Dự Án Lớn > 150 Triệu', description: 'Dành cho dinh thự, lâu đài đại quy mô và resort ven biển Quảng Bình.', benefits: ['Mức chiết khấu cao nhất 25%', 'Cơ chế bảo lãnh và gối đầu công nợ linh hoạt', 'Bảo hành cấu kiện GFRC lên đến 10 năm', 'Đặc quyền đúc khuôn độc bản theo yêu cầu'] },
];

const QUOTE_FAQS = [
  { question: '1. Giá phào chỉ tại kho Lệ Thủy đã bao gồm phí vận chuyển đến Đồng Hới hay Ba Đồn chưa?', answer: 'Bảng giá xuất xưởng là đơn giá bốc xếp tại kho tổng Tân Thủy, Lệ Thủy. Đơn hàng đạt giá trị từ 50 triệu đồng trở lên hoặc thuộc diện đối tác Hạng Vàng / Hạng Kim Cương được miễn phí cước xe tải giao tận chân công trình tại Quảng Bình. Với đơn lẻ, kho hỗ trợ ghép chuyến xe mỗi ngày với mức cước phù hợp.' },
  { question: '2. Mua lẻ số lượng ít (vài mét hoặc 1 mâm trần) có được tính giá kho không?', answer: 'Có. Kho phục vụ cả gia chủ và thợ sửa chữa nhà dù chỉ mua một mâm trần hay vài cây chỉ tường. Quý khách mua trực tiếp tại xưởng được hưởng giá xuất kho cạnh tranh và hỗ trợ hướng dẫn kỹ thuật lắp đặt.' },
  { question: '3. Đặt hàng số lượng lớn cho công trình biệt thự cần đặt cọc bao nhiêu %?', answer: 'Với đơn hàng có sẵn tại kho, tỷ lệ đặt cọc và lịch thanh toán được xác nhận theo khối lượng, thời điểm giao hàng và thỏa thuận đơn hàng. Cấu kiện GFRC đúc theo bản vẽ sẽ có điều khoản đặt cọc riêng trong hợp đồng sản xuất.' },
  { question: '4. Báo giá thi công trọn gói bao gồm những hạng mục nào? Có phát sinh không?', answer: 'Báo giá được bóc tách theo vật tư, phụ kiện, nhân công và phạm vi thi công thống nhất trước khi ký kết. Khối lượng và chi phí phát sinh (nếu có) cần được xác nhận với khách hàng trước khi thực hiện.' },
];

export default function CostEstimatorWidget() {
  const [roomType, setRoomType] = useState<'phong-khach' | 'phong-ngu' | 'biet-thu'>('phong-khach');
  const [perimeter, setPerimeter] = useState<number>(36); // Chu vi tường mét dài
  const [finishOption, setFinishOption] = useState<'white' | 'gold'>('white');
  const [includeWallFraming, setIncludeWallFraming] = useState<boolean>(true);

  // Form states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteLead, setQuoteLead] = useState({ name: '', phone: '', district: 'le-thuy', category: 'both', notes: '' });
  const [quoteLeadSubmitted, setQuoteLeadSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Đơn giá tính toán ước lượng
  const baseRateCornice = 55000; // 55k/m phào cổ trần
  const goldExtraCornice = 45000; // 45k/m thếp vàng
  const wallFrameRate = 35000; // 35k/m chỉ tường

  // Mét dài chỉ tường ước tính (thường gấp 1.5 lần chu vi nếu có chia ô khung tranh)
  const estimatedFrameMeters = includeWallFraming ? Math.round(perimeter * 1.4) : 0;
  const unitRateCornice = finishOption === 'gold' ? baseRateCornice + goldExtraCornice : baseRateCornice;

  const totalCorniceCost = perimeter * unitRateCornice;
  const totalFrameCost = estimatedFrameMeters * wallFrameRate;
  const laborEstimate = Math.round((perimeter + estimatedFrameMeters) * 35000); // 35k/m công dán hoàn thiện
  const grandTotal = totalCorniceCost + totalFrameCost + laborEstimate;

  const contractorSavings = Math.round(grandTotal * 0.2); // Tiết kiệm 20% khi lấy giá sỉ kho

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleQuoteLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuoteLeadSubmitted(true);
  };

  return (
    <div className="bg-pearl">
      <section className="relative overflow-hidden bg-primary-container text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#c5a059 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-label-caps uppercase text-gold-300"><Sparkles size={14} />Chính Sách Báo Giá Minh Bạch - Giá Tận Gốc Tại Kho Lệ Thủy</div>
              <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">Nhận Bảng Báo Giá Sỉ Tại Kho &amp; <span className="font-normal italic text-gold-300">Công Cụ Dự Toán Chi Phí Tự Động</span></h1>
              <p className="max-w-3xl text-sm leading-relaxed text-pearl/80 sm:text-base">Phân phối trực tiếp từ kho tổng Thành Phong - Tân Ninh, Tân Thủy, Lệ Thủy. Không qua đại lý trung gian; ưu đãi chiết khấu 15% - 25% cho đội thợ và nhà thầu tại Quảng Bình.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a className="inline-flex items-center gap-2 rounded-lg bg-gold-300 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navyDark shadow-lg transition hover:bg-gold-400" href="#du-toan-truc-tuyen"><Calculator size={17} />Dự Toán Công Trình Ngay</a>
                <a className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/20" href="#bang-gia-tong-hop"><FileCheck size={17} />Xem Bảng Giá Sỉ Từng Loại</a>
              </div>
            </div>
            <div className="space-y-3 rounded-xl bg-white/5 p-5 backdrop-blur-sm lg:col-span-4">
              <div className="flex items-baseline justify-between"><span className="text-xs uppercase tracking-wider text-pearl/60">Trữ Lượng Kho</span><strong className="font-serif text-2xl text-gold-300">120.000+ m</strong></div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[92%] rounded-full bg-gold-300" /></div>
              <div className="flex justify-between gap-3 text-xs text-pearl/70"><span>Sẵn sàng giao trong 2h</span><span className="text-right font-semibold text-gold-300">Hơn 1.200 mẫu GFRC &amp; Thạch Cao</span></div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['picture_as_pdf', 'Tải File PDF 30 Giây', 'Hơn 1.000 mẫu đúc sẵn có mã hiệu, quy cách mét dài và thông số kỹ thuật.'],
              ['savings', 'Chiết Khấu Thầu 15% - 25%', 'Cơ chế giá xuất kho bảo toàn lợi nhuận cho đội thợ và tổng thầu.'],
              ['architecture', 'Bóc Tách CAD/3D 0đ', 'Kỹ sư hỗ trợ đọc bản vẽ, tính khối lượng và dự toán.'],
              ['local_shipping', 'Giao Tận Nơi 2 - 4 Giờ', 'Đội xe chuyên dụng giao an toàn khắp Quảng Bình.'],
            ].map(([icon, title, description]) => (
              <article className="rounded-xl bg-white/10 p-4 backdrop-blur-md transition hover:-translate-y-1" key={title}>
                <span className="material-symbols-outlined mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-300/20 text-xl text-gold-300">{icon}</span>
                <h2 className="mb-1 font-serif text-base font-bold text-white">{title}</h2>
                <p className="text-xs leading-relaxed text-pearl/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <section id="du-toan-truc-tuyen">
          <div className="mx-auto mb-8 max-w-3xl space-y-2 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Công Cụ Tính Toán Dự Toán Độc Quyền</span>
            <h2 className="font-serif text-2xl font-bold text-navyDark sm:text-3xl">Ước Tính Chi Phí Phào Chỉ Trong 1 Phút</h2>
            <p className="text-sm text-navyDark/70">Chọn thông số công trình để ước tính khối lượng, vật tư và nhân công dựa trên các hạng mục phổ biến tại Quảng Bình.</p>
          </div>

        {/* 2-Column Calculator + Result Section */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-navyDark/10 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-navyDark/10">
              <h2 className="font-serif font-bold text-lg text-navyDark flex items-center gap-2">
                <Calculator size={18} className="text-gold-600" />
                <span>1. Chọn Thông Số Công Trình</span>
              </h2>
              <span className="text-[11px] text-navyDark/50 font-medium">Bước 1 / 2</span>
            </div>

            {/* Room Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-navyDark uppercase tracking-wider block">
                Loại Không Gian Cần Đắp Phào:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'phong-khach', label: 'Phòng Khách', defaultP: 40 },
                  { key: 'phong-ngu', label: 'Phòng Ngủ Master', defaultP: 24 },
                  { key: 'biet-thu', label: 'Toàn Bộ Biệt Thự', defaultP: 120 },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setRoomType(item.key as any);
                      setPerimeter(item.defaultP);
                    }}
                    className={`py-2.5 px-3 rounded-sm text-xs font-bold tracking-wider uppercase border transition-all text-center ${
                      roomType === item.key
                        ? 'bg-navyDark text-gold-400 border-gold-400 shadow-sm'
                        : 'bg-cream text-navyDark/80 border-navyDark/10 hover:bg-gold-500/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Perimeter Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-navyDark uppercase tracking-wider">
                  Chu Vi Trần Cần Đắp (Mét Dài):
                </label>
                <div className="flex items-center gap-1.5 font-bold text-gold-600 text-base bg-cream px-3 py-1 rounded-sm border border-navyDark/10">
                  <span>{perimeter}</span>
                  <span className="text-xs text-navyDark/50 font-normal">mét</span>
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="2"
                value={perimeter}
                onChange={(e) => setPerimeter(Number(e.target.value))}
                className="w-full accent-gold-500 h-2 bg-cream rounded-sm cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-navyDark/40">
                <span>10m (Phòng nhỏ)</span>
                <span>80m (Nhà phố)</span>
                <span>250m+ (Lâu đài)</span>
              </div>
            </div>

            {/* Finish Options */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-navyDark uppercase tracking-wider block">
                Tùy Chọn Hoàn Thiện Bề Mặt:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFinishOption('white')}
                  className={`p-3 rounded-sm text-left border transition-all ${
                    finishOption === 'white'
                      ? 'bg-gold-500/10 border-gold-400 shadow-sm'
                      : 'bg-cream/40 border-navyDark/10 hover:border-navyDark/20'
                  }`}
                >
                  <span className="font-bold text-xs text-navyDark block">Phào Thạch Cao Trắng Sứ</span>
                  <span className="text-[11px] text-navyDark/60 block mt-0.5">Sơn trắng ngọc trai thanh lịch</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFinishOption('gold')}
                  className={`p-3 rounded-sm text-left border transition-all ${
                    finishOption === 'gold'
                      ? 'bg-gold-500/15 border-gold-400 shadow-sm'
                      : 'bg-cream/40 border-navyDark/10 hover:border-navyDark/20'
                  }`}
                >
                  <span className="font-bold text-xs text-gold-700 block">Thếp Vàng Lá 24K Điểm Xuyết</span>
                  <span className="text-[11px] text-navyDark/60 block mt-0.5">Dát vàng hoa văn sang trọng</span>
                </button>
              </div>
            </div>

            {/* Checkbox for Wall Framing */}
            <div className="pt-2">
              <label className="flex items-center gap-3 p-3.5 bg-cream rounded-sm border border-navyDark/10 cursor-pointer hover:bg-cream/80 transition-colors">
                <input
                  type="checkbox"
                  checked={includeWallFraming}
                  onChange={(e) => setIncludeWallFraming(e.target.checked)}
                  className="w-4 h-4 accent-gold-500 rounded-sm cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-bold text-navyDark block">Kèm Chỉ Bo Khung Tranh Tường Tân Cổ Điển</span>
                  <span className="text-navyDark/60 text-[11px]">Tự động ước lượng thêm ~{estimatedFrameMeters}m chỉ tường tỷ lệ chuẩn</span>
                </div>
              </label>
            </div>
          </div>

          {/* Right Column: Estimated Summary & Lead Form (5 cols) */}
          <div className="lg:col-span-5 bg-navyDark text-pearl p-6 sm:p-8 rounded-sm border-2 border-gold-400 shadow-xl space-y-6">
            <div>
              <span className="text-gold-400 text-[10px] font-bold uppercase tracking-widest block mb-1">
                Bảng Bóc Tách Dự Toán Nhanh
              </span>
              <h2 className="font-serif font-bold text-xl text-white">
                Tổng Chi Phí Dự Kiến
              </h2>
            </div>

            {/* Price Calculations */}
            <div className="space-y-3 p-4 bg-charcoal rounded-sm border border-pearl/10 text-xs">
              <div className="flex justify-between items-center text-pearl/80">
                <span>Phào cổ trần ({perimeter}m):</span>
                <strong className="text-white font-mono">{totalCorniceCost.toLocaleString('vi-VN')}₫</strong>
              </div>
              {includeWallFraming && (
                <div className="flex justify-between items-center text-pearl/80">
                  <span>Chỉ bo khung tường ({estimatedFrameMeters}m):</span>
                  <strong className="text-white font-mono">{totalFrameCost.toLocaleString('vi-VN')}₫</strong>
                </div>
              )}
              <div className="flex justify-between items-center text-pearl/80">
                <span>Nhân công thi công sắc nét:</span>
                <strong className="text-white font-mono">{laborEstimate.toLocaleString('vi-VN')}₫</strong>
              </div>
              <div className="pt-3 border-t border-pearl/15 flex justify-between items-baseline">
                <span className="font-bold text-gold-300 text-sm">Tổng Dự Toán Trọn Gói:</span>
                <strong className="text-gold-400 font-bold text-xl font-mono">
                  {grandTotal.toLocaleString('vi-VN')}₫
                </strong>
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/40 p-2 rounded-[2px] border border-emerald-500/20 text-center">
                ✓ Giá sỉ tận kho giúp bạn tiết kiệm khoảng {contractorSavings.toLocaleString('vi-VN')}₫!
              </div>
            </div>

            {/* Lead Capture Form */}
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <span className="text-xs font-bold text-white block uppercase tracking-wider">
                  Nhận Bảng Báo Giá Chi Tiết Bản PDF Qua Zalo:
                </span>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên của bạn..."
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-charcoal border border-pearl/20 rounded-sm px-3 py-2.5 text-xs text-white placeholder-pearl/40 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại / Zalo nhận file..."
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-charcoal border border-pearl/20 rounded-sm px-3 py-2.5 text-xs text-white placeholder-pearl/40 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 luxury-gold-gradient text-navyDark font-bold text-xs uppercase tracking-wider py-3 rounded-sm hover:opacity-95 shadow-md transition-opacity"
                >
                  <Download size={14} />
                  <span>Tải File Báo Giá PDF (Miễn Phí)</span>
                </button>
              </form>
            ) : (
              <div className="p-4 bg-emerald-900/40 border border-emerald-400 rounded-sm space-y-2 text-center text-xs">
                <p className="font-bold text-emerald-300 text-sm">✓ Đăng Ký Thành Công!</p>
                <p className="text-pearl/80">
                  Cảm ơn anh/chị <strong>{customerName}</strong> ({customerPhone}). Kỹ thuật viên kho Lệ Thủy sẽ liên hệ gửi file báo giá PDF chiết khấu thầu sau 5 phút.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-gold-400 underline text-[11px] font-semibold mt-2 block mx-auto"
                >
                  Tính toán lại dự toán khác
                </button>
              </div>
            )}
          </div>
        </div>

        </section>

        <section className="space-y-6" id="bang-gia-tong-hop">
          <div className="flex flex-col justify-between gap-3 border-t border-navyDark/10 pt-8 md:flex-row md:items-end">
            <div><span className="text-xs font-bold uppercase tracking-widest text-gold-600">Cập Nhật Trực Tiếp Từ Xưởng Sản Xuất</span><h2 className="mt-1 font-serif text-2xl font-bold text-navyDark sm:text-3xl">Bảng Báo Giá Sỉ Tại Kho Lệ Thủy</h2><p className="mt-1 max-w-2xl text-sm text-navyDark/70">Đơn giá xuất buôn tại xưởng. Nhà thầu và đại lý theo sản lượng vui lòng liên hệ để nhận chính sách chiết khấu.</p></div>
            <span className="inline-flex w-fit items-center gap-2 rounded bg-white px-3 py-1.5 text-xs font-bold uppercase text-gold-600 shadow-sm"><span className="h-2 w-2 animate-pulse rounded-full bg-gold-500" />Giá tham khảo tại kho</span>
          </div>
          {PRICE_GROUPS.map((group) => {
            const rows = PRICING_TABLE_DATA.filter((row) => group.categories.includes(row.category));
            return (
              <div className="overflow-hidden rounded-xl bg-white shadow-md" key={group.title}>
                <div className="flex items-center justify-between gap-3 bg-navyDark px-4 py-3.5 text-white"><h3 className="flex items-center gap-2 font-serif text-base font-bold"><Tag size={17} className="text-gold-300" />{group.title}</h3><span className="hidden font-label-caps uppercase text-gold-300 sm:inline">{group.subtitle}</span></div>
                <div className="overflow-x-auto"><table className="w-full min-w-[760px] border-collapse text-left text-xs">
                  <thead><tr className="bg-cream text-[10px] uppercase tracking-wider text-navyDark/70"><th className="px-4 py-3">Tên Sản Phẩm</th><th className="px-4 py-3">Quy Cách Kỹ Thuật</th><th className="px-4 py-3">ĐVT</th><th className="px-4 py-3 text-right">Giá Đại Lý / Thợ</th><th className="px-4 py-3 text-right">Giá Bán Lẻ</th><th className="px-4 py-3">Tình Trạng / Ghi Chú</th></tr></thead>
                  <tbody className="divide-y divide-navyDark/5 text-navyDark/90">{rows.map((row) => <tr className="transition-colors hover:bg-cream/40" key={row.name}><td className="px-4 py-3.5"><strong className="block text-navyDark">{row.name}</strong><span className="text-[10px] text-gold-700">{row.category}</span></td><td className="px-4 py-3.5 text-navyDark/70">{row.spec}</td><td className="px-4 py-3.5">{row.unit}</td><td className="px-4 py-3.5 text-right font-bold text-gold-600">{row.contractorPrice}</td><td className="px-4 py-3.5 text-right text-navyDark/50 line-through">{row.retailPrice}</td><td className="px-4 py-3.5 text-[11px] text-navyDark/60">{row.notes}</td></tr>)}</tbody>
                </table></div>
              </div>
            );
          })}
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-md md:flex-row"><div className="flex items-center gap-3"><span className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-lg bg-gold-300/30 text-2xl text-gold-600">download</span><div><h3 className="font-serif text-base font-bold text-navyDark">Cần bảng giá PDF / Excel chi tiết?</h3><p className="text-xs text-navyDark/70">Liên hệ kho để nhận profile, định mức keo và bảng giá theo sản lượng.</p></div></div><a className="inline-flex items-center gap-2 rounded-lg bg-navyDark px-5 py-2.5 text-xs font-bold uppercase text-gold-300 transition hover:bg-black" href="/lien-he"><Download size={15} />Yêu Cầu Bảng Giá</a></div>
        </section>

        <section className="space-y-8 py-4">
          <div className="mx-auto max-w-3xl space-y-2 text-center"><span className="text-xs font-bold uppercase tracking-widest text-gold-600">Hợp Tác Bền Vững - Tăng Trưởng Lợi Nhuận</span><h2 className="font-serif text-2xl font-bold text-navyDark sm:text-3xl">Chính Sách Chiết Khấu Độc Quyền Thợ Thầu</h2><p className="text-sm text-navyDark/70">Chính sách giá theo giá trị công trình và sản lượng thực tế. Liên hệ kho để xác nhận điều kiện áp dụng.</p></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {DISCOUNT_TIERS.map((tier) => <article className={`relative flex flex-col rounded-xl p-6 shadow-md transition hover:-translate-y-1 ${tier.featured ? 'bg-navyDark text-white shadow-xl' : 'bg-white text-navyDark'}`} key={tier.tier}>
              {tier.featured && <span className="absolute -top-3 right-6 rounded bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow">Phổ Biến Nhất</span>}
              <div className="mb-4 flex items-center justify-between gap-2"><span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase ${tier.featured ? 'bg-white/15 text-gold-300' : 'bg-cream text-navyDark/70'}`}>{tier.tier}</span><strong className={`font-serif text-2xl ${tier.featured ? 'text-gold-300' : 'text-gold-600'}`}>{tier.discount}</strong></div>
              <h3 className="mb-2 font-serif text-lg font-bold">{tier.value}</h3><p className={`mb-4 text-xs ${tier.featured ? 'text-pearl/70' : 'text-navyDark/70'}`}>{tier.description}</p>
              <ul className="mb-6 flex-1 space-y-2.5 text-xs">{tier.benefits.map((benefit) => <li className="flex items-start gap-2" key={benefit}><span className={`material-symbols-outlined text-sm ${tier.featured ? 'text-gold-300' : 'text-gold-600'}`}>check_circle</span><span>{benefit}</span></li>)}</ul>
              <a className={`block rounded-lg px-4 py-2.5 text-center text-xs font-bold uppercase transition ${tier.featured ? 'bg-gold-300 text-navyDark hover:bg-gold-400' : 'bg-cream text-navyDark hover:bg-gold-300'}`} href="/lien-he">Đăng Ký Đối Tác</a>
            </article>)}
          </div>
        </section>

        <section className="rounded-2xl bg-surface-container-high p-4 sm:p-8" id="form-dang-ky-bao-gia">
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-5 shadow-xl sm:p-8">
            <div className="mx-auto mb-6 max-w-2xl space-y-1 text-center"><span className="text-xs font-bold uppercase tracking-widest text-gold-600">Phản Hồi Kỹ Thuật Siêu Tốc</span><h2 className="font-serif text-2xl font-bold text-navyDark">Đăng Ký Nhận Báo Giá Xuất Xưởng</h2><p className="text-xs text-navyDark/70">Để lại thông tin để chuyên viên liên hệ tư vấn và xác nhận bảng bóc tách phù hợp.</p></div>
            {!quoteLeadSubmitted ? <form className="space-y-4" onSubmit={handleQuoteLeadSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><label className="mb-1.5 block text-xs font-bold text-navyDark" htmlFor="quote-full-name">Họ và Tên Quý Khách / Nhà Thầu *</label><input className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark focus:outline-none focus:ring-1 focus:ring-gold-500" id="quote-full-name" placeholder="Ví dụ: Anh Nguyễn Văn Hoàng" required value={quoteLead.name} onChange={(event) => setQuoteLead({ ...quoteLead, name: event.target.value })} /></div><div><label className="mb-1.5 block text-xs font-bold text-navyDark" htmlFor="quote-phone">Số Điện Thoại / Zalo *</label><input className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark focus:outline-none focus:ring-1 focus:ring-gold-500" id="quote-phone" placeholder="Ví dụ: 0919 051 xxx" required type="tel" value={quoteLead.phone} onChange={(event) => setQuoteLead({ ...quoteLead, phone: event.target.value })} /></div></div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><label className="mb-1.5 block text-xs font-bold text-navyDark" htmlFor="quote-district">Địa Điểm Công Trình *</label><select className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark" id="quote-district" required value={quoteLead.district} onChange={(event) => setQuoteLead({ ...quoteLead, district: event.target.value })}><option value="le-thuy">Huyện Lệ Thủy</option><option value="dong-hoi">TP. Đồng Hới</option><option value="quang-ninh">Huyện Quảng Ninh</option><option value="bo-trach">Huyện Bố Trạch</option><option value="ba-don">Thị xã Ba Đồn</option><option value="quang-trach">Huyện Quảng Trạch</option><option value="tuyen-hoa">Huyện Tuyên Hóa</option><option value="minh-hoa">Huyện Minh Hóa</option><option value="other">Tỉnh lân cận</option></select></div><div><label className="mb-1.5 block text-xs font-bold text-navyDark" htmlFor="quote-category">Hạng Mục Cần Tư Vấn *</label><select className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark" id="quote-category" required value={quoteLead.category} onChange={(event) => setQuoteLead({ ...quoteLead, category: event.target.value })}><option value="both">Trọn gói phào nội thất &amp; GFRC</option><option value="interior">Phào chỉ thạch cao nội thất</option><option value="gfrc">Bê tông GFRC ngoại thất</option><option value="baluster">Lục bình bê tông / con kê</option><option value="glue">Keo T&amp;P và vật tư phụ</option></select></div></div>
              <div><label className="mb-1.5 block text-xs font-bold text-navyDark" htmlFor="quote-file">Bản Vẽ CAD / PDF / Hình Ảnh (nếu có)</label><input className="w-full rounded-lg bg-cream px-4 py-3 text-xs text-navyDark file:mr-3 file:rounded file:border-0 file:bg-white file:px-3 file:py-1.5" id="quote-file" type="file" accept=".dwg,.pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" /></div>
              <div><label className="mb-1.5 block text-xs font-bold text-navyDark" htmlFor="quote-notes">Ghi Chú Hoặc Khối Lượng Dự Kiến</label><textarea className="w-full rounded-lg bg-cream px-4 py-3 text-sm text-navyDark focus:outline-none focus:ring-1 focus:ring-gold-500" id="quote-notes" rows={3} placeholder="Ví dụ: Nhà 2 tầng tại Đồng Hới, cần bóc tách phào cổ trần..." value={quoteLead.notes} onChange={(event) => setQuoteLead({ ...quoteLead, notes: event.target.value })} /></div>
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-300 px-4 py-4 text-xs font-bold uppercase tracking-wider text-navyDark shadow-xl transition hover:bg-gold-400" type="submit"><Download size={18} />Gửi Yêu Cầu Nhận Báo Giá Qua Zalo Trong 5 Phút</button>
            </form> : <div className="rounded-lg bg-cream p-5 text-center" role="status"><span className="material-symbols-outlined text-3xl text-gold-600">check_circle</span><h3 className="font-serif text-lg font-bold text-navyDark">Tiếp nhận yêu cầu thành công!</h3><p className="text-sm text-navyDark/70">Cảm ơn {quoteLead.name}. Chuyên viên sẽ liên hệ qua số {quoteLead.phone} để tư vấn báo giá.</p></div>}
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-5" aria-labelledby="quote-faq-title">
          <div className="text-center"><span className="text-xs font-bold uppercase tracking-widest text-gold-600">Minh Bạch - Rõ Ràng</span><h2 className="mt-1 font-serif text-2xl font-bold text-navyDark" id="quote-faq-title">Câu Hỏi Thường Gặp Về Báo Giá &amp; Giao Nhận</h2></div>
          <div className="space-y-2">{QUOTE_FAQS.map((faq, index) => { const isOpen = openFaq === index; const answerId = `quote-faq-answer-${index}`; return <article className="overflow-hidden rounded-xl bg-cream" key={faq.question}><h3><button className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-serif text-sm font-bold text-navyDark transition hover:text-gold-600" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{faq.question}</span><span className={`material-symbols-outlined shrink-0 text-gold-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span></button></h3>{isOpen && <p className="px-4 pb-4 text-sm leading-relaxed text-navyDark/75" id={answerId}>{faq.answer}</p>}</article>; })}</div>
        </section>
      </div>
    </div>
  );
}
