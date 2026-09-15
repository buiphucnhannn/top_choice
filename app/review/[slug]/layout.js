import React from 'react';
import { products as seedProducts } from '../../../data/mockData';

const h = React.createElement;

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.slug || '';
  const found = seedProducts.find((p) => p.slug === slug);
  if (!found) {
    return {
      title: 'Đánh giá sản phẩm',
      description: 'Trang đánh giá chi tiết sản phẩm với điểm số, ưu nhược điểm và giá tham khảo trên TOP CHOICE.',
    };
  }
  return {
    title: found.name,
    description: found.summary || `Đánh giá chi tiết ${found.name} với điểm số, ưu nhược điểm và giá tham khảo trên TOP CHOICE.`,
  };
}

export default function ReviewSlugLayout(props) {
  return h(React.Fragment, null, props.children);
}
