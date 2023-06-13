import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMobile: false
};

const deviceInfoSlice = createSlice({
    name: 'deviceInfoSlice',
    initialState: initialState,
    reducers: {
        changeScreenSize: (state: any, action) => {
            state.isMobile = action.payload
        },
    }
});

export const { changeScreenSize } = deviceInfoSlice.actions;
export default deviceInfoSlice.reducer