import React from 'react';
import { Container } from './styles';
import { useInView } from 'react-intersection-observer';
import TeamProfessionalItem from '../TeamProfessionalItem';

import DaviAvatar from '../../assets/images/professionals/davi-guilherme.jpg'
import GenesioAvatar from '../../assets/images/professionals/genesio-de-souza.jpg'
import JuniorAvatar from '../../assets/images/professionals/genesio-junior.jpg'
import GabrielaAvatar from '../../assets/images/professionals/gabriela-nogueira.jpg'

const TeamSection = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Container
            ref={ref}
            className={inView ? 'is-visible' : ''}
        >
            <div className='section-title'>
                <p className='section-title' id='cursos'>Conheça</p>
                <h2>Nosso Time</h2>
            </div>
            <div className="teachers-section">                
                <TeamProfessionalItem 
                    avatar={DaviAvatar}
                    name="Davi Guilherme"
                />
                <TeamProfessionalItem 
                    avatar={GenesioAvatar}
                    name="Genésio de Souza"
                />
                <TeamProfessionalItem
                    avatar={JuniorAvatar}
                    name="Genéso Júnior"
                />
                <TeamProfessionalItem 
                    avatar={GabrielaAvatar}
                    name="Gabriela Nogueira"
                />
            </div>
        </Container>
    );
};

export default TeamSection;
