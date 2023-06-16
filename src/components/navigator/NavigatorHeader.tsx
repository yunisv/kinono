import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Dropdown, Image, MenuProps} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import {changeNavigator} from "../../store/reducers/navigatorSlice";
import {changeScreenSize} from "../../store/reducers/deviceInfoSlice";
import myImage from "../../images/logo.png";
import {fetchListData} from "../../store/Actions";
import {listDataClear} from "../../store/reducers/listDataSlice";

const NavigatorHeader = () => {
    const items: MenuProps['items'] = [
        {
            label: 'Фильмы',
            key: 'Фильмы',
            children: [
                {
                    type: 'group',
                    label: 'Фильмы',
                    children: [
                        {
                            label: (
                                <NavLink to={"/foreign-movie"} onClick={() => {dispatch(listDataClear())}}>
                                    Зарубежные
                                </NavLink>
                            ),
                            key: '/foreign-movie',
                        },
                        {
                            label: (
                                <NavLink to={"/russian-movie"} onClick={() => {dispatch(listDataClear())}}>
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
                                <NavLink to={"/anime"} onClick={() => {dispatch(listDataClear())}}>
                                    Аниме
                                </NavLink>
                            ),
                            key: '/anime',
                        },
                        {
                            label: (
                                <NavLink to={"/foreign-cartoon"} onClick={() => {dispatch(listDataClear())}}>
                                    Зарубежные
                                </NavLink>
                            ),
                            key: '/foreign-cartoon',
                        },
                        {
                            label: (
                                <NavLink to={"/russian-cartoon"} onClick={() => {dispatch(listDataClear())}}>
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
            label: 'Сериалы',
            key: 'Сериалы',
            children: [
                {
                    label: (
                        <NavLink to={"/anime-serial"} onClick={() => {dispatch(listDataClear())}}>
                            Аниме
                        </NavLink>
                    ),
                    key: '/anime-serial',
                },
                {
                    label: (
                        <NavLink to={"/cartoon-serial"} onClick={() => {dispatch(listDataClear())}}>
                            Мультфильмы
                        </NavLink>
                    ),
                    key: '/cartoon-serial',
                },
                {
                    label: (
                        <NavLink to={"/documentary-serial"} onClick={() => {dispatch(listDataClear())}}>
                            Документальные
                        </NavLink>
                    ),
                    key: '/documentary-serial',
                },
                {
                    label: (
                        <NavLink to={"/foreign-serial"} onClick={() => {dispatch(listDataClear())}}>
                            Зарубежные
                        </NavLink>
                    ),
                    key: '/foreign-serial',
                },
                {
                    label: (
                        <NavLink to={"/russian-serial"} onClick={() => {dispatch(listDataClear())}}>
                            Русские
                        </NavLink>
                    ),
                    key: '/russian-serial',
                },
                {
                    label: (
                        <NavLink to={"/multi-part-film"} onClick={() => {dispatch(listDataClear())}}>
                            Ассорти
                        </NavLink>
                    ),
                    key: '/multi-part-film',
                },
            ],
        }
    ];

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navigatorSlice = useSelector((state: any)=> state.navigatorSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)

    return (
        <>
            {
                isMobile ?
                    <>
                        <NavLink to={"/"}>
                            <Image
                                preview={false}
                                height={50}
                                style={{objectFit: "cover"}}
                                onClick={() => {
                                    dispatch(listDataClear())
                                    dispatch(changeNavigator("/"))
                                    // @ts-ignore
                                    dispatch(fetchListData())
                                }}
                                src={myImage}
                            />
                        </NavLink>
                        <Dropdown menu={{ items: items }}>
                            <div>
                                <a style={{display: "flex", alignItems: "center"}} onClick={(e) => {
                                    e.preventDefault()
                                }}>
                                    <MenuOutlined style={{fontSize: 20}}/>
                                </a>
                            </div>
                        </Dropdown>
                    </>
                    :
                    <>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <NavLink to={"/"}>
                                <Image
                                    preview={false}
                                    height={50}
                                    style={{objectFit: "cover"}}
                                    onClick={() => {
                                        dispatch(listDataClear())
                                        dispatch(changeNavigator("/"))
                                        // @ts-ignore
                                        dispatch(fetchListData())
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
                                style={{ fontSize: 16 }}
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
                    </>
            }
        </>
    );
};

export default NavigatorHeader