import React from 'react'

import Waves from '../../../assets/waves.png'
import ImagemCapa from '../../../assets/ArteSiteDavi.png'

import { ComunidadeText, Container, CriativaText, ImagemCapaInstrumento, LinhaDivisoria, TextoCultural, WaveContainer, Wrapper } from './styles'
import Button from '../../../components/Button'
import WhatsappButton from '../../../components/WhatsappButton'

function GreetingsSection() {
  return (<Container>
    <WhatsappButton />
    <Wrapper>
    <ComunidadeText>Comunidade</ComunidadeText>
    <WaveContainer>
        <img src={Waves} alt='imagem das ondas sonoras' />
        <p>Musical</p>
    </WaveContainer>
    <CriativaText>Criativa</CriativaText>
    <LinhaDivisoria/>
    <TextoCultural>
    Imaginamos uma escola de música que receba estudantes de todas as origens e forneça orientação individual para garantir seu bem-estar e prepará-los para florescer em um cenário musical envolvente.
    </TextoCultural>
    <Button />
    </Wrapper>
    <ImagemCapaInstrumento src={ImagemCapa} alt='imagem do instrumentista'/>
    
  </Container>
  )
}

export default GreetingsSection
