import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Dropdown, Image, MenuProps} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import {changeNavigator} from "../../store/reducers/navigatorSlice";
import {changeScreenSize} from "../../store/reducers/deviceInfoSlice";
import myImage from "../../images/logo.png";

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
                            label: 'Зарубежные',
                            key: '/foreign-movie',
                        },
                        {
                            label: 'Русские',
                            key: '/russian-movie',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Анимированные',
                    children: [
                        {
                            label: 'Аниме',
                            key: '/anime',
                        },
                        {
                            label: 'Зарубежные',
                            key: '/foreign-cartoon',
                        },
                        {
                            label: 'Русские',
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
                    label: 'Аниме',
                    key: '/anime-serial',
                },
                {
                    label: 'Мультфильмы',
                    key: '/cartoon-serial',
                },
                {
                    label: 'Документальные',
                    key: '/documentary-serial',
                },
                {
                    label: 'Зарубежные',
                    key: '/foreign-serial',
                },
                {
                    label: 'Русские',
                    key: '/russian-serial',
                },
                {
                    label: 'Ассорти',
                    key: '/multi-part-film',
                },
            ],
        }
    ];

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navigatorSlice = useSelector((state: any)=> state.navigatorSlice)
    const {isMobile} = useSelector((state: any)=> state.deviceInfoSlice)

    useEffect(() => {
        const handleResize = () => {
            const isMobileSize = window.matchMedia('(max-width: 768px)').matches;
            // setIsMobile(isMobileSize);
            dispatch(changeScreenSize(isMobileSize))
        };

        // Обработчик изменения размера экрана
        window.addEventListener('resize', handleResize);

        // Вызовем обработчик при первоначальной загрузке компонента
        handleResize();

        // Очистка обработчика при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                                onClick={() => {dispatch(changeNavigator("/"))}}
                                src={myImage}
                            />
                        </NavLink>
                        <Dropdown menu={{ items }}>
                            <a style={{display: "flex", alignItems: "center"}} onClick={(e) => e.preventDefault()}>
                                <MenuOutlined style={{fontSize: 20}}/>
                            </a>
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
                                    onClick={() => {dispatch(changeNavigator("/"))}}
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