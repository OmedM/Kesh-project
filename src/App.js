import React from 'react';
import './App.css';
import SearchBar from './components/search-bar.js';
import MainSection from './components/mainBox.js';
import Footer from './components/footer.js';

function App() {
    return (
        <div className='mainContainer'>

            <div style={{position: 'fixed', zIndex: '-99', width: '100%', height: '100%'}}>
                <iframe
                    src='https://www.youtube.com/embed/5MXTcO1veRQ?controls=0&autoplay=1&mute=1&playsinline=1&playlist=5MXTcO1veRQ&loop=1'
                    frameborder="0"
                    height="100%"
                    width="100%"
                >
                </iframe>
            </div>

            <SearchBar />
            <MainSection />
            <Footer />
        </div>
    )
}

export default App;