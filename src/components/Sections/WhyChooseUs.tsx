import React from 'react';
import Button from '../UI/Button';
import { useGeotargetContext } from '../Location/GeotargetProvider';
import { useLocationDisplay } from '../../utils/locationUtils';

const WhyChooseUs: React.FC = () => {
const { data: locationData } = useGeotargetContext();
    const locationDisplay = useLocationDisplay(locationData);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Content */}
          <div className='w-full lg:w-[60%] px-6'>
            <h2 className="text-3xl md:text-4xl font-bold  mb-6">
              Why Call <span className="text-[#005170]">LocalPestExperts</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Need a local and trusted pest control professional available quickly? Pest Controls is here to help keep your home or business rodent and insect free. Our exterminators can get rid of pests from your property and ensure they don't come back.
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
                    <h3 className="font-bold text-gray-900">Prompt 24-Hour Service</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      That’s right 24 hours a day, 7 days a week; even on holidays. If you are tired of
                      living with insects give us a call 24/7 to talk to a pest removal expert in {locationData && (<> {locationDisplay.city}</> )}
                      and the surrounding areas.
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
                    <h3 className="font-bold text-gray-900">No-Obligation Estimates</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      No surprises on your bill. On the call, you will be given a detailed estimate that
                      outlines exactly what you will be paying before any work is performed.
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
                    <h3 className="font-bold text-gray-900">Top Rated Customer Service</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Top-rated customer service for pest control. If you need an expert in {locationData && (<> {locationDisplay.city}</> )} or the
                      nearby area, give us a call for great service.
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
                    <h3 className="font-bold text-gray-900">Available on Your Time</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Our team’s flexible scheduling allows for a quick and convenient appointment time
                      that works best for your schedule to address your pests issues right away.
                    </p>
                  </div>
                </div>
              </div>

          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[40%] px-6">
            <img
              src="/images/sidebar.webp"
              alt="Beautiful home exterior with pest control labels showing areas of protection"
              className="w-full object-cover rounded-md shadow-2xl"
              loading="lazy"
            />
             {/* Overlay with stats */}
            <div className="border border-[#ddd] p-6 mt-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/images/user.png" alt="" />
                </div>
                <div className='flex-1'>
                  <p className="">Today, we connected <b>4816</b> homeowners to a top rated local exterminators at no charge.</p>
                  <div className="my-6">
                    <Button href="tel:8445289381" className='dynamic-href' size="md" variant='primary'>
                      Schedule Service
                    </Button>
                  </div>
                    <div className="">
                    <span className="text-lg">Call Us 24/7: </span>
                    <a href="tel:8445289381" className="text-lg font-bold underline hover: transition-colors dynamic-phone">
                      (844) 528-9381
                    </a>
                  </div>
                </div>
              </div>

            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;