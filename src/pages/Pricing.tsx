import React from 'react';
import { PageProps } from '../routes/routes';
import SimpleProcess from '../components/Sections/SimpleProcess';
import SimpleHero from '../components/Sections/SimpleHero';
import Button from '../components/UI/Button';
import { useGeotargetContext } from '../components/Location/GeotargetProvider';
import { useLocationDisplay } from '../utils/locationUtils';

const Pricing: React.FC<PageProps> = ({ Pagetitle }) => {
    const { data: locationData } = useGeotargetContext();
        const locationDisplay = useLocationDisplay(locationData);
  return (
    <>
    <section className="pb-0 pt-10 md:pt-24 mt-[60px]">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Content */}
          <div className='w-full lg:w-[65%] px-6'>
            <h2 className="text-3xl md:text-4xl font-bold  mb-6">
              How much does <span className="text-[#005170]">Pest Control cost?</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Here are some of the factors that go into Pest Control costs:
            </p>

              <div className="space-y-6 mb-8 md:mb-0">
                {/* Item 1 */}
                <div className="flex items-start">
                  {/* Icon + Line */}
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-5 h-5 border-2 border-red-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="flex-1 w-px bg-red-300 border-dashed border-l-2 border-red-400"></div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-gray-900">What type of pest?</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Different pests require a different type of solution. Most rodents can be trapped in one visit 
                      while other pests may require multiple visits to fully exterminate.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-5 h-5 border-2 border-red-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="flex-1 w-px bg-red-300 border-dashed border-l-2 border-red-400"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">How bad is the infestation?</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Are we dealing with a few pests or is your house swarming with pests? Depending on the severity of the 
                      infestation we may need a specialized crew to get your property pest free.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-5 h-5 border-2 border-red-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="flex-1 w-px bg-red-300 border-dashed border-l-2 border-red-400"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">How big is the property?</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      It’s one thing to do pest control on a small, three-bedroom house and an entirely 
                      different job to provide pest control on a 10,000-square-foot warehouse. The size of 
                      the property can drastically change the cost of your pest control treatment.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-5 h-5 border-2 border-red-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">What treatment plan is best for you?</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      There are a wide variety of treatment plans based on your individual needs. 
                      Many homeowners simply require a one-time visit to stop their pest problems. 
                      More invasive pests like Bed Bugs may require multiple visits to 100% exterminate 
                      the insects and their larva.
                    </p>
                  </div>
                </div>
              </div>

          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[35%] px-6">
            <div className='border border-[#ddd]  flex rounded-sm flex-col text-center justify-end  bg-[#f2f2f2]'>
              <img src="/images/guy.webp" className='w-full h-full object-cover rounded-t-sm' alt="" />
                <p className='p-2'>Exterminator in <span className='text-[#005170]'>{locationData && (<> {locationDisplay.city}</> )}</span> and the surrounding area.</p>
            </div>
             {/* Overlay with stats */}
            <div className="border border-[#ddd] p-6 mt-6 bg-[#f2f2f2] rounded-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/images/user.png" alt="" />
                </div>
                <div className='flex-1'>
                  <p className="">Today, we connected <b>4816</b> homeowners to a top rated local exterminators at no charge.</p>
                  <div className="mt-6">
                    <Button href="tel:8445289381" className='dynamic-href' size="md" variant='primary'>
                      Schedule Service
                    </Button>
                  </div>
                   
                </div>
              </div>

            </div>
           
          </div>
        </div>
      </div>
    </section>
      <SimpleHero Pagetitle={Pagetitle} PageContent="Treatment cost varies depending on the type of pest, 
      level of infestation, and environment the pests are located in. Most homes need a one-time treatment, 
      while others may require more attention. Give us a call today to receive a no-obligation quote for 
      your specific pest control and extermination needs." />
        <h2 className="text-3xl md:text-4xl font-bold px-4 text-center sm:px-6 lg:px-8  mb-4 pt-10 md:pt-16">
              How it <span className="text-[#005170]">Works</span>
            </h2>
      <SimpleProcess />
    </>
  );
};

export default Pricing;