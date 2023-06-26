import React, {useEffect} from 'react';
import './App.css';
import RoutesComp from "./components/route/Routes";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchListCoverData, fetchListData, fetchSearchDataId} from "./store/Actions";
import {changeScreenSize} from "./store/reducers/deviceInfoSlice";
import {listDataClear} from "./store/reducers/listDataSlice";
import {log} from "util";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listDataClear())
        const ganres: string[] = ["/", '/anime', '/anime-serial']

        if (ganres.includes(location.pathname)) {
            // @ts-ignore
            dispatch(fetchListData(location.pathname.substring(1)))
            // @ts-ignore
            dispatch(fetchListCoverData(location.pathname.substring(1)))
            // получаем список
        }

        if (ganres.some(item => location.pathname.split("/")[1].includes(item.substring(1)))) {
            if (location.pathname.split("/")[2]) {
                //@ts-ignore
                dispatch(fetchSearchDataId(location.pathname.split("/")[2]))
                // console.log(location.pathname.split("/")[2])
            }
        }
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
