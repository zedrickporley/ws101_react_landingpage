import React  from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';


function App() {

    return (
        <div>
            <Header />
        <Home />
            <About />
            <Services />
            <Contacts />
        </div>
    );
}

export default App;

