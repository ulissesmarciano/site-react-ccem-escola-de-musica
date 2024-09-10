import React from 'react'
import { ContactSection, Container, MenuSection, SocialSection } from './styles'

import ContactButton from '../ContactButton'
import FacebookIcon from '../../assets/facebookicon.svg'
import InstagramIcon from '../../assets/instagramicon.svg'
import WhattsappIcon from '../../assets/whatsappicon.svg'


function Footer({id}) {
  return (
    <Container id='contato'>
        <ContactSection>
          <ContactButton />
          <p>Rua Antonio Cesarino, <br/>560 Centro - Campinas</p>
        </ContactSection>
          <span/>
        <MenuSection>
          <a href={id="#cursos"} >Cursos</a>
          <a href={id="#galeria"} >Galeria</a>
          <a href={id="#sobre"} >Sobre Nós</a>
        </MenuSection>
        <span/>
        <SocialSection>
          <a href= "https://www.instagram.com/ccemmusic/" target='blank'>
            <img src={InstagramIcon} alt='icone do instagram'/>
          </a>
          <a href='https://www.facebook.com/ccescolademusica' target='blank'>
            <img src={FacebookIcon} alt='icone do facebook'/>
          </a>
          <a href='https://api.whatsapp.com/send?phone=5519993807111&text=Ol%C3%A1.%20Quero%20conhecer%20a%20escola!' target='blank'>
          <img src={WhattsappIcon} alt='icone do whatsapp'/>
          </a>
        </SocialSection>
    </Container>
  )
}

export default Footer