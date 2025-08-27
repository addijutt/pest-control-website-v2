import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LocationAwareLink from '../LocationAwareLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Routes that should show the simple header (home page style)
  const simpleHeaderRoutes = ['/','/termite-control', '/bees', '/critter','/bed-bug', 'flea'];
  const showSimpleHeader = simpleHeaderRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationLinks = [
    { to: '/how-it-works', label: 'How it Works' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/services', label: 'Services' },
    { to: '/about-us', label: 'About Us' },
    { to: '/contact-us', label: 'Contact Us' },
  ];
 const handleLogoClick = () => {
    const body = document.body;
    body.className = '';
  };
  // Simple header for home page
  if (showSimpleHeader) {
    return (
      <>
        <header className="fixed top-0 w-full z-50 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-24">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
               <img src="/images/local_logo.webp" onClick={handleLogoClick} className='h-8 md:h-12' alt="" />
              </Link>

              {/* Call Now Section */}
              <div className="md:flex items-center">
                <span className="hidden md:inline font-bold text-sm md:text-lg mr-2">Call Now For Service:</span>
                <a 
                  href="tel:8445289381" 
                  className="text-[#005170] font-bold text-lg hover:text-[#005170] transition-colors border-b-2 border-[#005170] dynamic-phone"
                >
                  (844) 528-9381
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }

  // Navigation header for other pages
  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        } border-b border-gray-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
               <img src="/images/local_logo.webp" onClick={handleLogoClick} className='h-8 md:h-12' alt="" />
              </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <LocationAwareLink
                  key={link.to}
                  href={link.to}
                  className={`hover:text-[#005170] transition-colors font-bold verdana ${
                    location.pathname === link.to ? 'text-[#005170]' : ''
                  }`}
                >
                  {link.label}
                </LocationAwareLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isMenuOpen ? 'mobile-menu-open' : ''}`}
      >
        <div className="flex flex-col h-full">
          

          

          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={link.to}>
                  <LocationAwareLink
                    href={link.to}
                    className={`block px-6 py-4 font-medium transition-all duration-200 hover:bg-gray-50 hover:text-red-600 border-l-4 border-transparent hover:border-red-600 ${
                      location.pathname === link.to 
                        ? 'text-red-600 bg-red-50 border-red-600' 
                        : 'text-gray-700'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {link.label}
                  </LocationAwareLink>
                </li>
              ))}
            </ul>
          </nav>

          
        </div>
      </div>
    </>
  );
};

export default Header;