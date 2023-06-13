import {configureStore} from "@reduxjs/toolkit";
import navigatorSlice from "./reducers/navigatorSlice";
import deviceInfoSlice from "./reducers/deviceInfoSlice"

const store = configureStore({
    reducer: {
        navigatorSlice: navigatorSlice,
        deviceInfoSlice: deviceInfoSlice
    },
});

export default store