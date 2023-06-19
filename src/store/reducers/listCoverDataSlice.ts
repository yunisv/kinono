import { createSlice } from '@reduxjs/toolkit';
import {fetchListCoverData, fetchListData} from "../Actions";

const initialState = {
    listData: [],
    prev_page: "",
    next_page: "",
    currentPage: "",
    isLoading: false,
    error: false
};

const listCoverDataSlice = createSlice({
    name: 'listCoverDataSlice',
    initialState,
    reducers: {
        listDataFetching(state: any) {
            state.isLoading = true
        },
        listDataFetchingSuccess(state: any, action) {
            state.isLoading = false
            state.listData = action.payload
        },
        listDataFetchingError(state: any) {
            state.isLoading = false
            state.error = true
        },
        listDataClear(state: any) {
            state.listData = []
            state.prev_page = ""
            state.next_page = ""
        },
    },
    extraReducers: {
        [fetchListCoverData.pending.type]: (state) => {
            state.isLoading = true;
            state.listData = []
            state.prev_page = ""
            state.next_page = ""
        },
        [fetchListCoverData.fulfilled.type]: (state, action) => {
            state.error = false
            state.isLoading = false;
            state.listData = action.payload.results.filter((value: any, index: number, self: any) => {
                //@ts-ignore
                return self.findIndex(obj => obj.imdb_id === value.imdb_id) === index;
            });
            /*
            В этом примере мы используем метод filter для прохождения по каждому объекту массива.
            Внутри функции обратного вызова мы используем findIndex для поиска индекса первого объекта с тем же
            значением name. Если индекс текущего объекта совпадает с индексом найденного объекта,
            значит это первое вхождение данного значения name, и мы оставляем этот объект в результирующем массиве.
             */
            // state.listData = action.payload.results;
            state.next_page = action.payload.next_page;
            state.prev_page = action.payload.prev_page;
        },
        [fetchListCoverData.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.listData = [];
            state.next_page = "";
            state.prev_page = "";
        }
    }
});

export const { listDataFetching, listDataFetchingSuccess, listDataFetchingError, listDataClear } = listCoverDataSlice.actions;
export default listCoverDataSlice.reducer