import { PageShell } from "../components/PageShell";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageShell>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            MealDeals Frontend Showcase
          </h1>
          <p className="text-slate-600 max-w-2xl">
            This project is a frontend-only, safe public demo inspired by{" "}
            <a
              href="https://www.mealdeals.app"
              target="_blank"
              rel="noreferrer"
            >
              MealDeals.app
            </a>
            . It demonstrates how I structure a <strong>Next.js + TypeScript</strong>{" "}
            app for geo-targeted deal discovery, filtering, and UI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/deals"
            className="rounded-xl border border-slate-200 bg-white p-4 hover:border-mdPrimary/60 hover:shadow-sm transition"
          >
            <h2 className="font-semibold text-slate-900 mb-1">
              Browse Deals & Filters
            </h2>
            <p className="text-sm text-slate-600">
              See how deals are modeled, filtered, and ranked by city, category,
              and text search.
            </p>
          </Link>
          <Link
            href="/map"
            className="rounded-xl border border-slate-200 bg-white p-4 hover:border-mdPrimary/60 hover:shadow-sm transition"
          >
            <h2 className="font-semibold text-slate-900 mb-1">
              Map + Deals View
            </h2>
            <p className="text-sm text-slate-600">
              A visual “map-style” layout tying markers to cards without using
              any external APIs or secrets.
            </p>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
