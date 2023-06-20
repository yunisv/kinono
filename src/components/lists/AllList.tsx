import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./allList.module.css";

// import required modules
import {useSelector} from "react-redux";
import {Card, Layout, List} from "antd";
import FilmCard from "../cards/FilmCard";
import FilmCardWithoutData from "../cards/FilmCardWithoutData";
import SerialCard from "../cards/SerialCard";
import SerialCardWithoutData from "../cards/SerialCardWithoutData";

const ListRow: React.FC = () => {
    const {listData, isLoading, error} = useSelector((state: any)=> state.listDataSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)
    return (
        <Layout>
            <div className={styles.list}>
                {listData.map((value: any, key: number) => {
                    if (["foreign-movie", 'anime', "soviet-cartoon", "foreign-cartoon", "russian-cartoon", "russian-movie"].includes(value.type)) {
                        if (value.hasOwnProperty("material_data")) {
                            return (
                                <div style={isMobile ? {maxWidth: 120, marginBottom: 5} : {marginBottom: 5}} key={key}>
                                    <FilmCard filmData={value}/>
                                </div>
                            )
                        } else {
                            return (
                                <div style={isMobile ? {maxWidth: 120, marginBottom: 5} : {marginBottom: 5}} key={key}>
                                    <FilmCardWithoutData filmData={value}/>
                                </div>
                            )
                        }
                    } else {
                        if (value.hasOwnProperty("material_data")) {
                            return (
                                <div style={isMobile ? {maxWidth: 120, marginBottom: 5} : {marginBottom: 5}} key={key}>
                                    <SerialCard serialData={value}/>
                                </div>
                            )
                        } else {
                            return (
                                <div style={isMobile ? {maxWidth: 120, marginBottom: 5} : {marginBottom: 5}} key={key}>
                                    <SerialCardWithoutData serialData={value}/>
                                </div>
                            )
                        }

                    }
                })}
            </div>
        </Layout>
    );
}

export default function AllList() {
    const {listData} = useSelector((state: any)=> state.listCoverDataSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)
    return (
        <div>
            <Layout>
                <ListRow />
            </Layout>
        </div>
    );
}
