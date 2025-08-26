// BodyClassHandler.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BodyClassHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    const path = location.pathname;

    // List of all possible page classes
    const pageClasses = [
      'homePage',
      'how-to',
      'mosquito-page',
      'contact-page'
    ];

    // Remove all page classes first
    pageClasses.forEach(className => {
      body.classList.remove(className);
    });

    // Add the appropriate class based on the current path
    if (path === '/') {
      body.classList.add('homePage');
    } else if (path.startsWith('/how-it-works')) {
      body.classList.add('how-to');
    } else if (path.startsWith('/about-us')) {
      body.classList.add('how-to');
    } else if (path.startsWith('/pricing')) {
      body.classList.add('how-to');
    } else if (path.startsWith('/contact-us')) {
      body.classList.add('how-to');
    } else if (path.startsWith('/services')) {
      body.classList.add('how-to');
    } else if (path.startsWith('/termite-control')) {
      body.classList.add('termite-control');
    } else if (path.startsWith('/bees')) {
      body.classList.add('bees');
    } else if (path.startsWith('/critter')) {
      body.classList.add('critter');
    } else if (path.startsWith('/bed-bug')) {
      body.classList.add('bed-bug');
    } else if (path.startsWith('/flea')) {
      body.classList.add('fleas');
    } else if (path.startsWith('/terms')) {
      // No specific class for this page
    } else if (path.startsWith('/privacy')) {
      // No specific class for this page
    }

    // Cleanup function to remove classes when component unmounts
    return () => {
      pageClasses.forEach(className => {
        body.classList.remove(className);
      });
    };
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default BodyClassHandler;