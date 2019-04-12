import Logout from '../../resources/logout.svg'

import styled from 'styled-components';

const ImgLogout = styled.img.attrs({
    src:Logout,
    alt:props=> props.alt
})`
    width: 30px;
    object-fit: contain;    
`;

export default ImgLogout;