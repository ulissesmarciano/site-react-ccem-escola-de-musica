import React from 'react'
import CCEMIcon from '../../assets/LogoHeader.png';

import { Container, IconContainer, SidebarButtonContainer } from './styles';
import SideBarButton from '../SidebarButton';

function Header() {
  return (
    <Container>
      <IconContainer>
        <img src={CCEMIcon} alt='Logotipo/Ícone da página'/>
      </IconContainer>
      <SidebarButtonContainer>
        <SideBarButton/>
      </SidebarButtonContainer>
    </Container>
  )
}

export default Header