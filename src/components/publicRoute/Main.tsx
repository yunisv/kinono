import React from 'react';
import {Outlet} from "react-router-dom";
import {Layout} from 'antd';
import "./main.css"
import NavigatorHeader from "../navigator/NavigatorHeader";

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

    return (
        <>
            <Layout className="layout">
                <Header style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <NavigatorHeader />
                </Header>
                <Outlet />
                <Footer style={{ textAlign: 'center', backgroundColor: "#001529", color: "white"}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </>
    );
};

export default Main