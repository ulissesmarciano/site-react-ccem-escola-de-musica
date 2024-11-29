import React from 'react';

import { Container } from './styles';


const CourseItem = ({ title, description, src, alt, variant }) => {
  return (
    <Container $variant={variant}>
      <div className='course-container' >
        <div className='course-info-container'>
          <h3 className='course-title'>{title}</h3>
          <p className='course-description'>{description}</p>
        </div>
        <img className='course-picture' src={src} alt={alt} />
      </div>
    </Container>
  );
};

export default CourseItem;