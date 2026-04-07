"use client";

import { motion } from "framer-motion";
import { Info, Play } from "lucide-react";
import { featuredPipeline } from "./data";

type FeaturedHeroProps = {
  onPlay: () => void;
  onMoreInfo: () => void;
};

export function FeaturedHero({ onPlay, onMoreInfo }: FeaturedHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative overflow-hidden border-b border-zinc-900 bg-black"
    >
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-netflix-red">
          Featured Asset
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {featuredPipeline.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-zinc-300 md:text-lg">
          {featuredPipeline.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onPlay}
            className="inline-flex items-center gap-2 rounded bg-white px-5 py-2 text-sm font-bold text-black"
          >
            <Play size={16} fill="currentColor" />
            Play
          </button>
          <button
            type="button"
            onClick={onMoreInfo}
            className="inline-flex items-center gap-2 rounded bg-zinc-800 px-5 py-2 text-sm font-bold text-zinc-100"
          >
            <Info size={16} />
            More Info
          </button>
        </div>
      </div>
    </motion.section>
  );
}
