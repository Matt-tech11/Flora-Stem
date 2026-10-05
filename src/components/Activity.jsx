import { Avatar, Button, Flex, List, Typography } from 'antd'
import React from 'react'

const data = [
    {
        name: 'Emma Turner',
        orderTime: 1,
    },
    {
        name: 'Emma Turner',
        orderTime: 2,
    },
    {
        name: 'Emma Turner',
        orderTime: 3,
    },
    {
        name: 'Emma Turner',
        orderTime: 4,
    },
    {
        name: 'Emma Turner',
        orderTime: 5,
    }
]
const Activity = () => {
  return (
    <Flex vertical gap='small'>
        <Flex align='center' justify='space-between' className='activity-heading'>
            <Typography.Title level={4} strong className='primary--color'>
            Recent Activity
        </Typography.Title>
        <Button type='link' className='gray--color'>
            View All
        </Button>
        </Flex>
         <List pagination dataSource={data} 
         renderItem={(user, index)=> (
            <List.Item>
                <List.Item.Meta avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                title={<Typography.Text>{user.name}</Typography.Text>}
                description="Ordered a new plant"></List.Item.Meta>
                <span className='gray--color'>
                    {user.orderTime} {user.orderTime === 1 ? 'day ago' : 'days ago'}
                </span>
            </List.Item>
         )}/>
    </Flex>
  );
}

export default Activity
