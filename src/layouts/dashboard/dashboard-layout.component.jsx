import React from 'react';
import './dashboard-layout.styles.scss';
import { Layout } from 'antd';
import SideNavigation from 'components/side-navigation/side-navigation.component';
import * as storageService from 'services/browser-storage';
import { useHistory } from 'react-router-dom';

const { Header, Content, Sider } = Layout;


const DashboardLayout = ({ children, ...rest }) => {
  const history = useHistory();

  const signout = () => {
    storageService.remove('DashboardToken')
    history.push(`/auth/login`);
  }
  
  return (
    <div className="dashboard-layout">
      <Layout className="dashboard-main-layout">
        <Header className="header">
          <div className="logo" />
          <button className="btn" onClick={() => signout()}>Sign Out</button>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <SideNavigation />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default DashboardLayout;