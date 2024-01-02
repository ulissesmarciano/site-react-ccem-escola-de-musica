import React from 'react'
import Header from '../../components/Header'
import GreetingsSection from './greetings'
import { Container } from './styles'

function HomeScreen() {
  return (
    <Container>
        <Header/>
        <GreetingsSection />
    </Container>
  )
}

export default HomeScreen

