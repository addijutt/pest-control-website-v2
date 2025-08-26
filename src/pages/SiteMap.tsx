import React from 'react';
import LocationAwareLink from '../components/LocationAwareLink';

const Sitemap: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-28 verdana">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
      
      <div className="bg-white rounded-lg">
        {/* Home section - different from others as in the image */}
        <div className="mb-2">
          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/' className="font-medium text-[#BB3434] underline">Home</LocationAwareLink>
            </div>
          </div>
        </div>

        {/* Other pages */}
        <div className="space-y-2">
          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">about-us/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/about-us' className="font-medium text-[#BB3434] underline">About Us</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">pricing/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/pricing' className="font-medium text-[#BB3434] underline">Pricing</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">how-it-works/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/how-it-works' className="font-medium text-[#BB3434] underline">How it Works</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">contact-us/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/contact-us' className="font-medium text-[#BB3434] underline">Contact Us</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">services/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/services' className="font-medium text-[#BB3434] underline">Services</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">bees/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/bees' className="font-medium text-[#BB3434] underline">Bees</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">bed-bugs/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/bed-bug' className="font-medium text-[#BB3434] underline">Bed Bugs</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">critter/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/critter' className="font-medium text-[#BB3434] underline">Critter</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">flea/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/fleas' className="font-medium text-[#BB3434] underline">Fleas</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">termites/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/termite-control' className="font-medium text-[#BB3434] underline">Termites</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">wasps/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/wasps' className="font-medium text-[#BB3434] underline">Wasps</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">privacy-policy/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/privacy' className="font-medium text-[#BB3434] underline">Privacy Policy</LocationAwareLink>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <div className="flex-shrink-0">
              <span className="font-medium">terms-conditions/ 1 page</span>
            </div>
            <div className='ps-6'>
              <LocationAwareLink href='/terms' className="font-medium text-[#BB3434] underline">Terms and Conditions</LocationAwareLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;