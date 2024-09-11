import React from 'react';
import { Container } from './styles';
import LinkItem from '../LinkItem';

import MockupImage from '../../assets/images/mockup.png'

const GreetingsSection = ({id}) => {
  return (
    <Container>
      <div className="greetings-container">
        <div className='image-container'>
          <img src={MockupImage}  alt='Imagem de Ilustração ' />
        </div>
        <div className="info-container">
          <h3 className='title'>Centro Cultural <span>Escola de Música</span></h3>
          <p className='text'>Bem-vindo! Aqui, seu talento brilha e nosso compromisso é total. Respeito e dedicação são nossos pilares para destacar o que você faz de melhor!</p>
          <LinkItem 
            name="Nossos Cursos"
            href={id="#cursos"}
            variant="greetingButtonLink"
          />
        </div>
      </div>
    </Container>
  );
};

export default GreetingsSection;
