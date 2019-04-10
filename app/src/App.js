import React, { Component, Fragment } from 'react';
import BtnBotcamp from './Components/BtnBotcamp';
import ImgBotCamp from './Components/ImgBotCamp';

import './styles/reset.css';

class App extends Component {
    render() {
        return (
                <Fragment>
                    <ImgBotCamp />
                    <BtnBotcamp />
                </Fragment>
        );
    }
}

export default App;