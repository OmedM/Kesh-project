import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import SearchBar from './components/search-bar.js';
import MainSection from './components/mainBox.js';
import Footer from './components/footer.js';

function App() {

    const data = useSelector((state) => state.weather.weatherData);

    return (
        <div className='mainContainer'>

            <div className='videoContainer'>
                <iframe
                    src='https://www.youtube.com/embed/5MXTcO1veRQ?controls=0&autoplay=1&mute=1&playsinline=1&playlist=5MXTcO1veRQ&loop=1'
                    frameborder="0"
                    height="100%"
                    width="100%"
                >
                </iframe>
            </div>

            <SearchBar />
            {data? <MainSection /> : <></>}
            <Footer />
        </div>
    )
}

export default App;