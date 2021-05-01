import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSeaCreaturesData = createAsyncThunk('data/fetchSeaCreaturesData', async () => {
    console.log('fetching')
    const response = await axios.get('https://acnhapi.com/v1/sea');
    return response.data;
});

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        seaCreatures: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [fetchSeaCreaturesData.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchSeaCreaturesData.fulfilled]: (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.seaCreatures = state.seaCreatures.concat(action.payload)
        },
        [fetchSeaCreaturesData.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        }
      }
});

export default dataSlice.reducer;