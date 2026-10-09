import React from 'react';
import { Avatar, Card, Descriptions, Flex, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Profile = () => (
  <section className="page-view">
    <Typography.Title level={2}>Your profile</Typography.Title>
    <Typography.Paragraph type="secondary">
      Your account details and store information.
    </Typography.Paragraph>
    <Card className="page-card profile-card">
      <Flex align="center" gap="middle" className="profile-intro">
        <Avatar size={72} icon={<UserOutlined />} />
        <div>
          <Typography.Title level={4}>Emma Turner</Typography.Title>
          <Typography.Text type="secondary">Store owner</Typography.Text>
        </div>
      </Flex>
      <Descriptions column={{ xs: 1, sm: 2 }} className="profile-details">
        <Descriptions.Item label="Email">emma.turner@example.com</Descriptions.Item>
        <Descriptions.Item label="Phone">+1 (555) 014-2086</Descriptions.Item>
        <Descriptions.Item label="Store">Flora Plant Shop</Descriptions.Item>
        <Descriptions.Item label="Member since">January 2024</Descriptions.Item>
      </Descriptions>
    </Card>
  </section>
);

export default Profile;
