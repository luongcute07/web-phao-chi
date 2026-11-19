import React from 'react';
import type { Metadata } from 'next';
import ContactWarehousePage from '@/components/contact/ContactWarehousePage';

export const metadata: Metadata = {
  title: 'Liên Hệ Tổng Kho Phào Chỉ Thạch Cao & Xi Măng GFRC Quảng Bình',
  description: 'Liên hệ tổng kho Thành Phong tại Tân Ninh, Tân Thủy, Lệ Thủy để nhận tư vấn kỹ thuật, báo giá vật tư, hướng dẫn đường đi và lịch giao hàng.',
  keywords: ['liên hệ kho phào chỉ Quảng Bình', 'kho phào chỉ Tân Thủy Lệ Thủy', 'báo giá phào chỉ GFRC', 'đường đi kho Thành Phong'],
};

export default function LienHePage() {
  return <ContactWarehousePage />;
}
