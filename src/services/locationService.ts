import { LocationData } from '../types/location';

const API_URL = 'https://ipinfo.io/json';

export const fetchLocationData = async (): Promise<LocationData> => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.error || data.bogon) {
      throw new Error(data.error || 'Unable to detect location');
    }
    
    // Parse coordinates from loc field (format: "lat,lng")
    let latitude = 0;
    let longitude = 0;
    if (data.loc) {
      const [lat, lng] = data.loc.split(',').map(Number);
      latitude = lat || 0;
      longitude = lng || 0;
    }
    
    // Transform ipinfo.io response to our LocationData format
    const city = data.city || '';
    const region = data.region || '';
    
    return {
      city: city,
      region: region,
      region_code: data.region || '',
      country: data.country || '',
      country_code: data.country || '',
      latitude: latitude,
      longitude: longitude,
      timezone: data.timezone || '',
      ip: data.ip || ''
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Location service error: ${error.message}`);
    }
    throw new Error('Unknown error occurred while fetching location');
  }
};