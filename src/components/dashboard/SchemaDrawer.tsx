type SchemaDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function SchemaDrawer({ open, onClose }: SchemaDrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <aside className="fixed inset-y-0 right-0 z-40 w-full max-w-xl border-l border-zinc-800 bg-[#090909] p-6 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-extrabold text-white">Pipeline Schema</h3>
        <button
          type="button"
          onClick={onClose}
          className="rounded border border-zinc-700 px-3 py-1 text-sm text-zinc-200"
        >
          Close
        </button>
      </div>
      <div className="space-y-4 text-sm text-zinc-300">
        <p>
          <span className="font-bold text-netflix-red">Bronze:</span>{" "}
          <code className="text-zinc-100">raw_sales_events</code>(event_id, order_id,
          customer_id, ts, payload_json)
        </p>
        <p>
          <span className="font-bold text-netflix-red">Silver:</span>{" "}
          <code className="text-zinc-100">sales_cleansed</code>(order_id, customer_key,
          sku_key, order_date, amount_usd, is_valid)
        </p>
        <p>
          <span className="font-bold text-netflix-red">Gold:</span>{" "}
          <code className="text-zinc-100">finance_revenue_daily</code>(date_key,
          market_key, gross_revenue, net_revenue, refund_rate)
        </p>
      </div>
    </aside>
  );
}
