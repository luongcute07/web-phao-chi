import React from 'react';
import type { Metadata } from 'next';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';

export const metadata: Metadata = {
  title: 'Thư Viện Công Trình Thực Tế Phào Chỉ & GFRC Quảng Bình',
  description: 'Khám phá hơn 350 công trình lâu đài, biệt thự, nhà phố và khách sạn tại Đồng Hới, Lệ Thủy, Ba Đồn, Quảng Ninh, Bố Trạch do Thành Phong cung ứng và thi công.',
  keywords: ['công trình phào chỉ Quảng Bình', 'công trình GFRC Quảng Bình', 'thi công biệt thự Lệ Thủy', 'phào chỉ thạch cao Đồng Hới'],
};

export default function CongTrinhPage() {
  return <PortfolioGallery />;
}
