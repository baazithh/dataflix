"use client";

import Link from "next/link";
import { useState } from "react";
import { FeaturedHero } from "@/components/dashboard/FeaturedHero";
import { LiveLogOverlay } from "@/components/dashboard/OverlayPanels";
import { SchemaDrawer } from "@/components/dashboard/SchemaDrawer";

export default function FeaturedAssetPage() {
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="px-6 py-5 md:px-10">
        <Link href="/" className="text-sm font-semibold text-netflix-red">
          Back to Home
        </Link>
      </div>
      <FeaturedHero
        onPlay={() => setIsLogOpen(true)}
        onMoreInfo={() => setIsSchemaOpen(true)}
      />
      <LiveLogOverlay open={isLogOpen} onClose={() => setIsLogOpen(false)} />
      <SchemaDrawer open={isSchemaOpen} onClose={() => setIsSchemaOpen(false)} />
    </div>
  );
}
