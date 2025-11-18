import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-mdPrimary text-white font-bold">
            MD
          </span>
          <span className="font-semibold text-slate-900">MealDeals Showcase</span>
        </Link>
        <nav className="flex gap-4 text-sm text-slate-700">
          <Link href="/deals">Deals</Link>
          <Link href="/map">Map View</Link>
        </nav>
      </div>
    </header>
  );
}
