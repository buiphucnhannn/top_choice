import { redirect, notFound } from 'next/navigation';
import { categories } from '../../data/mockData';

export default function NhomIndexPage({ params }) {
  const { nhom } = params;
  const category = categories.find((c) => c.slug === nhom);

  if (category) {
    const groupHref = category.group === 'vat-ly' ? '/san-pham-vat-ly' : '/san-pham-so';
    redirect(`${groupHref}/${category.slug}`);
  }

  notFound();
}
