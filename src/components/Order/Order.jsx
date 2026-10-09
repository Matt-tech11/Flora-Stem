import React from 'react';
import { Card, Table, Tag, Typography } from 'antd';

const orders = [
  { id: 'FL-1048', customer: 'Emma Turner', plant: 'Arecaceae', date: 'Oct 8, 2026', status: 'Processing', total: '$48.00' },
  { id: 'FL-1047', customer: 'Noah Wilson', plant: 'Monstera', date: 'Oct 7, 2026', status: 'Shipped', total: '$62.50' },
  { id: 'FL-1046', customer: 'Olivia Chen', plant: 'Ficus', date: 'Oct 6, 2026', status: 'Delivered', total: '$35.00' },
  { id: 'FL-1045', customer: 'Liam Patel', plant: 'Arecaceae', date: 'Oct 5, 2026', status: 'Delivered', total: '$48.00' },
];

const statusColors = {
  Processing: 'gold',
  Shipped: 'blue',
  Delivered: 'green',
};

const columns = [
  { title: 'Order', dataIndex: 'id', key: 'id' },
  { title: 'Customer', dataIndex: 'customer', key: 'customer' },
  { title: 'Plant', dataIndex: 'plant', key: 'plant' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  {
    title: 'Status', dataIndex: 'status', key: 'status',
    render: (status) => <Tag color={statusColors[status]}>{status}</Tag>,
  },
  { title: 'Total', dataIndex: 'total', key: 'total' },
];

const Order = () => (
  <section className="page-view">
    <Typography.Title level={2}>My Orders</Typography.Title>
    <Typography.Paragraph type="secondary">
      Recent plant orders and their delivery status.
    </Typography.Paragraph>
    <Card className="page-card">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={orders}
        pagination={{ pageSize: 5, hideOnSinglePage: true }}
        scroll={{ x: 700 }}
      />
    </Card>
  </section>
);

export default Order;
