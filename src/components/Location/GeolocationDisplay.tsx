import React from 'react';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';
import { LocationState } from '../../hooks/useGeotarget';

interface GeoLocationDisplayProps {
  location: LocationState;
  variant?: 'header' | 'inline' | 'card';
  className?: string;
}

export const GeolocationDisplay: React.FC<GeoLocationDisplayProps> = ({ 
  location, 
  variant = 'inline',
  className = '' 
}) => {
  const renderContent = () => {
    if (location.loading) {
      return (
        <div className="flex items-center gap-2 text-[#005170]">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm">Loading location...</span>
        </div>
      );
    }

    if (location.error) {
      return (
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">Location unavailable</span>
        </div>
      );
    }

    if (location.data) {
      const cityState = location.data.city && location.data.state 
        ? `${location.data.city}, ${location.data.state_code || location.data.state}`
        : location.data.location_name;
        
      const content = (
        <>
          <MapPin className="h-4 w-4 text-green-600" />
          <span className="font-medium text-green-700">
            {cityState}
          </span>
        </>
      );

      if (variant === 'card') {
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              {content}
            </div>
            {location.data.city && location.data.state && (
              <p className="text-xs text-gray-600 ml-6">
                {location.data.city}, {location.data.state}
              </p>
            )}
            <p className="text-xs text-gray-600 ml-6">
              {location.data.canonical_name}
            </p>
          </div>
        );
      }

      return (
        <div className="flex items-center gap-2">
          {content}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={className}>
      {renderContent()}
    </div>
  );
};