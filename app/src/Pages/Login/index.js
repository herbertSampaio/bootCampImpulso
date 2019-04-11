import React from 'react';

import LoginWrapper from '../../Components/LoginWrapper';
import ImgBotCamp from '../../Components/ImgBotCamp';
import BtnBotCamp from '../../Components/BtnBotcamp';

const Login = () => (
    <LoginWrapper>
        <ImgBotCamp alt="bot" />
        <BtnBotCamp content="Entrar" />
    </LoginWrapper>
);

export default Login;