export interface StoreHours {
  opens: string;
  closes: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  region: string;
  phone: string;
  hours: StoreHours;
  acceptsOrderAhead: boolean;
  distanceMiles?: number;
}
