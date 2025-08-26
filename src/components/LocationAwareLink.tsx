import React from 'react';
import { addLocationToUrl } from '../utils/urlParams';
import { parseLocationData } from '../utils/locationUtils';
import { useGeotargetContext } from './Location/GeotargetProvider';

interface LocationAwareLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}

/**
 * A link component that automatically includes location parameters
 */
export const LocationAwareLink: React.FC<LocationAwareLinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
  style,
  ...props
}) => {
  const { data: locationData, locationId } = useGeotargetContext();
  
  const getEnhancedHref = () => {
    if (!locationData || !href.startsWith('/')) {
      return href;
    }
    
    const parsed = parseLocationData(locationData);
    const { parsedCity, parsedState } = parsed;
    
    if (parsedCity && parsedState) {
      return addLocationToUrl(href, parsedCity, parsedState, locationId || undefined);
    }
    
    return href;
  };

  return (
    <a
      href={getEnhancedHref()}
      className={className}
      target={target}
      rel={rel}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
};

export default LocationAwareLink;