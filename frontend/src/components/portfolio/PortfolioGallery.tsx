'use client';

import React, { useState } from 'react';

const PROJECT_FILTERS = [
  { key: 'all', label: 'Tất Cả (350+)' },
  { key: 'biet-thu', label: 'Biệt Thự & Lâu Đài' },
  { key: 'nha-pho', label: 'Nhà Phố Tân Cổ Điển' },
  { key: 'dat-vang', label: 'Trần Thạch Cao Dát Vàng' },
  { key: 'gfrc', label: 'Ngoại Thất Xi Măng GFRC' },
  { key: 'resort', label: 'Khách Sạn & Nhà Hàng' },
];

const PROJECTS = [
  {
    id: 'bao-ninh',
    types: ['dat-vang', 'biet-thu'],
    locationTag: 'TP. Đồng Hới',
    location: 'Bán đảo Bảo Ninh, TP. Đồng Hới',
    category: 'Dát Vàng 24K',
    title: 'Dinh Thự Tân Cổ Điển Hoàng Gia',
    description: 'Quy mô 650m² sàn. Thi công trọn gói phào chỉ trần thạch cao hoa văn hoàng gia, mâm trần đường kính D1400 kết hợp hệ đèn chùm pha lê nhập khẩu, dát vàng công nghệ Ý.',
    client: 'Chủ đầu tư: Anh Hoàng Long',
    year: 'Hoàn thành 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD45NLH6HG7a4Zvag1I8ic23rstn5tF1YeLuFYsHSqUiw8OxQcuFsCuHGBfKGzlvotK974xadF1T-z9Z_j4ffYlekOU-_6YnPh2zLsf85ebN3WvobtTDwtoSvbdMoFHCrFrfh7MC7tRx9L9XJfgKRwpepESxG__Ifpgf-fbLc9plXFNBJggivd2N_Xcz2nNrWSZvNKY9wWTXibrNvf6bRJrHTuZGQCcizfNW7uvC9D',
    alt: 'Dinh Thự Tân Cổ Điển Bảo Ninh Đồng Hới',
  },
  {
    id: 'kien-giang',
    types: ['gfrc', 'biet-thu'],
    locationTag: 'Huyện Lệ Thủy',
    location: 'Bờ sông Kiến Giang, TT. Kiến Giang, Lệ Thủy',
    category: 'GFRC Chịu Bão',
    title: 'Biệt Thự Sân Vườn Kiến Giang',
    description: 'Ứng dụng toàn bộ phào chỉ xi măng sợi thủy tinh GFRC ngoại thất kháng muối biển, đúc sẵn 120 cây lục bình bê tông ly tâm kiên cố cho khuôn viên lan can ngoài trời.',
    client: 'Chủ đầu tư: Chú Trần Đình Hòa',
    year: 'Hoàn thành 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8wBWZh39bO-OGK8vOAkJROivDupipUSTJKBM_2sKHL7muw1lbcOahCbQpmtX2LwnRcrz1NDlDJtjT_fJdQR7GdUejbFZhGLlkppZ18PTmqov_dEf-CdY2pRugvQXyTul1dr4IPk1drp4dzZhp1qpyDzr2jbCiEhKwShbKeBkxl4R-IhZZJycvhWMBw11yzT0kI77VsyCFJBgwFA0QsuuTQdRt5syKrPKDtFUoxjD3',
    alt: 'Biệt Thự Vườn Kiến Giang Lệ Thủy',
  },
  {
    id: 'ba-don-castle',
    types: ['gfrc', 'biet-thu'],
    locationTag: 'TX. Ba Đồn',
    location: 'Phường Ba Đồn, TX. Ba Đồn',
    category: 'Cột La Mã GFRC',
    title: 'Lâu Đài Kiến Trúc Pháp Cổ Điển',
    description: 'Đúc lắp hoàn thiện 8 trụ cột La Mã Corinthian cao 7.5m, 140 con bọ đỡ mái đúc GFRC siêu nhẹ chống thấm rêu mốc và hệ phù điêu tam giác mặt tiền kiêu hãnh.',
    client: 'Chủ đầu tư: Bác Nguyễn Văn Đức',
    year: 'Hoàn thành 2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCagGbAwBc9Rt9fMCxxM__W9st6A54bczDPQCFgBEa1GOkiHEM8_UnJTJRdDfs00soE6IUdJz9mlhxdf7FapZyw0hnfmxvJQ-AiC-L72qJHV3ZtLYEaSzm3JqatoPZE-Vi-XSimjxwrtYfzZh05iSH6C2StwWCBxLJ1O9lyq-IwNMLG3QYasi77J0WB_tvV4b39bTa1OJ1kmrDgKy2U0pzXSenzW6nzfAG2-uw6myQI',
    alt: 'Lâu Đài Pháp Ba Đồn Quảng Bình',
  },
  {
    id: 'quan-hau-townhouse',
    types: ['nha-pho'],
    locationTag: 'Huyện Quảng Ninh',
    location: 'Thị trấn Quán Hàu, Huyện Quảng Ninh',
    category: 'Thạch Cao Chống Ẩm',
    title: 'Tổ Hợp Nhà Phố Thương Mại Tân Cổ',
    description: 'Thi công 12 căn liền kề hệ khung tranh tường thạch cao tinh tế, chỉ góc trần chống ẩm lõi xanh chuyên dùng cho khí hậu gió nồm miền Trung, sắc nét từng milimet.',
    client: 'Tổng thầu: Cty Xây Dựng Nam Hải',
    year: 'Hoàn thành 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvY7CAeiMW2Afrb4Y8kJxhFhwzRPNaQeKCLNROvDY2kMplI5M5yd7CRwNOPpA-CwcJI-mnzSa775xkrOgXHXITaQDcT75HNOE7QO5rgvV1irpKo4M58y-Bd0eSvlRCy5yJp9b5LefejltUEBV_uNl8A9Z974CM1f_olkXSRXafwp5IlIouoW5dxnF_TuAyqelzqJ9kR6KxH7fJi5olPEZg50oiOhtlkRbDetNU1idF',
    alt: 'Nhà Phố Thương Mại Quán Hàu',
  },
  {
    id: 'bo-trach-resort',
    types: ['resort', 'dat-vang'],
    locationTag: 'Huyện Bố Trạch',
    location: 'Khu du lịch sinh thái Phong Nha, Bố Trạch',
    category: 'Trần Giật Cấp LED',
    title: 'Khu Nghỉ Dưỡng Cao Cấp Riverside',
    description: 'Lắp đặt 4.200 mét phào giật cấp đèn hắt tân cổ điển cho sảnh tiếp đón và 28 phòng VIP, kết hợp keo chuyên dụng T&P triệt tiêu vết nứt mối nối 100%.',
    client: 'Đơn vị vận hành: Tập đoàn V.S',
    year: 'Hoàn thành 2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjux1Y5jB3cWCb7WsMR7i17gZyhQmylgP0m-VoUg3pHh0-Yy3EI0nmpvHiv9ShZssOauRpP8WdsNraaWaxti01neYOIMXXVbMwj3kzBH8tIVV4tWoMVFwd_2UyJx_L2VFfNL3qwmb-Q6khnVlcWedjPkRbPm0ux1b26EebKZF56d3t94_aDrU03YwpsdWZUKggdu9f0WpRkaJixffmbO09hNqx5jSnhS5YcFAezNkN',
    alt: 'Resort Nghỉ Dưỡng Bố Trạch',
  },
  {
    id: 'tan-thuy-warehouse',
    types: ['gfrc'],
    locationTag: 'Kho Trung Tâm Lệ Thủy',
    location: 'Tân Ninh, Tân Thủy, Lệ Thủy',
    category: 'Tổng Kho Sản Xuất',
    title: 'Tổng Kho Đúc & Phân Phối Sỉ Toàn Tỉnh',
    description: 'Xưởng đúc quy mô lớn dự trữ hàng nghìn mẫu phào chỉ thạch cao, xi măng GFRC đúc sẵn, nhận sản xuất theo bản vẽ thiết kế của kiến trúc sư, xe cẩu giao tận chân công trình.',
    client: 'Cơ sở: Nhà Phân Phối Thành Phong',
    year: 'Phục vụ liên tục',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq4leDvUeX1ReNGQUDHwqz7DrWz_h7XJu5i9N8plj22CqG5m2O54YmEXE0DQHOc15E5xuPYFA9-n8dc00dgx7O6X42LZXNTMc0A3f87sbYqo_om1udbVFLeOiyTCgb62gzgjb5jy7bDWLfQA_MxSn_UcKb6tvZiLtPmnjKFZR4HkNmxPCIs6YXL-kwiTFV964y3kqAiMKbDb_l0JWftxouVbZxeL9nheeZ7OYUeYEV',
    alt: 'Kho Sản Xuất Trực Tiếp Lệ Thủy',
  },
];

