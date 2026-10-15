import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { payments } from '../data/staticAdminData';

const PaymentsPage = () => (
  <AdminResourcePage
    title="Payments"
    subtitle="PayPal, Klarna, and other transaction records"
    actionLabel="Record Payment"
    searchKeys={['id', 'orderId', 'provider', 'status']}
    searchPlaceholder="Search payments…"
    rows={payments}
    columns={[
      { key: 'id', label: 'Transaction' },
      { key: 'orderId', label: 'Order' },
      { key: 'provider', label: 'Provider' },
      {
        key: 'amount',
        label: 'Amount',
        render: (r) => `£${r.amount}`,
      },
      {
        key: 'status',
        label: 'Status',
        render: (r) => <StatusBadge status={r.status} />,
      },
      { key: 'date', label: 'Date' },
    ]}
  />
);

export default PaymentsPage;
