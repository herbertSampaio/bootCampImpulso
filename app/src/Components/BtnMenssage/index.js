import styled from 'styled-components';

const BtnMessage = styled.input.attrs({
    placeholder:'Diz aí...',
    type:"Text"
})`
    width: 100vw;
    height: 50px;
    box-sizing:border-box;
    background-color:#fbfbff
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
    font-size: 20px;
    color: rgba(0, 0, 0, 0.33);
    position:absolute;
    bottom:0;
    border:none;
    padding:14px 11px 14px 16px;
`;

export default BtnMessage;