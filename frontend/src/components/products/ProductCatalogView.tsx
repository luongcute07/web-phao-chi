'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface ProductItem {
  code: string;
  group: 'thach-cao' | 'gfrc' | 'keo-vat-tu';
  sub: 'co-tran' | 'chi-tuong' | 'mam-tran' | 'gfrc-phao' | 'luc-binh' | 'dau-cot' | 'keo-dan' | 'phu-kien';
  title: string;
  badges: string[];
  desc: string;
  specs: {
    k1: string;
    v1: string;
    k2: string;
    v2: string;
    k3: string;
    v3: string;
  };
  priceLabel: string;
  priceValue: string;
  priceUnit: string;
  numericPrice: number; // for price range filtering
  availability: 'ready' | 'custom';
  image: string;
  alt: string;
  modal: {
    tag: string;
    stock: string;
    desc: string;
  };
}

const PRODUCTS_DATABASE: ProductItem[] = [
  {
    code: 'TC-CT12',
    group: 'thach-cao',
    sub: 'co-tran',
    title: 'Phào Cổ Trần Thạch Cao Lá Ô-rô Cổ Điển',
    badges: ['Bán Chạy Nhất', 'Hàng Sẵn Kho'],
    desc: 'Đúc bằng thạch cao nguyên chất gia cường lưới sợi thủy tinh, chống cong vênh, rãnh sắc sảo dễ sơn bả và thếp vàng.',
    specs: {
      k1: 'Kích thước:',
      v1: '120mm x 120mm x Dài 2.44m',
      k2: 'Đóng gói:',
      v2: '10 cây / kiện lót xốp',
      k3: 'Ứng dụng:',
      v3: 'Trần phòng khách, sảnh biệt thự'
    },
    priceLabel: 'Giá thợ thầu:',
    priceValue: '52.000đ',
    priceUnit: '/mét',
    numericPrice: 52000,
    availability: 'ready',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBuZsEc1gMXmL7GIsthw9VZ3JcHDJtLCdmzcKiefeGDRECr728u5njoZVlnQZJ4FMDqxwhE_RGBlYZVVXujzq1w5AshgvLs8OT9gRWNsOU7DH8x0SIHkGKP1Ai7XFVQT-zNMSUcqexLjvmGGD6ckC1bed8PvRvY-IGzNa6bnaboiaaUBfINxhMDHi4fvzVhxNtMBg0dgucKTmuVr0woDYzfJ12PHfjWbXuBwjmV5wM',
    alt: 'Neoclassical ornamental plaster cornice molding installed along the ceiling line in a luxury villa with subtle indirect warm golden cove lighting, pristine chalk white finish with sculpted acanthus leaves.',
    modal: {
      tag: 'THẠCH CAO TIÊU CHUẨN',
      stock: 'Sẵn hơn 3.200 mét tại kho Lệ Thủy',
      desc: 'Sản xuất trên dây chuyền khuôn silicon gia nhiệt độ nét cao. Bề mặt bám dính sơn tuyệt hảo, rãnh hèm chuẩn giảm tiêu hao bột bả trét mí.'
    }
  },
  {
    code: 'TC-CA08',
    group: 'thach-cao',
    sub: 'chi-tuong',
    title: 'Chỉ Tường Thạch Cao Chống Ẩm Kháng Nấm',
    badges: ['Chống Ẩm Lõi Xanh'],
    desc: 'Cốt thạch cao phụ gia kỵ nước cao cấp, chuyên dùng cho khí hậu gió nồm và mưa bão ẩm ướt tại ven biển Quảng Bình.',
    specs: {
      k1: 'Kích thước:',
      v1: 'Bản rộng 80mm x Dày 20mm x 2.44m',
      k2: 'Tiêu chuẩn:',
      v2: 'Kháng ẩm > 92%, không mốc',
      k3: 'Ứng dụng:',
      v3: 'Ô chia vách tường, hành lang'
    },
    priceLabel: 'Giá thợ thầu:',
    priceValue: '45.000đ',
    priceUnit: '/mét',
    numericPrice: 45000,
    availability: 'ready',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEzbRXxGM5WddHE6xhL8FfZjw8HhrnSy25pWhIO5-0lOX0IAPl7zBOobOr0Piw1mhuKx6OIw_lwSSpq0E62AoFzU0ZAMULEuACRKhzZLgvnofVUgqFCzJwyPI4on6DLjH5mZzaBcZ_Fo_tHXY1pcsFDHl6AKmSfgA0FbUh8vjj4IV13gKQPCHkR-hL5zd_wc6hZULwJfHVk2-GrATgeJtLdJgtcGI2hG-dbb4ZoE5D',
    alt: 'High precision plaster wall bead moulding profile painted crisp pearl white on deep charcoal gray wall with classical neoclassical frame arrangement.',
    modal: {
      tag: 'CHỐNG ẨM LÕI XANH',
      stock: 'Sẵn 1.800 mét tại kho Tân Thủy',
      desc: 'Bổ sung tinh chất kháng ẩm silicone và sợi thủy tinh phân tán ngẫu nhiên, giúp sản phẩm không trương nở khi độ ẩm không khí vượt ngưỡng 90%.'
    }
  },
  {
    code: 'TC-MT100',
    group: 'thach-cao',
    sub: 'mam-tran',
    title: 'Mâm Trần Hoa Văn Hoàng Gia D1000',
    badges: ['Dát Vàng Tinh Xảo'],
    desc: 'Đúc hoa nổi 3D đa tầng đối xứng chuẩn mực, tâm khoét chuẩn lắp quạt trần đèn hoặc đèn chùm đồng tân cổ điển.',
    specs: {
      k1: 'Đường kính:',
      v1: 'Ø 1.000 mm (1 Mét)',
      k2: 'Khối lượng:',
      v2: '~8.5 kg gia cố sợi bố đan',
      k3: 'Bảo hành:',
      v3: '10 năm không xệ võng'
    },
    priceLabel: 'Giá bán lẻ kho:',
    priceValue: '580.000đ',
    priceUnit: '/cái',
    numericPrice: 580000,
    availability: 'ready',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVwEjcWQa6HiIbi9dFseoJraN9uEYVcd92a7SlpqbHKIcNEsGwute6e3Pkbs6VaDdY4dUYQxzogJ4eimzqw1hFnTw4SHBbLOmH-EF0ra2YJbdx8huOVKg-Iho1KYr1BkH_HZB78BD__L0FT7VN3G9588mH2nsYllGFwnpg4tDoACdjR2lSexg_KBMH2wSMvkCpASf_HCuXjDE3t-AxRQKkKKOe0vqH4xK4ktMidzqn',
    alt: 'Intricate circular classical plaster ceiling medallion chandelier rose medallion with gilded 24k gold leaf accents on floral relief center.',
    modal: {
      tag: 'HOA VĂN ĐẶC BIỆT',
      stock: 'Sẵn 45 cái đủ mẫu D600 - D1200',
      desc: 'Mâm trần đúc hoa nổi 3 lớp tinh vi. Sẵn các điểm gia cố quang treo đèn chùm chịu lực trên 30kg an toàn tuyệt đối.'
    }
  },
  {
    code: 'GFRC-P20',
    group: 'gfrc',
    sub: 'gfrc-phao',
    title: 'Phào Mái Ngoại Thất GFRC Bản 200mm',
    badges: ['Chịu Bão Ven Biển', 'Cốt Sợi Thủy Tinh'],
    desc: 'Đúc bằng vữa xi măng mác 400 trộn sợi AR glass kháng kiềm, chống nứt nẻ, chịu muối mặn và nắng gắt miền Trung.',
    specs: {
      k1: 'Kích thước:',
      v1: 'Rộng 200mm x Vươn 150mm x 2.0m',
      k2: 'Độ bền:',
      v2: 'Trên 50 năm ngoài trời',
      k3: 'Liên kết:',
      v3: 'Bản mã râu sắt + Vít M8'
    },
    priceLabel: 'Giá thợ dự án:',
    priceValue: '145.000đ',
    priceUnit: '/mét',
    numericPrice: 145000,
    availability: 'custom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBub2Hh0lpYyvD7uu2muMSOydXZySlUlRJMbHrRvJ1bwfj6fn6ltQufcZldh3M50Qms8xuX0z0L-fS4fnouhxVboRR8Z5VHLe6GkJ82JnisTYFzy_87u9S6NxWdP83ded1z882iipHQM10KbOnFN1K8Tb5fsyCdE4DRpDxcQEX6polCf4rNxTO1X8t-9wuekD_Y0x4xuzM0OluNLPSvuukG0f4XZ5Xns4_Iva8YMfls',
    alt: 'Glass fiber reinforced concrete architectural facade cornice installed on exterior luxury neoclassical mansion under clear blue sky.',
    modal: {
      tag: 'XI MĂNG GFRC',
      stock: 'Sẵn 850 mét & Nhận đúc theo bán kính cong',
      desc: 'Vật liệu xi măng sợi thủy tinh gia cường kháng kiềm (Cem-FIL), trọng lượng chỉ bằng 1/3 bê tông cốt thép đặc, an toàn chịu bão cấp 13.'
    }
  },
  {
    code: 'LB-65XM',
    group: 'gfrc',
    sub: 'luc-binh',
    title: 'Lục Bình Bê Tông Đúc Sẵn Rút Lõi Thép',
    badges: ['Có Sẵn 5.000 Cây'],
    desc: 'Đúc ly tâm công nghệ cao bề mặt láng mịn, có lõi thép D6 xuyên suốt đỉnh-đáy, chịu tải va đập lan can hành lang.',
    specs: {
      k1: 'Chiều cao:',
      v1: 'Cao 65cm (hoặc 70cm, 80cm)',
      k2: 'Bụng quả chuông:',
      v2: 'Đường kính Ø 14cm',
      k3: 'Định mức:',
      v3: '5 cây / 1 mét dài lan can'
    },
    priceLabel: 'Giá sỉ tận xưởng:',
    priceValue: '42.000đ',
    priceUnit: '/cây',
    numericPrice: 42000,
    availability: 'ready',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5ke62zHX3pcRNGBTkaal5GdJZ6ydIVbcfBUilm2KiuVh_N9_-fqkSCxQlAjKnjL14DjM8ltFhHPhBQKbM5khlvBHs7Eiphk0okL8cQXyWnyKV_wMiAm98wbs_Tvm18vo_9L6Q-tGNb7awfFjsCd5pCApyELbsUTsx3AnVyedpxxfl5B9YDcLdFFNzU52rxH2nXcShgVVqiCrAz6R0vxZz36IodcBhBOV-L1mKpy3y',
    alt: 'Neoclassical architectural concrete balusters balustrade lineup on an upscale terrace overlooking garden, smooth finish stone color.',
    modal: {
      tag: 'LAN CAN BÊ TÔNG',
      stock: 'Sẵn hơn 5.000 cây tại bãi đúc Lệ Thủy',
      desc: 'Đúc bằng máy rung thủy lực mác 350, cây lục bình tròn đều, láng mịn không bọt khí, có sẵn thép râu chờ dễ dàng hàn liên kết tay vịn.'
    }
  },
  {
    code: 'DC-C40',
    group: 'gfrc',
    sub: 'dau-cot',
    title: 'Đầu Cột Tròn Corinthian GFRC Cổ Điển',
    badges: ['Đúc Nổi Sắc Nét'],
    desc: 'Đúc ghép 2 mảnh thông minh ôm khít thân cột bê tông đổ sẵn, giảm 70% thời gian đắp tay truyền thống.',
    specs: {
      k1: 'Đường kính cột:',
      v1: 'D350 – D400 – D500 mm',
      k2: 'Chất liệu:',
      v2: 'GFRC mác 450 chịu lực dầm',
      k3: 'Ứng dụng:',
      v3: 'Cột tiền sảnh biệt thự lâu đài'
    },
    priceLabel: 'Giá xuất xưởng:',
    priceValue: '1.250.000đ',
    priceUnit: '/bộ',
    numericPrice: 1250000,
    availability: 'custom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeF9vUxusaspFzntBTa1LD6qeN69olod6jCdQtQO_TzUBitECrH4rtgSSuAuLwUMqRkHf4T4orB0fzuhAEDvyq8eVn-FKdyDy9vdVO2MtIEZSOQx68cToiQnjasAxUc3vQ1UQkfa6O4FaVYznlxkbrbdrJszDSg5vGHrzL9RYGd3Si7uvtiXBLjzPzU0yLppR3p4JHjALehqsTzOkepuCB7XOeDN2eGAZSveNbSjrd',
    alt: 'Majestic Corinthian column capital made of GFRC cement cast with intricate scrolls and stylized acanthus leaves, classical architectural exterior portico.',
    modal: {
      tag: 'ĐẦU CỘT GFRC',
      stock: 'Sẵn 30 bộ đường kính D350-D400',
      desc: 'Được chế tác theo tỷ lệ thức cột Hy Lạp cổ điển. GFRC mỏng nhẹ chỉ dày 18mm nhưng độ cứng uốn cực cao, không nứt nẻ mặt tiền.'
    }
  },
  {
    code: 'KEO-TP2K',
    group: 'keo-vat-tu',
    sub: 'keo-dan',
    title: 'Keo Dán Phào 2 Thành Phần T&P Siêu Dính',
    badges: ['Chuyên Dụng Thạch Cao', 'Không Co Ngót'],
    desc: 'Công thức gốc nhựa epoxy dẻo dai liên kết thạch cao với tường vữa xi măng hoặc trần thạch cao khung xương, triệt tiêu vết nứt tiếp giáp.',
    specs: {
      k1: 'Đóng gói:',
      v1: 'Bộ 5kg (Thành phần A + B)',
      k2: 'Thời gian đông kết:',
      v2: '25 – 35 phút',
      k3: 'Định mức dán:',
      v3: '~35 – 45 mét dài phào'
    },
    priceLabel: 'Giá đại lý thùng:',
    priceValue: '195.000đ',
    priceUnit: '/bộ',
    numericPrice: 195000,
    availability: 'ready',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqkvfOe1hi-vGXuILfDvPkiwVXjuzbxnUrbYsGu8O5mc-9a5l1N9pgBYNS53AH7fN7yOdCiXEDn6SoYWOyINv6NfN5fgmVOj2WGI4J_DtlBGxnsu5R9zqfDZlWhIEqFHhzv2y1QA9nQdsZNX09aJmWJP2nGZgwrBsyQdMXeoA13upwUWrzanFfVvHWKBIT4VhgYqlTibWUjFkm5A6ZFdk8s3TjsSoXNc2Vy_QDWQfL',
    alt: 'Industrial professional epoxy adhesive tub two-component paste container packaging with metallic label on a neat clean workshop bench.',
    modal: {
      tag: 'VẬT TƯ THI CÔNG',
      stock: 'Sẵn 200 thùng tại kho',
      desc: 'Độ kết dính cơ học cực mạnh trên bề mặt tường tô trát thô và tấm thạch cao trần. Đảm bảo mối nối không bị co ngót nứt chân chim.'
    }
  },
  {
    code: 'CK-BT50',
    group: 'keo-vat-tu',
    sub: 'phu-kien',
    title: 'Con Kê Bê Tông Đúc Sẵn Mác Cao D20/25/30',
    badges: ['Mác 500 Siêu Cứng'],
    desc: 'Đảm bảo lớp bê tông bảo vệ cốt thép chuẩn thiết kế kết cấu, chống ăn mòn muối biển cho móng, dầm, sàn nhà ven biển Lệ Thủy.',
    specs: {
      k1: 'Kích cỡ:',
      v1: 'Đa kích thước: 15/20, 25/30mm',
      k2: 'Đóng bao:',
      v2: 'Thùng carton 100 - 150 viên',
      k3: 'Khả năng chịu tải:',
      v3: '> 350 kg/viên'
    },
    priceLabel: 'Giá nguyên thùng:',
    priceValue: '110.000đ',
    priceUnit: '/thùng',
    numericPrice: 110000,
    availability: 'ready',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD2rPNX2lPaYWF_9Ybg3ILsKMC98rbmC_IYXFAmGmHmEzc3No3RACpFwUq0LAP1l5EI4QS09teglH86fa6mMcEkPA1-_W1dj4FFzRy51PiBoyQ7u4j6denOLuBbfKmhdMZ-5l4s_b9Z0Zdrbx-eRJgw2RTCsYCEFWXv-UlpptQntgDT9qGaHI8HMNchkkiabf6NPggX66Hjqrs67n5R3TFx6mm078yWH8edn-Yfnvd',
    alt: 'High strength concrete spacer blocks for reinforcement rebar laying inside a slab framework on an architectural construction job site.',
    modal: {
      tag: 'PHỤ KIỆN XÂY THÔ',
      stock: 'Sẵn 500 thùng carton các kích thước',
      desc: 'Giải pháp thay thế đá mi chèn sắt lạc hậu. Chống cháy, bảo vệ lớp thép sàn bê tông vĩnh cửu khỏi không khí ẩm mặn ven biển Quảng Bình.'
    }
  },
  {
    code: 'GFRC-CB35',
    group: 'gfrc',
    sub: 'dau-cot',
    title: 'Con Bọ Đỡ Dầm GFRC Điêu Khắc Tân Cổ Điển',
    badges: ['Đúc Rỗng Nhẹ Trọng'],
    desc: 'Thiết kế rỗng ruột tối ưu trọng lượng lên kết cấu mái, ngàm râu thép liên kết trực tiếp dầm bê tông cốt thép cực kỳ vững chắc.',
    specs: {
      k1: 'Quy cách:',
      v1: '350mm x 200mm x 150mm',
      k2: 'Độ dày thành:',
      v2: '15 - 20mm GFRC đặc biệt',
      k3: 'Chịu gió cấp:',
      v3: 'Cấp 12 - 14 gió bão'
    },
    priceLabel: 'Giá thợ thầu:',
    priceValue: '185.000đ',
    priceUnit: '/cái',
    numericPrice: 185000,
    availability: 'custom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC8Bn9RhtdTXtvtlSPO6zcUKve-F-aD3NvUl7Jp0U2PS5MuCkY7jzw9zhWK-1BaiA0WCvfqsAtxg1yZqmjqiEY2STO0e8NecLkJqmjdUMUILXVo42tA0u5Mzi8aiftIkYlbH9O7CdvLAG3FfQusgWa-xsrxCT1NYmg5wcvMlaxAMPpIEuEoAxd58P9Zx6-jBjtm0yE2n0TgccOd6NMPO1M70RxEXZHPI_7zQ1unb73',
    alt: 'Classical architectural facade corbel bracket console made of concrete GFRC supporting an overhanging roof cornice in direct warm afternoon sunshine.',
    modal: {
      tag: 'CON BỌ GFRC',
      stock: 'Sẵn 150 cái tại kho',
      desc: 'Tạo điểm nhấn uy nghi cho khối kiến trúc mái vươn biệt thự kiểu Pháp. Bắt vít nở thép âm chắc chắn vào dầm bê tông cốt thép.'
    }
  },
  {
    code: 'VT-NO8',
    group: 'keo-vat-tu',
    sub: 'phu-kien',
    title: 'Bộ Vít Nở GFRC M8x120 & Vít Đen Thạch Cao',
    badges: ['Mạ Kẽm Chống Rỉ'],
    desc: 'Nở sắt mạ kẽm nhúng nóng kháng muối biển, vít đen nhuyễn ren tự khoan không làm vỡ cạnh phào thạch cao khi thi công.',
    specs: {
      k1: 'Kích thước vít:',
      v1: 'M4x35, M4x50, Nở M8x120',
      k2: 'Đóng gói:',
      v2: 'Hộp 1kg hoặc Bịch 100 con nở',
      k3: 'Độ bám kéo:',
      v3: '> 1.200 kg lực nhổ'
    },
    priceLabel: 'Giá phụ kiện:',
    priceValue: '3.500đ',
    priceUnit: '/con nở M8',
    numericPrice: 3500,
    availability: 'ready',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiwvAYEyxxwpqhdXL-bTkluZljNnZUhocDPDNMSqcG6tdeJqXwOCv4upfxqAACZsUy1_ftzqb-yqQi5nv4Sd75K0TH45y11ATVrYGdaT06a2jEplkAVoxeaWXR2fD4dE4DY1qE7kEmWZzH4D_7Eqp3YEvPt1cTz3UKw07Wf7GeBsmTGznvphhdQ3p6r9tCD4fPBai-PBFeVK9o5b29TXe2QxBP7vUCWT9rc_B_pKjD',
    alt: 'Heavy duty galvanized anchor expansion bolts and drywall screws neatly arranged in industrial workshop box, metallic anti-corrosion silver coating.',
    modal: {
      tag: 'VẬT TƯ LIÊN KẾT',
      stock: 'Sẵn hàng ngàn chiếc kèm chứng chỉ',
      desc: 'Nở thép mạ kẽm cơ học chịu tải nhổ 12kN. Vít thạch cao mạ phosphate đen chống rỉ, bước ren sâu chống trượt khi bắn máy pin.'
    }
  }
];

