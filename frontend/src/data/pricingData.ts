export interface PriceRow {
  category: string;
  name: string;
  spec: string;
  unit: string;
  retailPrice: string;
  contractorPrice: string;
  notes: string;
}

export const PRICING_TABLE_DATA: PriceRow[] = [
  {
    category: 'Phào Chỉ Thạch Cao Nội Thất',
    name: 'Phào Cổ Trần Hoa Văn Lá Tây',
    spec: 'Bản rộng 100mm – 120mm, Dài 2.44m',
    unit: 'Mét dài',
    retailPrice: '55.000₫ – 65.000₫',
    contractorPrice: '42.000₫ – 48.000₫',
    notes: 'Sẵn kho > 5.000m tại Tân Thủy'
  },
  {
    category: 'Phào Chỉ Thạch Cao Nội Thất',
    name: 'Phào Cổ Trần Trơn Tân Cổ Điển',
    spec: 'Bản rộng 80mm – 100mm, Dài 2.44m',
    unit: 'Mét dài',
    retailPrice: '40.000₫ – 48.000₫',
    contractorPrice: '30.000₫ – 35.000₫',
    notes: 'Hàng tiêu chuẩn sắc nét'
  },
  {
    category: 'Phào Chỉ Thạch Cao Nội Thất',
    name: 'Chỉ Bo Khung Tường Khung Tranh',
    spec: 'Bản rộng 40mm – 60mm, Dài 2.44m',
    unit: 'Mét dài',
    retailPrice: '30.000₫ – 38.000₫',
    contractorPrice: '22.000₫ – 28.000₫',
    notes: 'Khối lượng lớn chiết khấu thêm 5%'
  },
  {
    category: 'Phào Chỉ Thạch Cao Nội Thất',
    name: 'Chỉ Lưng Tường / Chỉ Chân Tường',
    spec: 'Bản rộng 60mm – 80mm, Dài 2.44m',
    unit: 'Mét dài',
    retailPrice: '38.000₫ – 46.000₫',
    contractorPrice: '28.000₫ – 34.000₫',
    notes: 'Cốt sợi thủy tinh dẻo dai'
  },
  {
    category: 'Xi Măng GFRC Ngoại Thất',
    name: 'Phào Phân Tầng & Viền Mái GFRC',
    spec: 'Bản rộng 150mm – 200mm, Dài 2.0m – 3.0m',
    unit: 'Mét dài',
    retailPrice: '220.000₫ – 280.000₫',
    contractorPrice: '175.000₫ – 210.000₫',
    notes: 'Bê tông sợi mác cao chống nứt tuyệt đối'
  },
  {
    category: 'Xi Măng GFRC Ngoại Thất',
    name: 'Đầu Cột Tròn / Vuông Corinthian',
    spec: 'Đường kính D350 – D500mm',
    unit: 'Bộ',
    retailPrice: '1.200.000₫ – 1.650.000₫',
    contractorPrice: '950.000₫ – 1.300.000₫',
    notes: 'Đúc sẵn dạng vỏ mỏng dễ ốp cột'
  },
  {
    category: 'Mâm Trần & Phù Điêu',
    name: 'Mâm Trần Thạch Cao Đường Kính 1m',
    spec: 'Đường kính D1000mm, Hoa văn nổi',
    unit: 'Cái',
    retailPrice: '750.000₫ – 950.000₫',
    contractorPrice: '580.000₫ – 720.000₫',
    notes: 'Tâm treo đèn chùm chắc chắn'
  },
  {
    category: 'Mâm Trần & Phù Điêu',
    name: 'Mâm Trần Thạch Cao Thếp Vàng 24K',
    spec: 'Đường kính D1200mm – D1500mm',
    unit: 'Cái',
    retailPrice: '1.800.000₫ – 2.500.000₫',
    contractorPrice: '1.450.000₫ – 1.950.000₫',
    notes: 'Gia công thếp vàng Ý bóng đẹp'
  },
  {
    category: 'Keo & Phụ Kiện',
    name: 'Keo Dán Phào Chuyên Dụng T&P',
    spec: 'Xô 5kg – Chống rạn nứt mối nối',
    unit: 'Xô',
    retailPrice: '140.000₫',
    contractorPrice: '110.000₫',
    notes: 'Tặng kèm khi đặt từ 300m phào'
  }
];
