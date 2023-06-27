import { createSlice } from '@reduxjs/toolkit';
import {fetchSearchDataId} from "../Actions";

const initialState = {
    movieData: [],
    seasonOptions: [],
    isLoading: false,
    error: false
};

function transformSeasonToOptions(data: any) {
    const seasons = data;
    const result = [];

    for (const seasonNumber in seasons) {
        if (seasons.hasOwnProperty(seasonNumber)) {
            const season = seasons[seasonNumber];
            const seasonLabel = `Season ${seasonNumber}`;
            const seasonValue = season.link;
            const episodes = season.episodes;
            const seasonChildren = [];

            for (const episodeNumber in episodes) {
                if (episodes.hasOwnProperty(episodeNumber)) {
                    const episode = episodes[episodeNumber];
                    const episodeLabel = `Episode ${episodeNumber}`;
                    const episodeValue = episode;

                    seasonChildren.push({
                        value: episodeValue,
                        label: episodeLabel,
                    });
                }
            }

            result.push({
                value: seasonValue,
                label: seasonLabel,
                children: seasonChildren,
            });
        }
    }

    return result;
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        searchDataIdClear(state: any) {
            state.movieData = []
            state.seasonOptions = []
        }
    },
    extraReducers: {
        [fetchSearchDataId.pending.type]: (state) => {
            state.isLoading = true;
            state.movieData = [];
            state.seasonOptions = [];
        },
        [fetchSearchDataId.fulfilled.type]: (state, action) => {
            state.error = false
            state.isLoading = false;
            state.movieData = action.payload.results;
            // @ts-ignore
            state.seasonOptions = action.payload.results[0].seasons ? transformSeasonToOptions(action.payload.results[0].seasons) : [{
                value: action.payload.results[0].link,
                label: 'Полнометражный',
                children: [{
                    value: action.payload.results[0].link,
                    label: '1',
                }]
            }]
        },
        [fetchSearchDataId.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.movieData = [];
            state.seasonOptions = [];
        },
    }
});

export const { searchDataIdClear } = movieSlice.actions;
export default movieSlice.reducer