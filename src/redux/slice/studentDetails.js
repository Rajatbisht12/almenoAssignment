import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import courseModel from '../model/courseModel';

export const fetchDetail = createAsyncThunk('fetchDetail', async () =>{
    return courseModel
})

const studenetSlice =  createSlice({
    name: 'student',
    initialState: {
        course: [],
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchDetail.fulfilled, (state, action) => {
            state.course = action.payload;
        });
    },
})

export default studenetSlice.reducer;