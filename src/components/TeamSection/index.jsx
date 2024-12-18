import React from 'react';
import { Container } from './styles';
import TeamProfessionalItem from '../TeamProfessionalItem';

import DaviAvatar from '../../assets/images/professionals/davi-guilherme.jpg'
import GenesioAvatar from '../../assets/images/professionals/genesio-de-souza.jpg'
import JuniorAvatar from '../../assets/images/professionals/genesio-junior.jpg'
import GabrielaAvatar from '../../assets/images/professionals/gabriela-nogueira.jpg'

const TeamSection = () => {
    return (
        <Container>
            <div className='section-title'>
                <p className='section-title' id='cursos'>Conheça</p>
                <h2>Nosso Time</h2>
            </div>
            <div class="teachers-section">                
                <TeamProfessionalItem 
                    avatar={DaviAvatar}
                />
                <TeamProfessionalItem 
                    avatar={GenesioAvatar}
                />
                <TeamProfessionalItem
                    avatar={JuniorAvatar}
                />
                <TeamProfessionalItem 
                    avatar={GabrielaAvatar}
                />
            </div>
        </Container>
    );
};

export default TeamSection;
