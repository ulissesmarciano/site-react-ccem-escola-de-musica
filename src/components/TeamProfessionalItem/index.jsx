import React from 'react';
import { Container } from './styles';

const TeamProfessionalItem = ({avatar}) => {
  return (
    <Container>
        <div className="image-section">
            <img src={avatar} alt="Imagem do Professor" />
        </div>
        <div className="name-and-teach">
            <h3>Davi Guilherme</h3>
            <p>professor de canto , violão, guitarra e baixo</p>
        </div>
        <div className="resume">
            <p>Cantor, professor de canto e técnica vocal, além de produtor musical. Com seu método, ele ajuda os alunos a desenvolverem suas vozes de forma única. André também é reconhecido por sua interpretação impressionante do icônico Freddie Mercury no espetáculo Queen Celebration in Concert, com apresentações em todo o Brasil e América Latina. Ele possui formação em Canto Popular pela Faculdade Santa Marcelina e é especializado em Produção Musical pela OMID Academia de Audio.</p>
        </div>
    </Container>
  );
};

export default TeamProfessionalItem;
