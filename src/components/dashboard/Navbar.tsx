"use client";

import { Search } from "lucide-react";

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: () => void;
};

export function Navbar({ query, onQueryChange, onSearch }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-gradient-to-b from-black via-black/90 to-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <div className="text-2xl font-extrabold tracking-wide text-netflix-red">
          DATAFLIX
        </div>
        <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-[#101010] px-3 py-2">
          <Search size={16} className="text-netflix-red" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onSearch();
              }
            }}
            placeholder="Semantic search..."
            className="w-56 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
            aria-label="Semantic search input"
          />
          <button
            type="button"
            onClick={onSearch}
            className="rounded bg-netflix-red px-3 py-1 text-xs font-semibold text-white"
          >
            Run
          </button>
        </div>
      </div>
    </header>
  );
}
