import {configureStore} from "@reduxjs/toolkit";
import navigatorSlice from "./reducers/navigatorSlice";
import deviceInfoSlice from "./reducers/deviceInfoSlice"
import listDataSlice from "./reducers/listDataSlice";

const store = configureStore({
    reducer: {
        navigatorSlice: navigatorSlice,
        deviceInfoSlice: deviceInfoSlice,
        listDataSlice: listDataSlice
    },
});

export default store