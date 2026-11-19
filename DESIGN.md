# Hệ Thống Thiết Kế (Design System) — Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình

> **Nguồn dữ liệu**: Stitch MCP Project (`projects/13544057462199199386`)  
> **Thương hiệu**: Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình (Tổng Kho Lệ Thủy & Miền Trung)  
> **Tài liệu chuẩn hóa**: Bảng màu (Color Palette), Kiểu chữ (Typography), Bố cục (Layout & Spacing), Hiệu ứng nổi (Elevation & Lighting), và Cấu trúc toàn bộ 7 màn hình thành phần.

---

## 🏛️ 1. Triết Lý Thiết Kế & Định Vị Thương Hiệu

Hệ thống thiết kế theo đuổi phong cách **Neoclassical Monumental & Tactile Craftsmanship** (Kiến trúc Tân Cổ Điển Tinh Tế & Đẳng Cấp Điêu Khắc Thủ Công):
- **Tính đối xứng & Tỷ lệ vàng**: Lấy cảm hứng từ các công trình tân cổ điển Châu Âu (thức cột, vòm trần, phù điêu và gờ chỉ), các khối giao diện được căn chỉnh theo tỷ lệ đối xứng nghiêm cẩn, tạo cảm giác bề thế và bền vững theo thời gian.
- **Vật liệu cao cấp & Màu sắc thực thể**: Tái hiện chân thực ánh kim loại thếp vàng 24K, đá travertine, thạch cao đúc mịn và bê tông sợi thủy tinh GFRC thông qua bảng màu có chiều sâu thị giác.
- **Tối ưu hóa chuyển đổi địa phương (Local Conversion Engine)**: Tích hợp liền mạch hệ thống liên hệ nhanh (Hotline trực tiếp, Zalo kỹ thuật, Báo giá tận kho Lệ Thủy & giao hàng 2-4h toàn tỉnh Quảng Bình) cho cả thầu thợ, kiến trúc sư và chủ nhà.

---

## 🎨 2. Bảng Màu Hệ Thống (Color Palette)

### 2.1. Màu Thương Hiệu Chủ Đạo (Brand Core Colors)

| Token Tên | Mã Hex | Tên Cảm Hứng | Vai Trò & Vị Trí Áp Dụng |
| :--- | :--- | :--- | :--- |
| `primary` / `navyDark` | `#121F2D` | **Deep Royal Navy** | Nền tảng vững chắc, uy quyền kiến trúc. Dùng cho Header chính, typography cấp cao, nền đối lập và nút hành động chính. |
| `secondary` / `gold-500`| `#C5A059` | **Antique Burnished Gold** | Vàng đồng cổ điển / mạ vàng mâm trần. Điểm chạm chuyển đổi (CTA), viền huy hiệu, icon điểm nhấn, trạng thái active. |
| `tertiary` / `gold-300` | `#DFB76C` | **Pale Foil Gold** | Ánh kim sáng. Áp dụng cho viền gradient, trạng thái hover, đường chỉ kim loại và hiệu ứng lấp lánh trên nền tối. |
| `gold-400` | `#D4AF37` | **Pure Metallic Gold** | Màu trung tâm trong dải gradient mạ vàng mâm trần và logo thương hiệu. |
| `gold-600` | `#A98338` | **Deep Antique Gold** | Đường viền đổ bóng và trạng thái focus của các nút vàng. |
| `charcoal` | `#1E242B` | **Architectural Charcoal** | Xám đá bazan kiến trúc. Dùng cho Footer, khối thông số kỹ thuật mật độ cao và typography phụ. |
| `darkSlate` | `#0E1721` | **Midnight Slate** | Nền tối sâu nhất dành cho chế độ xem mẫu 3D tương tác ban đêm. |

### 2.2. Hệ Thống Bề Mặt & Nền (Surface System)

| Token Tên | Mã Hex | Mô Tả & Sử Dụng |
| :--- | :--- | :--- |
| `pearl` / `canvas` | `#F9F8F4` | **Warm Pearl White**: Trắng ngọc trai ấm áp làm màu nền toàn trang, tạo cảm giác phòng trưng bày nghệ thuật (tránh trắng tinh bệnh viện). |
| `surface-lowest` | `#FFFFFF` | **Pure White**: Bề mặt thẻ sản phẩm (Card), bảng dự toán, form báo giá nổi. |
| `cream` / `travertine`| `#F7F5EE` | **Warm Travertine Cream**: Dải màu xen kẽ giữa các Section, bảng thông số kỹ thuật, thẻ danh mục phụ. |
| `border-stone` | `rgba(18, 31, 45, 0.08)` | Viền mảnh định hình khối danh mục và thẻ sản phẩm. |
| `border-gold-trim` | `rgba(197, 160, 89, 0.25)` | Viền mảnh dát vàng dành cho chứng chỉ chất lượng, dự án tiêu biểu. |

