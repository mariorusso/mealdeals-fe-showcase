"use client";

import { FormEvent } from "react";
import { categories } from "../data/categories";

type Props = {
  cityId: string;
  setCityId: (id: string) => void;
  text: string;
  setText: (v: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (cats: string[]) => void;
};

export function FiltersBar({
  cityId,
  setCityId,
  text,
  setText,
  selectedCategories,
  setSelectedCategories
}: Props) {
  function toggleCategory(id: string) {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 rounded-xl border border-slate-200 bg-white p-3 flex flex-col gap-3"
    >
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-slate-600 mb-1">
            Search
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search by restaurant or deal..."
            className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-mdPrimary"
          />
        </div>
        <div className="w-full md:w-48">
          <label className="block text-xs font-semibold text-slate-600 mb-1">
            City
          </label>
          <select
            value={cityId}
            onChange={(e) => setCityId(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-mdPrimary"
          >
            <option value="toronto">Toronto</option>
            <option value="nyc">New York</option>
            <option value="tampa">Tampa</option>
            <option value="dallas">Dallas</option>
          </select>
        </div>
      </div>

      <div>
        <span className="block text-xs font-semibold text-slate-600 mb-1">
          Categories
        </span>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = selectedCategories.includes(cat.id);
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => toggleCategory(cat.id)}
                className={`rounded-full border px-2 py-0.5 text-xs ${
                  active
                    ? "border-mdPrimary bg-mdPrimary/10 text-mdPrimary"
                    : "border-slate-300 text-slate-700 hover:border-mdPrimary/60"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
}
