import React from 'react';

import ChatWrapper from '../../Components/ChatWrapper';
import ImgBotCamp from '../../Components/ImgBotCamp';
import ImgLogout from '../../Components/ImgLogout';
import HeaderWrapper from '../../Components/HeaderWrapper';
import BtnMessage from '../../Components/BtnMenssage';

const Chat = () => (
    <>
        <HeaderWrapper>
            <ImgBotCamp alt="img botcamp" small />
            <ImgLogout alt="img logout" />
        </HeaderWrapper>
        <BtnMessage />
    </>
);

export default Chat;