import React from 'react'

import ImagemCapa from '../../../../assets/ArteSiteDavi.png'
import LogoGreetings from '../../../../assets/LogoGreetings.png'

import {Container, ContainerImagemCapaInstrumento, GreetingsImageCCEMContainer, ImagemCapaInstrumento, LinhaDivisoria, TextoCultural, Wrapper } from './styles'
import Button from '../../../../components/Button'
import WhatsappButton from '../../../../components/WhatsappButton'

const LinkWhatsapp = 'https://api.whatsapp.com/send?phone=5519993807111&text=Ol%C3%A1.%20Quero%20conhecer%20a%20escola!'

function GreetingsSection() {
  return (<Container>
    <WhatsappButton />
    <Wrapper>
      <GreetingsImageCCEMContainer>
        <img src={LogoGreetings} alt='Centro Cultural Escola de Música Imagem'/>
      </GreetingsImageCCEMContainer>
        <LinhaDivisoria/> 
        <TextoCultural id='Sobre'>
        Somos uma escola de música que acolhe alunos de diversas origens, proporcionando orientação personalizada para garantir seu bem-estar e prepará-los para prosperar em um estimulante cenário musical.
        </TextoCultural>
        <Button href={LinkWhatsapp} target='blank' />
    </Wrapper>
    <ContainerImagemCapaInstrumento>
      <ImagemCapaInstrumento src={ImagemCapa} alt='imagem do instrumentista'/>
    </ContainerImagemCapaInstrumento>
    
  </Container>
  )
}

export default GreetingsSection
