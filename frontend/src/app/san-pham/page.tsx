import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ProductCatalogView from '@/components/products/ProductCatalogView';

export const metadata: Metadata = {
  title: 'Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình – Đẳng Cấp Cho Ngôi Nhà Của Bạn',
  description: 'Nhà phân phối chính hãng phào chỉ thạch cao, xi măng GFRC Thành Phong, mâm trần, lục bình bê tông, keo dán chuyên dụng tại Quảng Bình & Lệ Thủy. Hotline: 0919.051.066.',
  keywords: [
    'phào chỉ thạch cao Quảng Bình',
    'phào chỉ xi măng GFRC Lệ Thủy',
    'thi công phào chỉ tân cổ điển Quảng Bình',
    'keo dán phào chỉ',
  ],
};

interface SanPhamPageProps {
  searchParams?: {
    cat?: string;
  };
}

export default function SanPhamPage({ searchParams }: SanPhamPageProps) {
  return (
    <Suspense fallback={null}>
      <ProductCatalogView initialCategory={searchParams?.cat} />
    </Suspense>
  );
}