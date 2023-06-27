import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./searchCard.module.css"

// import required modules
import {NavLink} from "react-router-dom";

// import images
import cardImage from "../../images/card.png"
import {modalSearchChange} from "../../store/reducers/searchSlice";
import {useDispatch} from "react-redux";

export default function SearchCard(props: any) {
    const dispatch = useDispatch()

    return (
        <div className={styles.cardTitle}>
            <div className={styles.card}>
                {
                    props.movieData.hasOwnProperty("material_data") ?
                        <img className={styles.cardImage} src={props.movieData.material_data.poster_url ? props.movieData.material_data.poster_url : cardImage} alt={"poster"}/>
                        :
                        <img className={styles.cardImage} src={cardImage} alt={"poster"}/>
                }
            </div>
            <div style={{
                maxWidth: "250px",
                height: "auto",
                wordBreak: "break-word",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <NavLink to={`/${props.movieData.type}/${props.movieData.id}`} onClick={() => {dispatch(modalSearchChange())}} style={{color: "rgba(255, 255, 255, 0.65)", fontSize: 16, paddingTop: 10, textAlign: "left"}}>{props.movieData.title}</NavLink>
                </div>
                <span style={{color: "rgba(255, 255, 255, 0.65)", fontSize: 12, paddingLeft: 10, paddingTop: 4, width: 60}}>{props.movieData.year}</span>
            </div>
        </div>
    );
}
