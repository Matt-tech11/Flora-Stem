import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import ProductsList from './ProductsList'
import SellerList from './SellerList'

const MainContent = () => {
  return (
    <div className="main-content">
      <Flex vertical gap={"2.3rem"} className="main-content-stack">
        <Banner/>
        <ProductsList/>
        <SellerList/>
      </Flex>
    </div>
  )
}

export default MainContent
