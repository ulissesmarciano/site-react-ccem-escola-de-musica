import React from 'react';

import Header from '../../components/Header';
import GreetingsSection from '../../components/GreetingsSection';
import CoursesSection from '../../components/CoursesSection';
import Footer from '../../components/Footer';

function HomeScreen() {
  return (<>
    <Header/>
    <main>
        <GreetingsSection />
        <CoursesSection />
        <Footer />
    </main>  
  </>);
};

export default HomeScreen;

