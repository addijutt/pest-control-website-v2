import React from 'react';
import LocationAwareLink from '../LocationAwareLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // const location = useLocation();

  // Routes that should show the simple fooer (home page style)
  const simpleFooterRoutes = ['/termite-control', '/bees', '/critter', '/bed-bug','flea'];
  const showSimpleFooter = simpleFooterRoutes.includes(location.pathname);


    if (showSimpleFooter) {
    return (
      <>
      <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop Footer */}
        <div className="">
          <div className="flex justify-center mb-8 md:py-8">
            {/* Logo and Copyright */}
            <div className="col-span-5">
              <LocationAwareLink href="/" className="inline-flex items-center space-x-2">
                <img src="/images/local_logo.webp" className='h-8 md:h-12' alt="" />
              </LocationAwareLink>
              <p className="text-sm mt-4">
                © 2017 - {currentYear} LocalPestExperts. All rights reserved.
              </p>
            </div>

          </div>

          {/* Disclaimer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm leading-relaxed">
              Disclaimer: LocalPestExperts is a free service that helps users connect with local pest control contractors. All contractors are independent and Pest Controls does not warrant or guarantee any work performed. It is the responsibility of the user to verify that the contractor they hire has the necessary license and insurance required for the work being performed. Any third party products, brands or trademarks listed above are the sole property of their respective owner. No affiliation or endorsement is intended or implied. All persons depicted in a photo or video are actors or models and not contractors listed on Pest controls.
            </p>
          </div>
        </div>

      </div>
    </footer>
      </>
    );
  }

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-8 gap-4 mb-8">
            {/* Logo and Copyright */}
            <div className="col-span-5">
              <LocationAwareLink href="/" className="inline-flex items-center space-x-2">
                <img src="/images/local_logo.webp" className='h-8 md:h-12' alt="" />
              </LocationAwareLink>
              <p className="text-sm mt-4">
                © 2017 - {currentYear} LocalPestExperts. All rights reserved.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Services</h3>
              <ul className="space-y-2">
                <li><LocationAwareLink href="/services" className="text-sm hover:text-[#005170] transition-colors">View All</LocationAwareLink></li>
                <li><LocationAwareLink href="/bees" className="text-sm hover:text-[#005170] transition-colors">Bee Control</LocationAwareLink></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Company</h3>
              <ul className="space-y-2">
                <li><LocationAwareLink href="/pricing" className="text-sm hover:text-[#005170] transition-colors">Pricing</LocationAwareLink></li>
                <li><LocationAwareLink href="/how-it-works" className="text-sm hover:text-[#005170] transition-colors">How it Works</LocationAwareLink></li>
                <li><LocationAwareLink href="/about-us" className="text-sm hover:text-[#005170] transition-colors">About Us</LocationAwareLink></li>
                <li><LocationAwareLink href="/contact-us" className="text-sm hover:text-[#005170] transition-colors">Contact Us</LocationAwareLink></li>
                <li><LocationAwareLink href="/sitemap" className="text-sm hover:text-[#005170] transition-colors">Site Map</LocationAwareLink></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Legal</h3>
              <ul className="space-y-2">
                <li><LocationAwareLink href="/privacy" className="text-sm hover:text-[#005170] transition-colors">Privacy Policy</LocationAwareLink></li>
                <li><LocationAwareLink href="/terms" className="text-sm hover:text-[#005170] transition-colors">Terms & Conditions</LocationAwareLink></li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm leading-relaxed">
              Disclaimer: LocalPestExperts is a free service that helps users connect with local pest control contractors. All contractors are independent and Pest Controls does not warrant or guarantee any work performed. It is the responsibility of the user to verify that the contractor they hire has the necessary license and insurance required for the work being performed. Any third party products, brands or trademarks listed above are the sole property of their respective owner. No affiliation or endorsement is intended or implied. All persons depicted in a photo or video are actors or models and not contractors listed on Pest controls.
            </p>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
          <div className="text-center mb-6">
           <LocationAwareLink href="/" className="flex items-center justify-center space-x-2">
                          <img src="/images/local_logo.webp" className='h-8 md:h-12' alt="" />
                         </LocationAwareLink>
            <div className="mt-2">
              <a 
                href="tel:8445289381" 
                className="text-[#005170] font-bold text-lg border-b-2 border-[#005170] dynamic-phone"
              >
                (844) 528-9381
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6 text-center">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold mb-3 ">Services</h3>
              <ul className="space-y-2">
                <li><LocationAwareLink href="/services" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">View All</LocationAwareLink></li>
                <li><LocationAwareLink href="/bees" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">Bee Control</LocationAwareLink></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold mb-3 ">Company</h3>
              <ul className="space-y-2">
                <li><LocationAwareLink href="/pricing" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">Pricing</LocationAwareLink></li>
                <li><LocationAwareLink href="/how-it-works" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">How it Works</LocationAwareLink></li>
                <li><LocationAwareLink href="/about-us" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">About Us</LocationAwareLink></li>
                <li><LocationAwareLink href="/contact-us" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">Contact Us</LocationAwareLink></li>
                <li><LocationAwareLink href="/sitemap" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">Site Map</LocationAwareLink></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold mb-3 ">Legal</h3>
              <ul className="space-y-2">
                <li><LocationAwareLink href="/privacy" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">Privacy Policy</LocationAwareLink></li>
                <li><LocationAwareLink href="/terms" className="text-xs text-gray-700 hover:text-[#005170] transition-colors">Terms & Conditions</LocationAwareLink></li>
              </ul>
            </div>
          </div>

          {/* Copyright and Disclaimer */}
          <div className="text-center border-t border-gray-200 pt-4">
            <p className="text-xs mb-3">
              © 2017 - {currentYear} LocalPestExperts. All rights reserved.
            </p>
            <p className="text-xs leading-relaxed">
              Disclaimer: LocalPestExperts is a free service that helps users connect with local pest control contractors. All contractors are independent and Pest Controls does not warrant or guarantee any work performed. It is the responsibility of the user to verify that the contractor they hire has the necessary license and insurance required for the work being performed. Any third party products, brands or trademarks listed above are the sole property of their respective owner. No affiliation or endorsement is intended or implied. All persons depicted in a photo or video are actors or models and not contractors listed on Pest controls.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;