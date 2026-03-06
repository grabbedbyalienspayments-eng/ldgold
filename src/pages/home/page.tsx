import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ClientSituations from '../../components/ClientSituations';
import Services from '../../components/Services';
import WhyChoose from '../../components/WhyChoose';
import ShowroomAtelier from '../../components/ShowroomAtelier';
import EvaluationProcess from '../../components/EvaluationProcess';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ClientSituations />
        <Services />
        <WhyChoose />
        <ShowroomAtelier />
        <EvaluationProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}