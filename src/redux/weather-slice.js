import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        APIkey: '9b766b252617b12c13adf366d8702256',
        weatherData: {}
    },
    reducers: {
        newData(state, action) {
            state.weatherData = fetch(
                `api.openweathermap.org/data/2.5/forecast?q=${action.payload}&appid=${state.APIkey}`
            );
        
            console.log(state.weatherData);
        }
    }
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice;