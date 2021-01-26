export interface Address {
  label: string;
  value: string;
  coords?: number[];
  place?: string;
}

export interface Place {
  id: string;
  name: string;
  address: string;
  complement: string;
  latitude: number;
  longitude: number;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface GeocodingLocation {
  place_name: string;
  center: number[];
}
