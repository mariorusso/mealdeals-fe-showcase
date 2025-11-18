"use client";

import { Deal } from "../lib/types";

type Props = {
  deal: Deal;
  onHover?: () => void;
  highlighted?: boolean;
};

export function DealCard({ deal, onHover, highlighted }: Props) {
  const discount =
    deal.originalPrice && deal.originalPrice > deal.minPrice
      ? Math.round(
          ((deal.originalPrice - deal.minPrice) / deal.originalPrice) * 100
        )
      : null;

  return (
    <article
      onMouseEnter={onHover}
      className={`rounded-xl border bg-white shadow-sm p-4 flex flex-col gap-2 cursor-pointer transition-transform ${
        highlighted ? "border-mdPrimary ring-1 ring-mdPrimary/40" : "border-slate-200 hover:-translate-y-0.5"
      }`}
    >
      <header className="flex justify-between items-center">
        <h3 className="font-semibold text-slate-900">{deal.title}</h3>
        {deal.isPro && (
          <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
            PRO
          </span>
        )}
      </header>

      <p className="text-sm text-slate-600">{deal.restaurantName}</p>

      <div className="mt-1 flex items-baseline gap-2 text-sm">
        <span className="text-lg font-bold text-emerald-600">
          ${deal.minPrice.toFixed(2)}
        </span>
        {deal.originalPrice && (
          <>
            <span className="text-xs line-through text-slate-400">
              ${deal.originalPrice.toFixed(2)}
            </span>
            {discount && (
              <span className="text-xs font-semibold text-emerald-700">
                -{discount}%
              </span>
            )}
          </>
        )}
      </div>

      <footer className="mt-3 flex justify-between text-xs text-slate-500">
        <span>{deal.distanceKmMock?.toFixed(1) ?? "—"} km away</span>
        <span>Rating: {deal.rating.toFixed(1)} ★</span>
      </footer>
    </article>
  );
}
