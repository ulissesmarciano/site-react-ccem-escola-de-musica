import React from 'react';

import Header from '../../components/Header';
import GreetingsSection from '../../components/GreetingsSection';
import CoursesSection from '../../components/CoursesSection';
import Footer from '../../components/Footer';
import ContactHeader from '../../components/ContactHeader';

function HomeScreen() {
  return (<>
    <ContactHeader />
    <Header />
    <main>
      <GreetingsSection />
      <CoursesSection />
      <Footer />
    </main>
  </>);
};

export default HomeScreen;

