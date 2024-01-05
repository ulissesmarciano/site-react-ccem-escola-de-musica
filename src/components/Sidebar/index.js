import React from 'react'
import { Container, CloseButtonContainer, CloseButton, MenuContainer } from './styles'
import { FiX } from 'react-icons/fi'
import ContactButton from '../ContactButton'


function SideBar({active}) {
    const closeSidebar = () => {
        active(false)
    }
  return (
    <Container sidebar={active}>
        <CloseButtonContainer>
            <CloseButton onClick={closeSidebar}>
                <FiX />
            </CloseButton>
        </CloseButtonContainer>
            <MenuContainer>
                <a href='#Cursos' onClick={closeSidebar}>Cursos</a>
                <a href='#Galeria' onClick={closeSidebar}>Galeria</a>
                <a href='#Sobre' onClick={closeSidebar}>Sobre Nós</a>
                <ContactButton/>
            </MenuContainer>
    </Container>
  )
}

export default SideBar