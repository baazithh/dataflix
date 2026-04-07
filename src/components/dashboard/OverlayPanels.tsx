type LiveLogOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function LiveLogOverlay({ open, onClose }: LiveLogOverlayProps) {
  if (!open) {
    return null;
  }

  const logs = [
    "[23:41:03] INFO  Triggered job revenue_delta_sync",
    "[23:41:04] INFO  Reading Kafka topic sales.events",
    "[23:41:07] INFO  Writing Bronze table raw_sales_events",
    "[23:41:11] INFO  Applying DQ rules to sales_cleansed",
    "[23:41:15] INFO  Gold table finance_revenue_daily upserted",
    "[23:41:16] DONE  Pipeline completed in 13s",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 p-6 md:p-10">
      <div className="mx-auto max-w-4xl border border-netflix-red bg-black p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-netflix-red">Live Pipeline Logs</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-200"
          >
            Close
          </button>
        </div>
        <pre className="max-h-72 overflow-auto text-sm text-zinc-200">
          {logs.join("\n")}
        </pre>
      </div>
    </div>
  );
}

type SemanticOverlayProps = {
  open: boolean;
  query: string;
  onClose: () => void;
};

export function SemanticOverlay({ open, query, onClose }: SemanticOverlayProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/75 p-6 md:p-10">
      <div className="mx-auto max-w-5xl border border-netflix-red bg-[#060606] p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-netflix-red">Semantic Search Trace</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-zinc-700 px-3 py-1 text-xs text-zinc-200"
          >
            Close
          </button>
        </div>
        <pre className="overflow-x-auto text-sm leading-6 text-zinc-100">
{`> prompt: "${query || "Sales data from 2023"}"
> embedding_model: text-embedding-3-large
> intent: metrics_lookup.sales.history
> temporal_filter: year = 2023
> domain_mapping: sales -> gold.sales_2023_snapshot
> confidence: 0.94
> generated_sql:
SELECT market_key, product_key, total_revenue, units_sold
FROM gold.sales_2023_snapshot
WHERE year = 2023
ORDER BY total_revenue DESC
LIMIT 100;`}
        </pre>
      </div>
    </div>
  );
}
