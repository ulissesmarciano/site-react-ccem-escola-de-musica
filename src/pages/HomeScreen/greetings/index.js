import React from 'react'

import Waves from '../../../assets/waves.png'

import { ComunidadeText, Container, CriativaText, LinhaDivisoria, TextoCultural, WaveContainer } from './styles'

function GreetingsSection() {
  return (<Container>
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
  </Container>
  )
}

export default GreetingsSection
