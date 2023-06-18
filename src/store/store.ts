import {configureStore} from "@reduxjs/toolkit";
import navigatorSlice from "./reducers/navigatorSlice";
import deviceInfoSlice from "./reducers/deviceInfoSlice"
import listDataSlice from "./reducers/listDataSlice";
import searchSlice from "./reducers/searchSlice";

const store = configureStore({
    reducer: {
        navigatorSlice: navigatorSlice,
        deviceInfoSlice: deviceInfoSlice,
        listDataSlice: listDataSlice,
        searchSlice: searchSlice
    },
});

export default store