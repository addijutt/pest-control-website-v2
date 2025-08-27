/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import React from 'react';
import { PageProps } from '../routes/routes';
import { useGeotargetContext } from '../components/Location/GeotargetProvider';
import { useLocationDisplay } from '../utils/locationUtils';
import Button from '../components/UI/Button';

const ServicesTemplate: React.FC<PageProps> = ({ Pagetitle = "", PageImage = ""}) => {
  const { data: locationData } = useGeotargetContext();
    const locationDisplay = useLocationDisplay(locationData);
  const features = [
    { icon: "/images/mark.png", text: 'Open 24-Hrs,\n7 Days a Week' },
    { icon: "/images/mark.png", text: 'Risk-Free Quotes &\nUpfront Pricing' },
    { icon: "/images/mark.png", text: 'Safe, Affordable,\nand 24/7' },
    { icon: "/images/mark.png", text: 'Same Day\nAppointments' },
  ];

// Title transformation functions directly in the component
  const getTitleVariation = (variation: 'original' | 'lowercase' | 'partial') => {
    switch(variation) {
      case 'lowercase':
        return Pagetitle.toLowerCase();
      case 'partial':
        const lowerTitle = Pagetitle.toLowerCase();
        if (lowerTitle.includes('bed bug')) return 'bed bug';
        const words = Pagetitle.split(' ');
        if (words.length > 2) {
          return words.slice(0, 2).join(' ').toLowerCase();
        }
        return words[0].toLowerCase();
      default:
        return Pagetitle;
    }
  };

  // Get title variations
  const titleOriginal = getTitleVariation('original');
  const titleLowercase = getTitleVariation('lowercase');
  const titlePartial = getTitleVariation('partial');

  return (
   <>
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


     <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Content */}
          <div className='w-full lg:w-[60%] px-6 mb-8 md:mb-0'>
            <h2 className="text-3xl md:text-4xl font-bold  mb-12">
              How {titleOriginal} <span className="text-[#005170]">Works</span>
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
                How much does {titleLowercase} cost?
              </h3>
              <p className="leading-relaxed p-2">
                Cost varies depending on {titlePartial} treatment, environment, and severity of the infestation. Some homes need just a one-time treatment, while others need more 
                attention. Give us a call at <a href="tel:8445289381" className="font-bold underline hover: transition-colors dynamic-phone"> <br /> (844) 528-9381 </a>  to get your no-obligation quote.
              </p>
            </div>

            <div className="mb-8 bg-[#f9f9f9] border border-[#eee] rounded-tr-[24px]">
              <h3 className="text-base md:text-[18px] font-bold bg-[#eeeeff] border border-[#eee] p-2 rounded-e-full">
                Do you service {locationData && (<> {locationDisplay.city}</> )}?
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

    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Content */}
          <div className='w-full lg:w-[60%] px-6'>
            <h2 className="text-3xl md:text-4xl font-bold  mb-6">
              Why Call <span className="text-[#005170]">Pest Controls</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Need a local and trusted pest control professional available quickly? Pest Controls is here to help keep your home or business rodent and insect free. Our exterminators can get rid of {titlePartial}s and other pests from your property and ensure they don't come back.
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
                      Top-rated customer service for {titleLowercase}. If you need an expert in {locationData && (<> {locationDisplay.city}</> )} or the
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
              src={PageImage}
              alt={Pagetitle}
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
   </>
  );
};

export default ServicesTemplate;