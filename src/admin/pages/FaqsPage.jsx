import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { faqs } from '../data/staticAdminData';

const FaqsPage = () => (
  <AdminResourcePage
    title="FAQs"
    subtitle="Questions for protection, warranty, repairs, and shop pages"
    actionLabel="Add FAQ"
    searchKeys={['question', 'pageKey']}
    searchPlaceholder="Search FAQs…"
    rows={faqs}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'pageKey', label: 'Page' },
      { key: 'question', label: 'Question' },
      {
        key: 'isActive',
        label: 'Status',
        render: (r) => <StatusBadge status={r.isActive ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default FaqsPage;
