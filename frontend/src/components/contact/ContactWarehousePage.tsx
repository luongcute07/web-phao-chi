'use client';

import React, { useState } from 'react';

const DELIVERY_ZONES = [
  { name: 'Huyện Lệ Thủy', time: '1 - 2 Giờ', places: 'Kiến Giang, Cam Thủy, An Thủy, Mai Thủy, Mỹ Thủy, Tân Thủy, Sen Thủy...' },
  { name: 'TP. Đồng Hới', time: '2 Giờ', places: 'Bắc Lý, Đồng Phú, Nam Lý, Hải Thành, Đức Ninh Đông, Bảo Ninh...' },
  { name: 'Huyện Quảng Ninh', time: '2 Giờ', places: 'Quán Hàu, Gia Ninh, Võ Ninh, Duy Ninh, Lương Ninh, Vĩnh Ninh...' },
  { name: 'Huyện Bố Trạch', time: '3 Giờ', places: 'Hoàn Lão, Phong Nha, Thanh Trạch, Nhân Trạch, Trung Trạch, Nam Trạch...' },
  { name: 'Thị Xã Ba Đồn', time: '3 Giờ', places: 'Phường Ba Đồn, Quảng Long, Quảng Phong, Quảng Thọ, Quảng Thuận...' },
  { name: 'Huyện Quảng Trạch', time: '3 - 4 Giờ', places: 'Cảnh Dương, Quảng Xuân, Quảng Hưng, Quảng Đông, KKT Hòn La...' },
  { name: 'Tuyên Hóa & Minh Hóa', time: '4 Giờ', places: 'Đồng Lê, Quy Đạt, Mai Hóa, Châu Hóa, Tiến Hóa (giao tận chân công trình).' },
  { name: 'Vĩnh Linh (Quảng Trị)', time: '2 - 3 Giờ', places: 'Hồ Xá, Bến Quan, Vĩnh Chấp, Vĩnh Thủy (tiếp giáp mạn Nam Lệ Thủy).' },
];

const COMMITMENTS = [
  {
    icon: 'workspace_premium',
    title: '100% Hàng Mới Xuất Xưởng',
    description: 'Mọi kiện hàng phào thạch cao và GFRC đều là hàng loại 1 chuẩn thương hiệu Thành Phong. Tuyệt đối không bán hàng lưu bãi ẩm mốc, hàng tồn ẩm rêu phong hay phào bể cạnh.',
    detailIcon: 'verified_user',
    detail: 'Nguyên tem mác nhà máy',
  },
  {
    icon: 'published_with_changes',
    title: 'Đền Bù Gấp Đôi Nếu Lỗi',
    description: 'Nếu bàn giao sản phẩm phát hiện cong vênh kết cấu, nứt gãy trong quá trình vận chuyển hoặc không chuẩn kích thước mẫu mã đã duyệt, tổng kho cam kết 1 đổi 1 và bồi hoàn thỏa đáng.',
    detailIcon: 'security',
    detail: 'Bảo hành kết cấu 10 năm',
  },
  {
    icon: 'loyalty',
    title: 'Chính Sách Thầu Thợ Tốt Nhất',
    description: 'Bảng giá sỉ trực tiếp đại lý cấp 1 không qua khâu trung gian thương mại. Hỗ trợ gửi mẫu tận nơi, công nợ linh hoạt cho nhà thầu thân thiết và chiết khấu bậc thang theo sản lượng.',
    detailIcon: 'handshake',
    detail: 'Đồng hành dài lâu cùng thợ thi công',
  },
];

const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60987.89209569752!2d106.74415848529241!3d17.20233076899723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314757c3d28929a7%3A0x6b63d9136e05697a!2zVMOibiBUaOG7p3ksIEzhu4cgVGjhu6d5LCBRdeG6o25nIELDrG5o!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn';

export default function ContactWarehousePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'all',
    areaSize: '',
    notes: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <section
        className="relative overflow-hidden bg-primary-container text-on-primary"
        id="lien-he-kho"
        style={{
          backgroundImage: "linear-gradient(rgba(18,31,45,.88), rgba(18,31,45,.92)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4jTdw6AXFcAp4hxMjzzirzHAILBewzth-8ellEFena6RC-jSrlu4z78PQsLMtcvIwr9GEnSqVZ6v7V5S3wHLo-NgaFZ3DAARYlP9TbmW26zWIq1sW2G9P8DtCRd0mS6NTmiTUkdjZsgkark_rtBweuYkBR6Q3UOKNIpVndo3SiK0BElJV-pS4DyTujxFA1YPK9rCrHO1jtbTcyXaXPH255o2k4UyYufTvGSV32zhe')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto max-w-7xl px-margin-mobile py-space-2xl md:px-margin md:py-space-3xl">
          <div className="flex flex-col gap-space-xl lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-space-md">
              <div className="inline-flex items-center gap-space-xs rounded-lg bg-surface-container-highest/20 px-space-md py-1 font-label-caps uppercase text-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Tổng Kho Cấp 1 Phào Chỉ Thành Phong Tại Quảng Bình</span>
              </div>
              <h1 className="font-headline-xl leading-tight text-on-primary">
                Liên Hệ Tổng Kho Phào Chỉ Thạch Cao &amp; Xi Măng GFRC Thành Phong Quảng Bình
              </h1>
              <p className="font-headline-sm font-medium text-secondary-fixed">
                Đại lý phân phối trực tiếp cấp 1 – Sẵn sàng tư vấn kỹ thuật 24/7 &amp; cung ứng vật tư tức thì toàn tỉnh Quảng Bình
              </p>
              <p className="max-w-2xl font-body-md leading-relaxed text-on-primary-container">
                Chúng tôi sở hữu tổng kho lưu trữ sẵn hơn 10.000m dài phào chỉ thạch cao nội thất chống ẩm, phào ngoại thất GFRC cốt sợi thủy tinh, phù điêu đầu cột Corinthian, con sơn đúc sẵn và keo chuyên dụng T&amp;P tại Lệ Thủy.
              </p>
            </div>
            <div className="grid shrink-0 gap-space-md rounded-xl bg-surface-container-highest/10 p-space-lg backdrop-blur-md sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-space-md">
                <span className="material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary-fixed text-[26px] text-primary-container">local_shipping</span>
                <div><h2 className="font-headline-md text-on-primary">2 - 4 Giờ</h2><p className="font-label-sm text-on-primary-container">Giao hỏa tốc các huyện &amp; TP. Đồng Hới</p></div>
              </div>
              <div className="flex items-center gap-space-md">
                <span className="material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-[26px] text-on-secondary">precision_manufacturing</span>
                <div><h2 className="font-headline-md text-on-primary">100% Gốc Kho</h2><p className="font-label-sm text-on-primary-container">Giá sỉ đại lý – Chiết khấu thợ thầu cao nhất</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-8 w-full max-w-7xl px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-xl transition hover:-translate-y-1">
            <div>
              <span className="material-symbols-outlined mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-high text-[26px] text-secondary">warehouse</span>
              <span className="font-label-caps uppercase font-bold text-secondary">Địa Chỉ Kho Hàng</span>
              <h2 className="mb-space-xs mt-space-xs font-headline-sm text-on-surface">Tân Ninh, Tân Thủy</h2>
              <p className="font-body-sm leading-relaxed text-on-surface-variant">Huyện Lệ Thủy, Tỉnh Quảng Bình. Mặt tiền đường rộng rãi, xe tải 15 tấn quay đầu vào tận cửa kho nhận hàng.</p>
            </div>
            <a className="mt-space-md inline-flex items-center gap-space-xs font-label-md text-secondary transition hover:underline" href="#huong-dan-duong-di">Xem chỉ dẫn đường <span className="material-symbols-outlined text-[16px]">arrow_downward</span></a>
          </article>

          <article className="flex flex-col justify-between rounded-xl bg-primary-container p-space-lg text-on-primary shadow-xl transition hover:-translate-y-1">
            <div>
              <span className="material-symbols-outlined mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-fixed text-[26px] text-primary-container">engineering</span>
              <span className="font-label-caps uppercase font-bold text-secondary-fixed">Kỹ Thuật &amp; Báo Giá Dự Án</span>
              <h2 className="mb-space-xs mt-space-xs font-headline-sm">0919.051.066</h2>
              <p className="font-body-sm leading-relaxed text-on-primary-container">Kỹ sư tư vấn bóc tách khối lượng bản vẽ, phối cảnh 3D phào chỉ và báo giá công trình tân cổ điển (Zalo 24/7).</p>
            </div>
            <div className="mt-space-md flex gap-space-xs">
              <a className="flex-1 rounded-lg bg-secondary-fixed py-space-xs text-center font-label-caps uppercase text-primary-container transition hover:bg-secondary/90" href="tel:0919051066">Gọi Ngay</a>
              <a className="rounded-lg bg-surface-container-highest/20 px-space-md py-space-xs font-label-caps uppercase text-on-primary transition hover:bg-surface-container-highest/40" href="https://zalo.me/0919051066" rel="noopener noreferrer" target="_blank">Zalo</a>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-xl transition hover:-translate-y-1">
            <div>
              <span className="material-symbols-outlined mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-high text-[26px] text-secondary">shopping_cart_checkout</span>
              <span className="font-label-caps uppercase font-bold text-secondary">Kinh Doanh &amp; Đặt Hàng</span>
              <h2 className="mb-space-xs mt-space-xs font-headline-sm text-on-surface">0819.519.179</h2>
              <p className="font-body-sm leading-relaxed text-on-surface-variant">Hỗ trợ kiểm kê tồn kho theo mã cây phào, đặt hàng hoa góc dát vàng, mâm trần PU/Thạch cao và xuất hóa đơn VAT.</p>
            </div>
            <a className="mt-space-md inline-flex items-center gap-space-xs font-label-md text-secondary transition hover:underline" href="tel:0819519179"><span className="material-symbols-outlined text-[18px]">phone_enabled</span>Gọi 0819.519.179</a>
          </article>

          <article className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-xl transition hover:-translate-y-1">
            <div>
              <span className="material-symbols-outlined mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-high text-[26px] text-secondary">schedule</span>
              <span className="font-label-caps uppercase font-bold text-secondary">Thời Gian Phục Vụ</span>
              <h2 className="mb-space-xs mt-space-xs font-headline-sm text-on-surface">07:00 – 18:30</h2>
              <p className="font-body-sm leading-relaxed text-on-surface-variant">Làm việc từ Thứ Hai đến Chủ Nhật (kể cả ngày lễ). Email nhận hồ sơ bản vẽ kiến trúc CAD/PDF:</p>
              <p className="mt-space-xs break-all font-body-sm font-semibold text-primary">phaochiquangbinh@gmail.com</p>
            </div>
            <a className="mt-space-md inline-flex items-center gap-space-xs font-label-md text-secondary transition hover:underline" href="mailto:phaochiquangbinh@gmail.com">Gửi bản vẽ kiến trúc <span className="material-symbols-outlined text-[16px]">mail</span></a>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-margin-mobile py-space-3xl md:px-margin">
        <div className="grid grid-cols-1 items-start gap-space-xl lg:grid-cols-12">
          <div className="relative rounded-xl bg-surface-container-lowest p-space-lg shadow-xl md:p-space-xl lg:col-span-7" id="contact-rfq-form">
            <div className="mb-space-lg">
              <div className="mb-space-xs inline-flex items-center gap-space-xs font-label-caps uppercase tracking-widest text-secondary"><span className="material-symbols-outlined text-[16px]">draw</span>Báo Giá Nhanh Sau 15 Phút</div>
              <h2 className="font-headline-lg text-on-surface">Gửi Bản Vẽ / Yêu Cầu Báo Giá Trực Tiếp</h2>
              <p className="mt-space-xs font-body-md text-on-surface-variant">Quý chủ nhà, kiến trúc sư và nhà thầu vui lòng để lại thông tin để nhận bảng báo giá chi tiết phào chỉ thạch cao &amp; xi măng GFRC kèm mức chiết khấu công trình cao nhất.</p>
            </div>

            {!submitted ? (
              <form className="space-y-space-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div><label className="mb-1 block font-label-md text-on-surface" htmlFor="fullName">Họ &amp; Tên Khách Hàng <span className="text-red-600">*</span></label><input className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm font-body-md text-on-surface shadow-sm transition focus:bg-surface-container-lowest focus:outline-none" id="fullName" placeholder="Ví dụ: Anh Hoàng - Đồng Hới" required type="text" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} /></div>
                  <div><label className="mb-1 block font-label-md text-on-surface" htmlFor="phoneNumber">Số Điện Thoại / Zalo Nhận Báo Giá <span className="text-red-600">*</span></label><input className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm font-body-md text-on-surface shadow-sm transition focus:bg-surface-container-lowest focus:outline-none" id="phoneNumber" placeholder="0919 xxx xxx" required type="tel" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} /></div>
                </div>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div><label className="mb-1 block font-label-md text-on-surface" htmlFor="projectType">Hạng Mục Quan Tâm</label><select className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm font-body-md text-on-surface shadow-sm transition focus:bg-surface-container-lowest focus:outline-none" id="projectType" value={formData.projectType} onChange={(event) => setFormData({ ...formData, projectType: event.target.value })}><option value="all">Trọn gói Phào chỉ Thạch Cao + Xi Măng GFRC</option><option value="thachcao">Phào chỉ Thạch Cao Nội Thất Tân Cổ Điển</option><option value="gfrc">Phào chỉ Xi Măng GFRC Ngoại Thất Mặt Tiền</option><option value="lucbinh">Lục Bình Bê Tông &amp; Lan Can Biệt Thự</option><option value="mamtran">Mâm Trần &amp; Hoa Góc Dát Vàng</option><option value="keodan">Keo Dán 2 Thành Phần T&amp;P &amp; Con Kê</option></select></div>
                  <div><label className="mb-1 block font-label-md text-on-surface" htmlFor="areaSize">Quy Mô / Địa Bàn Dự Kiến</label><input className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm font-body-md text-on-surface shadow-sm transition focus:bg-surface-container-lowest focus:outline-none" id="areaSize" placeholder="VD: Biệt thự 3 tầng - Ba Đồn" value={formData.areaSize} onChange={(event) => setFormData({ ...formData, areaSize: event.target.value })} /></div>
                </div>
                <div>
                  <label className="mb-1 block font-label-md text-on-surface" htmlFor="cadFile">Đính Kèm Ảnh Hiện Trạng / Bản Vẽ CAD / Mặt Bằng (nếu có)</label>
                  <div className="flex flex-col justify-between gap-space-sm rounded-lg bg-surface-container-low p-space-md sm:flex-row sm:items-center">
                    <div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[24px] text-secondary">cloud_upload</span><span className="font-body-sm text-on-surface-variant">Chọn file PDF, DWG, JPG hoặc PNG</span></div>
                    <input className="max-w-full font-label-sm text-on-surface file:mr-2 file:cursor-pointer file:rounded file:border-0 file:bg-surface-container-highest file:px-3 file:py-1 file:text-on-surface" id="cadFile" type="file" accept=".pdf,.dwg,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" />
                  </div>
                </div>
                <div><label className="mb-1 block font-label-md text-on-surface" htmlFor="noteMessage">Yêu Cầu Chi Tiết / Danh Mục Mã Phào</label><textarea className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm font-body-md text-on-surface shadow-sm transition focus:bg-surface-container-lowest focus:outline-none" id="noteMessage" placeholder="Nhập yêu cầu cụ thể như: Cần mẫu phào cổ trần 12cm chống ẩm, 2 mâm trần 80cm dát vàng..." rows={4} value={formData.notes} onChange={(event) => setFormData({ ...formData, notes: event.target.value })} /></div>
                <button className="flex w-full items-center justify-center gap-space-xs rounded-lg bg-primary-container px-space-xl py-space-md font-label-caps uppercase font-bold text-secondary-fixed shadow-lg transition hover:bg-primary active:scale-[0.99]" type="submit"><span className="material-symbols-outlined text-[20px]">send</span>Gửi Yêu Cầu Báo Giá Tận Kho</button>
              </form>
            ) : (
              <div className="flex items-start gap-space-sm rounded-lg bg-secondary-fixed/20 p-space-md text-on-surface" id="form-success-banner" role="status">
                <span className="material-symbols-outlined text-[22px] text-secondary">check_circle</span>
                <span className="font-body-sm font-semibold">Cảm ơn {formData.name}! Chuyên viên tổng kho Lệ Thủy sẽ liên hệ qua Zalo/SĐT {formData.phone} để gửi báo giá chi tiết trong vòng 15 phút.</span>
              </div>
            )}
          </div>

          <div className="space-y-space-lg lg:col-span-5">
            <article className="rounded-xl bg-surface-container-low p-space-xl shadow-md">
              <span className="material-symbols-outlined mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-[28px] text-on-secondary">museum</span>
              <h2 className="mb-space-xs font-headline-md text-on-surface">Phòng Trưng Bày Mẫu Thực Tế Lệ Thủy</h2>
              <p className="mb-space-md font-body-md leading-relaxed text-on-surface-variant">Khách hàng được trực tiếp trải nghiệm độ sắc nét của hoa văn phào chỉ thạch cao, độ dày cốt sợi thủy tinh kháng kiềm trong phào xi măng GFRC, và thử độ bám dính siêu cường của dòng keo T&amp;P.</p>
              <ul className="space-y-space-sm font-body-sm text-on-surface">
                <li className="flex items-start gap-space-sm"><span className="material-symbols-outlined text-[18px] text-secondary">done_all</span>Hơn 300+ profile phào chỉ mẫu đặt trên giá xoay tiêu chuẩn</li>
                <li className="flex items-start gap-space-sm"><span className="material-symbols-outlined text-[18px] text-secondary">done_all</span>Mẫu thực tế mâm trần đắp nổi dát vàng Ý 24K</li>
                <li className="flex items-start gap-space-sm"><span className="material-symbols-outlined text-[18px] text-secondary">done_all</span>Cắt phôi phào mẫu miễn phí đem về ướm trực tiếp tại công trình</li>
              </ul>
            </article>
            <article className="space-y-space-md rounded-xl bg-primary-container p-space-lg text-on-primary shadow-md">
              <h2 className="font-label-caps uppercase text-secondary-fixed">Cơ Sở Hạ Tầng Bốc Dỡ &amp; Lưu Kho</h2>
              <div className="grid grid-cols-2 gap-space-md">
                <div className="rounded-lg bg-surface-container-highest/10 p-space-md"><span className="material-symbols-outlined text-[24px] text-secondary-fixed">rv_hookup</span><h3 className="mt-1 font-headline-sm">Bãi 15 Tấn</h3><p className="font-body-sm text-on-primary-container">Đỗ xe rộng rãi, bốc dỡ nhanh không ách tắc</p></div>
                <div className="rounded-lg bg-surface-container-highest/10 p-space-md"><span className="material-symbols-outlined text-[24px] text-secondary-fixed">forklift</span><h3 className="mt-1 font-headline-sm">Cẩu Chuyên Dụng</h3><p className="font-body-sm text-on-primary-container">Hạ phào ngoại thất GFRC an toàn tuyệt đối</p></div>
              </div>
              <p className="font-body-sm text-on-primary-container">Kho hàng được xây dựng theo tiêu chuẩn kiểm soát độ ẩm khắt khe, che chắn cách ẩm 100% giúp thanh phào thạch cao giữ trọn độ trắng mịn và độ đanh chắc.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-space-2xl" id="huong-dan-duong-di">
        <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="mx-auto mb-space-xl max-w-3xl text-center">
            <span className="font-label-caps uppercase tracking-widest text-secondary">Hệ Thống Dẫn Đường Thực Tế</span>
            <h2 className="mt-space-xs font-headline-xl text-on-surface">Hướng Dẫn Đường Đến Kho Hàng Thành Phong Lệ Thủy</h2>
            <p className="mt-space-xs font-body-md text-on-surface-variant">Vị trí chiến lược tại xã Tân Thủy, Lệ Thủy kết nối nhanh Quốc Lộ 1A và đường tránh lũ, giúp việc vận chuyển vật tư phào chỉ đi khắp Quảng Bình vô cùng nhanh chóng.</p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-space-lg lg:grid-cols-12">
            <div className="flex flex-col justify-between space-y-space-md lg:col-span-5">
              <article className="rounded-xl bg-surface-container-lowest p-space-lg shadow-md">
                <div className="mb-space-xs flex items-center gap-space-sm"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-fixed font-label-sm font-bold text-primary-container">01</span><h3 className="font-headline-sm text-on-surface">Đi từ TP. Đồng Hới (Khoảng 35km - 40 phút)</h3></div>
                <ol className="list-decimal space-y-2 pl-space-lg font-body-sm text-on-surface-variant"><li>Từ trung tâm TP. Đồng Hới đi theo hướng <strong>Quốc Lộ 1A</strong> xuôi về phía Nam (hướng đi Lệ Thủy / Vĩnh Linh).</li><li>Chạy qua Huyện Quảng Ninh, đến ngã ba Cam Liên (hoặc đường tránh Lệ Thủy).</li><li>Rẽ vào ĐT565 hướng về trung tâm xã Tân Thủy / Lệ Thủy tầm 3km đến thôn <strong>Tân Ninh</strong>.</li><li>Nhìn bên phải sẽ thấy biển lớn: <em>Tổng Kho Phào Chỉ Thạch Cao &amp; GFRC Thành Phong</em>.</li></ol>
              </article>
              <article className="rounded-xl bg-surface-container-lowest p-space-lg shadow-md">
                <div className="mb-space-xs flex items-center gap-space-sm"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-label-sm font-bold text-on-secondary">02</span><h3 className="font-headline-sm text-on-surface">Đi từ Thị Trấn Kiến Giang (Khoảng 7km - 10 phút)</h3></div>
                <ol className="list-decimal space-y-2 pl-space-lg font-body-sm text-on-surface-variant"><li>Từ trung tâm TT. Kiến Giang đi theo đường <strong>Hùng Vương / ĐT565</strong> về hướng Đông (hướng ra Quốc Lộ 1A).</li><li>Đi thẳng qua địa phận Xã Dương Thủy, tiến thẳng vào xã Tân Thủy.</li><li>Vị trí kho nằm ngay trục đường lớn tại Thôn Tân Ninh, thuận tiện đón xe ba gác và xe cẩu vào lấy hàng.</li></ol>
              </article>
              <div className="flex flex-col items-center justify-between gap-space-sm rounded-xl bg-secondary-fixed/30 p-space-md sm:flex-row"><span className="flex items-center gap-space-sm font-body-sm font-medium text-on-surface"><span className="material-symbols-outlined text-[24px] text-secondary">fmd_good</span>Bạn chưa tìm thấy đường?</span><a className="rounded bg-primary-container px-space-md py-1 font-label-caps uppercase text-secondary-fixed" href="tel:0919051066">Kỹ Thuật Chỉ Đường</a></div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest p-space-xs shadow-lg lg:col-span-7">
              <div className="relative min-h-[380px] flex-grow overflow-hidden rounded-lg">
                <iframe allowFullScreen className="absolute inset-0 h-full min-h-[380px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={MAP_EMBED_URL} title="Bản đồ định vị Tổng kho phào chỉ thạch cao Lệ Thủy" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-space-xs p-space-sm font-body-sm text-on-surface-variant"><span className="font-medium text-primary">Tọa độ định vị kho: Tân Ninh, Tân Thủy, Lệ Thủy, Quảng Bình</span><a className="flex items-center gap-1 font-label-md text-secondary hover:underline" href="https://maps.google.com/?q=T%C3%A2n+Th%E1%BB%A7y,+L%E1%BB%87+Th%E1%BB%A7y,+Qu%E1%BA%A3ng+B%C3%ACnh" rel="noopener noreferrer" target="_blank">Mở ứng dụng Google Maps<span className="material-symbols-outlined text-[16px]">open_in_new</span></a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-margin-mobile py-space-3xl md:px-margin">
        <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div><span className="font-label-caps uppercase tracking-widest text-secondary">Mạng Lưới Vận Tải Chuyên Nghiệp</span><h2 className="mt-space-xs font-headline-xl text-on-surface">Đội Xe Giao Hàng Siêu Tốc 2 – 4 Giờ Toàn Tỉnh</h2></div>
          <p className="max-w-md font-body-md text-on-surface-variant">Kho luôn trực sẵn 3 xe tải chuyên dụng có giá đỡ chữ A chống gãy nứt phào chỉ thạch cao và bọc màng PE chống xước hoa văn.</p>
        </div>
        <div className="grid grid-cols-2 gap-space-md md:grid-cols-4">
          {DELIVERY_ZONES.map((zone) => (
            <article className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition hover:shadow-md" key={zone.name}>
              <div className="mb-space-xs flex flex-col justify-between gap-1 sm:flex-row sm:items-center"><h3 className="font-headline-sm font-bold text-on-surface">{zone.name}</h3><span className="w-fit rounded bg-secondary-fixed px-2 py-0.5 font-label-caps uppercase text-primary-container">{zone.time}</span></div>
              <p className="font-body-sm text-on-surface-variant">{zone.places}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary-container py-space-2xl text-on-primary">
        <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="mx-auto mb-space-xl max-w-2xl text-center"><span className="font-label-caps uppercase tracking-widest text-secondary-fixed">Giá Trị Cốt Lõi</span><h2 className="mt-space-xs font-headline-xl text-on-primary">Cam Kết Vàng Khi Giao Dịch Trực Tiếp Tại Kho</h2><p className="mt-space-xs font-body-md text-on-primary-container">Quyền lợi minh bạch và sự yên tâm tuyệt đối cho các tổ thầu xây dựng, xưởng nội thất và gia chủ Quảng Bình.</p></div>
          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
            {COMMITMENTS.map((commitment, index) => (
              <article className="space-y-space-md rounded-xl bg-surface-container-highest/10 p-space-xl backdrop-blur-sm" key={commitment.title}>
                <span className={`material-symbols-outlined flex h-14 w-14 items-center justify-center rounded-lg text-[32px] ${index === 1 ? 'bg-secondary text-on-secondary' : 'bg-secondary-fixed text-primary-container'}`}>{commitment.icon}</span>
                <h3 className="font-headline-md text-on-primary">{commitment.title}</h3>
                <p className="font-body-md leading-relaxed text-on-primary-container">{commitment.description}</p>
                <div className="flex items-center gap-space-xs pt-space-xs font-label-md font-semibold text-secondary-fixed"><span className="material-symbols-outlined text-[18px]">{commitment.detailIcon}</span>{commitment.detail}</div>
              </article>
            ))}
          </div>
          <div className="mt-space-2xl flex flex-col items-center justify-between gap-space-md rounded-xl bg-secondary-fixed p-space-lg text-center text-primary-container md:flex-row md:text-left">
            <div className="flex items-center gap-space-md"><span className="material-symbols-outlined hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container text-[24px] text-secondary-fixed sm:flex">support_agent</span><div><h3 className="font-headline-sm font-bold">Bạn Cần Tra Cứu Mã Phào Sẵn Hàng Tại Kho Lệ Thủy?</h3><p className="font-body-sm text-primary-container/80">Gọi ngay chuyên viên quản lý xuất kho: <strong>0919.051.066</strong> để giữ số lượng và xe bốc hàng tức thì.</p></div></div>
            <a className="shrink-0 rounded-lg bg-primary-container px-space-lg py-space-sm font-label-caps uppercase text-on-primary shadow-md transition hover:bg-primary" href="tel:0919051066">Gọi Giữ Hàng Ngay</a>
          </div>
        </div>
      </section>
    </div>
  );
}
