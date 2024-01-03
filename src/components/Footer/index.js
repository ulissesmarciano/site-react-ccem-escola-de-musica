import React from 'react'
import { Container, MenuSection, SocialSection } from './styles'

import ContactButton from '../ContactButton'
import FacebookIcon from '../../assets/facebookicon.svg'
import InstagramIcon from '../../assets/instagramicon.svg'
import WhattsappIcon from '../../assets/whatsappicon.svg'


function Footer({id}) {
  return (
    <Container>
        <div>
          <ContactButton />
          <p>Rua Antonio Cesarino, <br/>567 Centro - Campinas</p>
        </div>
          <span/>
        <MenuSection>
          <a href={id="#Sobre"} target='blank'>Cursos</a>
          <a href={id="#Sobre"} target='blank'>Galeria</a>
          <a href={id="#Sobre"} target='blank'>Sobre Nós</a>
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