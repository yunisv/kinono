import React from 'react';
import {Breadcrumb, Button, Divider, Layout, theme} from 'antd';
import SwiperList from "../SwiperList/listSwiper/SwiperList";
import CoverFlowSwiper from "../SwiperList/coverSwiper/CoverFlowSwiper";
import {useSelector} from "react-redux";
import ContinueList from "../lists/ContinueList";
import AllList from "../lists/AllList";
import {changeSlicerNumber} from "../../store/reducers/searchSlice";
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
                <Divider style={{backgroundColor: "rgb(248,202,0)"}}/>
                <h2 style={isMobile ? {color: "#fff"} : {color: "#fff", fontSize: 26}}>Популярные</h2>
                <SwiperList />
                <Divider style={{backgroundColor: "rgb(248,202,0)"}}/>
                <h2 style={isMobile ? {color: "#fff"} : {color: "#fff", fontSize: 26}}>Лучшие рейтинги</h2>
                <CoverFlowSwiper />
                <Divider style={{backgroundColor: "rgb(248,202,0)"}}/>
                <h2 style={isMobile ? {color: "#fff"} : {color: "#fff", fontSize: 26}}>Продолжить просмотр</h2>
                <ContinueList />
                <Divider style={{backgroundColor: "rgb(248,202,0)"}}/>
                <AllList />
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <Button type={"text"} style={{borderColor: "rgb(248,202,0)", color: "rgb(248,202,0)", fontSize: 16}} onClick={() => {
                        // dispatch(changeSlicerNumber(sliceNumber + 10))
                    }}>Load more</Button>
                </div>
            </Content>
        </Layout>
    );
};

export default Main2;