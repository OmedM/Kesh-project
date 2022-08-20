import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { weatherActions } from '../redux/weather-slice.js';
import searchIcon from '../figures/search-icon.png';
import hideIcon from '../figures/hide-icon.png';

function SearchBar() {
    const [data, setData] = useState("");

    const dispatch = useDispatch();

    const handleEvent = (event) => {
        event.preventDefault();
        if(data == '')
        {
            alert('Please enter your city name');
        }
        else
        {
            dispatch(weatherActions.newData(data));
            setData('');
        }
    }
    return (
        <div>
            <input
            type='text'
            placeholder='Search'
            value={data || ''}
            onChange={(e) => setData(e.target.value)}
            />
            <button onClick={handleEvent}><img src={searchIcon} style={{height: "20px"}}/></button>
            <button><img src={hideIcon} style={{height: "20px"}}/></button>
        </div>
    )
}

export default SearchBar;