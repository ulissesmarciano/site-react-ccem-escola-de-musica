import React from 'react'

import { Circulo, Container } from './styles'

function Button() {
  return (
    <Container>
        <Circulo />
        <p><strong>Entre</strong> em contato conosco <span>&#10230;</span></p>
    </Container>
  )
}

export default Button