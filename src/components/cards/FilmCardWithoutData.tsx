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

// import required modules
import {NavLink} from "react-router-dom";

// import images
import cardImage from "../../images/card.png"

export default function FilmCardWithoutData(props: any) {
    let color;

    // console.log(props.filmData)

    return (
        <div>
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
                                        console.log(1212121)}}>{props.filmData.title}
                                    </NavLink>
                        <span>Эпизодов: 1</span>
                    </div>
                </div>
            </div>
            <div className={"cardTitle"}>
                <div style={{
                    maxWidth: "160px",
                    height: "auto",
                    wordBreak: "break-word",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <NavLink to={`/${props.filmData.type}/${props.filmData.id}`} style={{color: "rgba(255, 255, 255, 0.65)", fontSize: 16, paddingLeft: 10, paddingTop: 10, textAlign: "left"}}>{props.filmData.title}</NavLink>
                </div>
                <span style={{color: "rgba(255, 255, 255, 0.65)", fontSize: 12, paddingLeft: 10, paddingTop: 2}}>{props.filmData.year}</span>
            </div>
        </div>
    );
}
