"use client";

import { useMemo, useState } from "react";
import { PageShell } from "../../components/PageShell";
import { deals } from "../../data/deals";
import { queryDeals } from "../../lib/queryDeals";
import { MapWithDeals } from "../../components/MapWithDeals";

export default function MapPage() {
  const [cityId, setCityId] = useState("toronto");

  const cityDeals = useMemo(() => {
    return queryDeals(deals, {
      cityId,
      prioritizePro: true
    });
  }, [cityId]);

  return (
    <PageShell>
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">
              Map + Deals View
            </h1>
            <p className="text-sm text-slate-600 max-w-xl">
              This layout connects a visual “map” area with a scrollable list of
              deals. Hovering a marker highlights the corresponding card. In the
              real MealDeals app this integrates with real maps and geolocation;
              here it’s a safe, API-free demo.
            </p>
          </div>
          <div className="text-sm">
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              City
            </label>
            <select
              value={cityId}
              onChange={(e) => setCityId(e.target.value)}
              className="rounded-md border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-mdPrimary"
            >
              <option value="toronto">Toronto</option>
              <option value="nyc">New York</option>
              <option value="tampa">Tampa</option>
              <option value="dallas">Dallas</option>
            </select>
          </div>
        </div>

        {cityDeals.length === 0 ? (
          <p className="text-sm text-slate-500">
            No deals in this city (with current mock data).
          </p>
        ) : (
          <MapWithDeals deals={cityDeals} />
        )}
      </section>
    </PageShell>
  );
}
