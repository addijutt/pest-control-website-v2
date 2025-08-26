
import { useState, useEffect } from 'react';
import { LocationData, LocationError } from '../types/location';
import { fetchLocationData } from '../services/locationService';

interface UseLocationReturn {
  location: LocationData | null;
  loading: boolean;
  error: LocationError | null;
  refetch: () => void;
}

export const useLocation = (): UseLocationReturn => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<LocationError | null>(null);

  const fetchLocation = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchLocationData();
      setLocation(data);
      // Removed URL update logic
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError({ message: errorMessage });
      // Removed URL clearing logic
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return {
    location,
    loading,
    error,
    refetch: fetchLocation,
  };
};















// import { useState, useEffect } from 'react';
// import { LocationData, LocationError } from '../types/location';
// import { fetchLocationData } from '../services/locationService';

// interface UseLocationReturn {
//   location: LocationData | null;
//   loading: boolean;
//   error: LocationError | null;
//   refetch: () => void;
// }

// const formatForURL = (text: string): string => {
//   return text.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
// };

// const updateURLWithLocation = (location: LocationData) => {
//   const city = location.city ? formatForURL(location.city) : 'UnknownCity';
//   const state = location.region ? formatForURL(location.region) : 'UnknownState';
  
//   const url = new URL(window.location.href);
//   url.searchParams.set('city', city);
//   url.searchParams.set('state', state);
  
//   window.history.replaceState({}, '', url.toString());
// };

// const clearURLParameters = () => {
//   const url = new URL(window.location.href);
//   url.searchParams.delete('city');
//   url.searchParams.delete('state');
  
//   window.history.replaceState({}, '', url.toString());
// };

// export const useLocation = (): UseLocationReturn => {
//   const [location, setLocation] = useState<LocationData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<LocationError | null>(null);

//   const fetchLocation = async () => {
//     setLoading(true);
//     setError(null);
    
//     try {
//       const data = await fetchLocationData();
//       setLocation(data);
//       updateURLWithLocation(data);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
//       setError({ message: errorMessage });
//       clearURLParameters();
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLocation();
//   }, []);

//   return {
//     location,
//     loading,
//     error,
//     refetch: fetchLocation,
//   };
// };