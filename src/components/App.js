import React, { Component } from 'react';
import Home from './Home/Home';
import Popup from 'react-popup';
import Header from './layouts/Header'; 
import Footer from './layouts/Footer'; 
import Content from './layouts/Content';
import Person from './Person/Person'
import './App.css';
import './Popup.css';

 class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title="XSS" />
                    <Content>
                        <Person /> 
                    </Content>
                <Footer />
                <Popup />
            </div>
        );
    }
  }

    export default App;