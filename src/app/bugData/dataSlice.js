import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBugData = createAsyncThunk('data/fetchBugData', async () => {
    console.log('fetching');
    const response = await axios.get('https://acnhapi.com/v1/bugs');
    const result = Object.values(response.data);
    return result;
})

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        bugs: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [fetchBugData.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchBugData.fulfilled]: (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.bugs = state.bugs.concat(action.payload)
        },
        [fetchBugData.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        }
      }
});

export default dataSlice.reducer;