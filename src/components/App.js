import React, { Component } from 'react';
import Home from './Home/Home';
import Header from './layouts/Header'; 
import Footer from './layouts/Footer'; 
import './App.css';

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <Header title="Welcome to Codejobs" /> 
                    <Home />
                    <Footer />
                </div>
            );
        }
    }

    export default App;