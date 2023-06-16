import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchListData = createAsyncThunk('api/listData', async (path: string) => {
    try {
        const response = path ? await axios.get(`https://kodikapi.com/list?token=${process.env.REACT_APP_KODIK_TOKEN}&with_material_data=true&types=${path}`) : await axios.get(`https://kodikapi.com/list?token=${process.env.REACT_APP_KODIK_TOKEN}&with_material_data=true`)
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
});
