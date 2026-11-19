export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  district: 'dong-hoi' | 'le-thuy' | 'ba-don' | 'quang-ninh' | 'bo-trach';
  districtLabel: string;
  category: string;
  scale: string;
  year: string;
  image: string;
  beforeAfterImage?: string;
  description: string;
  materialsUsed: string[];
  feedback: {
    client: string;
    role: string;
    comment: string;
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'prj-01',
    title: 'Lâu Đài Hoàng Gia Dát Vàng – TP. Đồng Hới',
    location: 'Khu Đô Thị Bảo Ninh, TP. Đồng Hới, Quảng Bình',
    district: 'dong-hoi',
    districtLabel: 'TP. Đồng Hới',
    category: 'Biệt Thự / Lâu Đài Tân Cổ Điển',
    scale: 'Diện tích sàn 650m² – 3 Tầng + 1 Tum',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Dự án trọn gói hơn 1.200m phào cổ trần thạch cao thếp vàng Ý, kết hợp 6 mâm trần đại sảnh và hệ thống chỉ bo khung tranh toàn bộ các phòng ngủ master.',
    materialsUsed: ['Phào cổ trần lá tây HG120', 'Mâm trần thếp vàng D1500', 'Keo dán T&P 2 thành phần'],
    feedback: {
      client: 'Anh Nguyễn Hoàng Hải',
      role: 'Chủ đầu tư biệt thự',
      comment: 'Tôi đánh giá rất cao chất lượng phào xuất từ kho Lệ Thủy. Đường nét đúc cực kỳ sắc sảo, đội thợ thi công chuẩn tiến độ bàn giao trước Tết mà không bị một vết rạn chân chim nào.'
    }
  },
  {
    id: 'prj-02',
    title: 'Biệt Thự Vườn Mái Thái GFRC – Kiến Giang, Lệ Thủy',
    location: 'Thị trấn Kiến Giang, Huyện Lệ Thủy, Quảng Bình',
    district: 'le-thuy',
    districtLabel: 'Huyện Lệ Thủy',
    category: 'Biệt Thự Hiện Đại & GFRC Mặt Tiền',
    scale: 'Khuôn viên 1.200m² – Diện tích xây dựng 380m²',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Toàn bộ phào phân tầng, gờ cửa sổ và con tiện lan can được thi công bằng bê tông sợi thủy tinh GFRC chịu nắng gió bão lũ, bề mặt sơn giả đá cẩm thạch sang trọng.',
    materialsUsed: ['Phào xi măng GFRC NT180', 'Con tiện ly tâm LB-BT60', 'Đầu cột Corinthian D450'],
    feedback: {
      client: 'Bác Lê Văn Thắng',
      role: 'Gia chủ Lệ Thủy',
      comment: 'Gần kho Tân Thủy nên hàng giao tận chân công trình chỉ trong 30 phút. Giá tận xưởng tiết kiệm được hơn 30 triệu so với mua qua các cửa hàng trung gian ở ngoài thị trấn.'
    }
  },
  {
    id: 'prj-03',
    title: 'Nhà Phố Kiến Trúc Pháp – Thị Xã Ba Đồn',
    location: 'Đường Hùng Vương, Thị xã Ba Đồn, Quảng Bình',
    district: 'ba-don',
    districtLabel: 'Thị Xã Ba Đồn',
    category: 'Nhà Phố Thương Mại Shophouse',
    scale: 'Mặt tiền 6m x Sâu 22m – 4 Tầng',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Không gian nội thất phong cách Parisian tân cổ điển thanh lịch với các dải chỉ bo khung tường tỷ lệ vàng kết hợp tone màu trắng sứ và sơn hiệu ứng bê tông mờ.',
    materialsUsed: ['Chỉ bo tường KT-TC60', 'Phào góc trần trơn hiện đại', 'Keo bột trét phẳng mối nối'],
    feedback: {
      client: 'KTS. Trần Minh Đức',
      role: 'Kiến trúc sư trưởng công ty thiết kế ArtHome',
      comment: 'Là đơn vị thiết kế thi công, chúng tôi chọn đối tác cung ứng dựa trên độ chuẩn xác của mặt cắt phào. Hàng của Thành Phong đúc chuẩn milimet, góc mòi cắt 45 độ ăn khớp liền lạc.'
    }
  },
  {
    id: 'prj-04',
    title: 'Khách Sạn Nghỉ Dưỡng Biển & Spa – Quảng Ninh',
    location: 'Quán Hàu, Huyện Quảng Ninh, Quảng Bình',
    district: 'quang-ninh',
    districtLabel: 'Huyện Quảng Ninh',
    category: 'Khách Sạn & Dịch Vụ Du Lịch',
    scale: 'Quy mô 45 phòng cao cấp + Sảnh hội nghị',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: 'Hệ thống phào chỉ chịu ẩm cao bảo vệ không gian sảnh đón tiếp trước hơi mặn gió biển Quảng Bình. Phối hợp đèn led hắt trần dạ ánh sáng vàng dịu mắt.',
    materialsUsed: ['Phào chỉ kháng ẩm cấp A', 'Mâm vòm sảnh tiệc D2000', 'Phù điêu mặt tiền phong cách Địa Trung Hải'],
    feedback: {
      client: 'Chị Phạm Quỳnh Mai',
      role: 'Đại diện Ban Quản Lý Dự Án',
      comment: 'Rất ấn tượng với tiến độ cung ứng hàng. Kho luôn có sẵn số lượng lớn cả chục ngàn mét, xe tải giao luân chuyển liên tục không để tổ thợ phải dừng việc chờ vật tư.'
    }
  }
];
