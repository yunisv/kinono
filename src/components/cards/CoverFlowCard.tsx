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

import "../SwiperList/listSwiper/swiperList.css";
import "./card.css"

import styles from "./coverFlowCard.module.css"

// import required modules
import {NavLink} from "react-router-dom";

// import images
import cardImage from "../../images/card.png"

export default function CoverFlowCard(props: any) {
    let color;
    if (props.movieData.hasOwnProperty("material_data")) {
        if (props.movieData.material_data.imdb_rating > 6.5) {
            color = "#00ff00"
        } else if (props.movieData.material_data.imdb_rating < 3.5) {
            color = "#ff0015"
        } else {
            color = "#fffb00"
        }
    }

    // console.log(props.movieData.material_data.imdb_rating)

    if (props.movieData.hasOwnProperty("material_data")) {
        return (
            <div className={styles.cardSide}>
                    <div className="card">
                        <img src={props.movieData.material_data.poster_url ? props.movieData.material_data.poster_url : cardImage} alt={"poster"}/>
                        <div className="info">
                            {/*<h3>Mountain</h3>*/}
                            <div className={"topCard"}>
                                <div className={"progressBar"}>
                                    <Progress trailColor={"rgba(255,255,255,0.5)"} style={{fontWeight: "700"}} format={() => props.movieData.material_data.imdb_rating ? props.movieData.material_data.imdb_rating : "?"} strokeColor={color} type="circle" percent={props.movieData.material_data.imdb_rating * 10} size="small" />
                                </div>
                                <div className={"iconsButton"}>
                                    <Tooltip placement="left" title="Любимое">
                                        <HeartOutlined onClick={() => {
                                            console.log(1111111)}}/>
                                        {/*<HeartFilled />*/}
                                    </Tooltip>
                                    <Tooltip placement="left" title="Смотрю">
                                        <EyeOutlined onClick={() => {
                                            console.log(1111111)}}/>
                                        {/*<EyeFilled style={{color: "#432"}}/>*/}
                                    </Tooltip>
                                    <Tooltip placement="left" title="Запланировано">
                                        <ContainerOutlined onClick={() => {
                                            console.log(1111111)}}/>
                                        {/*<ContainerFilled />*/}
                                    </Tooltip>
                                    <Tooltip placement="left" title="Просмотрено">
                                        <CheckSquareOutlined onClick={() => {
                                            console.log(1111111)}}/>
                                        {/*<CheckSquareFilled />*/}
                                    </Tooltip>
                                </div>
                            </div>
                            <div className={"mainCard"}>
                                <NavLink to={""} style={{fontSize: 16, color: "white", width: "100%", textOverflow: "ellipsis", wordWrap: "break-word",whiteSpace: "nowrap",
                                    overflow: "hidden"}} onClick={() => {
                                    console.log(1212121)}}>{props.movieData.title}</NavLink>
                                <div>
                                    <NavLink to={""} >{props.movieData.material_data.hasOwnProperty("all_genres") ? props.movieData.material_data.all_genres[0] : null}</NavLink>
                                    ,
                                    <NavLink to={""} >{props.movieData.material_data.hasOwnProperty("all_genres") ? props.movieData.material_data.all_genres[1] : null}</NavLink>
                                </div>
                                <span>Эпизодов: {props.movieData.material_data.episodes_total}</span>
                                <span>Длительность: {props.movieData.material_data.duration}мин</span>
                                <span>Статус: {props.movieData.material_data.all_status}</span>
                            </div>
                        </div>
                    </div>
                </div>
        );
    } else {
        return (
            <div className={styles.cardSide}>
                <div className="card">
                        <img src={cardImage} alt={"poster"}/>
                        <div className="info">
                            {/*<h3>Mountain</h3>*/}
                            <div className={"topCard"}>
                                <div className={"progressBar"}>
                                    <Progress trailColor={"rgba(255,255,255,0.5)"} style={{fontWeight: "700"}} format={() => "?"} strokeColor={color} type="circle" percent={0} size="small" />
                                </div>
                                <div className={"iconsButton"}>
                                    <Tooltip placement="left" title="Любимое">
                                        <HeartOutlined onClick={() => {
                                            console.log(1111111)}}/>
                                        {/*<HeartFilled />*/}
                                    </Tooltip>
                                    <Tooltip placement="left" title="Смотрю">
                                        <EyeOutlined onClick={() => {
                                            console.log(1111111)}}/>
                                        {/*<EyeFilled style={{color: "#432"}}/>*/}
                                    </Tooltip>
                                    <Tooltip placement="left" title="Запланировано">
                                        <ContainerOutlined onClick={() => {
                                            console.log(1111111)}}/>
                                        {/*<ContainerFilled />*/}
                                    </Tooltip>
                                    <Tooltip placement="left" title="Просмотрено">
                                        <CheckSquareOutlined onClick={() => {
                                            console.log(1111111)}}/>
                                        {/*<CheckSquareFilled />*/}
                                    </Tooltip>
                                </div>
                            </div>
                            <div className={"mainCard"}>
                                <NavLink to={""} style={{fontSize: 16, color: "white", width: "100%", textOverflow: "ellipsis", wordWrap: "break-word",whiteSpace: "nowrap",
                                    overflow: "hidden"}} onClick={() => {
                                    console.log(1212121)}}>{props.movieData.title}</NavLink>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
