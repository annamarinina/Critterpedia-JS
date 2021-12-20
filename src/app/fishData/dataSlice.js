import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFishData = createAsyncThunk('data/fetchFishData', async () => {
    console.log('fetching')
    const response = await axios.get('https://acnhapi.com/v1/fish');
    const result = Object.values(response.data);
    return result;
});

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        fish: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [fetchFishData.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchFishData.fulfilled]: (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.fish = state.fish.concat(action.payload)
        },
        [fetchFishData.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        }
      }
});

export default dataSlice.reducer;