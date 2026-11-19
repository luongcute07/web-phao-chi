'use client';

import React from 'react';

const PROJECTS = [
  {
    tag: 'Công Trình Biệt Thự',
    title: 'Trần Thạch Cao Dát Vàng – TP. Đồng Hới',
    desc: 'Hoàn thiện 350m phào chỉ & mâm trần phòng khách hoàng gia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD45NLH6HG7a4Zvag1I8ic23rstn5tF1YeLuFYsHSqUiw8OxQcuFsCuHGBfKGzlvotK974xadF1T-z9Z_j4ffYlekOU-_6YnPh2zLsf85ebN3WvobtTDwtoSvbdMoFHCrFrfh7MC7tRx9L9XJfgKRwpepESxG__Ifpgf-fbLc9plXFNBJggivd2N_Xcz2nNrWSZvNKY9wWTXibrNvf6bRJrHTuZGQCcizfNW7uvC9D',
    alt: 'Hoàn thiện trần thạch cao biệt thự tân cổ điển dát vàng tại Đồng Hới',
  },
  {
    tag: 'Quy Mô Tổng Kho',
    title: 'Kho Hàng GFRC Lệ Thủy Sẵn 20.000m',
    desc: 'Cung cấp vật tư ngay trong ngày đến chân công trình',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    alt: 'Kho hàng phào chỉ xi măng GFRC và đầu cột tại Lệ Thủy Quảng Bình',
  },
  {
    tag: 'Dự Án Ngoại Thất',
    title: 'Phào Ngoại Thất Biệt Thự – Huyện Quảng Ninh',
    desc: 'Ứng dụng xi măng GFRC chống chịu hoàn toàn hơi muối biển',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBub2Hh0lpYyvD7uu2muMSOydXZySlUlRJMbHrRvJ1bwfj6fn6ltQufcZldh3M50Qms8xuX0z0L-fS4fnouhxVboRR8Z5VHLe6GkJ82JnisTYFzy_87u9S6NxWdP83ded1z882iipHQM10KbOnFN1K8Tb5fsyCdE4DRpDxcQEX6polCf4rNxTO1X8t-9wuekD_Y0x4xuzM0OluNLPSvuukG0f4XZ5Xns4_Iva8YMfls',
    alt: 'Mặt tiền lâu đài sử dụng phào chỉ xi măng GFRC và lục bình bê tông Quảng Bình',
  },
  {
    tag: 'Kỹ Thuật Sắc Nét',
    title: 'Trần Giật Cấp Nhà Phố Hiện Đại – Ba Đồn',
    desc: 'Đường chỉ góc cạnh phẳng tuyệt đối, tích hợp LED viền tinh tế',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEzbRXxGM5WddHE6xhL8FfZjw8HhrnSy25pWhIO5-0lOX0IAPl7zBOobOr0Piw1mhuKx6OIw_lwSSpq0E62AoFzU0ZAMULEuACRKhzZLgvnofVUgqFCzJwyPI4on6DLjH5mZzaBcZ_Fo_tHXY1pcsFDHl6AKmSfgA0FbUh8vjj4IV13gKQPCHkR-hL5zd_wc6hZULwJfHVk2-GrATgeJtLdJgtcGI2hG-dbb4ZoE5D',
    alt: 'Thi công phào thạch cao trần giật cấp hiện đại sắc sảo',
  },
  {
    tag: 'Xưởng Sản Xuất',
    title: 'Xưởng Đúc Lục Bình Bê Tông – Tân Thủy',
    desc: 'Dây chuyền quay ly tâm và đúc khuôn silicon chuẩn từng mm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5ke62zHX3pcRNGBTkaal5GdJZ6ydIVbcfBUilm2KiuVh_N9_-fqkSCxQlAjKnjL14DjM8ltFhHPhBQKbM5khlvBHs7Eiphk0okL8cQXyWnyKV_wMiAm98wbs_Tvm18vo_9L6Q-tGNb7awfFjsCd5pCApyELbsUTsx3AnVyedpxxfl5B9YDcLdFFNzU52rxH2nXcShgVVqiCrAz6R0vxZz36IodcBhBOV-L1mKpy3y',
    alt: 'Sản xuất lục bình bê tông và con tiện ban công chất lượng cao tại xưởng',
  },
  {
    tag: 'Dịch Vụ Tận Tâm',
    title: 'Tư Vấn & Cầm Mẫu Tận Công Trình',
    desc: 'Miễn phí đo đạc, bóc tách khối lượng và lên phối cảnh chi tiết',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3hAdQeHm6QtcbRFC1nCf0JisWLIu78v0bCvYZdkSeRACZKlIVMD07FR03P3i-vad9KP1zT4IX3S76ct7o_mEq1kN3mrqe69gXyOJVmhgLuN_JI85wGybNYcaNzg9cIWgf9VXwjr0tuIsK253BPLHuFNNQYj6dFSKOX3vCtskjNgUtNz4WMBxuBytUuvHxdFiN31rQwgXIx3OrbcYyMKMmClotKguCE4KxkY6S4B19',
    alt: 'Khảo sát và tư vấn mẫu phào chỉ trực tiếp tại công trình Quảng Bình',
  },
];

export default function ProjectsGallery() {
  return (
    <section className="py-20 lg:py-28 bg-pearl" id="cong-trinh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-gold-600 font-semibold text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-px bg-gold-500" />
              <span>Hình Ảnh Thực Tế</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navyDark">
              Kho Hàng Quy Mô &amp; Công Trình Hoàn Thiện
            </h2>
          </div>
          <p className="text-stone-500 text-sm max-w-md">
            Minh chứng năng lực cung ứng và độ tinh xảo trong từng đường nét thi công của đội ngũ Phào Chỉ Thành Phong tại Quảng Bình.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                loading="lazy"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold">
                  {project.tag}
                </span>
                <h3 className="font-serif text-lg font-bold mt-1">{project.title}</h3>
                <p className="text-xs text-stone-300 mt-1">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
