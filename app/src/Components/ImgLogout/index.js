import styled from 'styled-components';

import Logout from '../../resources/logout.svg'

const ImgLogout = styled.img.attrs({
    src:Logout,
    alt:props=> props.alt
})`
    width: 30px;
    object-fit: contain;    
`;

export default ImgLogout;