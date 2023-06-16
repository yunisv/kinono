import React, {useEffect} from 'react';
import './App.css';
import RoutesComp from "./components/route/Routes";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchListData} from "./store/Actions";
import {changeScreenSize} from "./store/reducers/deviceInfoSlice";
import {listDataClear} from "./store/reducers/listDataSlice";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listDataClear())
        // @ts-ignore
        dispatch(fetchListData(location.pathname.substring(1)))
        // получаем список

        // if (location.pathname === '/anime') {
        //     // Выполнение определенной функции
        //     myFunction();
        // }
    }, [location]);

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
      <RoutesComp />
    </>
  );
}

export default App;
