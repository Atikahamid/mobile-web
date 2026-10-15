import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { repairServices } from '../data/staticAdminData';

const RepairServicesPage = () => (
  <AdminResourcePage
    title="Repair Services"
    subtitle="Priced repair jobs per model and category"
    actionLabel="Add Service"
    searchKeys={['title', 'model', 'category', 'partType']}
    searchPlaceholder="Search repair services…"
    rows={repairServices}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'title', label: 'Service' },
      { key: 'model', label: 'Model' },
      { key: 'category', label: 'Category' },
      {
        key: 'price',
        label: 'Price',
        render: (r) => `£${r.price}`,
      },
      { key: 'warranty', label: 'Warranty' },
      {
        key: 'partType',
        label: 'Part',
        render: (r) => <span className="capitalize">{r.partType}</span>,
      },
      {
        key: 'isActive',
        label: 'Status',
        render: (r) => <StatusBadge status={r.isActive ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default RepairServicesPage;
