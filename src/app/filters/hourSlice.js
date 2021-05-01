import { createSlice } from '@reduxjs/toolkit';

export const hourSlice = createSlice({
    name: 'hour',
    initialState: {
        hour: ''
    },
    reducers: {
        sethour: (state, action) => {
            state.hour = action.payload;
        }
    }
});

export const { sethour } = hourSlice.actions;

export default hourSlice.reducer;