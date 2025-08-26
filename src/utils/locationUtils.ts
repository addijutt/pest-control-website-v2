/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Comprehensive global state/province/region code mapping
const getStateCode = (stateName: string): string => {
  const globalStateMap: Record<string, string> = {
  // Pakistan provinces
  'Punjab': 'PB',
  'Sindh': 'SD',
  'Khyber Pakhtunkhwa': 'KP',
  'Balochistan': 'BA',
  'Gilgit-Baltistan': 'GB',
  'Azad Kashmir': 'AK',
  'Islamabad Capital Territory': 'ICT',
  
  // India states
  'Andhra Pradesh': 'AP',
  'Arunachal Pradesh': 'AR',
  'Assam': 'AS',
  'Bihar': 'BR',
  'Chhattisgarh': 'CG',
  'Goa': 'GA',
  'Gujarat': 'GJ',
  'Haryana': 'HR',
  'Himachal Pradesh': 'HP',
  'Jharkhand': 'JH',
  'Karnataka': 'KA',
  'Kerala': 'KL',
  'Madhya Pradesh': 'MP',
  'Maharashtra': 'MH',
  'Manipur': 'MN',
  'Meghalaya': 'ML',
  'Mizoram': 'MZ',
  'Nagaland': 'NL',
  'Odisha': 'OR',
//   'Punjab': 'PB',
  'Rajasthan': 'RJ',
  'Sikkim': 'SK',
  'Tamil Nadu': 'TN',
  'Telangana': 'TG',
  'Tripura': 'TR',
  'Uttar Pradesh': 'UP',
  'Uttarakhand': 'UK',
  'West Bengal': 'WB',
  'Delhi': 'DL',
  
  // US states
  'Alabama': 'AL',
  'Alaska': 'AK',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Pennsylvania': 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY',
  
  // Canada provinces
  'Alberta': 'AB',
  'British Columbia': 'BC',
  'Manitoba': 'MB',
  'New Brunswick': 'NB',
  'Newfoundland and Labrador': 'NL',
  'Northwest Territories': 'NT',
  'Nova Scotia': 'NS',
  'Nunavut': 'NU',
  'Ontario': 'ON',
  'Prince Edward Island': 'PE',
  'Quebec': 'QC',
  'Saskatchewan': 'SK',
  'Yukon': 'YT',
  
  // UK regions
  'England': 'EN',
  'Scotland': 'SC',
  'Wales': 'WA',
  'Northern Ireland': 'NI',
  
  // Australia states
  'New South Wales': 'NSW',
  'Victoria': 'VIC',
  'Queensland': 'QLD',
  'Western Australia': 'WA',
  'South Australia': 'SA',
  'Tasmania': 'TAS',
  'Australian Capital Territory': 'ACT',
  'Northern Territory': 'NT',
  
  // Germany states (Länder)
  'Baden-Württemberg': 'BW',
  'Bayern': 'BY',
  'Bavaria': 'BY',
  'Berlin': 'BE',
  'Brandenburg': 'BB',
  'Bremen': 'HB',
  'Hamburg': 'HH',
  'Hessen': 'HE',
  'Hesse': 'HE',
  'Mecklenburg-Vorpommern': 'MV',
  'Niedersachsen': 'NI',
  'Lower Saxony': 'NI',
  'Nordrhein-Westfalen': 'NW',
  'North Rhine-Westphalia': 'NW',
  'Rheinland-Pfalz': 'RP',
  'Rhineland-Palatinate': 'RP',
  'Saarland': 'SL',
  'Sachsen': 'SN',
  'Saxony': 'SN',
  'Sachsen-Anhalt': 'ST',
  'Saxony-Anhalt': 'ST',
  'Schleswig-Holstein': 'SH',
  'Thüringen': 'TH',
  'Thuringia': 'TH',
  
  // France regions
  'Auvergne-Rhône-Alpes': 'ARA',
  'Bourgogne-Franche-Comté': 'BFC',
  'Bretagne': 'BRE',
  'Brittany': 'BRE',
  'Centre-Val de Loire': 'CVL',
  'Corse': 'COR',
  'Corsica': 'COR',
  'Grand Est': 'GES',
  'Hauts-de-France': 'HDF',
  'Île-de-France': 'IDF',
  'Normandie': 'NOR',
  'Normandy': 'NOR',
  'Nouvelle-Aquitaine': 'NAQ',
  'Occitanie': 'OCC',
  'Pays de la Loire': 'PDL',
  'Provence-Alpes-Côte d\'Azur': 'PAC',
  
  // Netherlands provinces
  'Drenthe': 'DR',
  'Flevoland': 'FL',
  'Friesland': 'FR',
  'Gelderland': 'GE',
  'Groningen': 'GR',
  'Limburg': 'LI',
  'Noord-Brabant': 'NB',
  'North Brabant': 'NB',
  'Noord-Holland': 'NH',
  'North Holland': 'NH',
  'Overijssel': 'OV',
  'Utrecht': 'UT',
  'Zeeland': 'ZE',
  'Zuid-Holland': 'ZH',
  'South Holland': 'ZH',
  
  // Belgium regions/provinces
  'Antwerpen': 'AN',
  'Antwerp': 'AN',
  'Brussels': 'BRU',
  'Brussel': 'BRU',
  'Hainaut': 'HT',
  'Liège': 'LG',
//   'Limburg': 'LI',
  'Luxembourg': 'LU',
  'Namur': 'NA',
  'Oost-Vlaanderen': 'OV',
  'East Flanders': 'OV',
  'Vlaams-Brabant': 'VB',
  'Flemish Brabant': 'VB',
  'West-Vlaanderen': 'WV',
  'West Flanders': 'WV',
  'Walloon Brabant': 'WB',
  'Waals-Brabant': 'WB',
  
  // Austria states
  'Burgenland': 'B',
  'Kärnten': 'K',
  'Carinthia': 'K',
  'Niederösterreich': 'NÖ',
  'Lower Austria': 'NÖ',
  'Oberösterreich': 'OÖ',
  'Upper Austria': 'OÖ',
  'Salzburg': 'S',
  'Steiermark': 'ST',
  'Styria': 'ST',
  'Tirol': 'T',
  'Tyrol': 'T',
  'Vorarlberg': 'V',
  'Wien': 'W',
  'Vienna': 'W',
  
  // Switzerland cantons
  'Aargau': 'AG',
  'Appenzell Ausserrhoden': 'AR',
  'Appenzell Innerrhoden': 'AI',
  'Basel-Landschaft': 'BL',
  'Basel-Stadt': 'BS',
  'Bern': 'BE',
  'Fribourg': 'FR',
  'Genève': 'GE',
  'Geneva': 'GE',
  'Glarus': 'GL',
  'Graubünden': 'GR',
  'Grisons': 'GR',
  'Jura': 'JU',
  'Luzern': 'LU',
  'Lucerne': 'LU',
  'Neuchâtel': 'NE',
  'Nidwalden': 'NW',
  'Obwalden': 'OW',
  'Schaffhausen': 'SH',
  'Schwyz': 'SZ',
  'Solothurn': 'SO',
  'St. Gallen': 'SG',
  'Thurgau': 'TG',
  'Ticino': 'TI',
  'Uri': 'UR',
  'Valais': 'VS',
  'Vaud': 'VD',
  'Zug': 'ZG',
  'Zürich': 'ZH',
  'Zurich': 'ZH',
  
  // Poland voivodeships
  'Dolnośląskie': 'DS',
  'Lower Silesian': 'DS',
  'Kujawsko-pomorskie': 'KP',
  'Kuyavian-Pomeranian': 'KP',
  'Lubelskie': 'LU',
  'Lublin': 'LU',
  'Lubuskie': 'LB',
  'Lubusz': 'LB',
  'Łódzkie': 'LD',
  'Lodz': 'LD',
  'Małopolskie': 'MA',
  'Lesser Poland': 'MA',
  'Mazowieckie': 'MZ',
  'Masovian': 'MZ',
  'Opolskie': 'OP',
  'Opole': 'OP',
  'Podkarpackie': 'PK',
  'Subcarpathian': 'PK',
  'Podlaskie': 'PD',
  'Pomorskie': 'PM',
  'Pomeranian': 'PM',
  'Śląskie': 'SL',
  'Silesian': 'SL',
  'Świętokrzyskie': 'SK',
  'Holy Cross': 'SK',
  'Warmińsko-mazurskie': 'WM',
  'Warmian-Masurian': 'WM',
  'Wielkopolskie': 'WP',
  'Greater Poland': 'WP',
  'Zachodniopomorskie': 'ZP',
  'West Pomeranian': 'ZP',
  
  // Czech Republic regions
  'Praha': 'PR',
  'Prague': 'PR',
  'Středočeský': 'SC',
  'Central Bohemian': 'SC',
  'Jihočeský': 'JC',
  'South Bohemian': 'JC',
  'Plzeňský': 'PL',
  'Plzen': 'PL',
  'Karlovarský': 'KA',
  'Karlovy Vary': 'KA',
  'Ústecký': 'US',
  'Usti nad Labem': 'US',
  'Liberecký': 'LI',
  'Liberec': 'LI',
  'Královéhradecký': 'KR',
  'Hradec Kralove': 'KR',
  'Pardubický': 'PA',
  'Pardubice': 'PA',
  'Vysočina': 'VY',
  'Jihomoravský': 'JM',
  'South Moravian': 'JM',
  'Olomoucký': 'OL',
  'Olomouc': 'OL',
  'Zlínský': 'ZL',
  'Zlin': 'ZL',
  'Moravskoslezský': 'MS',
  'Moravian-Silesian': 'MS',
};
  
  return globalStateMap[stateName] || stateName;
};

