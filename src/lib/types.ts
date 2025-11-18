export type CityId = "toronto" | "nyc" | "tampa" | "dallas";

export type City = {
  id: CityId;
  name: string;
  region: string;
  country: string;
  centerLat: number;
  centerLng: number;
};

export type Category =
  | "pizza"
  | "burgers"
  | "sushi"
  | "brunch"
  | "wings"
  | "drinks";

export type Deal = {
  id: number;
  title: string;
  restaurantName: string;
  cityId: CityId;
  lat: number;
  lng: number;
  category: Category;
  minPrice: number;
  originalPrice?: number;
  isPro: boolean;
  rating: number; // 1-5
  reviewCount: number;
  tags: string[];
  startsAt: string; // ISO
  endsAt: string; // ISO
  distanceKmMock?: number; // optional “precomputed” for UI demo
};
