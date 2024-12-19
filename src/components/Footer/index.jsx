import React from 'react';
import { ContactSection, Container, MenuSection, SocialSection } from './styles';
import LinkItem from '../LinkItem'
import ContactButton from '../ContactButton';
import { contactLinks } from '../../constants/contactLinks';

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
          href={contactLinks.instagramHref}
          src={InstagramIcon}
          target="blank"
          variant="footerSocialLink"
        />
        <LinkItem 
          href={contactLinks.facebookHref}
          src={FacebookIcon}
          target="blank"
          variant="footerSocialLink"
        />
        <LinkItem 
          href={contactLinks.whatsappHref}
          src={WhattsappIcon}
          target="blank"
          variant="footerSocialLink"
        />
      </SocialSection>
    </Container>
  )
}

export default Footer