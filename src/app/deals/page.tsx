"use client";

import { useMemo, useState } from "react";
import { PageShell } from "../../components/PageShell";
import { deals } from "../../data/deals";
import { queryDeals } from "../../lib/queryDeals";
import { FiltersBar } from "../../components/FiltersBar";
import { DealCard } from "../../components/DealCard";

export default function DealsPage() {
  const [cityId, setCityId] = useState("toronto");
  const [text, setText] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const filteredDeals = useMemo(() => {
    return queryDeals(deals, {
      cityId,
      text,
      categories,
      prioritizePro: true
    });
  }, [cityId, text, categories]);

  return (
    <PageShell>
      <section>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">
          Deals in {cityId.charAt(0).toUpperCase() + cityId.slice(1)}
        </h1>
        <p className="text-sm text-slate-600 mb-4">
          This page uses a small query engine to filter and sort deals by city,
          category, and text – similar to the behaviour in the real MealDeals
          app, but with mocked data only.
        </p>

        <FiltersBar
          cityId={cityId}
          setCityId={setCityId}
          text={text}
          setText={setText}
          selectedCategories={categories}
          setSelectedCategories={setCategories}
        />

        {filteredDeals.length === 0 ? (
          <p className="text-sm text-slate-500">No deals match your filters.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filteredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
