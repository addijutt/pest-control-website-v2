import React from 'react';
import { LocationData } from '../../types/location';

type LocationFormat = 'city-only' | 'state-only' | 'city-state' | 'city-possessive';

interface FlexibleLocationDisplayProps {
  location: LocationData;
  format: LocationFormat;
  title?: string;
  subtitle?: string;
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const FlexibleLocationDisplay: React.FC<FlexibleLocationDisplayProps> = ({ 
  location, 
  format, 
}) => {

  const formatLocation = () => {
    const city = location.city || '';
    const state = location.region || '';

    switch (format) {
      case 'city-only':
        return city || 'Unknown City';
      
      case 'state-only':
        return state || 'Unknown State';
      
      case 'city-state':
        if (city && state) {
          return `${city}, ${state}`;
        } else if (city) {
          return city;
        } else if (state) {
          return state;
        }
        return 'Unknown Location';
      
      case 'city-possessive':
        if (city) {
          return `${city}'s`;
        }
        return 'Unknown Location';
      
      default:
        return 'Unknown Location';
    }
  };

  return (
    <>
      
              <>{formatLocation()}</>

      

      {/* <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Format: {format.replace('-', ' ')}
        </p>
      </div> */}
    </>
  );
};

export default FlexibleLocationDisplay;