### 2.3. Dải Màu Chuyển Sắc & Hiệu Ứng (Gradients & Keyframes)

```css
/* Dải vàng hoàng gia dành cho nút bấm và dải trang trí */
.luxury-gold-gradient {
  background: linear-gradient(135deg, #DFBE74 0%, #C5A059 50%, #9F792A 100%);
}

/* Gradient chữ vàng phản chiếu ánh sáng */
.text-gold-gradient {
  background: linear-gradient(135deg, #D4AF37 0%, #C5A059 50%, #E6CA85 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Viền vàng 3 pha ánh kim */
.luxury-border-gold {
  border-image: linear-gradient(to right, #C5A059, #F3E5AB, #C5A059) 1;
}

/* Vòng sóng lan tỏa cho nút Hotline gọi điện */
@keyframes pulse-ring {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
}
.ring-glow {
  animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}
```

---

## 🔤 3. Hệ Thống Kiểu Chữ (Typography Hierarchy)

Sự kết hợp hoàn hảo giữa **Playfair Display / Cormorant Garamond** (Serif cổ điển sang trọng) và **Be Vietnam Pro / Montserrat** (Sans-serif hiện đại, tối ưu dấu tiếng Việt):

### 3.1. Phông Chữ Sử Dụng
- **Display & Headings (Serif)**: `Playfair Display` (hoặc `Cormorant Garamond`) — Dùng cho các tiêu đề lớn, tên phân khu, tiêu đề công trình, thông điệp thương hiệu. Cho phép *in nghiêng (italic)* các từ khóa cảm xúc (ví dụ: *Nghệ thuật* Phào Chỉ, *Đẳng Cấp* Thạch Cao).
- **Body & Technical UI (Sans-serif)**: `Be Vietnam Pro` (hoặc `Montserrat`) — Đảm bảo độ rõ nét tối đa cho bảng kích thước, khối lượng, thông số chống cháy, tải trọng GFRC và nội dung tư vấn.
- **Nhãn kiến trúc (`label-caps`)**: `Be Vietnam Pro`, `font-bold`, viết hoa toàn bộ, giãn dòng `tracking-[0.12em]`, cỡ chữ `11px` - `12px`.

### 3.2. Bảng Tỷ Lệ Cỡ Chữ (Type Scale)

| Token Class | Font Family | Size / Line-Height | Weight | Tracking | Vị Trí Sử Dụng |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Playfair Display | `56px` / `68px` | `700` (Bold) | `-0.02em` | Hero Title Desktop |
| `display-hero-mobile` | Playfair Display | `38px` / `48px` | `700` (Bold) | `-0.01em` | Hero Title Mobile |
| `headline-xl` | Playfair Display | `40px` / `50px` | `600` (SemiBold) | `-0.01em` | Tiêu đề chính các Section |
| `headline-lg` | Playfair Display | `32px` / `40px` | `600` (SemiBold) | `0` | Tiêu đề nhóm sản phẩm |
| `headline-md` | Playfair Display | `24px` / `32px` | `600` (SemiBold) | `0` | Tiêu đề Card, bước quy trình |
| `headline-sm` | Playfair Display | `20px` / `28px` | `600` (SemiBold) | `0` | Tiêu đề nhỏ, tên mẫu hoa văn |
| `body-lg` | Be Vietnam Pro | `18px` / `28px` | `400` (Regular) | `-0.01em` | Đoạn văn giới thiệu đầu section |
| `body-md` | Be Vietnam Pro | `15px` / `24px` | `400` (Regular) | `0` | Đoạn văn nội dung, mô tả sản phẩm |
| `body-sm` | Be Vietnam Pro | `13px` / `20px` | `400` (Regular) | `0.01em` | Chú thích thông số, footer links |
| `label-md` | Be Vietnam Pro | `14px` / `20px` | `600` (SemiBold) | `0.02em` | Nút bấm (CTA), menu cấp 1 |
| `label-caps` | Be Vietnam Pro | `11px` / `16px` | `700` (Bold) | `0.12em` | Tag danh mục, nhãn "GFRC", "DÁT VÀNG" |

---

## 📐 4. Bố Cục, Khoảng Cách & Bo Góc (Layout & Shapes)

