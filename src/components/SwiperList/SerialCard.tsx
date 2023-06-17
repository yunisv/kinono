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

import "./swiperList.css";
import "./card.css"

// import required modules
import {NavLink} from "react-router-dom";

// import images
import cardImage from "../../images/card.png"

export default function SerialCard(props: any) {
    let color;
    if (props.serialData.material_data.imdb_rating > 6.5) {
        color = "#00ff00"
    } else if (props.serialData.material_data.imdb_rating < 3.5) {
        color = "#ff0015"
    } else {
        color = "#fffb00"
    }

    // console.log(props.serialData.material_data.imdb_rating)

    return (
        <div>
            <div className="card">
                <img src={props.serialData.material_data.poster_url ? props.serialData.material_data.poster_url : cardImage} alt={"poster"}/>
                <div className="info">
                    {/*<h3>Mountain</h3>*/}
                    <div className={"topCard"}>
                        <div className={"progressBar"}>
                            <Progress trailColor={"rgba(255,255,255,0.5)"} style={{fontWeight: "700"}} format={() => props.serialData.material_data.imdb_rating ? props.serialData.material_data.imdb_rating : "?"} strokeColor={color} type="circle" percent={props.serialData.material_data.imdb_rating * 10} size="small" />
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
                                        console.log(1212121)}}>{props.serialData.title}</NavLink>
                        <div>
                            <NavLink to={""} >{props.serialData.material_data.all_genres[0]}</NavLink>
                            ,
                            <NavLink to={""} >{props.serialData.material_data.all_genres[1]}</NavLink>
                        </div>
                        <span>Эпизодов: {props.serialData.material_data.episodes_total}</span>
                        <span>Длительность: {props.serialData.material_data.duration}мин</span>
                        <span>Статус: {props.serialData.material_data.all_status}</span>
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
                    <NavLink to={""} style={{color: "rgba(255, 255, 255, 0.65)", fontSize: 16, paddingLeft: 10, paddingTop: 10, textAlign: "left"}}>{props.serialData.title}</NavLink>
                </div>
                <span style={{color: "rgba(255, 255, 255, 0.65)", fontSize: 12, paddingLeft: 10, paddingTop: 2}}>{props.serialData.year}</span>
            </div>
        </div>
    );
}
