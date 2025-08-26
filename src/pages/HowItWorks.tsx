import React from 'react';
import { PageProps } from '../routes/routes';
import StatesSection from '../components/Sections/StatesSection';
import SimpleProcess from '../components/Sections/SimpleProcess';
import SimpleHero from '../components/Sections/SimpleHero';

const HowItWorksPage: React.FC<PageProps> = ({ Pagetitle }) => {
  return (
    <>
      <SimpleHero Pagetitle={Pagetitle} PageContent="Finding a reliable exterminator can be time 
      consuming and stressful. Pest controls was created to solve this problem. Our simple process 
      helps: To quickly and easily connect you with trusted, local pest removal pros." />
      <div className="text-center max-w-[900px] mx-auto mb-8 pt-10 md:pt-16 px-4">
          {/* Left Content */}
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Our Simple <span className="text-[#005170]">Process</span>
            </h2>
            <p>Need a local and trusted pest control expert in your area? Pest Controls is here 
                to help you keep your home or business rodent and insect free. Our exterminators 
                can get rid of pests from your property and ensure they don’t come back. Call us 
                now to schedule your no-obligation estimate.</p>
        </div>
      <SimpleProcess />
      <StatesSection />
    </>
  );
};

export default HowItWorksPage;