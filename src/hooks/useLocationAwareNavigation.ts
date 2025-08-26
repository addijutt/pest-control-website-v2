import { useCallback } from 'react';
import { useGeotargetContext } from '../components/Location/GeotargetProvider';
import { addLocationToUrl } from '../utils/urlParams';
import { parseLocationData } from '../utils/locationUtils';

/**
 * Hook for location-aware navigation
 */
export const useLocationAwareNavigation = () => {
  const { data: locationData, locationId } = useGeotargetContext();
  
  const navigate = useCallback((path: string, replace: boolean = false) => {
    let finalUrl = path;
    
    if (locationData && path.startsWith('/')) {
      const parsed = parseLocationData(locationData);
      const { parsedCity, parsedState } = parsed;
      
      if (parsedCity && parsedState) {
        finalUrl = addLocationToUrl(path, parsedCity, parsedState, locationId || undefined);
      }
    }
    
    if (replace) {
      window.history.replaceState({}, '', finalUrl);
    } else {
      window.history.pushState({}, '', finalUrl);
    }
    
    // Trigger a popstate event to update the page
    window.dispatchEvent(new PopStateEvent('popstate'));
  }, [locationData, locationId]);
  
  const getLocationAwareUrl = useCallback((path: string) => {
    if (!locationData || !path.startsWith('/')) {
      return path;
    }
    
    const parsed = parseLocationData(locationData);
    const { parsedCity, parsedState } = parsed;
    
    if (parsedCity && parsedState) {
      return addLocationToUrl(path, parsedCity, parsedState, locationId || undefined);
    }
    
    return path;
  }, [locationData, locationId]);
  
  return {
    navigate,
    getLocationAwareUrl
  };
};