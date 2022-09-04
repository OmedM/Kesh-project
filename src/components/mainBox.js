import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../redux/weather-slice.js';
import axios from 'axios';


function MainSection() {

    const key = useSelector((state) => state.weather.APIkey);
    const dispatch = useDispatch();

    const firstEvent = async () => {
        try {
            const API = `https://api.openweathermap.org/data/2.5/forecast?q=erbil&appid=${key}`;
            const res = await axios.get(API)
                dispatch(weatherActions.NewData(res.data));
        }
        catch (errors) {
            console.log(errors)
        }
    }

    useEffect(() => {
        firstEvent();
    }, []);

    const data = useSelector((state) => state.weather.weatherData);

    return (
        <div className="mainSectionMainContainer">
            <p style={{ fontSize: '40pt' }}>{data.city.name}</p>
        </div>
    )
}

export default MainSection;