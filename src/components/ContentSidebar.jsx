import { Card, Flex, Typography } from 'antd'
import React from 'react'
import plant from "../assets/plant01.png"

const ContentSidebar = () => {
  return (
    <div>
        <Card className='card'>
            <Flex vertical gap="large" className="order-summary">
                <Typography.Title level={4} strong>
                    Today <br/> 5 orders
                </Typography.Title>
                <Typography.Title level={4} strong>
                    This Month <br /> 240 orders
                </Typography.Title>
            </Flex>
            <img src={plant} alt='plant' className='order-plant' />
        </Card>
    </div>
  )
}

export default ContentSidebar
