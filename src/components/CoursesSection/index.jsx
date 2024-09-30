import React from 'react';
import { Container } from './styles';

import CourseItem from '../CourseItem';

import GuitarPicture from '../../assets/guitarra.png';
import EGuitarPicture from '../../assets/guitarra1.png';
import BassPicture from '../../assets/contrabaixo.png';
import DrumsPicture from '../../assets/bateria.png';
import VoxPicture from '../../assets/tecnicavocal.png';
import PianoPicture from '../../assets/teclado.png';
import MusicalPicture from '../../assets/teatromusical.png';


const CoursesSection = () => {
    return (
        <Container>
            <div className='section-title'>
                <p className='section-title' id='cursos'>Conheça</p>
                <h2>Nossos Cursos</h2>
            </div>
            <CourseItem
                title='Tecnica Vocal'
                description='Vem com a gente desvendar os segredos da voz! Descubra o poder do nosso curso de técnica vocal. 🎤✨'
                src={VoxPicture}
                alt='Foto de uma mulher cantando'
            />
            <CourseItem
                title='Teclado e Piano'
                description='Desperte o pianista que há em você! Vem pro nosso curso de teclado e solte o som das suas notas favoritas. 🎹✨'
                src={PianoPicture}
                alt='Foto de uma mulher tocando teclado'
            />
            <CourseItem
                title='Teatro Musical'
                description='Vem com a gente desbravar o mundo do teatro musical! Bora soltar a voz e brilhar nos palcos juntos. 🌟🎭 #VemPraCiaCCEM'
                src={MusicalPicture}
                alt='Foto de um grupo teatral saudando o publico'
            />

            <CourseItem
                title='Violão'
                description='Desbrave acordes, conquiste sonhos! Nosso curso de violão é o caminho descontraído para sua jornada musical. 🎸✨'
                src={GuitarPicture}
                alt='Foto de homem com guitarra'
            />
            <CourseItem
                title='Guitarra'
                description='Desperte seu som único! Nosso curso de guitarra é a chave para desbloquear seu potencial musical. 🎸✨'
                src={EGuitarPicture}
                alt='Foto de homem com guitarra'
            />
            <CourseItem
                title='Bateria'
                description='Desperte seu groove no curso de bateria! Transforme batidas em vibes e faça sua música marcar presença. 🥁✨ #BateriaManda #VemComAGente'
                src={DrumsPicture}
                alt='Foto de homem com guitarra'
            />
            <CourseItem
                title='Contrabaixo'
                description='Vem com a gente desbravar o universo do contrabaixo! Se joga nesse som e faça parte da crew do groove. 🎸🔥 #CursoDeContrabaixo'
                src={BassPicture}
                alt='Foto de homem com guitarra'
            />
        </Container>
    );
};

export default CoursesSection;