import React from 'react'

import { Link } from 'react-router-dom'

import { FiChevronLeft } from 'react-icons/fi'

import { Container, HeadSection, TitleSection } from './styles'

function GalleryScreen() {
  return (
    <Container>
        <HeadSection>
            <Link to='/'>
                <FiChevronLeft/>
            </Link>
        </HeadSection>
        <TitleSection>
            <h3>Galeria de Eventos</h3>
        </TitleSection>
    </Container>
  )
}

export default GalleryScreen