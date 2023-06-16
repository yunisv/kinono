import { createSlice } from '@reduxjs/toolkit';
import {fetchListData} from "../Actions";

const initialState = {
    listData: [],
    prev_page: "",
    next_page: "",
    isLoading: false,
    error: false
};

const listDataSlice = createSlice({
    name: 'listDataSlice',
    initialState,
    reducers: {
        listDataFetching(state: any) {
            state.isLoading = true
        },
        listDataFetchingSuccess(state: any, action) {
            state.isLoading = false
            state.directoryTree = action.payload
        },
        listDataFetchingError(state: any) {
            state.isLoading = false
            state.error = true
        }
    },
    extraReducers: {
        [fetchListData.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchListData.fulfilled.type]: (state, action) => {
            state.error = false
            state.isLoading = false;
            state.listData = action.payload.results;
            state.next_page = action.payload.next_page;
            state.prev_page = action.payload.prev_page;
        },
        [fetchListData.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.listData = [];
            state.next_page = "";
            state.prev_page = "";
        }
    }
});

export const { listDataFetching, listDataFetchingSuccess, listDataFetchingError } = listDataSlice.actions;
export default listDataSlice.reducer