import { createSlice } from '@reduxjs/toolkit';
import {fetchSearchData, fetchSearchDataId} from "../Actions";

const initialState = {
    searchInput: "",
    searchData: [],
    modalOpen: false,
    sliceNumber: 10,
    isLoading: false,
    error: false
};

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        modalSearchChange(state: any) {
            state.modalOpen = !state.modalOpen
        },
        searchDataClear(state: any) {
            state.listData = []
            state.searchInput = ""
            state.sliceNumber = 10
        },
        changeSlicerNumber(state: any, action) {
            state.sliceNumber = action.payload
        }
    },
    extraReducers: {
        [fetchSearchData.pending.type]: (state) => {
            state.isLoading = true;
            state.searchData = [];
            state.sliceNumber = 10
        },
        [fetchSearchData.fulfilled.type]: (state, action) => {
            state.error = false
            state.isLoading = false;
            state.searchData = action.payload.results.filter((value: any, index: number, self: any) => {
                //@ts-ignore
                return self.findIndex(obj => obj.title === value.title) === index;
            });
            /*
            В этом примере мы используем метод filter для прохождения по каждому объекту массива.
            Внутри функции обратного вызова мы используем findIndex для поиска индекса первого объекта с тем же
            значением name. Если индекс текущего объекта совпадает с индексом найденного объекта,
            значит это первое вхождение данного значения name, и мы оставляем этот объект в результирующем массиве.
             */
            // state.listData = action.payload.results;
        },
        [fetchSearchData.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.searchData = [];
        }
    }
});

export const { searchDataClear, modalSearchChange, changeSlicerNumber } = searchSlice.actions;
export default searchSlice.reducer