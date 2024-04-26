'use client';

import { MutableRefObject, useRef } from 'react';

import Education from './sections/education/Education';
import Experience from './sections/experience/Experience';
import Header from './sections/header/Header';
import Skills from './sections/skills/Skills';
import Footer from './sections/footer/Footer';

const Home = () => {
  const educationRef = useRef() as MutableRefObject<HTMLElement>;
  const experienceRef = useRef() as MutableRefObject<HTMLElement>;
  const skillsRef = useRef() as MutableRefObject<HTMLElement>;
  const moreRef = useRef() as MutableRefObject<HTMLElement>;

  return (
    <main>
      <Header
        navItems={[
          {
            title: 'Formação Acadêmica',
            ref: educationRef,
          },
          {
            title: 'Experiência Profissional',
            ref: experienceRef,
          },
          {
            title: 'Habilidades',
            ref: skillsRef,
          },
          {
            title: 'Saiba Mais',
            ref: moreRef,
          },
        ]}
      />
      <Education sectionRef={educationRef} />
      <Experience sectionRef={experienceRef} />
      <Skills sectionRef={skillsRef} />
      <Footer sectionRef={moreRef}/>
    </main>
  );
};

export default Home;
