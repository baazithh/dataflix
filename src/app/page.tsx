import Link from "next/link";

export default function Home() {
  const pages = [
    { href: "/platform-overview", label: "BNPL Platform Overview" },
    { href: "/featured-asset", label: "Featured Asset" },
    { href: "/bronze-layer", label: "Recently Ingested (Bronze)" },
    { href: "/silver-layer", label: "Most Popular Tables (Silver)" },
    { href: "/gold-layer", label: "Business Ready (Gold)" },
    { href: "/semantic-search", label: "AI Semantic Search" },
    { href: "/live-logs", label: "Live Log Stream" },
    { href: "/schema-drawer", label: "Technical Schema Drawer" },
    { href: "/dashboard", label: "Full DATAFLIX Dashboard" },
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-14 text-zinc-100 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-extrabold tracking-wide text-netflix-red md:text-6xl">
          DATAFLIX
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          A high-integrity Analytics Engineering platform simulating a BNPL
          ecosystem. It transforms raw ERP-style transaction logs into an
          AI-ready Star Schema with a centralized metrics layer, financial
          integrity checks, and LLM-grounded documentation.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="card-scale rounded border border-zinc-800 bg-surface px-5 py-6 text-base font-bold text-zinc-100"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
