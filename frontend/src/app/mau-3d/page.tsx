import React from 'react';
import type { Metadata } from 'next';
import InteractivePatternViewer from '@/components/viewer3d/InteractivePatternViewer';

export const metadata: Metadata = {
  title: 'Trải Nghiệm Mẫu Hoa Văn Phào Chỉ 3D Tương Tác – Phào Chỉ Quảng Bình',
  description: 'Mô phỏng 3D trực quan các mẫu mâm trần, phào cổ trần thạch cao, kiểm tra ánh sáng đèn hắt 3000K và tùy chọn thếp vàng lá 24K.',
};

export default function Mau3DPage() {
  return <InteractivePatternViewer />;
}
