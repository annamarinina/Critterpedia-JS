import { configureStore } from '@reduxjs/toolkit';
import fishDataReducer from './fishData/dataSlice';
import bugDataReducer from './bugData/dataSlice';
import seaCreaturesReducer from './seaCreaturesData/dataSlice';
import hemisphereReducer from './filters/hemisphereSlice';
import monthReducer from './filters/monthSlice';
import hourReducer from './filters/hourSlice';

export default configureStore({
    reducer: {
        fishData: fishDataReducer, 
        bugData: bugDataReducer,
        seaCreaturesData: seaCreaturesReducer,
        hemisphere: hemisphereReducer,
        month: monthReducer,
        hour: hourReducer
    },
});