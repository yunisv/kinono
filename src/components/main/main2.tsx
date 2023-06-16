import React from 'react';
import {Breadcrumb, Layout, theme} from 'antd';
import SwiperList from "../SwiperList/SwiperList";
const { Content } = Layout;

const Main2 = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content style={{ padding: '0 50px', backgroundColor: "#001529"}}>
            <h1 style={{color: "#fff", fontSize: 30}}>Аниме</h1>
            <h2 style={{color: "#fff"}}>Популярные</h2>
            {/*<div className="site-layout-content" style={{ background: colorBgContainer }}>*/}
            {/*    Content*/}
            {/*</div>*/}
            <SwiperList />
        </Content>
    );
};

export default Main2;