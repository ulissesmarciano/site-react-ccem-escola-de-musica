import React from 'react'

import { Container, DescriptionImageContainer } from './styles'


function CourseRight ({title, description, src, alt}) {
  return (
    <Container>
            <h3>{title}</h3>
        <DescriptionImageContainer>
            <div>
                <img src={src} alt={alt}/>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </DescriptionImageContainer>
    </Container>
  )
}

export default CourseRight