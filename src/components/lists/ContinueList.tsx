import React, { useRef, useState } from "react";
import {useSelector} from "react-redux";
import {List} from "antd";
import styles from "./continueList.module.css"
import cardImage from "../../images/card.png"


export default function ContinueList() {
    const {listData} = useSelector((state: any)=> state.listCoverDataSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    return (
        <div>
            <List
                dataSource={listData.slice(0, 8)}
                style={{height: 660, overflow: 'auto',}}
                renderItem={(item: any) => (
                    // @ts-ignore
                    <List.Item className={styles.listItem}>
                        <div className={styles.listBox}>
                            <img className={styles.card} alt={"movieLogo"} src={item.hasOwnProperty("material_data") && item.material_data.hasOwnProperty("poster_url") ? item.material_data.poster_url : cardImage}/>
                            <div className={styles.movieInfo}>
                                <div className={styles.movieTitleBox}>
                                    <div className={styles.movieTitle}>{item.title}</div>
                                </div>
                                <p className={styles.movieTime}>Cезон: 2, Серия: 4</p>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
}
