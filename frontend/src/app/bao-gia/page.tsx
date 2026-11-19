import React from 'react';
import type { Metadata } from 'next';
import CostEstimatorWidget from '@/components/estimator/CostEstimatorWidget';

export const metadata: Metadata = {
  title: 'Báo Giá Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình – Dự Toán Tận Kho',
  description: 'Công cụ dự toán chi phí phào chỉ, bảng giá sỉ tại kho Lệ Thủy và chính sách chiết khấu 15% - 25% cho nhà thầu, thợ thi công tại Quảng Bình.',
  keywords: ['báo giá phào chỉ thạch cao Quảng Bình', 'báo giá phào chỉ GFRC Lệ Thủy', 'dự toán chi phí phào chỉ', 'giá sỉ phào chỉ tại kho'],
};

export default function BaoGiaPage() {
  return <CostEstimatorWidget />;
}
