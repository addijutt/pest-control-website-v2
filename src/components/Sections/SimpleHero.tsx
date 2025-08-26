import React from 'react';
import { PageProps } from '../../routes/routes';

const SimpleHero: React.FC<PageProps> = ({ Pagetitle = "", PageContent = "" }) => {
 


  return (
    <section className="relative bg-white md:mt-[90px] mt-[65px] hero-bg">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 pb-40 md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-stretch pb-12 md:pb-0">
          {/* Left Content */}
          <div className=" py-10 md:py-16 px-8 lg:px-12 md:text-left text-center md:flex flex-col justify-center md:min-h-[450px] min-h-[380px]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {Pagetitle}
            </h1>
            <p className="text-sm md:text-lg mb-2">
              {PageContent}
            </p>
            
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;