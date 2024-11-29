import React from 'react';

import { Container } from './styles';


const CourseItem = ({ title, description, src, alt, variant, hash }) => {
  return (
    <Container $variant={variant}>
      <div className='course-container' >

        <div className='course-info-container'>
          <h3 className='course-title'>{title}</h3>
          <img className='course-picture in-info-container' src={src} alt={alt} />
          <p className='course-description'>{description}<br/><br/><span>{hash}</span></p>
        </div>

        <div className='picture-container'>
          <img className='course-picture out-info-container' src={src} alt={alt} />
        </div>

      </div>
    </Container>
  );
};

export default CourseItem;