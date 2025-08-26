/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { updateUrlWithLocation, updateAllLinksWithLocation } from '../utils/urlParams';
import { parseLocationData } from '../utils/locationUtils';
import { getLocationFromIP } from '../utils/ipLocation';

export interface LocationData {
  canonical_name: string;
  geotarget_id: string;
  location_name: string;
  phone_number?: string;
  city?: string;
  state?: string;
  state_code?: string;
}

export interface LocationState {
  data: LocationData | null;
  loading: boolean;
  error: string | null;
}

// Enhanced location data with parsed city/state
export interface ParsedLocationData extends LocationData {
  parsedCity?: string;
  parsedState?: string;
  parsedStateCode?: string;
}

export interface EnhancedLocationState {
  data: ParsedLocationData | null;
  loading: boolean;
  error: string | null;
}

// Global types for prefetch data
declare global {
  interface Window {
    __PREFETCH_LOCATION_ID__?: string;
    __PREFETCH_LOCATION_PROMISE__?: Promise<LocationData | null>;
  }
}

export const useGeotarget = (locationId?: string, pageName?: string) => {
  // Get the effective location ID (prop or prefetched)
  const effectiveLocationId = locationId || window.__PREFETCH_LOCATION_ID__;
  
  // Initialize state, starting with loading: true
  const [location, setLocation] = useState<EnhancedLocationState>(() => {
    // We always need to fetch data initially, so start with loading: true
    return {
      data: null,
      loading: true,
      error: null
    };
  });

  // Track if we've already processed the prefetch to avoid re-runs
  const prefetchProcessedRef = useRef(false);

const updatePhoneNumbers = (phoneNumber: string) => {
  // 1. For elements where we ONLY want to update the href (keep text static)
  const hrefOnlyElements = document.querySelectorAll('.dynamic-href');
  hrefOnlyElements.forEach(el => {
    if (el.tagName === 'A' && el.hasAttribute('href')) {
      el.setAttribute('href', `tel:${phoneNumber}`);
    }
  });

  // 2. For elements where we want to update BOTH href and text (original behavior)
  const phoneElements = document.querySelectorAll('.dynamic-phone:not(.dynamic-href)');
  phoneElements.forEach(el => {
    if (el.tagName === 'A' && el.hasAttribute('href')) {
      el.setAttribute('href', `tel:${phoneNumber}`);
      el.textContent = formatPhoneNumber(phoneNumber);
    } else {
      el.textContent = formatPhoneNumber(phoneNumber);
    }
  });
};
  const formatPhoneNumber = (phone: string) => {
    // Format as (XXX) XXX-XXXX if it's a 10-digit number
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
    }
    return phone;
  };

const updatePageTitle = (city?: string, state?: string) => {
    if (!pageName) return; // Don't set title unless given
    const title = city && state
      ? `${pageName} in ${city}, ${state} | Local Pest Control Services | Local Pest Appointment`
      : `${pageName} | Local Pest Control Services | Local Pest Appointment`;
    document.title = title;
  };

  const updateLocationState = (parsedData: ParsedLocationData, id?: string) => {
    setLocation({ data: parsedData, loading: false, error: null });
    
    // Update URL and links
    const { parsedCity, parsedState,
      //  parsedStateCode,
        phone_number } = parsedData;
    
    if (parsedCity && parsedState) {
      // console.log('Updating URL with:', { city: parsedCity, state: parsedState, stateCode: parsedStateCode });
      updateUrlWithLocation(parsedCity, parsedState);
      
      // Update links immediately (no setTimeout needed)
      updateAllLinksWithLocation(parsedCity, parsedState, id || null);
    updatePageTitle(parsedCity, parsedState); // ✅ uses dynamic pageName
    } else {
      updatePageTitle(); // fallback
    }

    // Update phone numbers if available
    if (phone_number) {
      updatePhoneNumbers(phone_number);
    }
  };

  const fetchLocationFromIP = async () => {
    setLocation(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // console.log('Starting IP location detection...');
      const ipLocationData = await getLocationFromIP();
      // console.log('IP location data:', ipLocationData);
      
      // Convert IP location data to our LocationData format
      const locationData: LocationData = {
        canonical_name: `${ipLocationData.city}, ${ipLocationData.region}, ${ipLocationData.country}`,
        geotarget_id: `ip-${ipLocationData.city}-${ipLocationData.region}`.toLowerCase().replace(/\s+/g, '-'),
        location_name: `${ipLocationData.city}, ${ipLocationData.region}`,
        city: ipLocationData.city,
        state: ipLocationData.region,
        state_code: ipLocationData.region_code
      };
      
      const parsedData = parseLocationData(locationData);
      // console.log('Parsed IP location data:', parsedData);
      
      updateLocationState(parsedData, locationData.geotarget_id);
    } catch (error) {
      // console.error('IP location fetch error:', error);
      
      const errorMessage = error instanceof Error 
        ? `Location detection failed: ${error.message}`
        : 'Could not detect your location automatically';
        
      setLocation({ 
        data: null, 
        loading: false, 
        error: errorMessage
      });
    }
  };

  const fetchLocationData = async (id: string) => {
    // First check if we have a prefetch promise for this ID
    if (window.__PREFETCH_LOCATION_PROMISE__ && window.__PREFETCH_LOCATION_ID__ === id && !prefetchProcessedRef.current) {
      prefetchProcessedRef.current = true;
      
      try {
        // console.log('Using prefetched location data for ID:', id);
        const data = await window.__PREFETCH_LOCATION_PROMISE__;
        
        if (data) {
          // console.log('Raw prefetched API response:', data);
          const parsedData = parseLocationData(data);
          // console.log('Parsed prefetched location data:', parsedData);
          
          updateLocationState(parsedData, id);
          return;
        } else {
          // console.log('Prefetch returned null, falling back to fresh API call');
        }
      } catch (error) {
        // console.error('Prefetch promise failed:', error);
        // Fall through to regular fetch
      }
    }

    // Regular API fetch as fallback
    setLocation(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Updated API URL to match the new endpoint format
      const apiUrl = import.meta.env.DEV 
        ? `/api/geotarget/${id}`
        : `https://api.local-pest-experts.com/geotarget/${id}`;
        
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: import.meta.env.DEV ? 'same-origin' : 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`API returned ${response.status}: ${response.statusText}`);
      }
      
      // Check if response is actually JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await response.text();
        // console.error('API returned non-JSON response:', textResponse);
        throw new Error('API returned invalid response format (expected JSON)');
      }
      
      let data: LocationData;
      try {
        data = await response.json();
      } catch (jsonError) {
        // console.error('Failed to parse JSON response:', jsonError);
        const textResponse = await response.text();
        // console.error('Raw response:', textResponse);
        throw new Error('API returned invalid JSON format');
      }
      
      // console.log('Raw API response:', data);
      
      // Parse location data to extract city and state
      const parsedData = parseLocationData(data);
      // console.log('Parsed location data:', parsedData);
      
      updateLocationState(parsedData, id);
    } catch (error) {
      // console.error('Location fetch error:', error);
      setLocation({ 
        data: null, 
        loading: false, 
        error: error instanceof Error ? error.message : 'Network error - please check your connection'
      });
    }
  };

  useEffect(() => {
    if (effectiveLocationId) {
      fetchLocationData(effectiveLocationId);
    } else {
      // Fallback to IP-based location when no locationId is provided
      fetchLocationFromIP();
    }
  }, [effectiveLocationId]);

  return {
    ...location,
    refetch: (id: string) => {
      prefetchProcessedRef.current = false; // Reset prefetch flag for manual refetch
      fetchLocationData(id);
    }
  };
};