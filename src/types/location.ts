export interface LocationData {
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  timezone: string;
  ip: string;
}

export interface LocationError {
  message: string;
  code?: string;
}