import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchListData = createAsyncThunk('api/listData', async (path: string) => {
    try {
        const response = path ? await axios.get(`https://kodikapi.com/list?token=${process.env.REACT_APP_KODIK_TOKEN}&with_material_data=true&types=${path}`) : await axios.get(`https://kodikapi.com/list?token=${process.env.REACT_APP_KODIK_TOKEN}&with_material_data=true`)
        // console.log(response.data)
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
});

export const fetchListDataContinue = createAsyncThunk('api/fetchListDataContinue', async (path: string) => {
    try {
        const response = await axios.get(path)
        // console.log(response.data)
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
});

export const fetchSearchData = createAsyncThunk('api/searchData', async (searchInput: string) => {
    try {
        console.log(`https://kodikapi.com/search?token=${process.env.REACT_APP_KODIK_TOKEN}&title=${searchInput.replace(/ /g, '%20')}&with_material_data=true`)
        const response = await axios.get(`https://kodikapi.com/search?token=${process.env.REACT_APP_KODIK_TOKEN}&title=${searchInput.replace(/ /g, '%20')}&with_material_data=true`)
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
});

export const fetchSearchDataId = createAsyncThunk('api/searchDataId', async (id: string) => {
    try {
        const response = await axios.get(`https://kodikapi.com/search?token=${process.env.REACT_APP_KODIK_TOKEN}&id=${id}&with_material_data=true&with_episodes=true`)
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
});

export const fetchListCoverData = createAsyncThunk('api/listCoverData', async (path: string) => {
    try {
        const response = path ? await axios.get(`https://kodikapi.com/list?token=${process.env.REACT_APP_KODIK_TOKEN}&with_material_data=true&types=${path}&imdb_rating=8-10`) : await axios.get(`https://kodikapi.com/list?token=${process.env.REACT_APP_KODIK_TOKEN}&with_material_data=true&imdb_rating=8-10`)
        // console.log(response.data)
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
});
