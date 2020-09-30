import React from 'react';
import './dashboard-layout.styles.scss';
import { Layout } from 'antd';
import SideNavigation from 'components/side-navigation/side-navigation.component';

const { Header, Content, Sider } = Layout;


const DashboardLayout = ({ children, ...rest }) => {
  return (
    <div className="dashboard-layout">
      <Layout className="dashboard-main-layout"> 
        <Header className="header">
          <div className="logo" />
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