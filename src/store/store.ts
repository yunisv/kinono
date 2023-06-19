import {configureStore} from "@reduxjs/toolkit";
import navigatorSlice from "./reducers/navigatorSlice";
import deviceInfoSlice from "./reducers/deviceInfoSlice"
import listDataSlice from "./reducers/listDataSlice";
import searchSlice from "./reducers/searchSlice";
import listCoverDataSlice from "./reducers/listCoverDataSlice";

const store = configureStore({
    reducer: {
        navigatorSlice: navigatorSlice,
        deviceInfoSlice: deviceInfoSlice,
        listDataSlice: listDataSlice,
        searchSlice: searchSlice,
        listCoverDataSlice: listCoverDataSlice
    },
});

export default store