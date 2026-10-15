import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { brands } from '../data/staticAdminData';

const BrandsPage = () => (
  <AdminResourcePage
    title="Brands"
    subtitle="Manage Apple, Samsung, Google and other repair brands"
    actionLabel="Add Brand"
    searchKeys={['name', 'slug', 'deviceTypes']}
    searchPlaceholder="Search brands…"
    rows={brands}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Brand' },
      { key: 'slug', label: 'Slug' },
      { key: 'deviceTypes', label: 'Device Types' },
      { key: 'models', label: 'Models' },
      {
        key: 'isActive',
        label: 'Status',
        render: (r) => <StatusBadge status={r.isActive ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default BrandsPage;