### 4.1. Lưới Kiến Trúc & Container
- **Max Container**: `1320px` (căn giữa với `mx-auto px-4 sm:px-6 lg:px-8`).
- **Lưới 12 Cột (Fluid 12-Column Grid)**: Tương thích tỷ lệ 1/2, 1/3, 1/4 lấy cảm hứng từ cấu trúc phân vị mặt đứng của kiến trúc Pháp.
- **Rãnh lề (Gutters)**: Desktop `1.5rem` (`24px`), Mobile `1rem` (`16px`).
- **Khoảng cách dọc giữa các Section**: Sử dụng `py-16` đến `py-24` (`64px` - `96px`) tạo không gian khoáng đạt, sang trọng như trần nhà cao tầng biệt thự.

### 4.2. Hệ Thống Bo Góc (Border Radius)
Tuân theo trường phái **Soft Architectural Precision** (Góc cạnh tinh tế của thạch cao và đá đúc, không bo tròn đồ chơi):
- `rounded-sm` / `rounded-[2px] - [4px]`: Thẻ sản phẩm, nút bấm, ô input, nhãn tag thông số.
- `rounded-lg` / `rounded-[8px]`: Container lớn, khung bản đồ, modal dự toán.
- `rounded-full`: **Duy nhất** cho nút hotline tròn nổi góc màn hình và con dấu bảo hành đại lý chính hãng.

### 4.3. Hiệu Ứng Nổi & Đổ Bóng (Elevation & Depth)
Mô phỏng ánh sáng tự nhiên rọi nghiêng qua phào trần thạch cao đúc nổi:
- **Card Ambient Elevation**: `box-shadow: 0 18px 45px -10px rgba(18, 31, 45, 0.08), 0 4px 12px -2px rgba(18, 31, 45, 0.04)`.
- **Gold Glow Hover (Interactive)**: `box-shadow: 0 8px 24px -4px rgba(197, 160, 89, 0.35)`.
- **Molding Groove Divider**: Đường chỉ đôi mô phỏng rãnh phào với 1 đường line tối phía trên và 1 đường line sáng highlight phía dưới.

---

## 🧩 5. Cấu Trúc Thành Phần Giao Diện (Components)

### 5.1. Nút Bấm Hành Động (CTA Buttons)
1. **Primary Button ("Tư Vấn Thiết Kế" / "Yêu Cầu Báo Giá")**:
   - Nền: Vàng kim `luxury-gold-gradient` hoặc Xanh Navy `#121F2D`.
   - Chữ: Viết hoa `label-md` tracking rộng, màu tương phản sắc nét.
   - Viền: `1px solid #DFB76C` hoặc `transparent`.
   - Hover: Nhẹ nhàng dịch chuyển lên `translate-y-[-1px]` kèm bóng tỏa `ring-glow`.
2. **Secondary Button ("Tải Catalogue GFRC" / "Xem Mẫu 3D")**:
   - Nền trong suốt (Ghost/Outline), viền `1px solid #C5A059` hoặc viền trắng trên nền Navy. Chữ đổi sang vàng kim khi hover.

### 5.2. Thẻ Sản Phẩm (Product Catalog Card)
- Nền trắng tinh khiết `#FFFFFF` viền `1px solid rgba(18, 31, 45, 0.08)`.
- Ảnh sản phẩm tỷ lệ `4:3` hoặc `1:1` hiển thị mặt cắt chi tiết hoa văn và ảnh thi công thực tế.
- Khối huy hiệu chất lượng: "Chống Ẩm", "Cốt Sợi Thủy Tinh", "Bảo Hành 5 Năm".
- Hiển thị quy cách chuẩn: Chiều dài thanh (`2.44m`), bản rộng (`8cm - 15cm`), cốt liệu.
- 2 Nút thao tác: "Xem Chi Tiết Mẫu" và "Nhận Báo Giá Sỉ Tại Kho".

### 5.3. Bộ Công Cụ Dự Toán & Báo Giá Nhanh (Cost Estimator Widget)
- Chọn loại không gian: *Phòng khách*, *Phòng ngủ Master*, *Biệt thự tân cổ điển*, *Nhà phố hiện đại*.
- Slider trượt chọn diện tích ($m^2$) hoặc chu vi tường ($m$ dài).
- Tùy chọn gói hoàn thiện: *Phào mộc sơn trắng* hoặc *Dát vàng 24K điểm xuyết*.
- Tính toán tức thì: Khối lượng ước tính + Đơn giá vật tư tại kho + Dự toán trọn gói cả nhân công.
- Nút bấm: "Tải file PDF bảng bóc tách chi tiết qua Zalo trong 30 giây".

