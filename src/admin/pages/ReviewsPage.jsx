import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { reviews } from '../data/staticAdminData';

const ReviewsPage = () => (
  <AdminResourcePage
    title="Reviews"
    subtitle="Customer testimonials shown on the website"
    actionLabel="Add Review"
    searchKeys={['author', 'location', 'source']}
    searchPlaceholder="Search reviews…"
    rows={reviews}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'author', label: 'Author' },
      { key: 'location', label: 'Location' },
      {
        key: 'rating',
        label: 'Rating',
        render: (r) => `${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}`,
      },
      { key: 'source', label: 'Source' },
      {
        key: 'featured',
        label: 'Featured',
        render: (r) => <StatusBadge status={r.featured ? 'active' : 'inactive'} />,
      },
    ]}
  />
);

export default ReviewsPage;
