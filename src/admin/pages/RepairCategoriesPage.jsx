import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { repairCategories } from '../data/staticAdminData';

const RepairCategoriesPage = () => (
  <AdminResourcePage
    title="Repair Categories"
    subtitle="Screen, battery, camera, and other repair groups"
    actionLabel="Add Category"
    searchKeys={['title', 'slug', 'icon']}
    searchPlaceholder="Search categories…"
    rows={repairCategories}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'title', label: 'Category' },
      { key: 'slug', label: 'Slug' },
      { key: 'icon', label: 'Icon Key' },
      { key: 'services', label: 'Services' },
      {
        key: 'isActive',
        label: 'Status',
        render: (r) => <StatusBadge status={r.isActive ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default RepairCategoriesPage;
