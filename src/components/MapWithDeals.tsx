"use client";

import { Deal } from "../lib/types";
import { useState } from "react";

type Props = {
  deals: Deal[];
};

export function MapWithDeals({ deals }: Props) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-[2fr,3fr] gap-4">
      {/* Map area */}
      <div className="relative rounded-xl border border-slate-200 bg-slate-100 h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
        {/* Markers positioned with fake coordinates */}
        {deals.map((deal) => (
          <button
            key={deal.id}
            type="button"
            onMouseEnter={() => setHoveredId(deal.id)}
            className={`absolute inline-flex items-center justify-center rounded-full border text-xs font-semibold px-2 py-1 transition-transform ${
              hoveredId === deal.id
                ? "bg-mdPrimary text-white border-mdPrimary scale-110"
                : "bg-white text-slate-700 border-slate-300 hover:scale-105"
            }`}
            style={{
              // normalize lat/lng into % just for demo
              top: `${30 + (Math.random() - 0.5) * 30}%`,
              left: `${30 + (Math.random() - 0.5) * 30}%`
            }}
          >
            {deal.restaurantName.split(" ")[0]}
          </button>
        ))}
        <div className="absolute left-3 bottom-3 text-xs text-slate-500">
          Demo map (no external APIs) – markers highlight cards on hover.
        </div>
      </div>

      {/* List area */}
      <div className="space-y-3 overflow-y-auto max-h-72 pr-1">
        {deals.map((deal) => (
          <div
            key={deal.id}
            onMouseEnter={() => setHoveredId(deal.id)}
            className={`rounded-lg border bg-white p-3 text-sm cursor-pointer ${
              hoveredId === deal.id
                ? "border-mdPrimary/70 shadow-md"
                : "border-slate-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-slate-900">
                  {deal.restaurantName}
                </div>
                <div className="text-xs text-slate-500">{deal.title}</div>
              </div>
              <div className="text-right">
                <div className="text-emerald-600 font-bold">
                  ${deal.minPrice.toFixed(2)}
                </div>
                <div className="text-[10px] text-slate-500">
                  {deal.distanceKmMock?.toFixed(1) ?? "—"} km •{" "}
                  {deal.rating.toFixed(1)} ★
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
