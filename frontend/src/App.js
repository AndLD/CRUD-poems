import React from 'react';
import './App.css';
import PoemsList from './components/PoemsList';

function App() {
    return (
        <div className="App pb-5">
            <h1 className="text-center mt-5 mb-4">Стихи Шекспира</h1>
            <PoemsList/>
        </div>
    );
}

export default App;
