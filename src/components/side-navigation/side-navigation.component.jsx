import React  from 'react'
import { Menu } from 'antd';
import './side-navigation.styles.scss'
import { useHistory } from 'react-router-dom';

const SideNavigation = () => {
  const history = useHistory();

  const showPage = (route) => history.push(`/dashboard/${route}`);
  return (
    <div className="side-navigation">
      <Menu
        mode="inline"
        // defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" onClick={() => showPage('search-gifs')}> Search Gifs </Menu.Item>
        <Menu.Item key="2" onClick={() => showPage('user-list')}> User List </Menu.Item>
        <Menu.Item key="3" onClick={() => showPage('todo-list')}> Todo </Menu.Item>


      </Menu>
    </div>
  )
}

export default SideNavigation;
