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

export default function FilmCard(props: any) {
    console.log(props.filmData)

    return (
        <div>
            <div className="card">
                <img src={props.filmData.material_data.poster_url} alt={"poster"}/>
                <div className="info">
                    {/*<h3>Mountain</h3>*/}
                    <div className={"topCard"}>
                        <div className={"progressBar"}>
                            <Progress trailColor={"rgba(255,255,255,0.5)"} style={{fontWeight: "700"}} format={() => '8.5'} strokeColor={"#00ff00"} type="circle" percent={50} size="small" />
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
                                    <span style={{fontSize: 16, color: "white", width: "100%", textOverflow: "ellipsis", wordWrap: "break-word",whiteSpace: "nowrap",
                                        overflow: "hidden"}}>Кошачий рай dvdvdvdvdvdvdv svsvvsvsssvsvsv svsvsvssvsvsv</span>
                        <div>
                            <NavLink to={""} >Аниме</NavLink>
                            ,
                            <NavLink to={""} >Мелодрамма</NavLink>
                        </div>
                        <span>Эпизодов: 1</span>
                        <span>Длительность: {props.filmData.material_data.duration}мин</span>
                        <span>Статус: {props.filmData.material_data.all_status}</span>
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
                    <span style={{color: "rgba(255, 255, 255, 0.65)", fontSize: 16, paddingLeft: 10, paddingTop: 10, textAlign: "left"}}>{props.filmData.title}</span>
                </div>
                <span style={{color: "rgba(255, 255, 255, 0.65)", fontSize: 12, paddingLeft: 10, paddingTop: 2}}>{props.filmData.year}</span>
            </div>
        </div>
    );
}