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
                description='Junte-se a nós nessa jornada incrível para desvendar todos os mistérios escondidos na arte da voz! Descubra todo o potencial e a transformação que o nosso curso de técnica vocal pode trazer para você. 🎤✨'
                src={VoxPicture}
                alt='Foto de uma mulher cantando'
                
            />
            <CourseItem
                title='Teclado e Piano'
                description='Desperte o pianista adormecido dentro de você e dê vida às suas melodias! Venha para o nosso curso de teclado e liberte todo o som das suas notas mais queridas e emocionantes. 🎹✨'
                src={PianoPicture}
                alt='Foto de uma mulher tocando teclado'
                variant="reverse"
            />
            <CourseItem
                title='Teatro Musical'
                description='Junte-se a nós para explorar o fascinante universo do teatro musical e viver momentos inesquecíveis! Vamos liberar sua voz, elevar sua performance e fazer você brilhar intensamente nos palcos ao nosso lado.🌟🎭 '
                src={MusicalPicture}
                alt='Foto de um grupo teatral saudando o publico'
                hash="#VemPraCiaCCEM"
                />

            <CourseItem
                title='Violão'
                description='Explore os acordes, alcance seus maiores sonhos e transforme sua paixão pela música em realidade! Nosso curso de violão é o jeito leve e divertido de embarcar na sua jornada musical com confiança. 🎸✨'
                src={GuitarPicture}
                alt='Foto de homem com guitarra'
                variant="reverse"
            />
            <CourseItem
                title='Guitarra'
                description='Liberte o som que só você pode criar e descubra todo o poder da sua música! Nosso curso de guitarra é a porta de entrada para desbloquear o seu verdadeiro potencial musical e brilhar como nunca. 🎸✨'
                src={EGuitarPicture}
                alt='Foto de homem com guitarra'
            />
            <CourseItem
                title='Bateria'
                description='Desperte todo o seu ritmo com o nosso curso de bateria! Transforme simples batidas em grooves cheios de energia e faça sua música vibrar, marcando presença por onde passar. 🥁✨'
                src={DrumsPicture}
                alt='Foto de homem com guitarra'
                variant="reverse"
                hash="#BateriaManda #VemComAGente"
            />
            <CourseItem
                title='Contrabaixo'
                description='Junte-se a nós para explorar o incrível universo do contrabaixo! Deixe-se levar por esse som poderoso e torne-se parte da equipe que dá vida ao groove com estilo e atitude.🎸🔥'
                src={BassPicture}
                alt='Foto de homem com guitarra'
                hash="#CursoDeContrabaixo"
            />
        </Container>
    );
};

export default CoursesSection;