/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IPLocationData {
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  timezone: string;
  phone_number?: string;
}

/**
 * Get user's location based on their IP address
 * Uses multiple fallback services for reliability
 */
export const getLocationFromIP = async (): Promise<IPLocationData> => {
  // Try multiple IP location services in order
  const services = [
    () => getLocationFromIPAPI(),
    () => getLocationFromIPInfo(),
    () => getLocationFromIPGeolocation()
  ];

  for (const service of services) {
    try {
      const result = await service();
      // console.log('IP location service succeeded:', result);
      return result;
    } catch (error) {
      // console.warn('IP location service failed, trying next:', error);
      continue;
    }
  }

  // If all services fail, throw error
  throw new Error('All IP location services failed');
};

/**
 * Primary IP location service using ipapi.co
 */
const getLocationFromIPAPI = async (): Promise<IPLocationData> => {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Add timeout
      signal: AbortSignal.timeout(5000)
    });

    if (!response.ok) {
      throw new Error(`IP location API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Check if the API returned an error
    if (data.error) {
      throw new Error(`IP location API error: ${data.reason || 'Unknown error'}`);
    }

    // Validate required fields
    if (!data.city || !data.region) {
      throw new Error('IP location API returned incomplete data');
    }

    return {
      city: data.city,
      region: data.region,
      region_code: data.region_code || data.region,
      country: data.country_name || data.country,
      country_code: data.country_code,
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone
    };
  } catch (error) {
    console.error('ipapi.co failed:', error);
    throw error;
  }
};

/**
 * Secondary IP location service using ipinfo.io
 */
const getLocationFromIPInfo = async (): Promise<IPLocationData> => {
  try {
    const response = await fetch('https://ipinfo.io/json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(5000)
    });

    if (!response.ok) {
      throw new Error(`IPInfo API returned ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.city || !data.region) {
      throw new Error('IPInfo API returned incomplete data');
    }

    const [latitude, longitude] = (data.loc || '0,0').split(',').map(Number);

    return {
      city: data.city,
      region: data.region,
      region_code: data.region,
      country: data.country,
      country_code: data.country,
      latitude,
      longitude,
      timezone: data.timezone || 'UTC'
    };
  } catch (error) {
    console.error('ipinfo.io failed:', error);
    throw error;
  }
};

/**
 * Tertiary IP location service using ip-api.com
 */
const getLocationFromIPGeolocation = async (): Promise<IPLocationData> => {
  try {
    const response = await fetch('https://ip-api.com/json/', {
      method: 'GET',
      signal: AbortSignal.timeout(5000)
    });

    if (!response.ok) {
      throw new Error(`IP-API returned ${response.status}`);
    }

    const data = await response.json();
    
    if (data.status === 'fail') {
      throw new Error(`IP-API error: ${data.message}`);
    }

    if (!data.city || !data.regionName) {
      throw new Error('IP-API returned incomplete data');
    }

    return {
      city: data.city,
      region: data.regionName,
      region_code: data.region,
      country: data.country,
      country_code: data.countryCode,
      latitude: data.lat,
      longitude: data.lon,
      timezone: data.timezone
    };
  } catch (error) {
    console.error('ip-api.com failed:', error);
    throw error;
  }
};