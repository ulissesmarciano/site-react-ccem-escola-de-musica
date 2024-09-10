import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Container, IconContainer, MenuContainer, SidebarButtonContainer } from './styles';
import SideBarButton from '../SidebarButton';
import SideBar from '../Sidebar';

import CCEMIcon from '../../assets/LogoHeader.png';

function Header({id}) {

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <IconContainer>
        <img src={CCEMIcon} alt='Logotipo/Ícone da página'/>
      </IconContainer>
      <MenuContainer>
        <a href={id="#Cursos"} >Cursos</a>
        <Link to={"/gallery/"} >Galeria</Link>
        <a href={id="#Sobre"} >Sobre Nós</a>
      </MenuContainer>
      <SidebarButtonContainer>
        <SideBarButton onClick={showSidebar}/>
        {sidebar && <SideBar active={setSidebar}/>}
      </SidebarButtonContainer>
    </Container>
  )
}

export default Header