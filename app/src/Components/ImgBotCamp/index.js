// import React from 'react';

 import ImgBot from '../../resources/botcamp.svg'
// import './style.css';

// const ImgBotCamp = () => (
//     <img className='logo-botcamp' src={ImgBot} alt="bot"/>
// );

//export default ImgBotCamp;

import styled from 'styled-components';

const ImgBotCamp = styled.img.attrs({
    src:ImgBot,
    alt:props=> props.alt
})`
    width: 248px;
    object-fit: contain;    
`;

export default ImgBotCamp;