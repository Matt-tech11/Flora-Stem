import React, { useState } from 'react';
import { Button, Card, Flex, Result, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const Logout = ({ onCancel }) => {
  const [signedOut, setSignedOut] = useState(false);

  if (signedOut) {
    return (
      <section className="page-view">
        <Card className="page-card logout-card">
          <Result
            status="success"
            title="You’re signed out"
            subTitle="You can return to the Flora dashboard at any time."
            extra={<Button type="primary" onClick={onCancel}>Back to dashboard</Button>}
          />
        </Card>
      </section>
    );
  }

  return (
    <section className="page-view">
      <Typography.Title level={2}>Log out</Typography.Title>
      <Typography.Paragraph type="secondary">
        Finish up and leave your Flora workspace.
      </Typography.Paragraph>
      <Card className="page-card logout-card">
        <Result
          icon={<LogoutOutlined />}
          title="Ready to log out?"
          subTitle="You can come back to your plant shop dashboard whenever you’re ready."
          extra={(
            <Flex justify="center" gap="small" wrap>
              <Button onClick={onCancel}>Stay in Flora</Button>
              <Button danger type="primary" onClick={() => setSignedOut(true)}>Log out</Button>
            </Flex>
          )}
        />
      </Card>
    </section>
  );
};

export default Logout;
