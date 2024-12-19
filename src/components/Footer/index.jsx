import React from 'react';
import { ContactSection, Container, MenuSection, SocialSection } from './styles';
import LinkItem from '../LinkItem'

import ContactButton from '../ContactButton';
import FacebookIcon from '../../assets/facebookicon.svg';
import InstagramIcon from '../../assets/instagramicon.svg';
import WhattsappIcon from '../../assets/whatsappicon.svg';


function Footer({ id }) {
  return (
    <Container id='contato'>
      <ContactSection>
        <ContactButton />
        <p>Rua Antonio Cesarino, <br />560 Centro - Campinas</p>
      </ContactSection>
      <span />
      <MenuSection>
        <LinkItem
          href={id = "#cursos"}
          name="cursos"
          variant="footerLink"
        />
        <LinkItem
          href={id = "#galeria"}
          name="galeria"
          variant="footerLink"
        />
        <LinkItem
          href={id = "#sobre"}
          name="sobre"
          variant="footerLink"
        />
      </MenuSection>
      <span />
      <SocialSection>
        <LinkItem 
          href="https://www.instagram.com/ccemmusic/"
          src={InstagramIcon}
          target="blank"
          variant="footerSocialLink"
        />
        <LinkItem 
          href="https://www.facebook.com/ccescolademusica"
          src={FacebookIcon}
          target="blank"
          variant="footerSocialLink"
        />
        <LinkItem 
          href="https://api.whatsapp.com/send?phone=5519993807111&text=Ol%C3%A1.%20Quero%20conhecer%20a%20escola!"
          src={WhattsappIcon}
          target="blank"
          variant="footerSocialLink"
        />
      </SocialSection>
    </Container>
  )
}

export default Footer