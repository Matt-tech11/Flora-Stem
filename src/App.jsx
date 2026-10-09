import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import Sidebar from './components/Dashboard/Sidebar';
import './App.css';
import { Flex } from 'antd';
import CustomHeader from './components/Dashboard/Header';
import MainContent from './components/Dashboard/MainContent';
import SideContent from './components/Dashboard/SideContent';
import Profile from './components/Profile/Profile';
import ToDo from './components/ToDo/ToDo';
import Order from './components/Order/Order';
import Logout from './components/Logout/Logout';
import Settings from './components/Settings/settings';

const {Sider, Header, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const pages = {
    profile: <Profile />,
    todo: <ToDo />,
    orders: <Order />,
    logout: <Logout onCancel={() => setActivePage('dashboard')} />,
    settings: <Settings />,
  };

  return (
    <Layout className="dashboard-layout">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className="sider">
        <Sidebar selectedKey={activePage} onNavigate={setActivePage} />
        <Button type='text' icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined />}
        onClick={()=> setCollapsed(!collapsed)} 
        className='triger-btn'/>
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader/>
        </Header>
        <Content className="content">
          {activePage === 'dashboard' ? (
            <Flex gap="large" className="dashboard-content">
              <MainContent />
              <SideContent />
            </Flex>
          ) : (
            pages[activePage]
          )}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
