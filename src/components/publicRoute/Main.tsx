import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {Button, Divider, Input, Layout, List, Menu, MenuProps, Modal, Skeleton} from 'antd';
import "./main.css"
import NavigatorHeader from "../navigator/NavigatorHeader";
import Sider from "antd/es/layout/Sider";
import {
    BulbOutlined, CheckSquareOutlined, ContainerOutlined,
    DesktopOutlined, EyeOutlined,
    FileOutlined, HeartOutlined, LoadingOutlined,
    PieChartOutlined, SearchOutlined,
    TeamOutlined,
    UserOutlined, VideoCameraFilled,
    VideoCameraOutlined
} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {listDataClear} from "../../store/reducers/listDataSlice";
import {changeSlicerNumber, modalSearchChange} from "../../store/reducers/searchSlice";
import {fetchSearchData} from "../../store/Actions";
import SearchCard from "../cards/SearchCard";

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
            icon: <UserOutlined style={{color: "rgb(248,202,0)"}}/>,
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
            label: <div onClick={() => {dispatch(modalSearchChange())}}>Поиск</div>,
            key: 'Поиск',
            icon: <SearchOutlined style={{color: "rgb(248,202,0)"}} onClick={() => {dispatch(modalSearchChange())}}/>,
        },
        {
            label: 'Фильмы',
            key: 'Фильмы',
            icon: <VideoCameraOutlined style={{color: "rgb(248,202,0)"}}/>,
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
            icon: <VideoCameraFilled style={{color: "rgb(248,202,0)"}}/>,
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
            icon: <BulbOutlined style={{color: "rgb(248,202,0)"}}/>,
        }
    ];
    const itemsForDesktop: MenuProps['items'] = [
        {
            label: 'Аккаунт',
            key: 'Аккаунт',
            icon: <UserOutlined style={{color: "rgb(248,202,0)", fontSize: 20}}/>,
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
            label: <div onClick={() => {dispatch(modalSearchChange())}}>Поиск</div>,
            key: 'Поиск',
            icon: <SearchOutlined onClick={() => {dispatch(modalSearchChange())}} style={{color: "rgb(248,202,0)", fontSize: 20}}/>,
        },
        {
            label: "Theme",
            key: 'Theme',
            icon: <BulbOutlined style={{color: "rgb(248,202,0)", fontSize: 20}}/>,
        }
    ];

    // @ts-ignore
    const {isMobile} = useSelector(state => state.deviceInfoSlice)
    // @ts-ignore
    const {modalOpen, isLoading, searchData, sliceNumber} = useSelector(state => state.searchSlice)
    const [collapsed, setCollapsed] = useState(true);
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const handleCancel = () => {
        dispatch(modalSearchChange());
    };

    const handleSearch = (value: string) => {
        // Отправляем запрос через 500 мс после последнего ввода
        //@ts-ignore
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            //@ts-ignore
            dispatch(fetchSearchData(value))
        }, 500);
    };

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
                <Modal className={"scrollableDiv"} bodyStyle={{height: 400, overflow: 'auto', backgroundColor: "#001529"}} maskClosable={true} closable={true} open={modalOpen} onCancel={handleCancel} footer={null}>
                    <Input style={{backgroundColor: "#001529", borderColor: "rgb(248,202,0)"}} size="large" placeholder="Type here ..." suffix={
                        isLoading ?
                            <LoadingOutlined />
                            :
                            <SearchOutlined style={{color: "rgb(248,202,0)"}} onClick={(e) => {
                                //@ts-ignore
                                handleSearch(e.currentTarget.parentNode.parentNode.querySelector('input').value)}}/>
                    }
                           onChange={(e) => {handleSearch(e.target.value)}}/>
                    <Divider style={{backgroundColor: "rgba(255,255,255, 0.65)"}}/>
                    <List
                        dataSource={searchData.slice(0, sliceNumber)}
                        renderItem={(item, index) => {
                            return (
                                <List.Item key={index}>
                                    <SearchCard movieData={item}/>
                                </List.Item>
                            )
                        }}
                    />
                    {
                        sliceNumber !== 50 && searchData.length !== 0 &&
                            <Button style={{backgroundColor: "rgb(248,202,0)", color: "white"}} onClick={() => {
                                dispatch(changeSlicerNumber(sliceNumber + 10))
                            }}>Load more</Button>
                    }
                </Modal>
                <Outlet />
                <Footer style={{ textAlign: 'center', backgroundColor: "#001529", color: "white"}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Main