const COMMITMENTS = [
  { icon: 'straighten', title: 'Không Cong Vênh', description: 'Cốt sợi thủy tinh gia cường mật độ cao, sấy khô đạt chuẩn độ ẩm trước khi xuất xưởng, đảm bảo thẳng tắp tuyệt đối trên mọi trần tường.' },
  { icon: 'join_inner', title: 'Triệt Tiêu Nứt Mối Nối', description: 'Sử dụng keo dán chuyên dụng T&P hai thành phần kết hợp băng dán chuyên dụng. Độ co giãn đàn hồi đồng pha ngăn ngừa 100% vết rạn chân chim.' },
  { icon: 'water_drop', title: 'Kháng Nước & Ẩm Mốc', description: 'Lớp bảo vệ phủ nano chống thấm và thạch cao lõi xanh cao cấp, thích ứng hoàn hảo với điều kiện thời tiết nồm ẩm khắc nghiệt tại Quảng Bình.' },
  { icon: 'shield', title: 'Bảo Hành 5 Năm', description: 'Phiếu bảo hành pháp lý bằng văn bản cho toàn bộ kết cấu phào chỉ thạch cao và GFRC xi măng. Có mặt kiểm tra hỗ trợ trong 24 giờ khi nhận thông tin.' },
];

const TESTIMONIALS = [
  {
    name: 'Anh Hoàng Long',
    role: 'Chủ biệt thự Bảo Ninh – Đồng Hới',
    quote: 'Làm nhà tân cổ điển quan trọng nhất là nét phào chỉ phải thật sắc nét và không bị nứt. Đội thợ Thành Phong thi công rất tỉ mỉ, mâm trần dát vàng ở phòng khách ai đến chơi cũng trầm trồ khen ngợi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdTTN5N4EKHQChI77Xgvmg4A9D9RBln35qaz5ZE4PYydalBEtmDsfwxK4CsIoi0lpZ8haC_Q47xItAAVYNK43B7X8VEHriJM35yHu1U3vmFcsAuNGdY7Goj1es8wlDykIOJ2u0LDQnE3A_F1dSEg53ABD5s04VF-Gk9KUWRnvIqNdG_L9HjdWtrxim5vL7nkLBdOMtMpHjj5CbEf_0r0oe933s1TIawwKwZYzjF0lf',
  },
  {
    name: 'KTS. Nguyễn Văn Hải',
    role: 'Công ty Xây dựng Lệ Thủy Cons',
    quote: 'Là nhà thầu thi công xây dựng hơn 15 năm tại Lệ Thủy, tôi đánh giá cao kho Thành Phong vì hàng luôn có sẵn, mẫu mã đa dạng. Mua trực tiếp tại xưởng Tân Thủy giá cạnh tranh hơn nhiều so với đặt từ Đà Nẵng hay Hà Nội.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyI2DzH9b15VjZE7FgjjtcdLI36X9VE1s3HSG1uiyOomvelNO_7XtgLIeuIv6YwlGeRKSIMf1tVN34a4DoOvvhNh-0_hZjAhx5Cd0faqa7ccDvIKwIzLluLBDGxWvmYzMaPWDuX9GGJQUZgbfxGUBx77dSfv4e86FMlBlUK0ztg4x8MX7pXJBNG9Wv-J7e1XAuxe9Srbay3U5BUfVCAnrF5BG9L6Pz_RHEYW8PB5iX',
  },
  {
    name: 'Chị Phạm Thùy Trang',
    role: 'Gia chủ Biệt Thự Phố – TX. Ba Đồn',
    quote: 'Các chi tiết con bọ đỡ mái và đầu cột bê tông GFRC rất sắc sảo, bề mặt láng mịn sơn bám chắc. Qua mùa mưa bão năm ngoái các mối ghép vẫn hoàn toàn liền khối, không hề đọng nước hay ẩm mốc.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtt8v_9QLx9PUsGcdzz0Lc5TMZS-DgHMTC-C1ZJzlD1_woabMGfRP6Nj60xH3otzs0zlbUZiT6c4uO3XQANSX3lB0vQJq5qALZ8gIYYB6CQNxynFjU-xhysj1OyR2hgATDYFx0RXwJidLfCZXiPXHQO1x23HXSbiWM1Lyk6Z4fkXzmDfiwDmJdJkHLHBz0OK_Dca44wzbWFKSzYpSzYlOr73rDC48fSRnr0Bep6OJj',
  },
];

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredProjects = PROJECTS.filter(
    (project) => selectedCategory === 'all' || project.types.includes(selectedCategory),
  );

  return (
    <div className="w-full">
      <section
        className="relative overflow-hidden bg-primary-container py-space-3xl text-on-primary shadow-2xl"
        id="trang-chu"
        style={{ backgroundImage: "linear-gradient(rgba(18,31,45,.84), rgba(18,31,45,.88)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2TlrjR82fHIaNTMIiI15zUXzwUC6_o_Vx6zE5RV0R6L2wdpp2Ca5X5n40QtK9Tc2VmkSSyO7f8z_T5UTNJFD_idc5wpL4d5-S_lNDVRSDr3c16LjRP0u4ErNyPJcy-QlumlgKv9YmPudeikyKxxRJrrAjUPcI0K_qKFpEnlcXjeNvkVL8vtOfSDw98sc-gV11DDeRnekIz6D1AyQpGuyIp8B517WE5MAxbYM9FzSv')", backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-margin-mobile text-center md:px-margin">
          <div className="mb-space-md inline-flex items-center gap-space-xs rounded-full bg-secondary/20 px-space-md py-1 text-secondary-fixed shadow-sm">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span className="font-label-caps uppercase">Tổng Kho & Nhà Thầu Trực Tiếp Lệ Thủy</span>
          </div>
          <h1 className="mb-space-md max-w-4xl font-headline-xl font-bold leading-tight text-on-primary md:text-5xl">
            Thư Viện Công Trình Thực Tế <span className="text-secondary-fixed">Tại Quảng Bình</span>
          </h1>
          <p className="mb-space-xl max-w-3xl font-body-lg leading-relaxed text-outline-variant">
            Khẳng định đẳng cấp qua hơn <strong className="font-semibold text-secondary-fixed">350+ công trình</strong> lâu đài, biệt thự, nhà phố tân cổ điển và hiện đại tại Đồng Hới, Lệ Thủy, Ba Đồn, Quảng Ninh, Bố Trạch. Trực tiếp sản xuất, cung ứng sỉ lẻ và thi công hoàn thiện trọn gói.
          </p>
          <div className="grid w-full max-w-4xl grid-cols-2 gap-space-md rounded-xl bg-primary/60 p-space-md shadow-lg backdrop-blur-md md:grid-cols-4">
            {[
              ['350+', 'Dự án hoàn tất'],
              ['100%', 'Sợi GFRC kháng kiềm'],
              ['05 Năm', 'Bảo hành kết cấu'],
              ['Giá Kho', 'Tiết kiệm 20-30%'],
            ].map(([value, label]) => (
              <div className="flex flex-col items-center justify-center p-space-sm text-center" key={label}>
                <span className="font-headline-md font-bold text-secondary-fixed">{value}</span>
                <span className="font-label-sm uppercase text-outline-variant">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-space-2xl" id="cong-trinh">
        <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <span className="mb-space-xs block font-label-caps uppercase font-bold text-secondary">Hạng Mục & Kiệt Tác Kiến Trúc</span>
              <h2 className="font-headline-lg font-bold text-on-surface">Danh Mục Dự Án Đã Hoàn Thiện</h2>
            </div>
            <p className="max-w-md font-body-sm text-on-surface-variant">
              Khám phá hình ảnh chụp thực tế tại các công trình dân dụng, biệt thự biển và dinh thự xa hoa được đội thợ Thành Phong kiến tạo sắc sảo.
            </p>
          </div>

          <div className="mb-space-lg flex flex-wrap items-center gap-space-xs md:gap-space-sm" aria-label="Lọc công trình">
            {PROJECT_FILTERS.map((filter) => {
              const isActive = selectedCategory === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(filter.key)}
                  className={`whitespace-nowrap rounded-lg px-space-md py-space-xs font-label-md transition ${isActive ? 'bg-secondary-fixed text-primary-container shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-secondary-fixed/50'}`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-md transition hover:shadow-xl">
                <div className="relative h-72 overflow-hidden bg-primary-container">
                  <img src={project.image} alt={project.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded bg-primary-container/85 px-space-sm py-0.5 font-label-caps uppercase text-secondary-fixed backdrop-blur-sm">{project.locationTag}</span>
                  <span className="absolute bottom-4 right-4 rounded bg-secondary-fixed px-space-sm py-0.5 font-label-caps uppercase text-primary-container shadow">{project.category}</span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-space-lg">
                  <div>
                    <div className="mb-space-xs flex items-center gap-space-xs font-label-sm text-outline">
                      <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                      <span>{project.location}</span>
                    </div>
                    <h3 className="mb-space-xs font-headline-sm font-bold text-on-surface transition-colors group-hover:text-secondary">{project.title}</h3>
                    <p className="mb-space-md font-body-sm text-on-surface-variant">{project.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 rounded-lg bg-surface-container-low p-space-sm">
                    <span className="font-label-sm font-semibold text-secondary">{project.client}</span>
                    <span className="shrink-0 font-label-caps uppercase text-outline">{project.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="py-space-xl text-center font-body-md text-on-surface-variant">Chưa có công trình trong danh mục này.</p>
          )}
        </div>
      </section>

      <section className="bg-surface-container py-space-2xl text-on-surface">
        <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="mx-auto mb-space-xl max-w-3xl text-center">
            <span className="mb-space-xs block font-label-caps uppercase font-bold text-secondary">Tiêu Chuẩn Kỹ Thuật Độc Quyền</span>
            <h2 className="font-headline-lg font-bold text-primary-container">Cam Kết Vàng Về Độ Bền & Thẩm Mỹ</h2>
            <p className="mt-2 font-body-md text-on-surface-variant">Giải quyết dứt điểm các lỗi rạn nứt, ố vàng, ẩm mốc thường gặp của công trình vùng biển miền Trung với công nghệ thi công chuẩn chỉ.</p>
          </div>
          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((commitment) => (
              <article className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-md" key={commitment.title}>
                <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                  <span className="material-symbols-outlined text-[28px]">{commitment.icon}</span>
                </div>
                <h3 className="mb-space-xs font-headline-sm font-bold text-on-surface">{commitment.title}</h3>
                <p className="font-body-sm text-on-surface-variant">{commitment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-space-2xl">
        <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="mx-auto mb-space-xl max-w-3xl text-center">
            <span className="mb-space-xs block font-label-caps uppercase font-bold text-secondary">Đánh Giá Thực Tế Từ Khách Hàng</span>
            <h2 className="font-headline-lg font-bold text-on-surface">Chủ Nhà & Thầu Thợ Nói Gì Về Thành Phong?</h2>
            <div className="mt-2 flex items-center justify-center gap-1 text-secondary" aria-label="Đánh giá 4.9 trên 5 sao">
              {Array.from({ length: 5 }, (_, index) => <span className="material-symbols-outlined text-[20px]" key={index} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              <span className="ml-2 font-label-md font-bold text-on-surface">4.9/5 (182 lượt đánh giá)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <article className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-md" key={testimonial.name}>
                <div>
                  <div className="mb-space-sm flex gap-1 text-secondary" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, index) => <span className="material-symbols-outlined text-[18px]" key={index} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                  </div>
                  <p className="mb-space-md font-body-sm italic text-on-surface-variant">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-space-sm border-t border-surface-variant pt-space-sm">
                  <img src={testimonial.image} alt="" className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <h3 className="font-label-md font-bold text-on-surface">{testimonial.name}</h3>
                    <p className="font-label-sm text-outline">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-container py-space-3xl text-on-primary" id="bao-gia">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-space-md inline-flex items-center gap-space-xs rounded-full bg-secondary-fixed/20 px-space-md py-1 font-label-caps uppercase text-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>Mắt Thấy – Tai Nghe – Tay Cảm Nhận</span>
              </div>
              <h2 className="mb-space-md font-headline-lg font-bold text-on-primary md:text-4xl">Đặt Lịch Tham Quan Công Trình Thực Tế Đang Thi Công</h2>
              <p className="mb-space-lg font-body-md leading-relaxed text-outline-variant">Trước khi quyết định, quý khách hoàn toàn có thể cùng kỹ sư Thành Phong trực tiếp đến thăm các công trình lâu đài, biệt thự đang hoàn thiện phào chỉ thạch cao và GFRC tại khu vực Đồng Hới, Lệ Thủy, Ba Đồn hoặc ghé thăm kho hàng Tân Thủy.</p>
              <ul className="space-y-space-sm font-body-sm text-outline-variant">
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[20px] text-secondary-fixed">check_circle</span>Xem trực tiếp kỹ thuật cắt góc và ghép mí không vết nứt</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[20px] text-secondary-fixed">check_circle</span>Kiểm tra thực tế mẫu phào thạch cao và mẫu xi măng GFRC đúc sẵn</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[20px] text-secondary-fixed">check_circle</span>Tư vấn dự toán khối lượng và chi phí bóc tách ngay tại công trình</li>
              </ul>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-space-lg text-on-surface shadow-2xl lg:col-span-6 md:p-space-xl">
              <h3 className="mb-space-xs font-headline-sm font-bold text-primary-container">Đăng Ký Đặt Lịch Hoặc Nhận Báo Giá Gốc</h3>
              <p className="mb-space-lg font-body-sm text-on-surface-variant">Kỹ sư kỹ thuật sẽ gọi lại trong 15 phút để xếp lịch đón tiếp hoặc gửi file mẫu PDF.</p>
              <form className="space-y-space-md" onSubmit={(event) => { event.preventDefault(); window.alert('Cảm ơn Quý khách! Tổng kho Thành Phong Quảng Bình sẽ liên hệ xác nhận lịch trong 15 phút.'); event.currentTarget.reset(); }}>
                <div>
                  <label className="mb-1 block font-label-sm font-semibold text-on-surface" htmlFor="client-name">Họ & Tên Khách Hàng *</label>
                  <input className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm text-on-surface shadow-sm focus:bg-surface-container-lowest focus:outline-none" id="client-name" placeholder="Ví dụ: Anh Tuấn / Chị Mai" required type="text" />
                </div>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-label-sm font-semibold text-on-surface" htmlFor="client-phone">Số Điện Thoại (Zalo) *</label>
                    <input className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm text-on-surface shadow-sm focus:bg-surface-container-lowest focus:outline-none" id="client-phone" placeholder="0919.xxx.xxx" required type="tel" />
                  </div>
                  <div>
                    <label className="mb-1 block font-label-sm font-semibold text-on-surface" htmlFor="client-location">Khu Vực Công Trình</label>
                    <select className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm text-on-surface shadow-sm focus:bg-surface-container-lowest focus:outline-none" id="client-location">
                      <option value="le-thuy">Huyện Lệ Thủy (Tân Thủy, TT Kiến Giang...)</option>
                      <option value="dong-hoi">TP. Đồng Hới (Bảo Ninh, Nam Lý, Bắc Lý...)</option>
                      <option value="ba-don">Thị xã Ba Đồn / Quảng Trạch</option>
                      <option value="quang-ninh">Huyện Quảng Ninh (Quán Hàu...)</option>
                      <option value="bo-trach">Huyện Bố Trạch (Hoàn Lão, Phong Nha...)</option>
                      <option value="other">Khu vực khác tại Quảng Bình</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-label-sm font-semibold text-on-surface" htmlFor="client-need">Nhu Cầu Cụ Thể</label>
                  <select className="w-full rounded-lg bg-surface-container-low px-space-md py-space-sm text-on-surface shadow-sm focus:bg-surface-container-lowest focus:outline-none" id="client-need">
                    <option value="visit">Tham quan công trình thực tế đang làm tại địa phương</option>
                    <option value="quote">Nhận báo giá trọn gói nhân công + vật tư</option>
                    <option value="wholesale">Mua sỉ vật tư cho đội thợ / nhà thầu</option>
                    <option value="gfrc">Đặt đúc GFRC đầu cột, phù điêu theo bản vẽ thiết kế</option>
                  </select>
                </div>
                <button className="mt-space-md flex w-full items-center justify-center gap-space-xs rounded-lg bg-secondary-fixed px-space-lg py-space-md font-label-caps uppercase font-bold tracking-wider text-primary-container shadow-md transition hover:bg-secondary-fixed-dim active:scale-[0.99]" type="submit">
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  <span>Xác Nhận Đặt Hẹn Tham Quan</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
