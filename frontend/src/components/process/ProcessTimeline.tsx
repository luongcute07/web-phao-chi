'use client';

import React, { useState } from 'react';

const STEPS = [
  { icon: 'architecture', title: 'Tiếp Nhận & Chọn Mẫu', description: 'Gửi mẫu thực tế tận tay gia chủ tại Đồng Hới, Lệ Thủy, Bố Trạch hoặc mời khách ghé thăm kho vật tư Tân Thủy. Phối cảnh mẫu hoa văn trên bản vẽ 3D miễn phí.', tagIcon: 'switch', tag: 'Mẫu thật cầm tay' },
  { icon: 'straighten', title: 'Khảo Sát & Đo Đạc Laser', description: 'Kỹ thuật viên trực tiếp sử dụng máy cân bằng laser đo độ phẳng tường trần tại công trình. Lập bóc tách khối lượng minh bạch, cam kết giá gốc không phát sinh chi phí.', tagIcon: 'price_check', tag: 'Báo giá kho không phát sinh' },
  { icon: 'local_shipping', title: 'Xuất Kho & Giao Thần Tốc', description: 'Phào chỉ và tấm phù điêu GFRC được bọc xốp bóng khí, đóng kiện gỗ chống sứt mẻ góc cạnh. Xe tải chuyên dụng đưa vật tư đến chân công trình đúng lịch hẹn 100%.', tagIcon: 'shield', tag: 'Bọc xốp chống sứt mẻ 100%' },
  { icon: 'format_paint', title: 'Thi Công & Xử Lý Mối Nối', description: 'Thợ lành nghề cắt mòi góc 45 độ chuẩn xác, liên kết bằng keo 2 thành phần T&P chuyên dụng, dán băng keo lưới sợi thủy tinh ngăn chặn hoàn toàn rạn nứt chân chim.', tagIcon: 'join', tag: 'Keo T&P & Lưới chống nứt' },
  { icon: 'task_alt', title: 'Nghiệm Thu & Bảo Hành', description: 'Rà soát từng đường chỉ dưới đèn chiếu kiểm tra bóng đổ cùng gia chủ. Bàn giao phiếu bảo hành kết cấu 5 năm, hỗ trợ kỹ thuật sơn dặm vá hoàn thiện thẩm mỹ.', tagIcon: 'assignment_turned_in', tag: 'Bảo hành chính thức 5 năm' },
];

const TECHNICAL_FEATURES = [
  { icon: 'auto_fix_high', title: 'Cốt Thạch Cao Bột Tinh Khiết & Sợi Thủy Tinh Kháng Kiềm', description: 'Độ nén uốn cao hơn 35% so với phào đúc bột trát thông thường. Lõi cốt sợi thủy tinh phân bố đa hướng giữ mảng chỉ luôn nguyên vẹn, không cong võng dưới tác động co ngót nhiệt.' },
  { icon: 'science', title: 'Hệ Keo Dán Chuyên Dụng T&P 2 Thành Phần', description: 'Không sử dụng đinh sắt gây rỉ ố vàng mặt trần hoặc xi măng đen pha nước sơ sài. Keo dán T&P hóa rắn vĩnh viễn, tạo liên kết nguyên khối giữa phào chỉ và bề mặt bê tông.' },
  { icon: 'verified_user', title: 'Bê Tông Sợi Thủy Tinh GFRC Chịu Lực Ngoại Thất', description: 'Đúc từ khuôn composite có độ sắc nét hoàn hảo đến từng gân lá acanthus, mác vữa bê tông đạt M400, tích hợp phụ gia chống thấm tinh thể thẩm thấu bảo vệ mặt tiền biệt thự suốt 50 năm.' },
];

