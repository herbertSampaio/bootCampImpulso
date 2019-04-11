import styled from 'styled-components';

import background from '../../resources/background.svg';

const LoginWrapper = styled.main`
    background-image: url(${background});
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding-top:120px;
    padding-bottom:80px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export default LoginWrapper;