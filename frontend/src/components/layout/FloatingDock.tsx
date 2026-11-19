'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';

export default function FloatingDock() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end">
      {/* Zalo Floating Button */}
      <a
        className="flex items-center gap-2 group shadow-xl"
        href="https://zalo.me/0919051066"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Chat Zalo Báo Giá"
      >
        <span className="hidden group-hover:inline-block bg-white text-navyDark text-xs font-bold py-1.5 px-3 rounded-lg shadow-md border border-stone-200 transition">
          Chat Zalo Báo Giá
        </span>
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0068FF] text-white flex items-center justify-center p-3 shadow-lg hover:scale-110 active:scale-95 transition-all">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 48 48">
            <path d="M24 4C12.95 4 4 12.06 4 22c0 5.67 2.93 10.74 7.6 14.18l-1.92 7.02c-.22.8.5 1.52 1.3 1.3l7.98-2.18C20.6 42.76 22.28 43 24 43c11.05 0 20-8.06 20-18S35.05 4 24 4zm-7.5 15h15c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm11 8h-11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
          </svg>
        </div>
      </a>

      {/* Phone Call Floating Button with Pulse Effect */}
      <a
        className="relative flex items-center gap-2 group"
        href="tel:0919051066"
        aria-label="Gọi điện thoại trực tiếp 0919051066"
      >
        <span className="hidden group-hover:inline-block bg-white text-navyDark text-xs font-bold py-1.5 px-3 rounded-lg shadow-md border border-stone-200 transition">
          Gọi Ngay: 0919.051.066
        </span>
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full luxury-gold-gradient text-white flex items-center justify-center p-3 shadow-xl hover:scale-110 active:scale-95 transition-all">
          {/* Glow pulse rings */}
          <span className="absolute -inset-1 rounded-full luxury-gold-gradient opacity-60 ring-glow pointer-events-none" />
          <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 animate-bounce" />
        </div>
      </a>
    </div>
  );
}
