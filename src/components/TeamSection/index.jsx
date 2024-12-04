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
            <div class="teachers-section">                
                <TeamProfessionalItem />
                <TeamProfessionalItem />
                <TeamProfessionalItem />
                <TeamProfessionalItem />
            </div>
        </Container>
    );
};

export default TeamSection;
