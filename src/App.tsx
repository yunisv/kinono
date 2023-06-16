import React, {useEffect} from 'react';
import './App.css';
import RoutesComp from "./components/route/Routes";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchListData} from "./store/Actions";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchListData(location.pathname.substring(1)))
        // получаем список

        // if (location.pathname === '/anime') {
        //     // Выполнение определенной функции
        //     myFunction();
        // }
    }, [location]);
  return (
    <>
      <RoutesComp />
    </>
  );
}

export default App;
