import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        APIkey: '9b766b252617b12c13adf366d8702256',
        weatherData: []
    },
    reducers: {
        newData(state, action) {
            const API = `https://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&appid=${state.APIkey}`;

            axios.get(API).then((response) => { console.log(response.data) });
        
            
        }
    }
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice;