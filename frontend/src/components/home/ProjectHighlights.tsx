'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Layers, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/projectsData';

export default function ProjectHighlights() {
  const highlights = PROJECTS_DATA.slice(0, 3);

  return (
    <section className="py-20 bg-pearl">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-gold-600 font-bold uppercase tracking-[0.16em] text-xs">
              Thực Chứng Năng Lực Thi Công
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-navyDark">
              Công Trình Tiêu Biểu Tại Quảng Bình
            </h2>
            <p className="text-xs sm:text-sm text-navyDark/70 max-w-xl">
              Hàng trăm công trình biệt thự, lâu đài và nhà phố đã được tổng kho cấp vật tư và trực tiếp bảo chứng chất lượng trong suốt 10+ năm qua.
            </p>
          </div>

          <Link
            href="/cong-trinh"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navyDark hover:text-gold-600 border-b-2 border-gold-500 pb-1 self-start sm:self-auto transition-colors"
          >
            <span>Xem Toàn Bộ Dự Án</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm border border-navyDark/10 overflow-hidden hover:border-gold-400 hover:shadow-relief transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-charcoal">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navyDark/80 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-navyDark/90 backdrop-blur-sm text-gold-300 text-[10px] font-bold px-2.5 py-1 rounded-[2px] border border-gold-400 uppercase tracking-wider">
                    {item.districtLabel}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-gold-300 font-bold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-base line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-navyDark/70">
                    <MapPin size={13} className="text-gold-500 shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>

                  <p className="text-xs text-navyDark/80 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-navyDark/5 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-navyDark/50 tracking-wider block">
                      Vật tư chính đã cung ứng:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.materialsUsed.map((mat, midx) => (
                        <span
                          key={midx}
                          className="text-[10px] bg-cream text-navyDark px-2 py-0.5 rounded-[2px] border border-navyDark/10"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback Quote */}
              <div className="p-5 pt-0">
                <div className="p-3 bg-cream/60 rounded-sm border-l-2 border-gold-500 text-[11px] text-navyDark/80 italic">
                  &ldquo;{item.feedback.comment}&rdquo;
                  <span className="block mt-1 font-bold text-gold-600 not-italic text-[10px]">
                    — {item.feedback.client} ({item.feedback.role})
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
