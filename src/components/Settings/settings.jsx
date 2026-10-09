import React, { useState } from 'react';
import { Card, Flex, Select, Switch, Typography } from 'antd';

const Settings = () => {
  const [preferences, setPreferences] = useState({
    orderUpdates: true,
    weeklySummary: false,
    lowStockAlerts: true,
  });

  const updatePreference = (key, value) => {
    setPreferences((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="page-view">
      <Typography.Title level={2}>Settings</Typography.Title>
      <Typography.Paragraph type="secondary">
        Choose how Flora keeps you up to date.
      </Typography.Paragraph>

      <Card className="page-card settings-card" title="Notifications">
        <Flex vertical gap="large">
          <Flex align="center" justify="space-between" gap="middle">
            <div>
              <Typography.Text strong>Order updates</Typography.Text>
              <br />
              <Typography.Text type="secondary">Get notified when an order is placed or shipped.</Typography.Text>
            </div>
            <Switch checked={preferences.orderUpdates} onChange={(value) => updatePreference('orderUpdates', value)} />
          </Flex>
          <Flex align="center" justify="space-between" gap="middle">
            <div>
              <Typography.Text strong>Weekly summary</Typography.Text>
              <br />
              <Typography.Text type="secondary">Receive a weekly summary of your shop activity.</Typography.Text>
            </div>
            <Switch checked={preferences.weeklySummary} onChange={(value) => updatePreference('weeklySummary', value)} />
          </Flex>
          <Flex align="center" justify="space-between" gap="middle">
            <div>
              <Typography.Text strong>Low stock alerts</Typography.Text>
              <br />
              <Typography.Text type="secondary">Get a reminder when a plant is running low.</Typography.Text>
            </div>
            <Switch checked={preferences.lowStockAlerts} onChange={(value) => updatePreference('lowStockAlerts', value)} />
          </Flex>
        </Flex>
      </Card>

      <Card className="page-card settings-card" title="Display">
        <Flex align="center" justify="space-between" gap="middle">
          <div>
            <Typography.Text strong>Language</Typography.Text>
            <br />
            <Typography.Text type="secondary">Choose the language used in the dashboard.</Typography.Text>
          </div>
          <Select
            aria-label="Dashboard language"
            defaultValue="English"
            options={[{ value: 'English', label: 'English' }]}
            style={{ width: 140 }}
          />
        </Flex>
      </Card>
    </section>
  );
};

export default Settings;
