import React from 'react';
import {Breadcrumb, Layout, theme} from 'antd';
import SwiperList from "../SwiperList/SwiperList";
import CoverFlowSwiper from "../SwiperList/CoverFlowSwiper";
import {useSelector} from "react-redux";
const { Content } = Layout;

interface mainPageProps {
    titlePage: string | null,
}
const Main2: React.FC<mainPageProps> = (props: mainPageProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)

    return (
        <Layout >
            <Content style={{ padding: '0 50px', backgroundColor: "#001529"}}>
                <h1 style={{color: "#fff", fontSize: 30}}>{props.titlePage}</h1>
                <h2 style={isMobile ? {color: "#fff"} : {color: "#fff", fontSize: 26}}>Популярные</h2>
                <SwiperList />
                <h2 style={isMobile ? {color: "#fff"} : {color: "#fff", fontSize: 26}}>Лучшие рейтинги</h2>
                <CoverFlowSwiper />
            </Content>
        </Layout>
    );
};

export default Main2;