'use client';

import React from 'react';
import { Star, Quote, Award, ThumbsUp, Wrench } from 'lucide-react';

const REVIEWS = [
  {
    author: 'Anh Lê Quang Hùng',
    role: 'Đội Trưởng Thợ Thạch Cao (12 năm kinh nghiệm tại Đồng Hới)',
    comment: 'Tôi làm thợ phào chỉ ở Quảng Bình hơn chục năm nay, điều ngại nhất là lấy phải phào giòn, cắt mòi hay bị mẻ góc hoặc phào cong vênh phải bù bột rất cực. Phào Thành Phong xuất từ kho Lệ Thủy đúc cốt sợi đều, chắc nịch, mặt cắt khít rịt, anh em thi công nhanh gấp rưỡi.',
    rating: 5,
    project: 'Dự án khu đô thị Sa Động, Đồng Hới'
  },
  {
    author: 'KTS. Nguyễn Văn Toàn',
    role: 'Giám Đốc Công Ty Tư Vấn Kiến Trúc Tân Cổ Điển',
    comment: 'Khách hàng của chúng tôi yêu cầu độ chi tiết hoa văn rất khắt khe. Điểm tôi ưng ý nhất ở Tổng kho là họ có sẵn thư viện hoa văn cổ điển chuẩn phong cách Pháp, từ phào máng hắt đến mâm vòm elip, không cần phải gửi khuôn từ Hà Nội hay Đà Nẵng về như trước.',
    rating: 5,
    project: 'Biệt thự 3 tầng phong cách Châu Âu tại Ba Đồn'
  },
  {
    author: 'Bác Trần Đình Hòe',
    role: 'Chủ Biệt Thự Vườn Lệ Thủy',
    comment: 'Nhà tôi sát biển chịu bão nhiều, phần ngoại thất dùng xi măng GFRC của kho tới nay năm thứ 4 rồi mà không hề có dấu hiệu ngấm nước hay ố vàng. Rất hài lòng về độ bền và sự nhiệt tình của các cháu kỹ thuật kho.',
    rating: 5,
    project: 'Biệt thự ven sông Kiến Giang'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-cream border-t border-navyDark/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-gold-600 font-bold uppercase tracking-[0.16em] text-xs">
            Khách Hàng &amp; Đối Tác Nói Về Chúng Tôi
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-navyDark">
            Được Tin Chọn Bởi Hơn 500+ Nhà Thầu &amp; Gia Chủ
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-sm border border-navyDark/10 shadow-sm hover:shadow-relief transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#C5A059" className="text-gold-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-[13px] text-navyDark/85 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-navyDark/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navyDark text-gold-400 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-navyDark">{rev.author}</h4>
                  <p className="text-[10px] text-navyDark/60 leading-tight">{rev.role}</p>
                  <span className="text-[10px] text-gold-600 font-medium block mt-0.5">
                    {rev.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
