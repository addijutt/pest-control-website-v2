import React from 'react';
import Button from '../UI/Button';
import { PageProps } from '../../routes/routes';
import { useGeotargetContext } from '../Location/GeotargetProvider';
import { useLocationDisplay } from '../../utils/locationUtils';

const Hero: React.FC<PageProps> = ({ Pagetitle = "" }) => {
  const { data: locationData } = useGeotargetContext();
    const locationDisplay = useLocationDisplay(locationData);
  const features = [
    { icon: "/images/mark.png", text: 'Open 24-Hrs,\n7 Days a Week' },
    { icon: "/images/mark.png", text: 'Risk-Free Quotes &\nUpfront Pricing' },
    { icon: "/images/mark.png", text: 'Safe, Affordable,\nand 24/7' },
    { icon: "/images/mark.png", text: 'Same Day\nAppointments' },
  ];

  return (
    <section className="relative bg-white md:mt-[90px] mt-[65px] hero-bg ">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 pb-40  md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-stretch pb-12  md:pb-0">
          {/* Left Content */}
          <div className=" py-10 md:py-16 px-8 lg:px-12 md:text-left text-center">
            <div className="mb-4">
              <span className="text-lg md:text-2xl font-bold">{locationData && (<> {locationDisplay.cityStateCode}</> )}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl uppercase font-bold mb-4 text-[#005170]">
              {Pagetitle}
            </h1>
            
            <p className="text-md md:text-xl mb-2">
              We Can Exterminate Pest Today.
            </p>
            
            <div className="mb-6">
              <span className="text-md md:text-xl">Call Us 24/7: </span>
              <a href="tel:8445289381" className="text-lg md:text-xl font-bold underline hover: transition-colors dynamic-phone">
                (844) 528-9381
              </a>
            </div>

            <div className="mb-6">
              <Button href="tel:8445289381" className='dynamic-href' size="lg" variant='primary'>
                Schedule Service
              </Button>
            </div>
            
            {/* Star Rating */}
            <div className="flex items-center text-center justify-center w-full md:max-w-[300px] space-x-1 mb-4">
              <img src="/images/stars.png" alt="" />
            </div>
            
            <p className="text-md md:text-xl font-bold mb-6">
              Call Now For Same Day Service.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center md:justify-start justify-center space-x-3">
                  <img src={feature.icon} className='w-[20px] md:w-[28px]' alt="" />
                  <span className="text-[12px] md:text-[18px] whitespace-pre-line leading-tight font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;