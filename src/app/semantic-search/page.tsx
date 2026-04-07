"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/dashboard/Navbar";
import { SemanticOverlay } from "@/components/dashboard/OverlayPanels";

export default function SemanticSearchPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Navbar query={query} onQueryChange={setQuery} onSearch={() => setOpen(true)} />
      <main className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <Link href="/" className="text-sm font-semibold text-netflix-red">
          Back to Home
        </Link>
        <h1 className="mt-4 text-3xl font-extrabold">AI Semantic Search</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Use the top-right search bar and run a query like "Sales data from 2023"
          to open the LLM semantic mapping terminal.
        </p>
      </main>
      <SemanticOverlay open={open} query={query} onClose={() => setOpen(false)} />
    </div>
  );
}
