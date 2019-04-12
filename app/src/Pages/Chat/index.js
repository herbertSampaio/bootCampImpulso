import React from 'react';

import ChatWrapper from '../../Components/ChatWrapper';
import ImgBotCamp from '../../Components/ImgBotCamp';
import ImgLogout from '../../Components/ImgLogout';

const Chat = () => (
    <ChatWrapper>
        <ImgBotCamp alt="img botcamp" />
        <ImgLogout alt="img logout"/>
    </ChatWrapper>
);

export default Chat;