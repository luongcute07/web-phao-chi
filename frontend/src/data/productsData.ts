export interface ProductItem {
  id: string;
  name: string;
  code: string;
  category: 'thach-cao' | 'gfrc' | 'mam-tran' | 'con-tien' | 'keo-dan';
  categoryLabel: string;
  material: string;
  dimensions: string;
  standardLength: string;
  priceEstimate: string;
  wholesaleDiscount: string;
  features: string[];
  image: string;
  description: string;
  application: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'pc-01',
    name: 'Phào Cổ Trần Hoa Văn Cổ Điển Hoàng Gia',
    code: 'TC-HG120',
    category: 'thach-cao',
    categoryLabel: 'Phào Chỉ Thạch Cao',
    material: 'Bột thạch cao tinh khiết 99% + Sợi thủy tinh kháng kiềm roving',
    dimensions: 'Bản rộng 120mm x Độ dày 18mm',
    standardLength: '2.44m / thanh',
    priceEstimate: '45.000₫ – 65.000₫ / mét',
    wholesaleDiscount: 'Chiết khấu 15% – 25% cho thầu thợ',
    features: ['Chống cong vênh', 'Kháng ẩm cao', 'Chống cháy cấp A1', 'Cạnh đúc sắc nét'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Dòng phào chỉ cổ trần cao cấp chuyên dụng cho phòng khách lâu đài, biệt thự tân cổ điển. Hoa văn lá tây Baroque đối xứng tinh xảo, thích hợp thếp vàng 24K hoặc sơn trắng ngọc trai.',
    application: 'Góc giao trần & tường phòng khách, phòng sinh hoạt chung'
  },
  {
    id: 'pc-02',
    name: 'Chỉ Bo Khung Tường Tân Cổ Điển Tinh Tế',
    code: 'KT-TC60',
    category: 'thach-cao',
    categoryLabel: 'Phào Chỉ Thạch Cao',
    material: 'Thạch cao sợi gia cường đúc khuôn silicon chính xác',
    dimensions: 'Bản rộng 60mm x Độ dày 12mm',
    standardLength: '2.44m / thanh',
    priceEstimate: '28.000₫ – 38.000₫ / mét',
    wholesaleDiscount: 'Chiết khấu đến 25% khi lấy từ 200m',
    features: ['Bề mặt láng mịn', 'Bắt vít / dán keo chắc chắn', 'Không ố vàng'],
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    description: 'Chỉ khung tranh thanh thoát tạo khối tỷ lệ vàng trên các mảng tường phòng khách, phòng ngủ master, kết hợp hài hòa với giấy dán tường hoặc tranh vẽ nghệ thuật.',
    application: 'Bo khung tranh tường, phân ô vách ti vi, đầu giường'
  },
  {
    id: 'gfrc-01',
    name: 'Phào Ngoại Thất Bê Tông GFRC Thành Phong',
    code: 'GFRC-NT180',
    category: 'gfrc',
    categoryLabel: 'Xi Măng GFRC Ngoại Thất',
    material: 'Bê tông sợi thủy tinh cường độ cao (GFRC/GRC) chịu lực mác 400',
    dimensions: 'Bản rộng 180mm x Vươn xa 140mm',
    standardLength: '2.0m – 3.0m / modul',
    priceEstimate: '180.000₫ – 260.000₫ / mét',
    wholesaleDiscount: 'Giá xuất xưởng Lệ Thủy, hỗ trợ cẩu hàng',
    features: ['Chịu nắng mưa khắc nghiệt', 'Chống nứt bề mặt', 'Tuổi thọ 50+ năm', 'Trọng lượng nhẹ hơn bê tông đúc'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
    description: 'Cấu kiện phào chỉ mặt tiền biệt thự chống chịu thời tiết gió biển Quảng Bình. Không bị rêu mốc, chống rạn nứt tuyệt đối nhờ mạng lưới sợi thủy tinh kháng kiềm đan xen.',
    application: 'Phào viền mái, phân tầng biệt thự, khung bao cửa sổ mặt tiền'
  },
  {
    id: 'gfrc-02',
    name: 'Đầu Cột & Bệ Cột Hy Lạp Corinthian GFRC',
    code: 'COL-COR450',
    category: 'gfrc',
    categoryLabel: 'Xi Măng GFRC Ngoại Thất',
    material: 'Hỗn hợp xi măng trắng PCB40, cát thạch anh, sợi thủy tinh AR-glass',
    dimensions: 'Đường kính D300 – D600mm',
    standardLength: 'Theo thiết kế kiến trúc',
    priceEstimate: '950.000₫ – 1.850.000₫ / bộ',
    wholesaleDiscount: 'Bóc tách bản vẽ CAD miễn phí',
    features: ['Điêu khắc hoa văn lá Acanthus nổi', 'Chịu lực cao', 'Độ bền vĩnh cửu'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Đầu cột chạm khắc lá ô rô cầu kỳ theo thức cột Corinthian Hy Lạp cổ đại. Đúc sẵn dạng vỏ mỏng dễ dàng ốp ghép vào lõi bê tông chịu lực của công trình.',
    application: 'Sảnh đón biệt thự, lâu đài, cổng chào resort'
  },
  {
    id: 'mt-01',
    name: 'Mâm Trần Thạch Cao Tròn Dát Vàng Nghệ Thuật',
    code: 'MT-V1200',
    category: 'mam-tran',
    categoryLabel: 'Mâm Trần & Phù Điêu',
    material: 'Thạch cao đúc nguyên khối tinh xảo + Thếp vàng lá 24K điểm xuyết',
    dimensions: 'Đường kính 1.200mm (1.2m)',
    standardLength: 'Nguyên tấm mâm tròn',
    priceEstimate: '1.200.000₫ – 1.850.000₫ / cái',
    wholesaleDiscount: 'Tặng kèm keo dán chuyên dụng và đinh móc neo trần',
    features: ['Tâm treo đèn chùm chắc chắn', 'Họa tiết hoa cúc phù điêu', 'Màu vàng sang trọng không xỉn'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Tâm điểm rực rỡ của trần phòng khách. Thiết kế kết hợp giữa vòng hạt ngọc baroque và cánh sen cách điệu, tôn vinh bộ đèn chùm pha lê hoàng gia.',
    application: 'Trung tâm trần phòng khách, trần sảnh chính biệt thự'
  },
  {
    id: 'ct-01',
    name: 'Con Tiện Bê Tông – Lục Bình Lan Can Biệt Thự',
    code: 'LB-BT60',
    category: 'con-tien',
    categoryLabel: 'Con Tiện & Lục Bình',
    material: 'Bê tông ly tâm mác cao chịu lực + Cốt thép định hình',
    dimensions: 'Chiều cao 600mm x Đế vuông 140mm',
    standardLength: 'Từng con tiện',
    priceEstimate: '38.000₫ – 52.000₫ / con',
    wholesaleDiscount: 'Sẵn kho 5.000 con tại Tân Thủy, Lệ Thủy',
    features: ['Bề mặt bóng mịn không rỗ', 'Khả năng chịu lực uốn nén vượt trội', 'Dễ bắt sơn ngoại thất'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    description: 'Con tiện lan can ban công, hàng rào, cầu thang ngoài trời cho các dinh thự tân cổ điển. Chống chọi hoàn hảo với bão lũ miền Trung.',
    application: 'Lan can ban công, tường rào, tam cấp mặt tiền'
  },
  {
    id: 'keo-01',
    name: 'Keo Dán Phào Chỉ Thạch Cao Chuyên Dụng T&P',
    code: 'KEO-TP5KG',
    category: 'keo-dan',
    categoryLabel: 'Keo & Phụ Kiện',
    material: 'Polymer biến tính tăng cường độ bám dính siêu cấp',
    dimensions: 'Xô 5kg / Xô 20kg',
    standardLength: 'Dạng bột pha keo hoặc hỗn hợp trộn sẵn',
    priceEstimate: '120.000₫ / xô 5kg',
    wholesaleDiscount: 'Ưu đãi đặc biệt cho đội thợ thi công thường xuyên',
    features: ['Triệt tiêu nứt mối nối 100%', 'Thời gian đông kết chuẩn kỹ thuật', 'Dễ xả nhám phẳng lỳ'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Sản phẩm keo dán then chốt ngăn chặn hiện tượng rạn nứt mối nối sau 1-2 năm sử dụng thường thấy ở các dòng phào chỉ thi công sai kỹ thuật.',
    application: 'Xử lý mối nối phào, dán trực tiếp lên trần thạch cao và tường vữa'
  }
];
