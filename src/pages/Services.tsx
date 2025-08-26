import React from 'react';
import { PageProps } from '../routes/routes';
import StatesSection from '../components/Sections/StatesSection';
import SimpleProcess from '../components/Sections/SimpleProcess';
import SimpleHero from '../components/Sections/SimpleHero';
import { useGeotargetContext } from '../components/Location/GeotargetProvider';
import { useLocationDisplay } from '../utils/locationUtils';
import Button from '../components/UI/Button';

interface Service {
  title: string;
  description: string;
  hasDetailPage: boolean;
  slug?: string;
  image: string;
}


const ServicesPage: React.FC<PageProps> = ({ Pagetitle }) => {
    const { data: locationData } = useGeotargetContext();
        const locationDisplay = useLocationDisplay(locationData);
        const ChevronRightIcon = () => (
    <svg className="w-6 h-6 mr-3 text-[#bb3434] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

const services: Service[] = [
    {
      title: "Termite Control",
      description: "Hire an exterminator with solutions designed to eliminate termites and protect against future infestations.",
      hasDetailPage: true,
      slug: "termite-control",
      image: "/images/termite.jpg"
    },
    {
      title: "Bees Control",
      description: "Our experts are available 24/7 and specialize in safe and effective methods proven to quickly get rid of bees!",
      hasDetailPage: true,
      slug: "bees",
      image: "/images/bees.jpg"
    },
    {
      title: "Critter Extermination",
      description: "Critter urine, saliva and feces may contain dangerous viruses and bacteria. Avoid these health risks and call us today.",
      hasDetailPage: true,
      slug: "critter",
      image: "/images/critter.jpg"
    },
    {
      title: "Bed Bug Removal",
      description: "Bed Bugs are parasites that feed on blood causing itchy red bumps. For this, Pest Controls offers our Bug Buster service.",
      hasDetailPage: true,
      slug: "bed-bug",
      image: "/images/bedbug.jpg"
    },
    {
      title: "Wild Life Removal",
      description: "Trying to remove wildlife yourself can be dangerous and harmful. Pest Controls offer 24/7 emergency service.",
      hasDetailPage: false,
      image: "/images/wild.jpg"
    },
    {
      title: "Roaches Control",
      description: "Never worry about finding another roach again! Call us today for local expert roach extermination.",
      hasDetailPage: true,
      image: "/images/roaches.jpg"
    },
    {
      title: "Ants Control",
      description: "Spotted a few ants where they don't belong? Get rid of these intruders and reclaim your pest-free property.",
      hasDetailPage: true,
      image: "/images/ants.jpg"
    },
    {
      title: "Flies & Fleas Removal",
      description: "Pets come home from playing outside and so can unwanted hitchhikers - Fleas. Eliminate Fleas with Pest Controls.",
      hasDetailPage: true,
      slug: "flea",
      image: "/images/flies.jpg"
    },
     {
      title: "Birds/Bats removal",
      description: "Birds and bats can live in many small crevices in your home and can attack when provoked. Don't wait to exterminate them!",
      hasDetailPage: false,
      image: "/images/bats.jpg"
    },
     {
      title: "Mosquitoes Control",
      description: "Mosquitoes pose serious health risks and can carry Dengue, Malaria, Zika or more. We'll help you get rid of these nasty pests.",
      hasDetailPage: false,
      image: "/images/mosquitoes.jpg"
    },
     {
      title: "Wasps Removal",
      description: "Wasp stings cause pain, irritation, and severe rashes. Pest Controls can rid your home of wasps and keep you safe.",
      hasDetailPage: false,
      image: "/images/wasps.jpg"
    },
     {
      title: "Rodents Extermination",
      description: "Rodents are dangerous pests. They carry diseases, contaminate food, and damage your home. Call today!",
      hasDetailPage: false,
      image: "/images/rodents.jpg"
    },
     {
      title: "Yellow Jackets Removal",
      description: "Keep your home comfortable for you and unsafe for pests all season long with yellow jacket control services. Get started!",
      hasDetailPage: false,
      image: "/images/yellow.jpg"
    },
     {
      title: "Raccoons Extermination",
      description: "If you have dangerous raccoons invading your yard or nesting in your home, talk to our raccoon exterminators right away.",
      hasDetailPage: false,
      image: "/images/raccoons.jpg"
    },
     {
      title: "Spiders Control",
      description: "Spider infestations are distressing and get out of control fast. Call us today to get rid of these creepy crawlies.",
      hasDetailPage: false,
      image: "/images/spiders.jpg"
    },
     {
      title: "Cricket Extermination",
      description: "Tired of hearing all that chirping? Contact our Pest Controls pro for a total cricket extermination.",
      hasDetailPage: false,
      image: "/images/cricket.jpg"
    },
  ];

  // Function to handle service click
  const handleServiceClick = (service: Service) => {
    if (service.hasDetailPage && service.slug) {
      // Navigate to service detail page
      window.location.href = `/${service.slug}`;
      // Alternatively, you can use React Router:
      // navigate(`/services/${service.slug}`);
    }
  };

  return (
    <>
      <SimpleHero Pagetitle={Pagetitle} PageContent="Pest Controls is a free national service for our users. Our 
      network includes thousands of pest control experts. Once you call us, we check our database of top-rated 
      exterminators that have successfully treated your specific pest and get you connected, so you can live 
      a pest-free life." />
      <div className="text-center max-w-[850px] mx-auto mb-8 pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Pest Control Experts in <span className="text-[#005170]">{locationData && (<> {locationDisplay.city}</> )}</span>
            </h2>
            <p className='mb-4'>Pest problem? Pest Controls can link you with a pest control expert. They inspect, exterminate, and prevent them from returning without breaking the bank.</p>
            <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">Full Service Pest Control</h1> 
    </div>
        </div>
      <div className='max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 pb-16'>
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-6">
        {/* Column 1 */}
        <div className="bg-white ">
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Full Service Pest Control</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Roaches</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Termites</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Bed Bugs</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Wild Life Removal</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Birds/Bats</span>
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-white ">
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">All Insects & Rodents</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Ants</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Flies & Fleas</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Mosquitoes</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Wasps</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Yellow Jackets</span>
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="bg-white ">
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Residential & Commercial</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Raccoons</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Bees</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Rodents (Mice, Rats, Moles, Etc)</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="px-4 md:py-4 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Spiders</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm md:text-base">Crickets</span>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
            <div className="mb-6">
              <Button href="tel:8445289381" className='dynamic-href' size="lg" variant='primary'>
                Schedule Service
              </Button>
            </div>
              <div className="">
              <span className="text-lg md:text-xl">Call Us 24/7: </span>
              <a href="tel:8445289381" className="text-lg md:text-xl font-bold underline hover: transition-colors dynamic-phone">
                (844) 528-9381
              </a>
            </div>

            </div>
      </div>
        <hr className='max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mb-10'/>
        <h2 className="text-3xl md:text-4xl font-bold px-4 text-center sm:px-6 lg:px-8  mb-4">
              How it <span className="text-[#005170]">Works</span>
            </h2>
      <SimpleProcess />
        <hr className='max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mb-10'/>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
              Pest Control <span className="text-[#005170]">Services</span>
            </h2>
      
      <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => handleServiceClick(service)}
            className={`bg-[#f2f2f2] verdana border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${
              service.hasDetailPage 
                ? 'cursor-pointer' 
                : 'cursor-default'
            }`}
          >
           <div className='h-[180px] rounded-t-2xl'>
             <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
           </div>
            <div className="p-3">
                <h3 className="text-lg font-semibold mb-1">
              {service.title}
              {/* {service.hasDetailPage && (
                <span className="ml-2 text-blue-600 text-sm">→</span>
              )} */}
            </h3>
            <p className="text-[18px] leading-[24px]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

      <StatesSection />
    </>
  );
};

export default ServicesPage;