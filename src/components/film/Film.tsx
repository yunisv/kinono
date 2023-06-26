import React from 'react';
import {Breadcrumb, Button, Divider, Layout, Progress, theme, Tooltip} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useLocation, useParams} from "react-router-dom";
import {Content} from "antd/es/layout/layout";
import cardImage from "../../images/card.png";
import styles from "./film.module.css"
import {
    CheckSquareFilled,
    CheckSquareOutlined, ContainerFilled,
    ContainerOutlined,
    EyeFilled,
    EyeOutlined,
    HeartFilled,
    HeartOutlined
} from "@ant-design/icons";

const DesktopHeaderFilmInfo = (props: any) => {
    // @ts-ignore
    const {isLoading, movieData} = useSelector(state => state.movieSlice)

    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)

    let color;
    try {
        if (movieData[0].material_data.imdb_rating > 6.5) {
            color = "#00ff00"
        } else if (movieData[0].material_data.imdb_rating < 3.5) {
            color = "#ff0015"
        } else {
            color = "#fffb00"
        }
    } catch (e) {
        color = "#212121"
    }

    console.log(movieData)
    return (
        <div>
            {isLoading && <div>LOADING...</div>}
            {
                movieData.length === 1 &&
                <div style={{position: "relative", minHeight: 350, width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", overflow: "hidden"}}>
                    <div
                        style={{
                            backgroundImage: `url(${
                                movieData[0].material_data.poster_url
                                    ? movieData[0].material_data.poster_url
                                    : cardImage
                            })`,
                            backgroundSize: "cover",
                            filter: "blur(10px)",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }}
                    ></div>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                    ></div>
                    <div style={isMobile ? {maxWidth: 250, display: "flex", alignItems: "center", justifyContent: "center",zIndex: 2, paddingTop: 30} : {maxWidth: 250, display: "flex", alignItems: "center", justifyContent: "center",zIndex: 2}}>
                        <img style={{height: "auto", width: "100%"}} src={movieData[0].material_data.poster_url ? movieData[0].material_data.poster_url : cardImage} alt={"poster"} />
                    </div>
                    <div style={isMobile ? {width: "90%", display: "flex", justifyContent: "center", flexDirection: "column",zIndex: 2, paddingTop: 30} : {width: "70%", display: "flex", justifyContent: "center", flexDirection: "column",zIndex: 2, paddingTop: 30}}>
                        <span style={{fontSize: 28, fontWeight: "bold", color: "#FFFFFF"}}>{movieData[0].title}<span style={{fontWeight: "normal"}}> ({movieData[0].year})</span></span>
                        <span style={{fontSize: 16, color: "#FFFFFFA6"}}>{movieData[0].year} • {movieData[0].material_data.all_genres ? movieData[0].material_data.all_genres.map((value: string, index: number) => {
                            if (index === 0){
                                return <NavLink style={{fontSize: 16, color: "#FFFFFFA6"}} to={"/"} >{value}</NavLink>
                            } else if (index < 3) {
                                return (
                                    <>
                                        <span>, &nbsp;</span>
                                        <NavLink to={"/"} style={{fontSize: 16, color: "#FFFFFFA6"}}>{value}</NavLink>
                                    </>
                                )
                            }
                        }) : <span>Жанры отсутсвуют</span>} • {movieData[0].material_data.duration ? movieData[0].material_data.duration : "?"} мин • {movieData[0].material_data.episodes_total ? `${movieData[0].material_data.episodes_total} ${movieData[0].material_data.episodes_total === 1 ? "эпизод" : "эпизодов"}` : ""}</span>
                        <div style={ isMobile ? {display: "flex", alignItems: "center", paddingTop: 20, flexWrap: "wrap", justifyContent: "center"} : {display: "flex", alignItems: "center", paddingTop: 10, flexWrap: "wrap"}}>
                            <Progress size={isMobile ? 40 : 70} trailColor={"rgba(255,255,255,0.5)"} style={{fontWeight: "700"}} format={() =>movieData[0].material_data.imdb_rating ? `${movieData[0].material_data.imdb_rating * 10}%` : "?"} strokeColor={color} type="circle" percent={movieData[0].material_data.imdb_rating ? movieData[0].material_data.imdb_rating * 10 : 0} />
                            <text className={styles.text_rating}>Рейтинг</text>
                            <div style={isMobile ? {paddingTop: 10} : {}}>
                                <Tooltip placement="bottom" title="Любимое">
                                    <Button type={"text"} style={{width: 55, height:55, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.1)", marginLeft: 5, marginRight: 5}}><HeartFilled style={{color: "rgb(248,202,0)"}}/></Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title="Смотрю">
                                    <Button type={"text"} style={{width: 55, height:55, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.1)", marginLeft: 5, marginRight: 5}}><EyeFilled style={{color: "rgb(248,202,0)"}}/></Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title="Запланировано">
                                    <Button type={"text"} style={{width: 55, height:55, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.1)", marginLeft: 5, marginRight: 5}}><ContainerFilled style={{color: "rgb(248,202,0)"}}/></Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title="Просмотрено">
                                    <Button type={"text"} style={{width: 55, height:55, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.1)", marginLeft: 5, marginRight: 5}}><CheckSquareFilled style={{color: "rgb(248,202,0)"}}/></Button>
                                </Tooltip>
                            </div>
                        </div>
                        <text className={styles.zaqolovok}>Обзор</text>
                        <div>
                            <text style={{fontSize: 16, color: "#FFFFFFA6"}}>{movieData[0].material_data.description}</text>
                        </div>
                        <div style={{display: "flex", width: "100%", justifyContent: "space-between", paddingTop: 30, paddingBottom:30,  flexWrap: "wrap"}}>
                            {
                                movieData[0].material_data.actors &&
                                <div style={isMobile ? {paddingTop: 10, paddingBottom:10} : {}}>
                                    <text className={styles.mini_zaqolovok}>Актеры</text>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                        {movieData[0].material_data.actors && movieData[0].material_data.actors.map((value: any, index: number) => {
                                            return (
                                                <text style={{fontSize: 14, color: "#FFFFFFA6"}} key={index}>{value}</text>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                            {
                                movieData[0].material_data.directors &&
                                <div style={isMobile ? {paddingTop: 10, paddingBottom:10} : {}}>
                                    <text className={styles.mini_zaqolovok}>Директоры</text>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                        {movieData[0].material_data.directors && movieData[0].material_data.directors.map((value: any, index: number) => {
                                            return (
                                                <text style={{fontSize: 14, color: "#FFFFFFA6"}} key={index}>{value}</text>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                            {
                                movieData[0].material_data.writers &&
                                <div style={isMobile ? {paddingTop: 10, paddingBottom:10} : {}}>
                                    <text className={styles.mini_zaqolovok}>Писатели</text>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                        {movieData[0].material_data.writers && movieData[0].material_data.writers.map((value: any, index: number) => {
                                            return (
                                                <text style={{fontSize: 14, color: "#FFFFFFA6"}} key={index}>{value}</text>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                            {
                                movieData[0].material_data.composers &&
                                <div style={isMobile ? {paddingTop: 10, paddingBottom:10} : {}}>
                                    <text className={styles.mini_zaqolovok}>Композиторы</text>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                        {movieData[0].material_data.composers && movieData[0].material_data.composers.map((value: any, index: number) => {
                                            return (
                                                <text style={{fontSize: 14, color: "#FFFFFFA6"}} key={index}>{value}</text>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                            {
                                movieData[0].material_data.designers &&
                                <div style={isMobile ? {paddingTop: 10, paddingBottom:10} : {}}>
                                    <text className={styles.mini_zaqolovok}>Дизанеры</text>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                        {movieData[0].material_data.designers && movieData[0].material_data.designers.map((value: any, index: number) => {
                                            return (
                                                <text style={{fontSize: 14, color: "#FFFFFFA6"}} key={index}>{value}</text>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                            {
                                movieData[0].material_data.producers &&
                                <div style={isMobile ? {paddingTop: 10, paddingBottom:10} : {}}>
                                    <text className={styles.mini_zaqolovok}>Продюссеры</text>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                        {movieData[0].material_data.producers && movieData[0].material_data.producers.map((value: any, index: number) => {
                                            return (
                                                <text style={{fontSize: 14, color: "#FFFFFFA6"}} key={index}>{value}</text>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

const DesktopHeaderFilmWithoutInfo = (props: any) => {
    // @ts-ignore
    const {isLoading, movieData} = useSelector(state => state.movieSlice)

    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)

    let color = "#212121"

    return (
        <div>
            {isLoading && <div>LOADING...</div>}
            {
                movieData.length === 1 &&
                <div style={{position: "relative", minHeight: 350, width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", overflow: "hidden"}}>
                    <div
                        style={{
                            backgroundImage: `url(${cardImage})`,
                            backgroundSize: "cover",
                            filter: "blur(10px)",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }}
                    ></div>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                    ></div>
                    <div style={isMobile ? {maxWidth: 250, display: "flex", alignItems: "center", justifyContent: "center",zIndex: 2, paddingTop: 30} : {maxWidth: 250, display: "flex", alignItems: "center", justifyContent: "center",zIndex: 2}}>
                        <img style={{height: "auto", width: "100%"}} src={cardImage} alt={"poster"} />
                    </div>
                    <div style={isMobile ? {width: "90%", display: "flex", justifyContent: "center", flexDirection: "column",zIndex: 2, paddingTop: 30} : {width: "70%", display: "flex", justifyContent: "center", flexDirection: "column",zIndex: 2, paddingTop: 30}}>
                        <span style={{fontSize: 28, fontWeight: "bold", color: "#FFFFFF"}}>{movieData[0].title}<span style={{fontWeight: "normal"}}> ({movieData[0].year})</span></span>
                        <span style={{fontSize: 16, color: "#FFFFFFA6"}}>{movieData[0].year} • Жанры отсутсвуют • ? мин</span>
                        <div style={ isMobile ? {display: "flex", alignItems: "center", paddingTop: 20, flexWrap: "wrap", justifyContent: "center"} : {display: "flex", alignItems: "center", paddingTop: 10, flexWrap: "wrap"}}>
                            <Progress size={isMobile ? 40 : 70} trailColor={"rgba(255,255,255,0.5)"} style={{fontWeight: "700"}} format={() => "?"} strokeColor={color} type="circle" percent={0} />
                            <text className={styles.text_rating}>Рейтинг</text>
                            <div style={isMobile ? {paddingTop: 10} : {}}>
                                <Tooltip placement="bottom" title="Любимое">
                                    <Button type={"text"} style={{width: 55, height:55, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.1)", marginLeft: 5, marginRight: 5}}><HeartFilled style={{color: "rgb(248,202,0)"}}/></Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title="Смотрю">
                                    <Button type={"text"} style={{width: 55, height:55, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.1)", marginLeft: 5, marginRight: 5}}><EyeFilled style={{color: "rgb(248,202,0)"}}/></Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title="Запланировано">
                                    <Button type={"text"} style={{width: 55, height:55, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.1)", marginLeft: 5, marginRight: 5}}><ContainerFilled style={{color: "rgb(248,202,0)"}}/></Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title="Просмотрено">
                                    <Button type={"text"} style={{width: 55, height:55, borderRadius: 50, backgroundColor: "rgba(255,255,255,0.1)", marginLeft: 5, marginRight: 5}}><CheckSquareFilled style={{color: "rgb(248,202,0)"}}/></Button>
                                </Tooltip>
                            </div>
                        </div>
                        <text className={styles.zaqolovok}>Обзор</text>
                        <div style={isMobile ? {paddingBottom: 30} : {}}>
                            <text style={{fontSize: 16, color: "#FFFFFFA6"}}>Описание отсутвует</text>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

const Film = (props: any) => {
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)
    // @ts-ignore
    const {isLoading, movieData} = useSelector(state => state.movieSlice)

    const dispatch = useDispatch()
    const params = useParams(); // Получаем значение идентификатора из URL

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const language = searchParams.get('language');

    console.log(params)
    console.log(language)

    return (
        <Layout>
            <Content style={isMobile ? { padding: '0 20px', backgroundColor: "#001529"} : { padding: '0 50px', backgroundColor: "#001529"}}>
                <h1>HELLO EVERY NYAN :3</h1>
                {movieData.length === 1 && (movieData[0].material_data ? <DesktopHeaderFilmInfo /> : <DesktopHeaderFilmWithoutInfo />)}
            </Content>
        </Layout>
    );
};

export default Film;