import { configureStore } from '@reduxjs/toolkit';
import fishDataReducer from './fishData/dataSlice';
import bugDataReducer from './bugData/dataSlice';
import seaCreaturesReducer from './seaCreaturesData/dataSlice';

export default configureStore({
    reducer: {
        fishData: fishDataReducer, 
        bugData: bugDataReducer,
        seaCreaturesData: seaCreaturesReducer
    },
});