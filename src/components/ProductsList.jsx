import { Button, Typography,Image } from 'antd'
import React from 'react'
import plantData from '../plantData'

const {Meta} = Card;
const ProductsList = () => {
  return (
    <>
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3} strong className='primary--color'>
            My Listing
        </Typography.Title>
        <Button type='link' className='gray--color'>
            View All
        </Button>
    </Flex>
    <Flex align="center" gap="large">
        {plantData.map((plant) => (
            <Card key={plant.id} hoverable className="plant-card">
                <Image src={plant.picture} style={{width: '130px'}} />
            </Card>
        ))}
    </Flex>
    </>
  );
};

export default ProductsList;