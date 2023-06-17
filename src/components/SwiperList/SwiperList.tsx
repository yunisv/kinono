import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Progress, Tooltip, Button } from 'antd';
import {
    CheckSquareFilled,
    CheckSquareOutlined, ContainerFilled,
    ContainerOutlined,
    EyeFilled,
    EyeOutlined,
    HeartFilled,
    HeartOutlined, LeftOutlined, RightOutlined
} from "@ant-design/icons"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiperList.css";
import "./card.css"

// import required modules
import {Navigation, Pagination, Mousewheel} from "swiper";
import {NavLink} from "react-router-dom";
import FilmCard from "./FilmCard";
import {useSelector} from "react-redux";

export default function SwiperList() {
    const {listData, isLoading, error} = useSelector((state: any)=> state.listDataSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)
    return (
        <>
            {isLoading && <h1>LOADING</h1>}
            {error && <h1>error</h1>}
            {listData &&
                <div className={"swiperBox"}>
                    <Button style={isMobile ? {display: "none"} : {width: "5%", backgroundColor: "transparent", border: 0}}>
                        <LeftOutlined className={"swiper-button-prev"}/>
                    </Button>
                    <Swiper
                        style={isMobile ? {width: "100%"} : {width: "95%"}}
                        slidesPerView={1}
                        modules={[Pagination, Navigation, Mousewheel]}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            enabled: true,
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                            "@1.00": {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            "@1.50": {
                                slidesPerView: 7,
                                spaceBetween: 0,
                            },
                        }}
                        className="mySwiper"
                    >
                        {listData.map((value: any, key: number) => (
                            <SwiperSlide key={key}>
                                <FilmCard filmData={value}/>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                    <Button style={isMobile ? {display: "none"} : {width: "5%", backgroundColor: "transparent", border: 0}}>
                        <RightOutlined className={"swiper-button-next"}/>
                    </Button>
                </div>
            }
        </>
    )
}