// Enhanced parsing with better international support
export const parseLocationData = (data: any) => {
  // Handle null/undefined data
  if (!data || data === null || data === undefined) {
    return {
      ...data,
      canonical_name: '',
      geotarget_id: '',
      location_name: '',
      city: '',
      state: '',
      state_code: '',
      country: '',
      phone_number: '',
      parsedCity: '',
      parsedState: '',
      parsedStateCode: '',
      parsedCountry: ''
    };
  }
  
  // console.log('parseLocationData input:', data);
  
  let city = data?.city || '';
  let state = data?.state || '';
  let stateCode = data?.state_code || '';
  let country = data?.country || '';
  let phone_number = data?.phone_number || '';
  
  // console.log('Direct fields:', { city, state, stateCode, country, phone_number });
  
  // Enhanced parsing for international locations
  if (!city || !state) {
    // Try canonical_name first (most reliable)
    if (data?.canonical_name) {
      const parts = data.canonical_name.split(',').map((part: string) => part.trim());
      // console.log('Canonical name parts:', parts);
      
      if (parts.length >= 2) {
        city = city || parts[0];
        state = state || parts[1];
        
        // For 3+ parts, last part is usually country
        if (parts.length >= 3) {
          country = country || parts[parts.length - 1];
          // Middle part(s) could be state/province
          if (parts.length === 3) {
            state = state || parts[1];
          }
        }
        
        // console.log('Parsed from canonical_name:', { city, state, country });
      }
    }
    
    // Fallback to location_name
    if (!city && data?.location_name) {
      if (data.location_name.includes(',')) {
        const parts = data.location_name.split(',').map((part: string) => part.trim());
        // console.log('Location name parts:', parts);
        if (parts.length >= 2) {
          city = city || parts[0];
          state = state || parts[1];
        }
      } else {
        // Single location name, treat as city
        city = city || data.location_name;
      }
    }
  }
  
  // Generate state code if we have a state but no code
  if (state && !stateCode) {
    stateCode = getStateCode(state);
    // console.log('Generated state code:', stateCode);
  }
  
  const result = {
    ...(data || {}),
    phone_number, // Ensure phone number is included
    parsedCity: city,
    parsedState: state,
    parsedStateCode: stateCode,
    parsedCountry: country
  };
  
  // console.log('parseLocationData result:', result);
  return result;
};

