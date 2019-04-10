// import React from 'react';

 import ImgBot from '../../resources/botcamp.svg'
// import './style.css';

// const ImgBotCamp = () => (
//     <img className='logo-botcamp' src={ImgBot} alt="bot"/>
// );

//export default ImgBotCamp;

import styled from 'styled-components';

const ImgBotCamp = styled.img.attrs({
    src:`${ImgBot}`
})`
    width: 248px;
    object-fit: contain;
    margin-top:120px;
    margin-left:63px;
    margin-rigth:64px;
    alt:${props=> props.alt};
`;

export default ImgBotCamp;