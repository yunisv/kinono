import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../../urls/urls"
import PrivateRoute from "../privateRoute/PrivateRoute";
import Main from "../publicRoute/Main";
import Main2 from "../main/main2";

const RoutesComp = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Main/>}>
                <Route path={routes.home} element={<Main2 titlePage={""}/>} />
                <Route path={routes.anime} element={<Main2 titlePage={"Аниме (фильмы)"}/>} />
                <Route path={routes.anime_serial} element={<Main2 titlePage={"Аниме (сериалы)"}/>} />
            </Route>


            {/*<Route path={routes.home} element={<PrivateRoute />}>*/}
                {/*<Route path={routes.home} element={<Home />} />*/}
                {/*<Route path={routes.group} element={<Group />} />*/}
            {/*</Route>*/}


            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
};

export default RoutesComp;