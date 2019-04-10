import React, { Component, Fragment } from 'react';
import BtnBotcamp from './Components/BtnBotcamp';
import ImgBotCamp from './Components/ImgBotCamp';

class App extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <ImgBotCamp />
                    <BtnBotcamp />
                </Fragment>
            </div>
        );
    }
}

export default App;