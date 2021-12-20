import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

export const monthSlice = createSlice({
    name: 'month',
    initialState: {
        month: moment().month() + 1
    },
    reducers: {
        setMonth: (state, action) => {
            state.month = action.payload;
        }
    }
});

export const { setMonth } = monthSlice.actions;

export default monthSlice.reducer;