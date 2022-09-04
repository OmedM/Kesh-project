import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../redux/weather-slice.js';
import searchIcon from '../figures/search-icon.png';
import hideIcon from '../figures/hide-icon.png';
import axios from 'axios';

function SearchBar() {
    const [data, setData] = useState('');

    const [placeholder, setPlaceholder] = useState('Search');

    const dispatch = useDispatch();
    const key = useSelector((state) => state.weather.APIkey);

    const handleEvent = async () => {
        if(data == '')
        {
            setPlaceholder('Please enter a city name here');
        }
        else
        {
            try {
            const API = `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${key}`;

            const res = await axios.get(API)
                dispatch(weatherActions.NewData(res.data));
                setData('');
                setPlaceholder('Search')
            }
            catch (errors) {
                setData()
                setPlaceholder('This city is not on earth');
            }
        }
    }
    return (
        <div className='searchContainer'>
            <input
            className='searchInput'
            type='text'
            placeholder={placeholder}
            value={data || ''}
            onChange={(e) => setData(e.target.value)}
            />
            <div className='searchIconContainer'>
                <div className='searchVLine'></div>
                <button onClick={handleEvent} className='searchMagnifierIcon'><img src={searchIcon} style={{height: "20px"}}/></button>
                <div className='searchVLine'></div>
                <button className='searchHidingIcon'><img src={hideIcon} style={{height: "20px"}}/></button>
            </div>
        </div>
    )
}

export default SearchBar;