const COMPARISON_ROWS = [
  ['Nguồn Gốc & Giá Cả', 'Giá gốc tận kho Lệ Thủy, không qua trung gian. Phân phối chính hãng phào Thành Phong.', 'Mua đi bán lại qua đại lý cấp 2, cấp 3; giá bị đội lên 15% – 25% mà chất lượng không rõ nguồn gốc.'],
  ['Kỹ Thuật Cắt Mòi 45 Độ', 'Cắt bằng máy bàn tia laser chuyên dụng, góc nối khít từng milimet, không gợn sóng hay lệch hoa văn.', 'Cắt tay thủ công bằng cưa sắt, góc mẻ cạnh lởm chởm, trám thạch cao chắp vá dễ lộ vết cắt sau sơn.'],
  ['Vật Tư Liên Kết & Keo Dán', 'Keo dán T&P 2 thành phần siêu liên kết + đinh vít chuyên dụng chìm đầu có phủ chống rỉ.', 'Trộn bột bả tường sơ sài hoặc đinh sắt trần thông thường, chỉ sau 1 năm đinh rỉ làm ố vàng bề mặt.'],
  ['Xử Lý Nứt & Khí Hậu Nồm', 'Cốt thạch cao kháng kiềm + dán băng dính thủy tinh chịu nén nhiệt, cam kết không nứt chân chim.', 'Không gia cố mối nối, gặp thời tiết nồm ẩm hoặc gió lào hanh khô là xuất hiện nứt ngang thân chỉ.'],
  ['Hợp Đồng & Bảo Hành', 'Hợp đồng pháp lý kho phân phối, nghiệm thu chi tiết, phiếu bảo hành 5 năm hỗ trợ kỹ thuật 24/7.', 'Thỏa thuận miệng, thi công xong nhận tiền là hết trách nhiệm, gọi bảo hành không nghe máy.'],
];

const FAQS = [
  { question: '1. Nhà tôi ở ven biển Đồng Hới hoặc Hải Ninh thì nên dùng loại phào chỉ nào bền nhất?', paragraphs: ['Đối với khu vực ven biển Quảng Bình chịu nồng độ muối và độ ẩm gió biển cao, chúng tôi khuyến nghị:'], bullets: ['Ngoại thất (mặt tiền, lan can, ban công): Bắt buộc dùng 100% Xi Măng Sợi Thủy Tinh GFRC đúc sẵn. Vật liệu này không rỉ sét cốt thép, kháng nước mặn tuyệt đối và không bị rêu mốc.', 'Nội thất trong nhà: Sử dụng dòng phào chỉ thạch cao lõi xanh chống ẩm hoặc thạch cao phủ màng polymer liên kết keo T&P 2 thành phần để bề mặt luôn khô ráo và giữ vân chỉ sắc nét.'] },
  { question: '2. Khách mua lẻ vật tư tự thi công tại kho Lệ Thủy có được áp dụng giá sỉ không?', paragraphs: ['Có! Kho phào chỉ Thành Phong tại Tân Ninh, Tân Thủy phục vụ cả thợ thầu lẫn gia chủ tự làm. Dù mua số lượng ít để sửa phòng hay số lượng công trình lớn, quý khách đều nhận được giá xuất kho gốc không qua đại lý cấp trung gian.', 'Đồng thời, kỹ thuật viên của kho sẽ hỗ trợ hướng dẫn kỹ thuật cắt góc 45 độ, tặng công thức pha keo T&P chuẩn và cung cấp phụ kiện con kê chuyên dụng.'] },
  { question: '3. Thời gian thi công hoàn thiện một căn biệt thự tân cổ điển trung bình mất bao lâu?', paragraphs: ['Thời gian thi công phụ thuộc vào diện tích và mật độ chi tiết hoa văn:'], bullets: ['Nhà phố / Căn hộ chung cư: Trung bình từ 2 – 4 ngày làm việc.', 'Biệt thự tân cổ điển (200m² - 400m² trần tường): Dao động từ 7 – 10 ngày với tổ đội thợ 4 - 6 người chuyên nghiệp.', 'Lâu đài cổ điển dát vàng: Dự kiến 15 – 25 ngày bao gồm cả công đoạn dát vàng công nghiệp lá nhập khẩu Ý.'] },
  { question: '4. Chính sách bảo hành mối nối phào chỉ và cam kết chống nứt như thế nào?', paragraphs: ['Tất cả các công trình do đội ngũ kỹ thuật Thành Phong đảm nhiệm trọn gói đều được cấp Phiếu bảo hành chất lượng 5 năm cho kết cấu mối nối và phào chỉ.', 'Nếu xuất hiện bất kỳ vết nứt chân chim hoặc hiện tượng bong keo trong thời hạn bảo hành, kỹ thuật viên tại Lệ Thủy hoặc Đồng Hới sẽ có mặt trong vòng 24 – 48 giờ để xử lý dặm vá hoàn toàn miễn phí cho gia chủ.'] },
];