// Location display options
export type LocationDisplayType = 'city' | 'state' | 'state_code' | 'city_state' | 'city_state_code' | 'city_country' | 'full';

// Enhanced location display with international support
export const getLocationDisplay = (
  locationData: any, 
  displayType: LocationDisplayType = 'city_state'
): string => {
  if (!locationData) return '';
  
  const parsed = parseLocationData(locationData);
  const { parsedCity, parsedState, parsedStateCode, parsedCountry, location_name, canonical_name } = parsed;
  
  switch (displayType) {
    case 'city':
      return parsedCity || location_name || '';
      
    case 'state':
      return parsedState || '';
      
    case 'state_code':
      return parsedStateCode || parsedState || '';
      
    case 'city_state':
      if (parsedCity && parsedState) {
        return `${parsedCity}, ${parsedState}`;
      }
      return location_name || '';
      
    case 'city_state_code':
      if (parsedCity && parsedStateCode) {
        return `${parsedCity}, ${parsedStateCode}`;
      }
      if (parsedCity && parsedState) {
        return `${parsedCity}, ${parsedState}`;
      }
      return location_name || '';
      
    case 'city_country':
      if (parsedCity && parsedCountry) {
        return `${parsedCity}, ${parsedCountry}`;
      }
      return location_name || '';
      
    case 'full':
      return canonical_name || location_name || '';
      
    default:
      return location_name || '';
  }
};

// Enhanced hook with international support
export const useLocationDisplay = (locationData: any) => {
  // Auto-update links when location data is available
  React.useEffect(() => {
    if (locationData) {
      const parsed = parseLocationData(locationData);
      const { parsedCity, parsedState } = parsed;
      
      if (parsedCity && parsedState) {
        // Import here to avoid circular dependency
        import('../utils/urlParams').then(({ updateAllLinksWithLocation }) => {
          updateAllLinksWithLocation(parsedCity, parsedState, locationData?.geotarget_id || null);
        });
      }
    }
  }, [locationData]);

  const parsed = parseLocationData(locationData);

  return {
    city: getLocationDisplay(locationData, 'city'),
    state: getLocationDisplay(locationData, 'state'),
    stateCode: getLocationDisplay(locationData, 'state_code'),
    cityState: getLocationDisplay(locationData, 'city_state'),
    cityStateCode: getLocationDisplay(locationData, 'city_state_code'),
    cityCountry: getLocationDisplay(locationData, 'city_country'),
    full: getLocationDisplay(locationData, 'full'),
    
    // Direct access to parsed data
    country: parsed.parsedCountry,
    
    // Helper function for custom display
    display: (type: LocationDisplayType) => getLocationDisplay(locationData, type)
  };
};