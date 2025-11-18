import { Deal } from "./types";
import { haversineKm } from "./geo";

export type DealQuery = {
  cityId?: string;
  userLat?: number;
  userLng?: number;
  radiusKm?: number;
  categories?: string[];
  maxPrice?: number;
  openNow?: boolean; // you can extend later
  tags?: string[];
  text?: string;
  prioritizePro?: boolean;
};

export function queryDeals(allDeals: Deal[], q: DealQuery): Deal[] {
  const now = new Date();

  let results = allDeals.filter((deal) => {
    // active window
    if (new Date(deal.startsAt) > now) return false;
    if (new Date(deal.endsAt) < now) return false;

    // city filter
    if (q.cityId && deal.cityId !== q.cityId) return false;

    // radius filter
    if (
      q.userLat != null &&
      q.userLng != null &&
      q.radiusKm != null &&
      q.radiusKm > 0
    ) {
      const dist = haversineKm(q.userLat, q.userLng, deal.lat, deal.lng);
      if (dist > q.radiusKm) return false;
    }

    // category filter
    if (q.categories && q.categories.length) {
      if (!q.categories.includes(deal.category)) return false;
    }

    // price filter
    if (q.maxPrice != null && deal.minPrice > q.maxPrice) return false;

    // tags
    if (q.tags && q.tags.length) {
      const hasTag = q.tags.some((tag) => deal.tags.includes(tag));
      if (!hasTag) return false;
    }

    // text search
    if (q.text && q.text.trim()) {
      const t = q.text.toLowerCase();
      const haystack = `${deal.restaurantName} ${deal.title} ${deal.category} ${deal.tags.join(
        " "
      )}`.toLowerCase();
      if (!haystack.includes(t)) return false;
    }

    return true;
  });

  const prioritizePro = q.prioritizePro ?? true;

  // score + sort
  const scored = results.map((deal) => ({
    deal,
    score: computeScore(deal, q, prioritizePro)
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored.map((x) => x.deal);
}

function computeScore(deal: Deal, q: DealQuery, prioritizePro: boolean): number {
  let score = 0;

  // base rating
  score += deal.rating * 1.2;
  if (deal.reviewCount > 50) score += 1;

  // pro boost
  if (prioritizePro && deal.isPro) score += 4;

  // distance boost (closer is better)
  if (q.userLat != null && q.userLng != null) {
    const dist = haversineKm(q.userLat, q.userLng, deal.lat, deal.lng);
    score += Math.max(0, 8 - dist); // clamp-ish
  }

  // urgency: deals ending soon get a bit of a bump
  const ends = new Date(deal.endsAt).getTime();
  const daysLeft = (ends - Date.now()) / (1000 * 60 * 60 * 24);
  if (daysLeft < 1) score += 1.5;
  else if (daysLeft < 3) score += 1;

  return score;
}
