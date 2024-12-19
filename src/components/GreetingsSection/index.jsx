import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './styles';
import LinkItem from '../LinkItem';

import GreetingsCoverImage from '../../assets/images/greetings-cover-image.png'

const GreetingsSection = ({ id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container ref={ref} className={inView ? 'is-visible' : ''}>
      <div className="greetings-container">
        <div className='image-container'>
          <img src={GreetingsCoverImage} alt='Imagem de Ilustração ' />
        </div>
        <div className="info-container">
          <h3 className='title'>Centro Cultural <span>Escola de Música</span></h3>
          <p className='text'>Bem-vindo! Aqui, seu talento brilha e nosso compromisso é total. Respeito e dedicação são nossos pilares para destacar o que você faz de melhor!</p>
          <LinkItem
            name="Nossos Cursos"
            href={id = "#cursos"}
            variant="greetingButtonLink"
          />
        </div>
      </div>
    </Container>
  );
};

export default GreetingsSection;
