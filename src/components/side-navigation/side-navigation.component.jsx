import React from 'react'
import { Menu } from 'antd';
import './side-navigation.styles.scss'

const SideNavigation = () => {
  return (
    <div className="side-navigation">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" > Option 1 </Menu.Item>


      </Menu>
    </div>
  )
}

export default SideNavigation;
