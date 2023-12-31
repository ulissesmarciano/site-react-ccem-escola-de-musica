import React from 'react'

import { Container, DescriptionImageContainer } from './styles'


function CourseLeft({title, description, src, alt}) {
  return (
    <Container>
            <h3>{title}</h3>
        <DescriptionImageContainer>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <img src={src} alt={alt}/>
            </div>
        </DescriptionImageContainer>
    </Container>
  )
}

export default CourseLeft