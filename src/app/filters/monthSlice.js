import { createSlice } from '@reduxjs/toolkit';

export const monthSlice = createSlice({
    name: 'month',
    initialState: {
        month: ''
    },
    reducers: {
        setMonth: (state, action) => {
            state.month = action.payload;
        }
    }
});

export const { setMonth } = monthSlice.actions;

export default monthSlice.reducer;