import { Dataset } from "./types";

type DataCardProps = {
  item: Dataset;
};

export function DataCard({ item }: DataCardProps) {
  const isHealthy = item.health === "Healthy";

  return (
    <article className="card-scale min-w-64 rounded-sm border border-zinc-800 bg-surface p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded bg-zinc-900 px-2 py-1 text-xs font-semibold text-zinc-300">
          {item.layer}
        </span>
        <span
          className={`rounded px-2 py-1 text-xs font-semibold ${
            isHealthy
              ? "bg-emerald-700/30 text-emerald-300"
              : "bg-red-700/30 text-red-300"
          }`}
        >
          {item.health}
        </span>
      </div>
      <h3 className="text-lg font-bold text-zinc-100">{item.name}</h3>
      <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
      <p className="mt-3 text-xs text-zinc-500">{item.source}</p>
      <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-3">
        <span className="text-xs text-zinc-500">Rows: {item.rowCount}</span>
        <span className="text-xs text-zinc-500">Updated {item.lastUpdated}</span>
      </div>
    </article>
  );
}
