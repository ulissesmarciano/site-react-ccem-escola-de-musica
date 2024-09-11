import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import GreetingsSection from '../../components/GreetingsSection';
import CoursesSection from './sections/courses';
import Footer from '../../components/Footer';

function HomeScreen() {
  return (<>
    <Header/>
    <Container>
        <GreetingsSection />
        <CoursesSection />
        <Footer />
    </Container>  
  </>);
};

export default HomeScreen;

