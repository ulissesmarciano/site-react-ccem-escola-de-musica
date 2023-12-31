import React from 'react'
import { Container } from './styles'

import Header from '../../components/Header'
import GreetingsSection from './sections/greetings'
import CoursesSection from './sections/courses'
import Footer from '../../components/Footer'

function HomeScreen() {
  return (
    <Container>
        <Header/>
        <GreetingsSection />
        <CoursesSection />
        <Footer />
    </Container>
  )
}

export default HomeScreen

