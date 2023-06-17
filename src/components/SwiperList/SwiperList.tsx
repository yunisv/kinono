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
import SerialCard from "./SerialCard";
import SerialCardWithoutData from "./SerialCardWithoutData";

export default function SwiperList() {
    const {listData, isLoading, error} = useSelector((state: any)=> state.listDataSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)
    return (
        <>
            {isLoading && <h1>LOADING</h1>}
            {error && <h1>error</h1>}
            {listData.length !== 0 &&
                <div className={"swiperBox"}>
                    <Button type="text" className={"swiper-button-prev"} style={isMobile ? {display: "none"} : {width: "5%", display: "flex", justifyContent: "center"}}>
                        <LeftOutlined className={"swiperButton"}/>
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
                        {listData.map((value: any, key: number) => {
                            if (["foreign-movie", 'anime', "soviet-cartoon", "foreign-cartoon", "russian-cartoon", "russian-movie"].includes(value.type)) {
                                return (
                                    <SwiperSlide key={key}>
                                        <FilmCard filmData={value}/>
                                    </SwiperSlide>
                                )
                            } else {
                                if (value.hasOwnProperty("material_data")) {
                                    return (
                                        <SwiperSlide key={key}>
                                            <SerialCard serialData={value}/>
                                        </SwiperSlide>
                                    )
                                } else {
                                    return (
                                        <SwiperSlide key={key}>
                                            <SerialCardWithoutData serialData={value}/>
                                        </SwiperSlide>
                                    )
                                }

                            }
                        })
                        }
                    </Swiper>
                    <Button type="text" className={"swiper-button-next"} style={isMobile ? {display: "none"} : {width: "5%", display: "flex", justifyContent: "center"}}>
                        <RightOutlined className={"swiperButton"}/>
                    </Button>
                </div>
            }
        </>
    )
}
