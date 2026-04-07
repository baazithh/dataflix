"use client";

import { motion } from "framer-motion";
import { DataCard } from "./DataCard";
import { Dataset } from "./types";

type MedallionRowProps = {
  title: string;
  items: Dataset[];
};

export function MedallionRow({ title, items }: MedallionRowProps) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-2xl font-extrabold text-zinc-100">{title}</h2>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="flex gap-4 overflow-x-auto pb-2"
      >
        {items.map((item) => (
          <DataCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
