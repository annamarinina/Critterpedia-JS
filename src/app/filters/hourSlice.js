import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

export const hourSlice = createSlice({
    name: 'hour',
    initialState: {
        hour: moment().hour()
    },
    reducers: {
        setHour: (state, action) => {
            state.hour = action.payload;
        }
    }
});

export const { setHour } = hourSlice.actions;

export default hourSlice.reducer;