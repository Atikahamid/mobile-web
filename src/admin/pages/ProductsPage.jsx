import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { products } from '../data/staticAdminData';

const ProductsPage = () => (
  <AdminResourcePage
    title="Refurbished Products"
    subtitle="Inventory, pricing, and tags for the online shop"
    actionLabel="Add Product"
    searchKeys={['name', 'brand', 'type', 'tag']}
    searchPlaceholder="Search products…"
    rows={products}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Product' },
      { key: 'brand', label: 'Brand' },
      {
        key: 'type',
        label: 'Type',
        render: (r) => <span className="capitalize">{r.type}</span>,
      },
      {
        key: 'price',
        label: 'Price',
        render: (r) => (
          <span>
            <span className="font-bold text-[#FF6534]">£{r.price}</span>
            <span className="text-gray-400 line-through ml-1.5 text-xs">£{r.originalPrice}</span>
          </span>
        ),
      },
      {
        key: 'stock',
        label: 'Stock',
        render: (r) => (
          <span className={r.stock <= 2 ? 'font-bold text-rose-600' : ''}>{r.stock}</span>
        ),
      },
      {
        key: 'tag',
        label: 'Tag',
        render: (r) => r.tag || '—',
      },
      {
        key: 'isActive',
        label: 'Status',
        render: (r) => <StatusBadge status={r.isActive ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default ProductsPage;
