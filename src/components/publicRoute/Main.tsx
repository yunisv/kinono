import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {Layout, Menu, MenuProps} from 'antd';
import "./main.css"
import NavigatorHeader from "../navigator/NavigatorHeader";
import Sider from "antd/es/layout/Sider";
import {
    BulbOutlined, CheckSquareOutlined, ContainerOutlined,
    DesktopOutlined, EyeOutlined,
    FileOutlined, HeartOutlined,
    PieChartOutlined, SearchOutlined,
    TeamOutlined,
    UserOutlined, VideoCameraFilled,
    VideoCameraOutlined
} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {listDataClear} from "../../store/reducers/listDataSlice";

const { Header, Footer } = Layout;

const Main = () => {
    // const dispatch = useDispatch()

    // const {status} = useSelector(state => state.authSlice)

    // let isAuth = checkAuth(dispatch)
    //
    // console.log(isAuth)
    //
    // useEffect(() => {
    //     console.log('isAuth', isAuth)
    //     if (!isAuth) {
    //         return navigate('/welcome')
    //     } else {
    //         dispatch(GetUserDataAxios())
    //         dispatch(GetTodoGroupsAxios())
    //     }
    //
    //
    // }, [status])
    const dispatch = useDispatch()

    const itemsForMobile: MenuProps['items'] = [
        {
            label: 'Аккаунт',
            key: 'Аккаунт',
            icon: <UserOutlined />,
            children: [
                {
                    label: 'Любимое',
                    key: 'Любимое',
                    icon: <HeartOutlined />,
                },
                {
                    label: 'Смотрю',
                    key: 'Смотрю',
                    icon: <EyeOutlined />,
                },
                {
                    label: 'Запланировано',
                    key: 'Запланировано',
                    icon: <ContainerOutlined />,
                },
                {
                    label: 'Просмотрено',
                    key: 'Просмотрено',
                    icon: <CheckSquareOutlined />,
                },
            ],
        },
        {
            label: "Поиск",
            key: 'Поиск',
            icon: <SearchOutlined />,
        },
        {
            label: 'Фильмы',
            key: 'Фильмы',
            icon: <VideoCameraOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Фильмы',
                    children: [
                        {
                            label: (
                                <NavLink to={"/foreign-movie"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                                    Зарубежные
                                </NavLink>
                            ),
                            key: '/foreign-movie',
                        },
                        {
                            label: (
                                <NavLink to={"/russian-movie"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
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
                                <NavLink to={"/anime"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                                    Аниме
                                </NavLink>
                            ),
                            key: '/anime',
                        },
                        {
                            label: (
                                <NavLink to={"/foreign-cartoon"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                                    Зарубежные
                                </NavLink>
                            ),
                            key: '/foreign-cartoon',
                        },
                        {
                            label: (
                                <NavLink to={"/russian-cartoon"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
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
            icon: <VideoCameraFilled />,
            children: [
                {
                    label: (
                        <NavLink to={"/anime-serial"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                            Аниме
                        </NavLink>
                    ),
                    key: '/anime-serial',
                },
                {
                    label: (
                        <NavLink to={"/cartoon-serial"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                            Мультфильмы
                        </NavLink>
                    ),
                    key: '/cartoon-serial',
                },
                {
                    label: (
                        <NavLink to={"/documentary-serial"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                            Документальные
                        </NavLink>
                    ),
                    key: '/documentary-serial',
                },
                {
                    label: (
                        <NavLink to={"/foreign-serial"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                            Зарубежные
                        </NavLink>
                    ),
                    key: '/foreign-serial',
                },
                {
                    label: (
                        <NavLink to={"/russian-serial"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                            Русские
                        </NavLink>
                    ),
                    key: '/russian-serial',
                },
                {
                    label: (
                        <NavLink to={"/multi-part-film"} onClick={() => {dispatch(listDataClear()); setCollapsed(!collapsed)}}>
                            Ассорти
                        </NavLink>
                    ),
                    key: '/multi-part-film',
                },
            ],
        },
        {
            label: "Theme",
            key: 'Theme',
            icon: <BulbOutlined />,
        }
    ];
    const itemsForDesktop: MenuProps['items'] = [
        {
            label: 'Аккаунт',
            key: 'Аккаунт',
            icon: <UserOutlined />,
            children: [
                {
                    label: 'Любимое',
                    key: 'Любимое',
                    icon: <HeartOutlined />,
                },
                {
                    label: 'Смотрю',
                    key: 'Смотрю',
                    icon: <EyeOutlined />,
                },
                {
                    label: 'Запланировано',
                    key: 'Запланировано',
                    icon: <ContainerOutlined />,
                },
                {
                    label: 'Просмотрено',
                    key: 'Просмотрено',
                    icon: <CheckSquareOutlined />,
                },
            ],
        },
        {
            label: "Поиск",
            key: 'Поиск',
            icon: <SearchOutlined />,
        },
        {
            label: "Theme",
            key: 'Theme',
            icon: <BulbOutlined />,
        }
    ];

    // @ts-ignore
    const {isMobile} = useSelector(state => state.deviceInfoSlice)
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout>
            {
                isMobile ?
                    <Sider style={{position: "absolute", zIndex: 100, height: "100%"}} zeroWidthTriggerStyle={{display: "none"}}  collapsedWidth={isMobile ? 0 : 50} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={itemsForMobile} />
                    </Sider>
                    :
                    <Sider zeroWidthTriggerStyle={{display: "none"}}  collapsedWidth={isMobile ? 0 : 50} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={itemsForDesktop} />
                    </Sider>
            }
            <Layout className="layout">
                <Header style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <NavigatorHeader collapsed={collapsed} setCollapse={setCollapsed}/>
                </Header>
                <Outlet />
                <Footer style={{ textAlign: 'center', backgroundColor: "#001529", color: "white"}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Main