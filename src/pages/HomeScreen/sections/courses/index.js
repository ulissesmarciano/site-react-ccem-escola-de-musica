import React from 'react'
import { Container } from './styles'

import CourseLeft from '../../../../components/Courses/imgleft'
import CourseRight from '../../../../components/Courses/imgright'

import GuitarPicture from '../../../../assets/guitarra.png'
import EGuitarPicture from '../../../../assets/guitarra1.png'
import BassPicture from '../../../../assets/contrabaixo.png'
import DrumsPicture from '../../../../assets/bateria.png'

function CoursesSection() {
  return (
    <Container>
            <h3 id='Cursos'>Conheça</h3>
            <h4>Nossos Cursos</h4>
        <CourseLeft 
            title='Violão'
            description='Desbrave acordes, conquiste sonhos! Nosso curso de violão é o caminho descontraído para sua jornada musical. 🎸✨'
            src={GuitarPicture}
            alt='Foto de homem com guitarra'
        />
        <CourseRight
            title='Guitarra'
            description='Desperte seu som único! Nosso curso de guitarra é a chave para desbloquear seu potencial musical. 🎸✨'
            src={EGuitarPicture}
            alt='Foto de homem com guitarra'
        />
        <CourseLeft
            title='Bateria'
            description='Desperte seu groove no curso de bateria! Transforme batidas em vibes e faça sua música marcar presença. 🥁✨ #BateriaManda #VemComAGente'
            src={DrumsPicture}
            alt='Foto de homem com guitarra'
        />
        <CourseRight
            title='Contrabaixo'
            description='Vem com a gente desbravar o universo do contrabaixo! Se joga nesse som e faça parte da crew do groove. 🎸🔥 #CursoDeContrabaixo'
            src={BassPicture}
            alt='Foto de homem com guitarra'
        />
    </Container>
  )
}

export default CoursesSection