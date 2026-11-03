export interface Gym {
  id: number;
  name: string;
  category: string;
  address: string;
  monthlyPrice?: number;
  rating: number;
  ratingCount: number;
  facilities: string[];
  hasPool?: boolean;
  phone?: string;
  website?: string;
  mapsUrl?: string;
}