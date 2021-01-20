export interface Address {
  label: string;
  value: string;
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
