import { Button, Drawer } from 'antd'
import React, { useState } from 'react'

const HomePage = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };
      const onClose = () => {
        setVisible(false);
      };
    return (
        <div className="home-page">
            test here
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default HomePage
