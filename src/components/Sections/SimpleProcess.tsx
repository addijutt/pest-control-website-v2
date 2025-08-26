import React from 'react';
import Button from '../UI/Button';
import { useGeotargetContext } from '../Location/GeotargetProvider';
import { useLocationDisplay } from '../../utils/locationUtils';

const SimpleProcess: React.FC = () => {
const { data: locationData } = useGeotargetContext();
    const locationDisplay = useLocationDisplay(locationData);
  return (
    <section className="pb-10 md:pb-16 bg-white px-4">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        
          <div className='max-w-[580px] mx-auto'>
            
            <div className="space-y-8 mb-8">
                <div className="flex items-center space-x-4 bg-[#f9f9f9] border border-[#eee] py-3 px-6 verdana">
                  <div className="flex-shrink-0">
                    <span className="text-3xl md:text-5xl font-medium text-[#bb3434]">1.</span>
                  </div>
                  <div>
                    <p className="leading-relaxed">
                      Call our 24/7 Pest Control dispatch at <a href="tel:8445289381" className="font-bold underline hover: transition-colors dynamic-phone">
                (844) 528-9381
              </a>. Tell us about your pest problem and when you would like someone to provide you with your risk-free quote.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-[#f9f9f9] border border-[#eee] py-3 px-6 verdana">
                  <div className="flex-shrink-0">
                    <span className="text-3xl md:text-5xl font-medium text-[#bb3434]">2.</span>
                  </div>
                  <div>
                    <p className="leading-relaxed">
                     We check our network of top-rated exterminators in {locationData && (<> {locationDisplay.city}</> )}, then connect you with a local expert and schedule your appointment immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-[#f9f9f9] border border-[#eee] py-3 px-6 verdana">
                  <div className="flex-shrink-0">
                    <span className="text-3xl md:text-5xl font-medium text-[#bb3434]">3.</span>
                  </div>
                  <div>
                    <p className="leading-relaxed">
                      When your exterminator arrives, they pinpoint your pest issue and provide you with a detailed quote. Once the quote is approved, they complete the job right away.
                    </p>
                  </div>
                </div>
            </div>
            <div className="text-center">
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
      </div>
    </section>
  );
};

export default SimpleProcess;