    import React, { Component } from 'react';
    import Home from './Home/Home';
    import Header from './layouts/Header'; 
    import './App.css';

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <Header title="Welcome to Codejobs" /> 
                    <Home />
                </div>
            );
        }
    }

    export default App;