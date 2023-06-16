import React from 'react';
import {Breadcrumb, Layout, theme} from 'antd';
const { Content } = Layout;

const Main2 = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" style={{ background: colorBgContainer }}>
                Content
            </div>
        </Content>
    );
};

export default Main2;