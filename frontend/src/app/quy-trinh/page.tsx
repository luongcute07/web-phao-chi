import React from 'react';
import type { Metadata } from 'next';
import ProcessTimeline from '@/components/process/ProcessTimeline';

export const metadata: Metadata = {
  title: 'Quy Trình Làm Việc Chuẩn Mực & Cam Kết Thi Công Phào Chỉ Quảng Bình',
  description: 'Tìm hiểu quy trình khảo sát, tư vấn, cung ứng và thi công phào chỉ thạch cao, GFRC tại Quảng Bình. Đặt lịch khảo sát miễn phí cùng kỹ thuật viên Thành Phong.',
  keywords: ['quy trình thi công phào chỉ Quảng Bình', 'khảo sát phào chỉ Lệ Thủy', 'thi công GFRC Quảng Bình', 'bảo hành phào chỉ'],
};

export default function QuyTrinhPage() {
  return <ProcessTimeline />;
}
