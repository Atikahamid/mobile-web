import React from 'react';
import AdminResourcePage from '../components/AdminResourcePage';
import StatusBadge from '../components/StatusBadge';
import { orders } from '../data/staticAdminData';

const OrdersPage = () => (
  <AdminResourcePage
    title="Orders"
    subtitle="Product purchases, repair checkouts, and fulfilment status"
    actionLabel="Create Order"
    searchKeys={['id', 'customer', 'type', 'payment', 'orderStatus', 'paymentStatus']}
    searchPlaceholder="Search orders…"
    rows={orders}
    columns={[
      { key: 'id', label: 'Order' },
      { key: 'customer', label: 'Customer' },
      {
        key: 'type',
        label: 'Type',
        render: (r) => <span className="capitalize">{r.type}</span>,
      },
      { key: 'items', label: 'Items' },
      {
        key: 'total',
        label: 'Total',
        render: (r) => `£${r.total}`,
      },
      {
        key: 'payment',
        label: 'Method',
        render: (r) => <span className="capitalize">{r.payment}</span>,
      },
      {
        key: 'paymentStatus',
        label: 'Payment',
        render: (r) => <StatusBadge status={r.paymentStatus} />,
      },
      {
        key: 'orderStatus',
        label: 'Order',
        render: (r) => <StatusBadge status={r.orderStatus} />,
      },
      { key: 'date', label: 'Date' },
    ]}
  />
);

export default OrdersPage;
