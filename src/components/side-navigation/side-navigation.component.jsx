import React from 'react'
import { Menu } from 'antd';
import './side-navigation.styles.scss'

const SideNavigation = () => {
  return (
    <div className="side-navigation">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" > Search Gifs </Menu.Item>
        <Menu.Item key="2" > User List </Menu.Item>
        <Menu.Item key="3" > Todo </Menu.Item>


      </Menu>
    </div>
  )
}

export default SideNavigation;
