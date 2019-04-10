import React, { Component } from 'react';
import BtnBotcamp from './Components/BtnBotcamp';
import ImgBotCamp from './Components/ImgBotCamp';
import LoginWrapper from './Components/LoginWrapper';

import './styles/reset.css';

class App extends Component {
    render() {
        return (
            <LoginWrapper>
                <ImgBotCamp />
                <BtnBotcamp />                
            </LoginWrapper>
        );
    }
}

export default App;