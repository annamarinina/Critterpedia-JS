import { createSlice } from '@reduxjs/toolkit';

export const hemisphereSlice = createSlice({
    name: 'hemisphere',
    initialState: {
        hemisphere: 'Northern'
    },
    reducers: {
        setHemisphere: (state, action) => {
            state.hemisphere = action.payload;
        }
    }
});

export const { setHemisphere } = hemisphereSlice.actions;

export default hemisphereSlice.reducer;