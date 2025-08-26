import React from 'react';
import Hero from '../components/Sections/Hero';
import HowItWorks from '../components/Sections/HowItWorks';
import WhyChooseUs from '../components/Sections/WhyChooseUs';
import { PageProps } from '../routes/routes';

const HomePage: React.FC<PageProps> = ({ Pagetitle }) => {
  return (
    <>
      <Hero Pagetitle={Pagetitle} />
      <HowItWorks />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;