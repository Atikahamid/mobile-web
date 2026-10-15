import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { discounts } from '../data/staticAdminData';

const DiscountsPage = () => (
  <AdminResourcePage
    title="Discounts"
    subtitle="Promo codes for repairs and refurbished products"
    actionLabel="Add Discount"
    searchKeys={['code', 'type']}
    searchPlaceholder="Search codes…"
    rows={discounts}
    columns={[
      { key: 'id', label: 'ID' },
      {
        key: 'code',
        label: 'Code',
        render: (r) => (
          <span className="font-mono font-bold text-[#FF6534]">{r.code}</span>
        ),
      },
      {
        key: 'type',
        label: 'Type',
        render: (r) => <span className="capitalize">{r.type}</span>,
      },
      {
        key: 'value',
        label: 'Value',
        render: (r) => (r.type === 'percent' ? `${r.value}%` : `£${r.value}`),
      },
      {
        key: 'used',
        label: 'Usage',
        render: (r) => `${r.used} / ${r.maxUses}`,
      },
      {
        key: 'isActive',
        label: 'Status',
        render: (r) => <StatusBadge status={r.isActive ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default DiscountsPage;
