import React, { createContext, useContext, ReactNode } from 'react';
import { useGeotarget, LocationState } from '../../hooks/useGeotarget';
import { getLocationIdFromUrl } from '../../utils/urlParams';

interface GeotargetContextType extends LocationState {
  locationId: string | null;
  refetch: (id: string) => void; 
}

const GeotargetContext = createContext<GeotargetContextType | undefined>(undefined);

interface GeotargetProviderProps {
  children: ReactNode;
  locationId?: string;
}

export const GeotargetProvider: React.FC<GeotargetProviderProps> = ({ 
  children, 
  locationId: propLocationId 
}) => {
  // Prioritize prefetched location ID, then prop, then URL
  const urlLocationId = getLocationIdFromUrl();
  const prefetchedLocationId = typeof window !== 'undefined' ? window.__PREFETCH_LOCATION_ID__ : undefined;
  const locationId = propLocationId || prefetchedLocationId || urlLocationId;
  
  const geotargetData = useGeotarget(locationId || undefined);

  // // Update all links when location data changes
  // React.useEffect(() => {
  //   if (geotargetData.data) {
  //     const parsed = parseLocationData(geotargetData.data);
  //     const { parsedCity, parsedState } = parsed;
      
  //     if (parsedCity && parsedState) {
  //       // Update all existing links on the page
  //       updateAllLinksWithLocation(parsedCity, parsedState, locationId || null);
  //     }
  //   }
  // }, [geotargetData.data, locationId]);
    // Note: Link updates are now handled internally by the useGeotarget hook
  // to avoid duplicate updates and improve performance

  const contextValue: GeotargetContextType = {
    ...geotargetData,
    locationId,
  };

  return (
    <GeotargetContext.Provider value={contextValue}>
      {children}
    </GeotargetContext.Provider>
  );
};

export const useGeotargetContext = () => {
  const context = useContext(GeotargetContext);
  if (context === undefined) {
    throw new Error('useGeotargetContext must be used within a GeotargetProvider');
  }
  return context;
};