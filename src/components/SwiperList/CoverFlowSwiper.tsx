import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./coverFlowSwiper.module.css";

// import required modules
import {EffectCoverflow, Navigation, Pagination} from "swiper";
import FilmCard from "../cards/FilmCard";
import FilmCardWithoutData from "../cards/FilmCardWithoutData";
import SerialCard from "../cards/SerialCard";
import SerialCardWithoutData from "../cards/SerialCardWithoutData";
import CoverFlowCard from "../cards/CoverFlowCard";
import {useSelector} from "react-redux";
import CoverFlowInfo from "../cards/CoverFlowInfo";
import CoverFlowBackground from "../cards/CoverFlowBackground";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {Button} from "antd";

export default function CoverFlowSwiper() {
    const {listData} = useSelector((state: any)=> state.listCoverDataSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)
    return (
        <div className={"swiperBox"}>
            <Button type="text" className={"swiper-cover-button-prev"} style={isMobile ? {display: "none"} : {width: "5%", display: "flex", justifyContent: "center"}}>
                <LeftOutlined className={"swiperButton"}/>
            </Button>
            <Swiper
                effect={"coverflow"}
                style={isMobile ? {width: "100%"} : {width: "95%"}}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    enabled: true,
                    nextEl: '.swiper-cover-button-next',
                    prevEl: '.swiper-cover-button-prev'
                }}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={styles.swiper}
            >
                {listData.map((value: any, key: number) => {
                    if (value.hasOwnProperty("material_data")) {
                        return (
                            <SwiperSlide className={isMobile ? styles.swiperSlideMobile : styles.swiperSlide} key={key}>
                                <CoverFlowBackground movieData={value}/>
                                <CoverFlowCard movieData={value}/>
                                <CoverFlowInfo movieData={value}/>
                            </SwiperSlide>
                        )
                    }
                })}
            </Swiper>
            <Button type="text" className={"swiper-cover-button-next"} style={isMobile ? {display: "none"} : {width: "5%", display: "flex", justifyContent: "center"}}>
                <RightOutlined className={"swiperButton"}/>
            </Button>
        </div>
    );
}