export default function ProcessTimeline() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSurveySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-primary-container py-space-2xl text-on-primary md:py-space-3xl" id="quy-trinh">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fed488 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-space-xl px-margin-mobile lg:grid-cols-12 md:px-margin">
          <div className="space-y-space-md lg:col-span-7">
            <div className="inline-flex items-center gap-space-xs rounded-full bg-secondary/15 px-space-md py-1 text-secondary-fixed">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="font-label-caps uppercase">Tiêu Chuẩn Thi Công Độc Quyền Quảng Bình</span>
            </div>
            <h1 className="font-headline-xl leading-tight text-on-primary">
              Quy Trình Làm Việc Chuẩn Mực &amp; <span className="text-secondary-fixed">Cam Kết Đỉnh Cao</span>
            </h1>
            <p className="max-w-2xl font-body-lg text-on-primary-container">
              Từ kho hàng trực tiếp Lệ Thủy đến công trình hoàn mỹ. Kiểm soát 100% quy chuẩn kỹ thuật châu Âu, loại bỏ hoàn toàn trung gian, tối ưu tiến độ và tiết kiệm <span className="font-semibold text-secondary-fixed">15% – 25% chi phí</span> cho gia chủ và nhà thầu.
            </p>
            <div className="flex flex-wrap gap-space-md pt-space-sm">
              <a className="inline-flex items-center gap-space-xs rounded-lg bg-secondary-fixed px-space-xl py-space-md font-label-md text-primary-container shadow-xl transition hover:bg-secondary/90" href="#dat-lich-khao-sat">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>Đặt Lịch Khảo Sát Miễn Phí
              </a>
              <a className="inline-flex items-center gap-space-xs rounded-lg bg-primary/40 px-space-lg py-space-md font-label-md text-on-primary transition hover:bg-primary/70" href="tel:0919051066">
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed">phone_in_talk</span>Hotline Kỹ Thuật: 0919.051.066
              </a>
            </div>
            <div className="grid grid-cols-1 gap-space-sm pt-space-lg sm:grid-cols-3">
              {[
                ['100%', 'Cốt sợi GFRC kháng kiềm'],
                ['< 2h', 'Giao hàng khắp Lệ Thủy - Đồng Hới'],
                ['5 Năm', 'Bảo hành mối nối chống nứt'],
              ].map(([value, label]) => (
                <div className="rounded-xl bg-surface-container-highest/10 p-space-md backdrop-blur-sm" key={label}>
                  <span className="block font-headline-lg text-secondary-fixed">{value}</span>
                  <span className="font-body-sm text-on-primary-container">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-2xl">
              <img className="h-[360px] w-full object-cover md:h-[460px]" alt="Thợ kỹ thuật lắp phào chỉ thạch cao trong biệt thự" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3hAdQeHm6QtcbRFC1nCf0JisWLIu78v0bCvYZdkSeRACZKlIVMD07FR03P3i-vad9KP1zT4IX3S76ct7o_mEq1kN3mrqe69gXyOJVmhgLuN_JI85wGybNYcaNzg9cIWgf9VXwjr0tuIsK253BPLHuFNNQYj6dFSKOX3vCtskjNgUtNz4WMBxuBytUuvHxdFiN31rQwgXIx3OrbcYyMKMmClotKguCE4KxkY6S4B19" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-primary-container/90 p-space-md text-on-primary shadow-lg backdrop-blur-md">
                <div className="mb-1 flex items-center gap-space-sm font-label-md text-secondary-fixed">
                  <span className="material-symbols-outlined">handyman</span>Đội Ngũ Kỹ Thuật Thành Phong
                </div>
                <p className="font-body-sm text-on-primary-container">Thao tác cắt mòi 45 độ điện tử, tra keo T&P chuyên dụng đảm bảo đường nét liền mạch tuyệt đối không vệt nối.</p>
              </div>
            </div>
            <div className="absolute -left-6 -top-4 hidden items-center gap-space-sm rounded-xl bg-surface-container-lowest p-space-md text-on-surface shadow-xl sm:flex">
              <span className="material-symbols-outlined flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">inventory_2</span>
              <div><p className="font-label-caps uppercase text-outline">Tổng Kho Vật Tư</p><p className="font-headline-sm leading-none text-primary-container">Sẵn 10.000m²</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-space-3xl">
        <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="mx-auto mb-space-2xl max-w-3xl space-y-space-xs text-center">
            <span className="font-label-caps uppercase text-secondary">Quy Trình Thi Công 5 Bước Chuẩn Mực</span>
            <h2 className="font-headline-xl text-primary-container">Hành Trình Kiến Tạo Tuyệt Tác Từ Kho Đến Vách Tường</h2>
            <p className="font-body-md text-on-surface-variant">Mỗi mét phào chỉ và mảng phù điêu đều được xử lý nghiêm ngặt theo trình tự 5 giai đoạn khép kín, ngăn chặn tối đa sự cố nứt vỡ hay ẩm mốc do khí hậu gió lào và nồm ẩm Quảng Bình.</p>
          </div>
          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, index) => (
              <article className="group flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition hover:shadow-xl" key={step.title}>
                <div className="mb-space-md flex items-center justify-between">
                  <span className="font-headline-lg font-bold text-secondary/40 transition-colors group-hover:text-secondary">0{index + 1}</span>
                  <span className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">{step.icon}</span>
                </div>
                <h3 className="mb-space-xs font-headline-sm text-primary-container">{step.title}</h3>
                <p className="mb-space-md flex-grow font-body-sm leading-relaxed text-on-surface-variant">{step.description}</p>
                <div className="flex items-center gap-1 rounded-lg bg-surface-container-low px-space-sm py-space-xs font-label-sm text-secondary">
                  <span className="material-symbols-outlined text-[14px]">{step.tagIcon}</span>{step.tag}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-space-xl flex flex-col items-center justify-between gap-space-md rounded-xl bg-surface-container p-space-lg md:flex-row">
            <div className="flex items-center gap-space-md">
              <span className="material-symbols-outlined flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-[28px] text-primary-container shadow-md">speed</span>
              <div><h3 className="font-headline-sm text-primary-container">Cam Kết Tiến Độ Công Trình Quảng Bình</h3><p className="font-body-sm text-on-surface-variant">Thi công căn hộ, nhà phố từ 2 – 4 ngày; biệt thự lâu đài tân cổ điển từ 7 – 12 ngày. Bàn giao đúng hẹn hoặc chịu phạt 1% mỗi ngày trễ hạn.</p></div>
            </div>
            <a className="whitespace-nowrap rounded-lg bg-primary-container px-space-lg py-space-sm font-label-caps uppercase text-secondary-fixed transition hover:bg-primary" href="#dat-lich-khao-sat">Đăng Ký Khảo Sát Tận Nhà</a>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-space-3xl">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-space-2xl px-margin-mobile lg:grid-cols-12 md:px-margin">
          <div className="space-y-space-md lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img className="h-96 w-full object-cover" alt="Chi tiết phào GFRC bền bỉ trước khí hậu ven biển" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_MoftfWeCRZDMQq-7WnDTMOpFdJkNF48eENcH41n2Ou1OnyVsiNCSrqEQQyp_A8d1BB5TpfwQyA4XmZClT6omu2AjZ-4nrwgKuNroXAM_pk_TDG4LPIloqE0p0epnqFE9Vm4RVr8WH-r9Uk93mUlPol9MEKXn8CEs-Nd_xb5kUj_i2ZX4hDYPLi-Ayb86hXoKpKnBVftDWk1q8E_YhtEkhT0YgsLooagMVP-QGj5" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-on-primary"><span className="mb-1 block font-label-caps uppercase text-secondary-fixed">Thử Nghiệm Độ Bền GFRC</span><p className="font-body-sm text-on-primary-container">Chống chịu trực tiếp nắng rát cát cháy mùa hạ và gió bão muối biển ven bờ Đồng Hới &amp; Hải Ninh.</p></div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div><span className="block font-label-caps uppercase text-outline">Độ Thấm Nước Bề Mặt</span><span className="font-headline-sm text-primary-container">&lt; 0.15% (Chống nồm 100%)</span></div>
              <span className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">water_drop</span>
            </div>
          </div>
          <div className="space-y-space-lg lg:col-span-7">
            <div><span className="font-label-caps uppercase text-secondary">Cam Kết Vật Liệu</span><h2 className="mt-1 font-headline-xl text-primary-container">Tiêu Chuẩn Kỹ Thuật Thích Ứng Khí Hậu Khắc Nghiệt</h2><p className="mt-2 font-body-md text-on-surface-variant">Thời tiết Quảng Bình có đặc thù gió Lào bỏng rát và nồm ẩm mùa đông kéo dài. Phào chỉ Thành Phong ứng dụng công nghệ gia cường đặc thù để loại bỏ hiện tượng rêu mốc, rạn nứt kết cấu.</p></div>
            <div className="space-y-space-md">
              {TECHNICAL_FEATURES.map((feature) => (
                <article className="flex items-start gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm" key={feature.title}>
                  <span className="material-symbols-outlined mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">{feature.icon}</span>
                  <div><h3 className="font-headline-sm text-primary-container">{feature.title}</h3><p className="mt-1 font-body-sm text-on-surface-variant">{feature.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-space-3xl" id="so-sanh">
        <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="mx-auto mb-space-2xl max-w-3xl space-y-space-xs text-center">
            <span className="font-label-caps uppercase text-secondary">Minh Bạch Chất Lượng</span>
            <h2 className="font-headline-xl text-primary-container">Đội Ngũ Thành Phong vs Đơn Vị Thi Công Tự Do</h2>
            <p className="font-body-md text-on-surface-variant">Đừng đánh đổi vẻ đẹp sang trọng của cả ngôi nhà bằng sự sơ sài của thợ thi công giá rẻ không có bảo hành và kỹ thuật tiêu chuẩn.</p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-xl">
            <div className="min-w-[760px] overflow-hidden bg-surface-container-lowest">
              <div className="grid grid-cols-12 items-center bg-primary-container p-space-md text-left text-on-primary">
                <div className="col-span-4 font-headline-sm text-secondary-fixed">Tiêu Chí Đánh Giá</div>
                <div className="col-span-4 flex items-center gap-2 font-headline-sm text-secondary-fixed"><span className="material-symbols-outlined">workspace_premium</span>Tổng Kho Thành Phong</div>
                <div className="col-span-4 font-headline-sm text-outline-variant">Thợ Tự Do &amp; Nhận Khoán Nhỏ</div>
              </div>
              {COMPARISON_ROWS.map(([criterion, company, independent], index) => (
                <div className={`grid grid-cols-12 items-start p-space-md transition-colors hover:bg-surface-container-low ${index % 2 ? 'bg-surface-container-low/60' : 'bg-surface-container-lowest'}`} key={criterion}>
                  <div className="col-span-4 pr-3 font-headline-sm text-primary-container">{criterion}</div>
                  <div className="col-span-4 flex gap-2 pr-3 font-body-sm text-on-surface"><span className="material-symbols-outlined shrink-0 text-[20px] text-secondary">check_circle</span><span>{company}</span></div>
                  <div className="col-span-4 flex gap-2 font-body-sm text-on-surface-variant"><span className="material-symbols-outlined shrink-0 text-[20px] text-outline">cancel</span><span>{independent}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-space-3xl">
        <div className="mx-auto max-w-4xl px-margin-mobile md:px-margin">
          <div className="mb-space-2xl space-y-space-xs text-center">
            <span className="font-label-caps uppercase text-secondary">Giải Đáp Thắc Mắc</span>
            <h2 className="font-headline-xl text-primary-container">Câu Hỏi Thường Gặp Về Vật Tư &amp; Thi Công</h2>
            <p className="font-body-md text-on-surface-variant">Tổng hợp những băn khoăn phổ biến nhất của quý gia chủ khi lựa chọn phào chỉ thạch cao và xi măng GFRC tại khu vực Quảng Bình.</p>
          </div>
          <div className="space-y-space-md">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              const contentId = `process-faq-${index}`;
              return (
                <article className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm" key={faq.question}>
                  <h3>
                    <button className="flex w-full items-center justify-between gap-space-md p-space-lg text-left" type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={() => setOpenFaq(isOpen ? null : index)}>
                      <span className="font-headline-sm font-semibold text-primary-container">{faq.question}</span>
                      <span className={`material-symbols-outlined shrink-0 text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="space-y-2 px-space-lg pb-space-lg pt-0 font-body-md text-on-surface-variant" id={contentId}>
                      {faq.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      {faq.bullets && <ul className="list-disc space-y-1 pl-5 text-on-surface">{faq.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-space-3xl" id="dat-lich-khao-sat">
        <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="overflow-hidden rounded-xl bg-primary-container text-on-primary shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="flex flex-col justify-between space-y-space-xl bg-primary p-space-xl md:p-space-2xl lg:col-span-5">
                <div className="space-y-space-md">
                  <div className="inline-flex items-center gap-space-xs font-label-caps uppercase text-secondary-fixed"><span className="material-symbols-outlined text-[18px]">verified</span>Khảo Sát Tận Nhà Miễn Phí 100%</div>
                  <h2 className="font-headline-xl leading-tight text-on-primary">Đặt Lịch Đo Đạc Laser &amp; Mang Mẫu Tận Nơi</h2>
                  <p className="font-body-md text-on-primary-container">Chuyên viên kỹ thuật Thành Phong sẽ trực tiếp mang hộp mẫu phào chỉ thực tế đến công trình tại Quảng Bình, đo đạc kích thước thực và lên bảng dự toán báo giá kho chi tiết trong 30 phút.</p>
                </div>
                <div className="space-y-space-sm border-t border-surface-variant/20 pt-space-lg font-body-sm text-on-primary-container">
                  <div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[22px] text-secondary-fixed">location_on</span>Phục vụ Đồng Hới, Lệ Thủy, Quảng Ninh, Bố Trạch, Ba Đồn...</div>
                  <div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[22px] text-secondary-fixed">timer</span>Kỹ thuật viên có mặt trong 2 giờ kể từ khi xác nhận</div>
                  <a className="flex items-center gap-space-sm font-semibold text-secondary-fixed" href="tel:0919051066"><span className="material-symbols-outlined text-[22px]">support_agent</span>Tư vấn trực tiếp: 0919.051.066 (Zalo Kho)</a>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-lg text-on-surface md:p-space-2xl lg:col-span-7">
                {!formSubmitted ? (
                  <form className="space-y-space-md" onSubmit={handleSurveySubmit}>
                    <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                      <div><label className="mb-1 block font-label-md text-primary-container" htmlFor="ho-ten">Họ và Tên Gia Chủ / Nhà Thầu <span className="text-error">*</span></label><input className="w-full rounded-lg border border-outline-variant bg-surface px-space-md py-space-sm font-body-md text-on-surface transition focus:border-secondary focus:outline-none" id="ho-ten" placeholder="Ví dụ: Anh Hoàng / Chị Thảo" required type="text" /></div>
                      <div><label className="mb-1 block font-label-md text-primary-container" htmlFor="so-dien-thoai">Số Điện Thoại / Zalo <span className="text-error">*</span></label><input className="w-full rounded-lg border border-outline-variant bg-surface px-space-md py-space-sm font-body-md text-on-surface transition focus:border-secondary focus:outline-none" id="so-dien-thoai" placeholder="Ví dụ: 0919.xxx.xxx" required type="tel" /></div>
                    </div>
                    <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                      <div><label className="mb-1 block font-label-md text-primary-container" htmlFor="khu-vuc">Khu Vực Công Trình Tại Quảng Bình <span className="text-error">*</span></label><select className="w-full rounded-lg border border-outline-variant bg-surface px-space-md py-space-sm font-body-md text-on-surface focus:border-secondary focus:outline-none" id="khu-vuc" required defaultValue=""><option value="" disabled>-- Chọn Huyện / Thị Xã --</option><option value="le-thuy">Huyện Lệ Thủy (Tân Thủy, Kiến Giang...)</option><option value="dong-hoi">Thành phố Đồng Hới (Bắc Lý, Nam Lý...)</option><option value="quang-ninh">Huyện Quảng Ninh (Quán Hàu...)</option><option value="bo-trach">Huyện Bố Trạch (Hoàn Lão...)</option><option value="ba-don">Thị xã Ba Đồn &amp; Quảng Trạch</option><option value="khac">Khu vực lân cận khác</option></select></div>
                      <div><label className="mb-1 block font-label-md text-primary-container" htmlFor="hang-muc">Hạng Mục Quan Tâm <span className="text-error">*</span></label><select className="w-full rounded-lg border border-outline-variant bg-surface px-space-md py-space-sm font-body-md text-on-surface focus:border-secondary focus:outline-none" id="hang-muc" required defaultValue="tron-goi"><option value="tron-goi">Thi công trọn gói nội ngoại thất</option><option value="thach-cao">Chỉ phào thạch cao nội thất</option><option value="gfrc">Phào chỉ xi măng GFRC ngoại thất</option><option value="vat-tu">Mua sỉ vật tư kho (tự thi công)</option><option value="tu-van">Cần tư vấn phối cảnh &amp; báo giá sơ bộ</option></select></div>
                    </div>
                    <div><label className="mb-1 block font-label-md text-primary-container" htmlFor="ghi-chu">Ghi Chú Về Diện Tích / Yêu Cầu Riêng (Nếu có)</label><textarea className="w-full rounded-lg border border-outline-variant bg-surface px-space-md py-space-sm font-body-md text-on-surface transition focus:border-secondary focus:outline-none" id="ghi-chu" placeholder="Ví dụ: Nhà biệt thự 2 tầng tại Đồng Hới, dự kiến thi công vào đầu tháng tới..." rows={3} /></div>
                    <button className="flex w-full items-center justify-center gap-space-xs rounded-lg bg-secondary px-space-md py-space-md font-label-md uppercase tracking-wider text-on-secondary shadow-xl transition hover:bg-secondary/90" type="submit"><span className="material-symbols-outlined text-[20px]">send</span>Gửi Yêu Cầu Đo Đạc Miễn Phí (Kho Lệ Thủy)</button>
                    <p className="text-center font-body-sm text-outline">* Cam kết bảo mật thông tin. Nhân viên kỹ thuật gọi lại trong 15 phút để xác nhận lịch hẹn.</p>
                  </form>
                ) : (
                  <div className="space-y-space-xs rounded-xl bg-surface-container-high p-space-lg text-center text-primary-container" role="status">
                    <span className="material-symbols-outlined text-[40px] text-secondary">check_circle</span>
                    <h3 className="font-headline-sm font-bold">Tiếp Nhận Thông Tin Thành Công!</h3>
                    <p className="font-body-md text-on-surface-variant">Cảm ơn quý khách. Kỹ thuật viên phụ trách khu vực Quảng Bình sẽ liên hệ qua điện thoại/Zalo trong giây lát.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
