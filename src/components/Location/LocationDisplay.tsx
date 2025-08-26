import React from 'react';
// import { MapPin, Wifi, Globe } from 'lucide-react';
import { LocationData } from '../../types/location';
import { getStateAbbreviation } from '../../utils/stateAbbreviations';

interface LocationDisplayProps {
  location: LocationData;
}

const LocationDisplay: React.FC<LocationDisplayProps> = ({ location }) => {
  const formatLocation = () => {
    // Get abbreviated state/region - prioritize abbreviation over region_code
    const stateAbbr = location.region ? getStateAbbreviation(location.region) : (location.region_code || '');
    
    if (location.city && stateAbbr) {
      return `${location.city}, ${stateAbbr}`;
    } else if (location.city) {
      return location.city;
    } else if (stateAbbr) {
      return stateAbbr;
    }
    return location.country || 'Unknown Location';
  };
  return (
    <>
                <u> {formatLocation()} </u>

    
    {/* <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 hover:scale-105">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <MapPin className="w-8 h-8 text-[#005170]" />
        </div>
        <h1 className="text-2xl font-bold  mb-2">Your Location</h1>
        <p className="text-gray-600">Based on your IP address</p>
      </div>

      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-l-4 border-blue-500">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-[#005170]" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Current Location</p>
              <p className="text-xl font-bold ">{formatLocation()}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Country</span>
            </div>
            <p className="text-lg font-semibold ">{location.country}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Wifi className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">IP Address</span>
            </div>
            <p className="text-lg font-semibold  font-mono">{location.ip}</p>
          </div>
        </div>

        {location.timezone && (
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Timezone</span>
            </div>
            <p className="text-lg font-semibold ">{location.timezone}</p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Location detected automatically using IP geolocation
        </p>
      </div>
    </div> */}
    </>
  );
};

export default LocationDisplay;