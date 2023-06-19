import React from "react";
// Import Swiper React components
import { Progress, Tooltip } from 'antd';
import {
    CheckSquareFilled,
    CheckSquareOutlined, ContainerFilled,
    ContainerOutlined,
    EyeFilled,
    EyeOutlined,
    HeartFilled,
    HeartOutlined
} from "@ant-design/icons"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../SwiperList/swiperList.css";
import "./card.css"

import styles from "./coverFlowCard.module.css"
import cardImage from "../../images/card.png";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export default function CoverFlowInfo(props: any) {
    // console.log(props.movieData.material_data.imdb_rating)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)

    return (
        <div className={styles.cardInfo}>
            {!isMobile &&
                <div className={styles.cardInfoBox}>
                    <h2 className={styles.cardTitle}>{props.movieData.title}</h2>
                    <p className={styles.cardDescription}>{props.movieData.material_data.description}</p>
                    <p className={styles.cardYear}>Год выпуска: {props.movieData.year}</p>
                    <div className={styles.cardYearBox}>Жанры:&nbsp;{
                        props.movieData.material_data.genres.map((value: string, index: number) => {
                            if (index === 0){
                                return <NavLink className={styles.cardGenres} to={"/"} >{value}</NavLink>
                            } else if (index < 5) {
                                return (
                                    <>
                                        <div>, &nbsp;</div>
                                        <NavLink to={"/"} className={styles.cardGenres}>{value}</NavLink>
                                    </>
                                )
                            }
                        })
                    }</div>
                </div>
            }
        </div>
    )
}
