import { createSlice } from '@reduxjs/toolkit';

const navigatorSlice = createSlice({
    name: 'navigatorSlice',
    initialState: [""],
    reducers: {
        changeNavigator: (state: any, action) => {
            return action.payload
        },
    }
});

export const { changeNavigator } = navigatorSlice.actions;
export default navigatorSlice.reducer