import { Flex, Menu } from 'antd';
import React from 'react';
import { FaLeaf } from 'react-icons/fa6';
import { UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined } from '@ant-design/icons';

const Sidebar = ({ onNavigate, selectedKey }) => {
    return (
        <>
        <Flex align="center" justify="center">
            <div className="logo">
                <FaLeaf />
            </div>
        </Flex>
        <Menu mode='inline' selectedKeys={[selectedKey]} onClick={({ key }) => onNavigate(key)} className="menu-bar" 
        items={[
            {key:'dashboard', icon:<ProfileOutlined />, label: 'Dashboard'},
            {key:'profile', icon:<UserOutlined />, label: 'Profile'},
            {key:'todo', icon:<OrderedListOutlined />, label: 'ToDo'},
            {key:'orders', icon:<CarryOutOutlined />, label: 'My Orders'},
            {key:'logout', icon:<LogoutOutlined />, label: 'LogOut'},
            {key:'settings', icon:<SettingOutlined />, label: 'Settings'}
            ]}/>
        </>
    );
}
export default Sidebar;
