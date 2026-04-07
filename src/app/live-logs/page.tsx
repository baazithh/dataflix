"use client";

import Link from "next/link";
import { useState } from "react";
import { Play } from "lucide-react";
import { LiveLogOverlay } from "@/components/dashboard/OverlayPanels";

export default function LiveLogsPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-zinc-100 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-netflix-red">
          Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-extrabold">Live Pipeline Logs</h1>
        <p className="mt-3 text-zinc-300">
          Click play to simulate a real-time execution stream.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 inline-flex items-center gap-2 rounded bg-white px-5 py-2 text-sm font-bold text-black"
        >
          <Play size={16} fill="currentColor" />
          Play Log Stream
        </button>
      </div>
      <LiveLogOverlay open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
