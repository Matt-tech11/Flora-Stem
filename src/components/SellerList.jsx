import { Avatar, Button, Flex, Tooltip, Typography, Card, Divider } from 'antd'
import React from 'react'

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
        <Flex vertical='row' gap="small" className="top-seller">
            <Flex align="center" justify="space-between">
                <Typography.Title level={5} strong className='primary--color'>
                    Top-Seller
                </Typography.Title>
                <Button type='link' className='gray--color'>
                    View All
                </Button>
            </Flex>
            <Card>
                <Flex align="center" justify="space-evenly">
                    <Avatar.Group 
                    maxCount={5} 
                    maxPopoverTrigger='click' 
                    size="large" 
                    maxStyle={{
                        color:'#f56a00', 
                        backgroundColor: '#fde3cf', 
                        cursor:'progress'
                        }}>
                        <Tooltip title="User 1" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 2" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 3" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 4" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 5" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 6" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 7" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                    </Avatar.Group>
                    <Divider type='vertical' className='divider' />
                    <Flex vertical="row">
                        <Typography.Text type='secondary' strong>
                            1,200 plant sold
                        </Typography.Text>
                        <Typography.Text type='secondary' strong>
                            10 sellers
                        </Typography.Text>
                    </Flex>
                </Flex>
            </Card>
        </Flex>



        <Flex vertical='row' gap="small" className="featured-seller" >
            <Flex align="center" justify="space-between">
                <Typography.Title level={5} strong className='primary--color'>
                    Featured Sellers
                </Typography.Title>
                <Button type='link' className='gray--color'>
                    View All
                </Button>
            </Flex>
             <Card>
                <Flex align="center" justify="space-evenly">
                    <Avatar.Group 
                    maxCount={5} 
                    maxPopoverTrigger='click' 
                    size="large" 
                    maxStyle={{
                        color:'#f56a00', 
                        backgroundColor: '#fde3cf', 
                        cursor:'progress'
                        }}>
                        <Tooltip title="User 1" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 2" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 3" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 4" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 5" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 6" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                        <Tooltip title="User 7" placement='top'>
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                        </Tooltip>
                    </Avatar.Group>
                    <Divider type='vertical' className='divider' />
                    <Flex vertical="row">
                        <Typography.Text type='secondary' strong>
                            1,500 plant sold
                        </Typography.Text>
                        <Typography.Text type='secondary' strong>
                            13 sellers
                        </Typography.Text>
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    </Flex>
  )
}

export default SellerList