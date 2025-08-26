import React from 'react';
import { PageProps } from '../routes/routes';
import StatesSection from '../components/Sections/StatesSection';
import SimpleProcess from '../components/Sections/SimpleProcess';
import SimpleHero from '../components/Sections/SimpleHero';

const AboutUs: React.FC<PageProps> = ({ Pagetitle }) => {
  return (
    <>
      <SimpleHero Pagetitle={Pagetitle} PageContent="Pest Controls is a national network of exterminators, 
      with a dedicated customer support team ready to dispatch them at your need. Our network includes 
      thousands of pest control experts who offer a full range of extermination services for both 
      residential and commercial properties." />
      <div className="text-center max-w-[850px] mx-auto mb-8 pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Pest Control <span className="text-[#005170]">Experts</span>
            </h2>
            <p className='mb-4'>Our always available customer support team and local 
                experienced exterminators, work with you to find the most 
                environmentally friendly way to control your pest problems. 
                We take a proactive approach to meeting our clients' needs.</p>
                <p>
                    We carefully evaluate each location, commercial or residential, and tailor our 
                    services to each client's specific needs. Our customers can be confident that 
                    we have the knowledge and expertise to provide the best and most efficient pest 
                    extermination and pest prevention service possible. Give us a call today to 
                    receive a no-obligation quote for your specific pest control needs.
                </p>
        </div>
        <hr className='max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mb-10'/>
        <h2 className="text-3xl md:text-4xl font-bold px-4 text-center sm:px-6 lg:px-8  mb-4">
              How it <span className="text-[#005170]">Works</span>
            </h2>
      <SimpleProcess />
      <StatesSection />
    </>
  );
};

export default AboutUs;