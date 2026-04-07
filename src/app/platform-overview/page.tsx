import Link from "next/link";

export default function PlatformOverviewPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-zinc-100 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-netflix-red">
          Back to Home
        </Link>

        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
          BNPL Analytics Engineering Platform
        </h1>
        <p className="mt-4 max-w-4xl text-zinc-300">
          High-integrity analytics platform that converts raw ERP-style transaction
          logs into a trusted, AI-ready Star Schema with centralized metrics and
          automated finance-grade controls.
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded border border-zinc-800 bg-surface p-5">
            <h2 className="text-lg font-bold text-netflix-red">Star Schema Core</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Facts: repayments, defaults, settlements. Dimensions: customer,
              merchant, product plan, and date.
            </p>
            <pre className="mt-4 overflow-x-auto text-xs text-zinc-200">
{`SELECT
  d_date.calendar_date,
  d_merchant.merchant_name,
  fct_bnpl_repayment_daily.principal_paid,
  fct_bnpl_repayment_daily.fee_revenue
FROM gold.fct_bnpl_repayment_daily
JOIN dim.d_date ON d_date.date_key = fct_bnpl_repayment_daily.date_key
JOIN dim.d_merchant ON d_merchant.merchant_key = fct_bnpl_repayment_daily.merchant_key;`}
            </pre>
          </article>

          <article className="rounded border border-zinc-800 bg-surface p-5">
            <h2 className="text-lg font-bold text-netflix-red">Centralized Metrics Layer</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Shared, governed metric definitions for NPL rate, repayment success,
              gross merchandise value, and revenue.
            </p>
            <pre className="mt-4 overflow-x-auto text-xs text-zinc-200">
{`metric: npl_rate_30d
formula: SUM(defaulted_amount_30d) / SUM(outstanding_principal)
grain: day, merchant, market
owner: analytics_engineering`}
            </pre>
          </article>

          <article className="rounded border border-zinc-800 bg-surface p-5">
            <h2 className="text-lg font-bold text-netflix-red">
              Financial Integrity Checks
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              Automated assertions catch duplicates, negative principal drift,
              and settlement mismatch before publishing downstream marts.
            </p>
            <pre className="mt-4 overflow-x-auto text-xs text-zinc-200">
{`-- reconciliation check
SELECT settlement_id
FROM silver.bnpl_transaction_clean t
LEFT JOIN silver.settlement_control s ON s.settlement_id = t.settlement_id
WHERE ABS(t.amount - s.amount) > 0.01;`}
            </pre>
          </article>

          <article className="rounded border border-zinc-800 bg-surface p-5">
            <h2 className="text-lg font-bold text-netflix-red">LLM Grounding Docs</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Human-readable model contracts, lineage notes, and SQL examples make
              table semantics retrievable for AI copilots and semantic search.
            </p>
            <pre className="mt-4 overflow-x-auto text-xs text-zinc-200">
{`model: gold.fct_bnpl_repayment_daily
description: Daily repayments by customer and merchant.
lineage: raw_erp_logs -> bnpl_transaction_clean -> fct_bnpl_repayment_daily
business_owner: finance_analytics`}
            </pre>
          </article>
        </section>
      </div>
    </main>
  );
}
