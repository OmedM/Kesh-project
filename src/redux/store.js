import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather-slice.js';

const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer
    }
});

export default store;