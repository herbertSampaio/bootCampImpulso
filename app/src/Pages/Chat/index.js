import React from 'react';

import ChatWrapper from '../../Components/ChatWrapper';
import ImgBotCamp from '../../Components/ImgBotCamp';
import ImgLogout from '../../Components/ImgLogout';
import HeaderWrapper from '../../Components/HeaderWrapper';

const Chat = () => (
    <HeaderWrapper>
        <ImgBotCamp alt="img botcamp" small/>
        <ImgLogout alt="img logout"/>
    </HeaderWrapper>
);

export default Chat;