### 5.4. Trình Xem Mẫu 3D Tương Tác (3D Interactive Viewer)
- Bối cảnh ánh sáng chuyển đổi: *Ánh sáng ban ngày (Daylight)* và *Đèn hắt dạ trần 3000K ấm*.
- Nút xoay 360 độ góc nhìn cận cảnh đường nét đúc chỉ thạch cao.
- Nút bật/tắt lớp phủ mạ vàng lá công nghiệp / vàng 24K.
- Tải file thư viện 3Ds Max / SketchUp / AutoCAD cho kiến trúc sư.

### 5.5. Cụm Chuyển Đổi Nổi (Floating Local Action Dock)
- **Nút Hotline Tròn Cố Định**: Nằm góc dưới bên phải, kích thước `54px`, nền Deep Navy viền vàng có hoạt ảnh sóng `ring-glow` liên tục, click gọi ngay `0919.051.066` hoặc `0819.519.179`.
- **Nút Zalo Kỹ Thuật**: Nằm ngay cạnh hotline, mở cửa sổ chat tư vấn bóc tách bản vẽ miễn phí.
- **Mobile Bottom Navigation Bar**: Trên điện thoại thu gọn thành thanh công cụ dính đáy:
  `[ 📞 Gọi Ngay ] | [ 💬 Chat Zalo ] | [ 📐 Dự Toán Nhanh ] | [ 🗺️ Chỉ Đường Kho ]`.

---

## 🖥️ 6. Bản Đồ Chi Tiết 7 Màn Hình (Screen Structure Breakdown)

Dự án Stitch bao gồm 7 màn hình desktop hoàn chỉnh tương ứng với kiến trúc website phân phối & thi công:

```
STITCH SCREENS OVERVIEW (Project 13544057462199199386)
├── 1. Landing Page Sang Trọng Chuẩn SEO (ID: 6f59223d490548a0a7fe1b200d7b6f14)
├── 2. Danh Mục Sản Phẩm & Quy Cách Kỹ Thuật (ID: e8f60f4c3ed748089ec83ee18e9d36b6)
├── 3. Trải Nghiệm Mẫu Hoa Văn 3D Tương Tác (ID: f042fd2a6f03469f810d83d8c06a88f3)
├── 4. Báo Giá Tận Kho & Dự Toán Chi Phí (ID: fe096a8ef8aa42a2ad4466b9e5a67af9)
├── 5. Quy Trình Cung Ứng & Tiêu Chuẩn Thi Công (ID: e7c6e7c4099c4e8f9a3e90dc53b322d4)
├── 6. Thư Viện Công Trình Thực Tế Tại Quảng Bình (ID: 3124381821d345379fbee584c31b41db)
└── 7. Liên Hệ & Hệ Thống Kho Hàng Lệ Thủy (ID: 179211c54b4145689ba1e020f6d42b80)
```

### 1. Landing Page Chính (Trang Chủ Toàn Diện)
- **Top Bar**: Thông báo kho Lệ Thủy sẵn 20.000m phào + Hotline `0919.051.066`.
- **Main Header**: Logo vương miện mạ vàng, Menu liên kết 7 trang, nút CTA "Nhận Báo Giá Sỉ".
- **Hero Banner**: Slogan *"Đẳng Cấp Cho Ngôi Nhà Của Bạn"*, cam kết giá xuất xưởng, nút khám phá danh mục.
- **4 Trụ Cột Cam Kết**:
  1. *Giá tận gốc kho*: Không qua trung gian thương mại.
  2. *Hàng sẵn số lượng lớn*: Sẵn sàng giao trong 2 - 4 giờ khắp Quảng Bình.
  3. *Chống ẩm & nứt*: Cốt sợi thủy tinh kháng kiềm gia cường.
  4. *Thi công sắc nét 100%*: Đội thợ chuyên nghiệp bảo hành 5 năm.
- **Top Danh Mục Nổi Bật**: Phào cổ trần, phào khung tranh, mâm trần hoa văn, xi măng GFRC mặt tiền, con tiện bê tông.
- **Bảng Báo Giá Tham Khảo Theo Mét Dài**.
- **Công Trình Tiêu Biểu Tại Đồng Hới, Ba Đồn, Lệ Thủy, Quảng Ninh**.
- **Ý Kiến Khách Hàng & Đánh Giá Của Các Thầu Thợ Xây Dựng**.

