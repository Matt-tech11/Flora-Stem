import { Flex, Menu } from 'antd';
import React from 'react';
import { FaLeaf } from 'react-icons/fa6';
import { UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined  } from '@ant-design/icons'

const Sidebar = () => {
    function ProfileClick() {
    navigate("/Profile");
  }
  function ToDoClick() {
    navigate("/todo");
  }
  function OrderClick() {
    navigate("/orders");
  }
  function LogoutClick() {
    navigate("/logout");
  }
  function settingsClick() {
    navigate("/settings");
  }
    return (
        <>
        <Flex align="center" justify="center">
            <div className="logo">
                <FaLeaf />
            </div>
        </Flex>
        <Menu mode='inline' defaultSelectedKeys={['1']} className="menu-bar" 
        items={[
            {key:'1', icon:<ProfileOutlined />, label: 'Dashboard'},
            {key:'2', icon:<UserOutlined />, label: 'Profile', onClick:{ProfileClick}},
            {key:'3', icon:<OrderedListOutlined />, label: 'ToDo', onClick:{ToDoClick}},
            {key:'4', icon:<CarryOutOutlined />, label: 'My Orders', onClick:{OrderClick}},
            {key:'5', icon:<LogoutOutlined />, label: 'LogOut', onClick:{LogoutClick}},
            {key:'6', icon:<SettingOutlined />, label: 'Settings', onClick:{settingsClick}}
            ]}/>
        </>
    );
}
export default Sidebar;