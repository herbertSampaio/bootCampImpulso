import React, { Component } from 'react';

import Login from './Pages/Login';
import Chat from './Pages/Chat';

import './styles/reset.css';
import Router from './Router';

class App extends Component {
    render() {
        return (
            <Router />
        );
    }
}

export default App;