import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../SwiperList/listSwiper/swiperList.css";
import "./card.css"

import styles from "./coverFlowCard.module.css"

export default function CoverFlowBackground(props: any) {
    // console.log(props.movieData.material_data.imdb_rating)

    return (
        <div className={styles.cardBackground}>
            <img src={props.movieData.screenshots[0]} alt={"background_screenshot"}/>
        </div>
    )
}
