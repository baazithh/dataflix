"use client";

import Link from "next/link";
import { useState } from "react";
import { Info } from "lucide-react";
import { SchemaDrawer } from "@/components/dashboard/SchemaDrawer";

export default function SchemaDrawerPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-zinc-100 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-netflix-red">
          Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-extrabold">Technical Schema Drawer</h1>
        <p className="mt-3 text-zinc-300">
          Open the side panel to inspect Bronze, Silver, and Gold schema details.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 inline-flex items-center gap-2 rounded bg-zinc-800 px-5 py-2 text-sm font-bold text-zinc-100"
        >
          <Info size={16} />
          Open Schema Drawer
        </button>
      </div>
      <SchemaDrawer open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
