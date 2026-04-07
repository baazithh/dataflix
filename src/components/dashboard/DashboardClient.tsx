"use client";

import { useState } from "react";
import { FeaturedHero } from "./FeaturedHero";
import { medallionRows } from "./data";
import { MedallionRow } from "./MedallionRow";
import { Navbar } from "./Navbar";
import { LiveLogOverlay, SemanticOverlay } from "./OverlayPanels";
import { SchemaDrawer } from "./SchemaDrawer";

export function DashboardClient() {
  const [query, setQuery] = useState("");
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isSemanticOpen, setIsSemanticOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Navbar
        query={query}
        onQueryChange={setQuery}
        onSearch={() => setIsSemanticOpen(true)}
      />
      <FeaturedHero
        onPlay={() => setIsLogOpen(true)}
        onMoreInfo={() => setIsSchemaOpen(true)}
      />
      <main className="mx-auto max-w-7xl px-6 pb-14 md:px-10">
        {medallionRows.map((row) => (
          <MedallionRow key={row.title} title={row.title} items={row.items} />
        ))}
      </main>
      <SchemaDrawer open={isSchemaOpen} onClose={() => setIsSchemaOpen(false)} />
      <LiveLogOverlay open={isLogOpen} onClose={() => setIsLogOpen(false)} />
      <SemanticOverlay
        open={isSemanticOpen}
        query={query}
        onClose={() => setIsSemanticOpen(false)}
      />
    </div>
  );
}
