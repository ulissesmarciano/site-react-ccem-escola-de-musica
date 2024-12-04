import React from 'react';
import { Container } from './styles';
import TeamProfessionalItem from '../TeamProfessionalItem';

const TeamSection = () => {
    return (
        <Container>
            <div className='section-title'>
                <p className='section-title' id='cursos'>Conheça</p>
                <h2>Nosso Time</h2>
            </div>
            <TeamProfessionalItem />
            <TeamProfessionalItem />
            <TeamProfessionalItem />
            <TeamProfessionalItem />
        </Container>
    );
};

export default TeamSection;