### 2. Trang Sản Phẩm (Catalog)
- Bộ lọc đa chiều:
  - Theo chất liệu: *Thạch cao sợi thủy tinh*, *Xi măng GFRC chịu lực*, *Phù điêu composite*.
  - Theo vị trí: *Phào cổ trần*, *Phào chân tường*, *Chỉ bo khung tường*, *Mâm vòm trang trí*.
  - Theo phong cách: *Tân cổ điển dát vàng*, *Cổ điển hoàng gia*, *Hiện đại tối giản*.
- Lưới sản phẩm dạng card với chức năng tải file thông số kỹ thuật (CAD / PDF).

### 3. Trang Trải Nghiệm Mẫu 3D Tương Tác
- Khung mô phỏng 3D thời gian thực tương tác trực tiếp trên trình duyệt.
- Thanh công cụ điều khiển: Góc máy xoay 360°, đổi màu sơn (trắng sứ, kem ngọc trai, thếp vàng ý), đo đạc kích thước thực tế ảo.

### 4. Trang Báo Giá Tận Kho & Dự Toán
- Bảng giá sỉ áp dụng cho đại lý, kiến trúc sư và nhà thầu xây dựng (Chiết khấu 15% - 25%).
- Form nhập nhanh số lượng để nhận file dự toán PDF chính xác qua điện thoại hoặc Zalo.

### 5. Trang Quy Trình Thi Công & Tiêu Chuẩn Kỹ Thuật
- Quy trình 5 bước khép kín từ khảo sát hiện trạng, bóc tách bản vẽ đến bàn giao.
- Phân tích chi tiết thành phần nguyên liệu: *Bột thạch cao tinh khiết 99%*, *Sợi thủy tinh roving gia cường*, *Keo dán T&P 2 thành phần chống nứt mối nối*.

### 6. Trang Công Trình Thực Tế (Showcase)
- Thư viện hình ảnh chất lượng cao các dự án lâu đài, biệt thự, khách sạn, nhà hàng tại Quảng Bình.
- Bộ lọc công trình theo huyện thị: *TP. Đồng Hới*, *Huyện Lệ Thủy*, *Thị Xã Ba Đồn*, *Huyện Quảng Ninh*.

### 7. Trang Liên Hệ & Bản Đồ Kho Hàng
- Thông tin kho chính: **Tân Ninh, Tân Thủy, Huyện Lệ Thủy, Tỉnh Quảng Bình**.
- Hướng dẫn lộ trình xe tải vận chuyển: Đi từ TP. Đồng Hới (35km) và từ Thị Trấn Kiến Giang (7km).
- Form đặt lịch ghé thăm tổng kho trải nghiệm hàng mẫu và nhận mẫu miễn phí.

---

## 💻 7. Cấu Hình Tailwind CSS Mẫu (Code Sẵn Sàng Sử Dụng)

Dưới đây là file cấu hình `tailwind.config.js` đã được tinh chỉnh đồng bộ 100% với các thông số thiết kế từ Stitch:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#E6CA85',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A98338',
          700: '#876725',
        },
        pearl: '#FBFBFA',
        cream: '#F7F5EE',
        navyDark: '#121F2D',
        charcoal: '#1E242B',
        darkSlate: '#0E1721',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Be Vietnam Pro"', 'Montserrat', 'sans-serif'],
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'space-2xl': '4rem',
        'space-3xl': '6rem',
        'gutter': '1.5rem',
        'gutter-mobile': '1rem',
        'margin': '3rem',
        'margin-mobile': '1.25rem',
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'relief': '0 18px 45px -10px rgba(18, 31, 45, 0.08), 0 4px 12px -2px rgba(18, 31, 45, 0.04)',
        'gold-glow': '0 8px 24px -4px rgba(197, 160, 89, 0.35)',
      }
    },
  },
  plugins: [],
}
```

---

## 📌 8. Hướng Dẫn Triển Khai Vào Mã Nguồn Frontend

1. **Cài đặt Google Fonts**:
   Nhúng các phông chữ chuẩn vào `<head>` của dự án:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
   ```
2. **Bộ Icon đồng bộ**:
   Sử dụng thư viện `lucide-react` (hoặc `@tabler/icons`) với nét mảnh `strokeWidth={1.5}` để giữ tính thanh thoát của phong cách tân cổ điển.
3. **Thứ tự ưu tiên xây dựng màn hình**:
   - Bước 1: Layout dùng chung (Header, Footer, Floating Contact Dock).
   - Bước 2: Landing Page (`/`).
   - Bước 3: Trang Báo Giá & Dự Toán Chi Phí (`/bao-gia`).
   - Bước 4: Danh Mục Sản Phẩm (`/san-pham`).
   - Bước 5: Mẫu 3D Tương Tác, Quy Trình, Công Trình & Liên Hệ Kho.
