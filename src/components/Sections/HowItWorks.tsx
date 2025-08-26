import React from 'react';
import Button from '../UI/Button';
import { useGeotargetContext } from '../Location/GeotargetProvider';
import { useLocationDisplay } from '../../utils/locationUtils';

const HowItWorks: React.FC = () => {
const { data: locationData } = useGeotargetContext();
    const locationDisplay = useLocationDisplay(locationData);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Content */}
          <div className='w-full lg:w-[60%] px-6 mb-8 md:mb-0'>
            <h2 className="text-3xl md:text-4xl font-bold  mb-12">
              How Pest Control <span className="text-[#005170]">Works</span>
            </h2>
            
            <div className="space-y-8">
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
          </div>

          {/* Right Content - FAQ */}
          <div className="w-full lg:w-[40%] px-6">
            <div className="mb-8 bg-[#f9f9f9] border border-[#eee] rounded-tr-[24px]">
              <h3 className="text-base md:text-[18px] font-bold bg-[#eeeeff] border border-[#eee] p-2 rounded-e-full">
                How much does pest control cost?
              </h3>
              <p className="leading-relaxed p-2">
                Cost varies depending on pest treatment, environment, and severity of the infestation. Some homes need just a one-time treatment, while others need more 
                attention. Give us a call at <a href="tel:8445289381" className="font-bold underline hover: transition-colors dynamic-phone"> <br /> (844) 528-9381 </a>  to get your no-obligation quote.
              </p>
            </div>

            <div className="mb-8 bg-[#f9f9f9] border border-[#eee] rounded-tr-[24px]">
              <h3 className="text-base md:text-[18px] font-bold bg-[#eeeeff] border border-[#eee] p-2 rounded-e-full">
                Do you service Lahore?
              </h3>
              <p className="leading-relaxed p-2">
                Yes, we are available in over 30,000 locations, covering all US cities with 24/7 availability. If you call us before 2 pm local time, we can typically arrange same-day appointments for you.
              </p>
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
      </div>
    </section>
  );
};

export default HowItWorks;