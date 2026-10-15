import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { deviceTypes } from '../data/staticAdminData';

const DeviceTypesPage = () => (
  <AdminResourcePage
    title="Device Types"
    subtitle="Phone, tablet, and laptop repair categories on the storefront"
    actionLabel="Add Device Type"
    searchKeys={['title', 'slug', 'badge']}
    searchPlaceholder="Search device types…"
    rows={deviceTypes}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'title', label: 'Title' },
      { key: 'slug', label: 'Slug' },
      { key: 'badge', label: 'Badge' },
      {
        key: 'priceFrom',
        label: 'From',
        render: (r) => `£${r.priceFrom}`,
      },
      {
        key: 'isActive',
        label: 'Status',
        render: (r) => <StatusBadge status={r.isActive ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default DeviceTypesPage;
