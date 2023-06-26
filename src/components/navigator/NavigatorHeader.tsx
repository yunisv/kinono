import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Dropdown, Image, MenuProps, Button} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import {changeNavigator} from "../../store/reducers/navigatorSlice";
import myImage from "../../images/logo.png";
import {listDataClear} from "../../store/reducers/listDataSlice";

const NavigatorHeader = (props: any) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navigatorSlice = useSelector((state: any)=> state.navigatorSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)

    const items: MenuProps['items'] = [
        {
            label: <div style={{fontWeight: "bold"}}>Фильмы</div>,
            key: 'Фильмы',
            children: [
                {
                    type: 'group',
                    label: 'Фильмы',
                    children: [
                        {
                            label: (
                                <NavLink to={"/foreign-movie"}>
                                    Зарубежные
                                </NavLink>
                            ),
                            key: '/foreign-movie',
                        },
                        {
                            label: (
                                <NavLink to={"/russian-movie"}>
                                    Русские
                                </NavLink>
                            ),
                            key: '/russian-movie',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Анимированные',
                    children: [
                        {
                            label: (
                                <NavLink to={"/anime"}>
                                    Аниме
                                </NavLink>
                            ),
                            key: '/anime',
                        },
                        {
                            label: (
                                <NavLink to={"/foreign-cartoon"}>
                                    Зарубежные
                                </NavLink>
                            ),
                            key: '/foreign-cartoon',
                        },
                        {
                            label: (
                                <NavLink to={"/russian-cartoon"}>
                                    Русские
                                </NavLink>
                            ),
                            key: '/russian-cartoon',
                        },
                    ],
                },
            ],
        },
        {
            label: <div style={{fontWeight: "bold"}}>Сериалы</div>,
            key: 'Сериалы',
            children: [
                {
                    label: (
                        <NavLink to={"/anime-serial"}>
                            Аниме
                        </NavLink>
                    ),
                    key: '/anime-serial',
                },
                {
                    label: (
                        <NavLink to={"/cartoon-serial"}>
                            Мультфильмы
                        </NavLink>
                    ),
                    key: '/cartoon-serial',
                },
                {
                    label: (
                        <NavLink to={"/documentary-serial"}>
                            Документальные
                        </NavLink>
                    ),
                    key: '/documentary-serial',
                },
                {
                    label: (
                        <NavLink to={"/foreign-serial"}>
                            Зарубежные
                        </NavLink>
                    ),
                    key: '/foreign-serial',
                },
                {
                    label: (
                        <NavLink to={"/russian-serial"}>
                            Русские
                        </NavLink>
                    ),
                    key: '/russian-serial',
                },
                {
                    label: (
                        <NavLink to={"/multi-part-film"}>
                            Ассорти
                        </NavLink>
                    ),
                    key: '/multi-part-film',
                },
            ],
        },
        {
            label: <NavLink to={"/"} style={{fontWeight: "bold"}}>Жанр</NavLink>,
            key: 'Жанр',
        }
    ];

    return (
        <>
            {
                isMobile ?
                    <>
                        <NavLink to={"/"}>
                            <Image
                                preview={false}
                                height={50}
                                style={{objectFit: "cover", maxWidth: 88}}
                                onClick={() => {
                                    dispatch(listDataClear())
                                    dispatch(changeNavigator("/"))
                                }}
                                src={myImage}
                            />
                        </NavLink>
                        <Button type={"text"} onClick={() => {props.setCollapse(!props.collapsed)}}>
                            <MenuOutlined style={{fontSize: 20, color: "rgb(248,202,0)"}}/>
                        </Button>
                    </>
                    :
                    <>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                            <div style={{display: "flex", flexDirection: "row", width: "70%"}}>
                                <NavLink to={"/"} style={{width: "auto"}}>
                                    <Image
                                        preview={false}
                                        height={50}
                                        style={{objectFit: "cover"}}
                                        onClick={() => {
                                            dispatch(listDataClear())
                                            dispatch(changeNavigator("/"))
                                        }}
                                        src={myImage}
                                    />
                                </NavLink>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    // defaultSelectedKeys={navigatorSlice}
                                    selectable={true}
                                    selectedKeys={navigatorSlice}
                                    style={{ fontSize: 16 , width: "40%"}}
                                    items={items}
                                    onSelect={(e) => {
                                        console.log(e);
                                        // @ts-ignore
                                        dispatch(listDataClear())
                                        dispatch(changeNavigator(e.key))
                                        navigate(e.key)
                                    }}
                                />
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default NavigatorHeader