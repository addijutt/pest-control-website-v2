/**
 * Extract location ID from URL parameters
 */
export const getLocationIdFromUrl = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('loc');
};

/**
 * Extract city from URL parameters
 */
export const getCityFromUrl = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('city');
};

/**
 * Extract state from URL parameters
 */
export const getStateFromUrl = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('state');
};

/**
 * Update URL with city and state parameters
 */
export const updateUrlWithLocation = (city: string, state: string, stateCode?: string, replaceHistory: boolean = true): void => {
  // console.log('updateUrlWithLocation called with:', { city, state, stateCode, replaceHistory });
  
  const url = new URL(window.location.href);
  // console.log('Current URL before update:', url.toString());
  
  url.searchParams.set('city', city);
  url.searchParams.set('state', state);
  
  // console.log('URL after adding params:', url.toString());
  
  if (replaceHistory) {
    window.history.replaceState({}, '', url.toString());
  } else {
    window.history.pushState({}, '', url.toString());
  }
  
  // console.log('Final URL in browser:', window.location.href);
};

/**
 * Get current location parameters from URL
 */
export const getCurrentLocationParams = (): { city?: string; state?: string; loc?: string } => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    city: urlParams.get('city') || undefined,
    state: urlParams.get('state') || undefined,
    loc: urlParams.get('loc') || undefined
  };
};

/**
 * Add location parameters to any URL
 */
export const addLocationToUrl = (baseUrl: string, city?: string, state?: string, loc?: string): string => {
  const url = new URL(baseUrl, window.location.origin);
  
  if (city) url.searchParams.set('city', city);
  if (state) url.searchParams.set('state', state);
  if (loc) url.searchParams.set('loc', loc);
  
  return url.toString();
};

/**
 * Update all links on the page with location parameters
 */
export const updateAllLinksWithLocation = (city: string, state: string, loc?: string | null): void => {
  const links = document.querySelectorAll('a[href]') as NodeListOf<HTMLAnchorElement>;
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('/')) {
      // Only update internal links
      const updatedUrl = addLocationToUrl(href, city, state, loc || undefined);
      link.href = updatedUrl;
    }
  });
};

/**
 * Get all URL parameters as an object
 */
export const getAllUrlParams = (): Record<string, string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  
  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  
  return params;
};

/**
 * Check if current path matches pest services
 */
export const isPestServicesPage = (): boolean => {
  return window.location.pathname === '/pest-services';
};