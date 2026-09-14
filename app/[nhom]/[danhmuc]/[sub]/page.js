'use client';

import React from 'react';
import SubCategoryPage from '../page';

const h = React.createElement;

export default function ThreeSegmentPage({ params }) {
  // Map /san-pham-vat-ly/gia-dung/noi-chien -> nhom='gia-dung', danhmuc='noi-chien'
  const forwardedParams = {
    nhom: params.danhmuc,
    danhmuc: params.sub
  };
  return h(SubCategoryPage, { params: forwardedParams });
}
