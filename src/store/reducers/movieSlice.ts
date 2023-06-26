import { createSlice } from '@reduxjs/toolkit';
import {fetchSearchDataId} from "../Actions";

const initialState = {
    movieData: [],
    isLoading: false,
    error: false
};

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        searchDataIdClear(state: any) {
            state.movieData = []
        }
    },
    extraReducers: {
        [fetchSearchDataId.pending.type]: (state) => {
            state.isLoading = true;
            state.movieData = [];
        },
        [fetchSearchDataId.fulfilled.type]: (state, action) => {
            state.error = false
            state.isLoading = false;
            state.movieData = action.payload.results
        },
        [fetchSearchDataId.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.movieData = [];
        },
    }
});

export const { searchDataIdClear } = movieSlice.actions;
export default movieSlice.reducer