interface ProductCatalogViewProps {
  initialCategory?: string;
}

const getInitialGroupAndSub = (cat?: string) => {
  if (cat === 'thach-cao' || cat === 'gfrc') return { group: cat, sub: 'all' };
  if (cat === 'mam-tran') return { group: 'thach-cao', sub: 'mam-tran' };
  if (cat === 'con-tien') return { group: 'gfrc', sub: 'luc-binh' };
  if (cat === 'keo-dan') return { group: 'keo-vat-tu', sub: 'all' };
  return { group: 'all', sub: 'all' };
};

export default function ProductCatalogView({ initialCategory }: ProductCatalogViewProps) {
  const searchParams = useSearchParams();
  const urlCategory = searchParams?.get('cat') || initialCategory;

  const initialFilters = getInitialGroupAndSub(initialCategory);

  // Filter States
  const [currentGroup, setCurrentGroup] = useState<string>(initialFilters.group);
  const [currentSub, setCurrentSub] = useState<string>(initialFilters.sub);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');
  const [priceRangeFilter, setPriceRangeFilter] = useState<string>('all');

  // Modal State
  const [activeModalCode, setActiveModalCode] = useState<string | null>(null);

  // Form State
  const [leadSuccess, setLeadSuccess] = useState<boolean>(false);
  const [leadFullName, setLeadFullName] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');
  const [leadCategory, setLeadCategory] = useState<string>('tron-goi');

  // Sync category from URL query parameters (e.g. from header dropdown ?cat=thach-cao)
  useEffect(() => {
    if (urlCategory) {
      const parsed = getInitialGroupAndSub(urlCategory);
      setCurrentGroup(parsed.group);
      setCurrentSub(parsed.sub);
    }
  }, [urlCategory]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATABASE.filter((item) => {
      // Group filter
      const matchGroup = currentGroup === 'all' || item.group === currentGroup;
      // Sub filter
      const matchSub = currentSub === 'all' || item.sub === currentSub;
      // Search text match
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === '' ||
        item.code.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.specs.v1.toLowerCase().includes(q) ||
        item.specs.v3.toLowerCase().includes(q);

      // Availability filter
      const matchAvail =
        availabilityFilter === 'all' ||
        (availabilityFilter === 'ready' && item.availability === 'ready') ||
        (availabilityFilter === 'custom' && item.availability === 'custom');

      // Price range filter
      let matchPrice = true;
      if (priceRangeFilter === 'low') {
        matchPrice = item.numericPrice < 65000;
      } else if (priceRangeFilter === 'mid') {
        matchPrice = item.numericPrice >= 65000 && item.numericPrice <= 180000;
      } else if (priceRangeFilter === 'high') {
        matchPrice = item.numericPrice > 180000;
      }

      return matchGroup && matchSub && matchSearch && matchAvail && matchPrice;
    });
  }, [currentGroup, currentSub, searchQuery, availabilityFilter, priceRangeFilter]);

  // Active product for modal
  const activeProduct = useMemo(() => {
    if (!activeModalCode) return null;
    return PRODUCTS_DATABASE.find((p) => p.code === activeModalCode) || null;
  }, [activeModalCode]);

  // Handle lead form submission
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSuccess(true);
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Chào Tổng Kho Phào Chỉ Quảng Bình, tôi là ${leadFullName || 'Khách Hàng'} (SĐT: ${leadPhone}), tôi muốn nhận Catalogue PDF và Báo giá hạng mục: ${leadCategory}`
      );
      window.open(`https://zalo.me/0919051066?text=${msg}`, '_blank');
    }, 700);
  };

  return (
    <div className="pt-0">
      <div className="flex flex-col w-full">
        {/* ========================================================================= */}
        {/* SECTION 1: EDITORIAL PRODUCT CATALOG HERO WITH SEARCH & LIVE INVENTORY TICKER */}
        {/* ========================================================================= */}
        <section className="relative bg-surface-container-low overflow-hidden pt-space-xl pb-space-2xl px-margin-mobile md:px-margin">
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />
          <div className="absolute left-1/4 -bottom-20 w-80 h-80 rounded-full bg-primary-fixed/25 blur-2xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps uppercase mb-space-sm shadow-sm">
                  <span className="material-symbols-outlined text-secondary font-bold text-[16px]">verified</span>
                  <span>Tổng Kho Đại Lý Cấp 1 Thành Phong • Lệ Thủy &amp; Đồng Hới</span>
                </div>
                <h1 className="font-headline-xl text-primary font-bold tracking-tight mb-space-sm">
                  Danh Mục Phào Chỉ &amp; Vật Tư Kiến Trúc Quảng Bình
                </h1>
                <p className="font-body-lg text-on-surface-variant max-w-2xl">
                  Hơn 1.000+ mẫu phào thạch cao nội thất, xi măng sợi thủy tinh GFRC ngoại thất đúc sẵn. Trữ lượng lớn sẵn kho Tân Thủy, chiết khấu thợ thầu và đại lý <span className="font-semibold text-secondary">15% – 25%</span> kèm hóa đơn VAT.
                </p>
              </div>

              {/* Metric Highlight Badge */}
              <div className="grid grid-cols-3 gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-md lg:w-96 flex-shrink-0">
                <div className="text-center">
                  <span className="block font-headline-md text-secondary font-bold">1.200+</span>
                  <span className="font-label-sm text-outline">Khuôn mẫu sẵn</span>
                </div>
                <div className="text-center border-l-0 bg-surface-container-high/30 rounded-lg py-1">
                  <span className="block font-headline-md text-primary font-bold">48 Giờ</span>
                  <span className="font-label-sm text-outline">Giao toàn tỉnh</span>
                </div>
                <div className="text-center">
                  <span className="block font-headline-md text-secondary font-bold">-25%</span>
                  <span className="font-label-sm text-outline">Giá thợ thầu</span>
                </div>
              </div>
            </div>

            {/* Quick Search & Interactive Specification Bar */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-space-md">
              <div className="relative w-full md:flex-1">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                <input
                  id="productSearchInput"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm theo mã sản phẩm (TC-80, GFRC-220, LB-65), tên phào, quy cách..."
                  className="w-full pl-10 pr-space-md py-space-sm bg-surface rounded-lg font-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary shadow-inner placeholder:text-outline-variant"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-space-sm w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                <select
                  id="quickAvailabilityFilter"
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                  className="bg-surface-container-high font-label-md text-on-surface px-space-md py-space-sm rounded-lg focus:outline-none cursor-pointer"
                >
                  <option value="all">Tất cả kho hàng</option>
                  <option value="ready">Có sẵn tại kho Lệ Thủy</option>
                  <option value="custom">Sản xuất theo bản vẽ GFRC</option>
                </select>

                <select
                  id="quickPriceRange"
                  value={priceRangeFilter}
                  onChange={(e) => setPriceRangeFilter(e.target.value)}
                  className="bg-surface-container-high font-label-md text-on-surface px-space-md py-space-sm rounded-lg focus:outline-none cursor-pointer"
                >
                  <option value="all">Mức giá vật tư</option>
                  <option value="low">Dưới 65.000đ/m</option>
                  <option value="mid">65.000đ - 180.000đ/m</option>
                  <option value="high">Trên 180.000đ/cây - cái</option>
                </select>

                <a
                  href="#catalogue-download"
                  className="inline-flex items-center gap-1 bg-secondary hover:bg-secondary/90 text-on-secondary px-space-md py-space-sm rounded-lg font-label-caps uppercase whitespace-nowrap shadow-sm transition"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Tải Bảng Giá</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: MULTI-TIER ARCHITECTURAL CATEGORY TABS & FILTER BAR */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
          <div className="flex flex-col gap-space-md">
            {/* Main Tier Selection Tabs */}
            <div className="flex flex-wrap items-center gap-space-sm p-1.5 bg-surface-container-high rounded-xl" id="groupTabs">
              <button
                type="button"
                onClick={() => {
                  setCurrentGroup('all');
                  setCurrentSub('all');
                }}
                className={`cat-pill flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg font-label-md transition-all shadow-sm ${
                  currentGroup === 'all'
                    ? 'active bg-primary-container text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface hover:text-secondary'
                }`}
                data-group="all"
              >
                <span className="material-symbols-outlined text-[18px]">grid_view</span>
                <span>Tất Cả Sản Phẩm ({PRODUCTS_DATABASE.length})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentGroup('thach-cao');
                  setCurrentSub('all');
                }}
                className={`cat-pill flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg font-label-md transition-all shadow-sm ${
                  currentGroup === 'thach-cao'
                    ? 'active bg-primary-container text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface hover:text-secondary'
                }`}
                data-group="thach-cao"
              >
                <span className="material-symbols-outlined text-[18px]">architecture</span>
                <span>1. Phào Chỉ &amp; Hoa Văn Thạch Cao</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentGroup('gfrc');
                  setCurrentSub('all');
                }}
                className={`cat-pill flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg font-label-md transition-all shadow-sm ${
                  currentGroup === 'gfrc'
                    ? 'active bg-primary-container text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface hover:text-secondary'
                }`}
                data-group="gfrc"
              >
                <span className="material-symbols-outlined text-[18px]">foundation</span>
                <span>2. Xi Măng GFRC Đúc Sẵn &amp; Ngoại Thất</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentGroup('keo-vat-tu');
                  setCurrentSub('all');
                }}
                className={`cat-pill flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg font-label-md transition-all shadow-sm ${
                  currentGroup === 'keo-vat-tu'
                    ? 'active bg-primary-container text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface hover:text-secondary'
                }`}
                data-group="keo-vat-tu"
              >
                <span className="material-symbols-outlined text-[18px]">handyman</span>
                <span>3. Keo Dán T&amp;P &amp; Vật Tư Thi Công</span>
              </button>
            </div>

            {/* Sub-Category Granular Filter Tag Chips */}
            <div className="flex items-center gap-space-xs overflow-x-auto py-1 text-label-sm scrollbar-none" id="subTagContainer">
              <span className="text-outline uppercase font-label-caps text-[10px] pr-2 flex items-center gap-1 shrink-0">
                <span className="material-symbols-outlined text-[14px]">tune</span> Lọc chi tiết:
              </span>

              {[
                { subKey: 'all', label: 'Tất cả chủng loại' },
                { subKey: 'co-tran', label: 'Phào cổ trần thạch cao' },
                { subKey: 'chi-tuong', label: 'Phào chỉ nẹp tường' },
                { subKey: 'mam-tran', label: 'Mâm trần D600 - D1200' },
                { subKey: 'gfrc-phao', label: 'Phào chỉ GFRC ngoại thất' },
                { subKey: 'luc-binh', label: 'Lục bình & Lan can' },
                { subKey: 'dau-cot', label: 'Đầu cột & Con bọ dầm' },
                { subKey: 'keo-dan', label: 'Keo 2 thành phần T&P' },
                { subKey: 'phu-kien', label: 'Vít nở & Con kê' },
              ].map((chip) => {
                const isActive = currentSub === chip.subKey;
                return (
                  <button
                    key={chip.subKey}
                    type="button"
                    onClick={() => setCurrentSub(chip.subKey)}
                    className={`sub-chip px-3 py-1 rounded-full font-medium transition shadow-sm whitespace-nowrap text-xs ${
                      isActive
                        ? 'active bg-secondary text-on-secondary'
                        : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                    }`}
                    data-sub={chip.subKey}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: RICH PRODUCT GRID SHOWCASE (10+ SPECIFIC ARCHITECTURAL ITEMS) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pb-space-3xl" id="san-pham">
          {/* Active Result Count & Warehouse Status Indicator */}
          <div className="flex items-center justify-between pb-space-md mb-space-lg">
            <div className="flex items-center gap-space-xs font-body-sm text-on-surface-variant">
              <span>Hiển thị</span>
              <strong className="text-secondary font-bold" id="visibleCount">
                {filteredProducts.length}
              </strong>
              <span>mẫu quy chuẩn sẵn sàng xuất kho</span>
            </div>
            <div className="flex items-center gap-2 text-label-sm text-secondary font-medium">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary-fixed ring-4 ring-secondary/20" />
              <span>Kho Lệ Thủy: Xuất hàng trong ngày</span>
            </div>
          </div>

          {/* Empty State if no product matches */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-surface-container-lowest rounded-xl p-8 border border-outline/10">
              <span className="material-symbols-outlined text-outline text-[48px] block mb-2">search_off</span>
              <h3 className="font-headline-sm text-primary font-bold mb-1">Không tìm thấy sản phẩm phù hợp</h3>
              <p className="font-body-sm text-on-surface-variant max-w-md mx-auto mb-4">
                Vui lòng thử điều chỉnh lại từ khóa tìm kiếm hoặc bấm chọn lại &quot;Tất cả chủng loại&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setCurrentGroup('all');
                  setCurrentSub('all');
                  setAvailabilityFilter('all');
                  setPriceRangeFilter('all');
                }}
                className="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md uppercase tracking-wider"
              >
                Xóa Bộ Lọc
              </button>
            </div>
          ) : (
            /* Product Card Mosaic Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-lg" id="productGrid">
              {filteredProducts.map((item) => (
                <article
                  key={item.code}
                  className="product-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  data-code={item.code}
                  data-group={item.group}
                  data-sub={item.sub}
                >
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-alt={item.alt}
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {item.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className={`px-2 py-0.5 rounded font-label-caps uppercase shadow-sm ${
                            bIdx === 0
                              ? 'bg-secondary-fixed text-primary-container'
                              : 'bg-surface-container-lowest/90 text-primary backdrop-blur-sm'
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-1 rounded bg-primary-container/80 text-secondary-fixed font-label-caps uppercase backdrop-blur-sm">
                      Mã: {item.code}
                    </span>
                  </div>

                  <div className="p-space-md flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline-sm text-primary font-bold group-hover:text-secondary transition line-clamp-1 mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body-sm text-on-surface-variant line-clamp-2 mb-space-sm">
                        {item.desc}
                      </p>
                      <div className="space-y-1 py-space-xs bg-surface-container-low px-space-sm rounded-lg mb-space-md font-body-sm text-[12px] text-outline">
                        <div className="flex justify-between">
                          <span>{item.specs.k1}</span> <strong className="text-on-surface">{item.specs.v1}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>{item.specs.k2}</span> <strong className="text-on-surface">{item.specs.v2}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>{item.specs.k3}</span> <strong className="text-secondary font-medium">{item.specs.v3}</strong>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between mb-space-sm">
                        <span className="font-label-sm text-outline">{item.priceLabel}</span>
                        <span className="font-headline-sm text-secondary font-bold">
                          {item.priceValue} <span className="font-body-sm text-outline font-normal">{item.priceUnit}</span>
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-space-xs">
                        <a
                          className="w-full py-2 bg-secondary text-on-secondary rounded-lg font-label-caps uppercase text-center hover:bg-secondary/90 transition shadow-sm flex items-center justify-center gap-1"
                          href={`https://zalo.me/0919051066?text=BaoGia_${item.code}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="material-symbols-outlined text-[16px]">chat</span>
                          Báo Giá Zalo
                        </a>
                        <button
                          type="button"
                          className="w-full py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg font-label-caps uppercase text-center transition"
                          onClick={() => setActiveModalCode(item.code)}
                        >
                          Chi Tiết
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: TECHNICAL COMPARISON SPECIFICATION & COASTAL QUANG BINH GUIDANCE TABLE */}
        {/* ========================================================================= */}
        <section className="bg-surface-container-low py-space-2xl px-margin-mobile md:px-margin" id="quy-trinh">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
              <div>
                <span className="font-label-caps uppercase text-secondary font-bold tracking-widest text-[11px] block mb-1">
                  Khuyến Nghị Kỹ Thuật Địa Phương
                </span>
                <h2 className="font-headline-lg text-primary font-bold">
                  Bảng So Sánh Vật Liệu &amp; Giải Pháp Chịu Khí Hậu Gió Bão Quảng Bình
                </h2>
              </div>
              <p className="font-body-sm text-on-surface-variant max-w-md">
                Đặc thù vùng biển Lệ Thủy, Đồng Hới chịu hơi muối biển mặn và bão lớn cấp 11–13 hàng năm đòi hỏi việc tách bạch vật liệu nội ngoại thất nghiêm ngặt.
              </p>
            </div>

            {/* Neoclassical Architectural Table Card */}
            <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm">
                  <thead>
                    <tr className="bg-primary-container text-on-primary font-label-md">
                      <th className="py-space-md px-space-lg">Tiêu Chí Đánh Giá</th>
                      <th className="py-space-md px-space-lg bg-primary-container/90 text-secondary-fixed">
                        Phào Chỉ Thạch Cao (Nội Thất)
                      </th>
                      <th className="py-space-md px-space-lg bg-secondary text-on-secondary">
                        Xi Măng Sợi Thủy Tinh GFRC (Ngoại Thất)
                      </th>
                      <th className="py-space-md px-space-lg">Khuyến Cáo Thi Công Tại Quảng Bình</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0 text-on-surface-variant">
                    <tr className="hover:bg-surface-container transition">
                      <td className="py-space-md px-space-lg font-label-md text-primary">Khu vực ứng dụng tối ưu</td>
                      <td className="py-space-md px-space-lg">Trần thạch cao, tường phòng khách, phòng ngủ, vòm thông tầng trong nhà.</td>
                      <td className="py-space-md px-space-lg font-medium text-primary">Mặt tiền, phào ban công, cột sảnh, mái vòm, lan can ngoài trời 100%.</td>
                      <td className="py-space-md px-space-lg text-secondary font-semibold">Tuyệt đối không dùng thạch cao ra ngoài trời.</td>
                    </tr>
                    <tr className="bg-surface-container-low/50 hover:bg-surface-container transition">
                      <td className="py-space-md px-space-lg font-label-md text-primary">Cấu trúc gia cường cốt lõi</td>
                      <td className="py-space-md px-space-lg">Bột thạch cao tinh khiết + Lưới sợi thủy tinh và sợi đay chống vặn xoắn.</td>
                      <td className="py-space-md px-space-lg font-medium text-primary">Xi măng PCB40, cát thạch anh mịn + Sợi thủy tinh kháng kiềm AR Glass.</td>
                      <td className="py-space-md px-space-lg">Chống giòn gãy trước tác động của chênh lệch nhiệt độ lớn mùa hè.</td>
                    </tr>
                    <tr className="hover:bg-surface-container transition">
                      <td className="py-space-md px-space-lg font-label-md text-primary">Khả năng kháng ẩm &amp; muối mặn</td>
                      <td className="py-space-md px-space-lg">Kháng ẩm tốt khi dùng dòng lõi xanh kỵ nước. Không tiếp xúc nước mưa trực tiếp.</td>
                      <td className="py-space-md px-space-lg font-medium text-secondary">Kháng muối biển 100%, chống thấm tuyệt đối, không rêu mốc.</td>
                      <td className="py-space-md px-space-lg">Nhà ven biển Đồng Hới, Nhật Lệ, Bảo Ninh bắt buộc dùng GFRC cho mặt đứng.</td>
                    </tr>
                    <tr className="bg-surface-container-low/50 hover:bg-surface-container transition">
                      <td className="py-space-md px-space-lg font-label-md text-primary">Khả năng chịu gió bão &amp; lực va đập</td>
                      <td className="py-space-md px-space-lg">Chịu lực rung lắc trần thạch cao nhờ keo 2 thành phần T&amp;P đàn hồi.</td>
                      <td className="py-space-md px-space-lg font-medium text-primary">Chịu gió giật cấp 13-14 nhờ hệ nở sắt cấy sâu vào bê tông kết cấu.</td>
                      <td className="py-space-md px-space-lg">Mỗi mét phào GFRC phải bắn tối thiểu 2 bu-lông nở M8 kèm keo bọt.</td>
                    </tr>
                    <tr className="hover:bg-surface-container transition">
                      <td className="py-space-md px-space-lg font-label-md text-primary">Tuổi thọ công trình cam kết</td>
                      <td className="py-space-md px-space-lg">20 – 30 năm (trong điều kiện trần không bị dột nước mái).</td>
                      <td className="py-space-md px-space-lg font-medium text-secondary">50 – 70 năm tương đương niên hạn bê tông cốt thép của tòa nhà.</td>
                      <td className="py-space-md px-space-lg">Bảo hành cong vênh nứt gãy 10 năm tại kho Thành Phong.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CATALOGUE DOWNLOAD BANNER & CONTRACTOR QUOTE ENGINE */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-space-2xl" id="catalogue-download">
          <div className="relative bg-primary-container text-on-primary rounded-2xl shadow-xl overflow-hidden p-space-xl md:p-space-2xl">
            {/* Decorative Backdrop Glow */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Text & Value Props */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary/20 text-secondary-fixed font-label-caps uppercase mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                  <span>Bộ Tài Liệu Kiến Trúc 2025</span>
                </div>
                <h2 className="font-headline-xl text-on-primary font-bold mb-space-sm">
                  Tải Trọn Bộ Catalogue PDF 1.000+ Mẫu Phào Chỉ &amp; Bảng Giá Sỉ
                </h2>
                <p className="font-body-md text-on-primary-container mb-space-lg max-w-xl">
                  Tài liệu chi tiết bản vẽ CAD mặt cắt phào, tỷ lệ vàng mâm trần, thông số bu-lông lắp đặt GFRC và chính sách chiết khấu thợ thầu tại Lệ Thủy, Quảng Ninh, Đồng Hới, Ba Đồn.
                </p>
                <div className="flex flex-wrap items-center gap-space-md text-label-sm text-secondary-fixed">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span> File PDF 45MB nét cao
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">draw</span> Sẵn thư viện Sketchup/3DS Max
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">local_shipping</span> Bốc hàng tận kho
                  </span>
                </div>
              </div>

              {/* Rapid Lead Submission Form */}
              <div className="lg:col-span-5 bg-surface-container-lowest text-on-surface p-space-lg rounded-xl shadow-2xl">
                <h3 className="font-headline-sm text-primary font-bold mb-1">
                  Đăng Ký Nhận Giá Thầu Ưu Đãi
                </h3>
                <p className="font-body-sm text-on-surface-variant mb-space-md">
                  Gửi thông tin ngay, nhân viên phụ trách kho Lệ Thủy sẽ gửi bảng giá qua Zalo trong 5 phút.
                </p>
                <form className="space-y-space-sm" id="leadForm" onSubmit={handleLeadSubmit}>
                  <div>
                    <label className="block font-label-sm text-outline mb-1">Họ Tên / Đơn Vị Thi Công</label>
                    <input
                      className="w-full px-space-md py-space-sm bg-surface rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary shadow-inner"
                      placeholder="Anh/Chị Thợ thầu, KTS..."
                      required
                      type="text"
                      value={leadFullName}
                      onChange={(e) => setLeadFullName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-outline mb-1">Số Điện Thoại (Zalo nhận tài liệu) *</label>
                    <input
                      className="w-full px-space-md py-space-sm bg-surface rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary shadow-inner"
                      pattern="[0-9]{10}"
                      placeholder="09xx.xxx.xxx"
                      required
                      type="tel"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-outline mb-1">Hạng mục cần quan tâm</label>
                    <select
                      className="w-full px-space-md py-space-sm bg-surface rounded-lg font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary shadow-inner cursor-pointer"
                      value={leadCategory}
                      onChange={(e) => setLeadCategory(e.target.value)}
                    >
                      <option value="tron-goi">Báo giá trọn gói Phào Chỉ + GFRC + Keo dán</option>
                      <option value="thach-cao">Chỉ lấy phào chỉ thạch cao nội thất</option>
                      <option value="gfrc">Đặt đúc xi măng GFRC mặt tiền biệt thự</option>
                      <option value="keo-vat-tu">Lấy sỉ keo T&amp;P và phụ kiện vít nở</option>
                    </select>
                  </div>
                  <button
                    className="w-full py-space-sm bg-secondary hover:bg-secondary/90 text-on-secondary rounded-lg font-label-md uppercase tracking-wider transition shadow-md flex items-center justify-center gap-space-xs mt-space-md cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Gửi Đăng Ký &amp; Tải Catalogue</span>
                  </button>
                  {leadSuccess && (
                    <p className="text-center font-label-sm text-secondary font-medium pt-2 animate-in fade-in" id="leadSuccessMsg">
                      ✓ Đã ghi nhận! Kho Quảng Bình đang kết nối Zalo gửi tài liệu ngay.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODAL: PRODUCT SPECIFICATION PREVIEW (DYNAMIC REACT DIALOG) */}
        {/* ========================================================================= */}
        {activeProduct && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveModalCode(null)}
          >
            <div
              className="relative p-space-lg bg-surface-container-lowest text-on-surface rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute top-4 right-4 p-1 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition text-outline hover:text-primary cursor-pointer"
                onClick={() => setActiveModalCode(null)}
                aria-label="Đóng"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div className="flex items-center gap-space-sm mb-space-md">
                <span className="px-2.5 py-1 rounded bg-secondary-fixed text-primary-container font-label-caps uppercase text-[11px]" id="modalTag">
                  {activeProduct.modal.tag}
                </span>
                <span className="font-label-sm text-outline" id="modalCode">
                  MÃ: {activeProduct.code}
                </span>
              </div>

              <h3 className="font-headline-md text-primary font-bold mb-space-sm" id="modalTitle">
                {activeProduct.title}
              </h3>

              <div className="w-full h-56 bg-surface-container rounded-xl overflow-hidden mb-space-md">
                <img
                  className="w-full h-full object-cover"
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  id="modalImg"
                />
              </div>

              <p className="font-body-md text-on-surface-variant mb-space-md" id="modalDesc">
                {activeProduct.modal.desc}
              </p>

              <div className="grid grid-cols-2 gap-space-sm p-space-md bg-surface-container-low rounded-xl mb-space-lg font-body-sm text-[13px]">
                <div>
                  <span className="text-outline block">Tình trạng kho Lệ Thủy:</span>
                  <strong className="text-secondary font-bold" id="modalStock">
                    {activeProduct.modal.stock}
                  </strong>
                </div>
                <div>
                  <span className="text-outline block">Chính sách vận chuyển:</span>
                  <strong className="text-on-surface font-medium">Giao xe tải nội tỉnh Quảng Bình</strong>
                </div>
              </div>

              <div className="flex items-center justify-end gap-space-sm">
                <button
                  type="button"
                  className="px-space-md py-space-sm rounded-lg font-label-caps text-on-surface-variant hover:bg-surface-container-high transition cursor-pointer"
                  onClick={() => setActiveModalCode(null)}
                >
                  Đóng Lại
                </button>
                <a
                  className="px-space-lg py-space-sm rounded-lg bg-secondary text-on-secondary font-label-caps uppercase shadow-sm hover:bg-secondary/90 transition flex items-center gap-1"
                  href={`https://zalo.me/0919051066?text=TuVanKyThuat_${activeProduct.code}`}
                  id="modalZaloLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Liên Hệ Báo Giá Chi Tiết
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}