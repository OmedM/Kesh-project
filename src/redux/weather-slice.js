import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        APIkey: '9b766b252617b12c13adf366d8702256',
        layers: true,
        weatherData: {}
    },
    reducers: {
        NewData(state, action) {
            state.weatherData = action.payload;
            console.log(state.weatherData)
        }
    }
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice;