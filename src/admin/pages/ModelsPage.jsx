import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { deviceModels } from '../data/staticAdminData';

const ModelsPage = () => (
  <AdminResourcePage
    title="Device Models"
    subtitle="Models linked to brands and available repair services"
    actionLabel="Add Model"
    searchKeys={['name', 'brand', 'type', 'group']}
    searchPlaceholder="Search models…"
    rows={deviceModels}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Model' },
      { key: 'brand', label: 'Brand' },
      { key: 'type', label: 'Type' },
      { key: 'group', label: 'Group' },
      { key: 'repairs', label: 'Repairs' },
      {
        key: 'isActive',
        label: 'Status',
        render: (r) => <StatusBadge status={r.isActive ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default ModelsPage;
