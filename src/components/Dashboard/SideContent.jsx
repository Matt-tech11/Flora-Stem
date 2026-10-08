import React from 'react'
import ContentSidebar from './ContentSidebar'
import { Flex } from 'antd'
import Activity from './Activity'

const SideContent = () => {
  return (
    <Flex vertical gap="2.3rem" className="side-content">
      <ContentSidebar/>
      <Activity />
    </Flex>
  )
}

export default SideContent
