import React from 'react';
import './App.css';
import SearchBar from './components/search-bar';

import Footer from './components/footer.js';

function App() {
    return (
        <div className='mainContainer'>
            <SearchBar />
            <Footer />
        </div>
    )
}

export default App;