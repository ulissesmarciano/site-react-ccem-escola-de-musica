import React from 'react'
import CCEMIcon from '../../assets/LogoHeader.png';

import { Container, IconContainer, MenuContainer, SidebarButtonContainer } from './styles';
import SideBarButton from '../SidebarButton';

function Header({id}) {
  return (
    <Container>
      <IconContainer>
        <img src={CCEMIcon} alt='Logotipo/Ícone da página'/>
      </IconContainer>
      <MenuContainer>
        <a href={id="#Cursos"} >Cursos</a>
        <a href={id="#Galeria"} >Galeria</a>
        <a href={id="#Sobre"} >Sobre Nós</a>
      </MenuContainer>
      <SidebarButtonContainer>
        <SideBarButton/>
      </SidebarButtonContainer>
    </Container>
  )
}

export default Header